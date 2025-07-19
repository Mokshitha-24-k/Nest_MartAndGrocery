import React, { useState, useEffect } from "react";
import { auth, db, storage } from "../../Firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Card,
  Avatar,
  Typography,
  Button,
  Stack,
  Divider,
  TextField,
  Checkbox,
  FormControlLabel,
  FormGroup,
} from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import EditIcon from "@mui/icons-material/Edit";

const categories = [
  "Fruits & Vegetables",
  "Dairy & Milk",
  "Snacks & Beverages",
  "Bakery",
  "Meat & Seafood",
  "Frozen Foods",
  "Household Supplies",
  "Personal Care",
];

const gradientButton = {
  background: "linear-gradient(90deg, #34D399, #3B82F6)",
  color: "#fff",
  borderRadius: "12px",
  textTransform: "none",
  px: 2,
  py: 1,
  boxShadow: "0 3px 6px rgba(0,0,0,0.1)",
  "&:hover": { opacity: 0.9 },
};

const roundedButton = {
  backgroundColor: "#fff",
  color: "#3CB371",
  border: "2px solid #3CB371",
  borderRadius: "50px",
  textTransform: "none",
  px: 2,
  py: 1,
  "&:hover": { backgroundColor: "#f0f9f4" },
};

const Profile = () => {
  const navigate = useNavigate();
  const user = auth.currentUser;

  const [profilePic, setProfilePic] = useState("");
  const [name, setName] = useState(user?.displayName || user?.email?.split("@")[0] || "");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [interests, setInterests] = useState([]);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      if (user) {
        try {
          const docRef = doc(db, "users", user.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            const data = docSnap.data();
            setProfilePic(data.profilePic || "");
            setPhone(data.phone || "");
            setAddress(data.address || "");
            setInterests(data.interests || []);
          }
        } catch (error) {
          console.error("Error fetching profile:", error);
        }
      }
    };
    fetchProfile();
  }, [user]);

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (file && user) {
      const storageRef = ref(storage, `profilePics/${user.uid}.jpg`);
      await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(storageRef);
      setProfilePic(downloadURL);
    }
  };

  const handleRemoveImage = async () => {
    if (user && profilePic) {
      const storageRef = ref(storage, `profilePics/${user.uid}.jpg`);
      await deleteObject(storageRef).catch(() => {});
      setProfilePic("");
    }
  };

  const handleInterestChange = (category) => {
    setInterests((prev) =>
      prev.includes(category) ? prev.filter((i) => i !== category) : [...prev, category]
    );
  };

  const handleSave = async () => {
    if (!user) return;

    try {
      await setDoc(
        doc(db, "users", user.uid),
        {
          profilePic,
          phone,
          address,
          interests,
        },
        { merge: true } 
      );
      setEditMode(false);
      alert("Profile saved successfully!");
    } catch (error) {
      console.error("Error saving profile:", error);
      alert("Failed to save profile. Please try again.");
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#f1f5f9",
        p: 2,
        display: "flex",
        justifyContent: "center",
        alignItems: { xs: "flex-start", md: "center" },
      }}
    >
      <Card sx={{ p: 3, borderRadius: 4, boxShadow: 3, maxWidth: 500, width: "100%", position: "relative" }}>
        {!editMode && (
          <Button
            startIcon={<EditIcon />}
            size="small"
            sx={{
              position: "absolute",
              top: 12,
              right: 12,
              backgroundColor: "#fff",
              border: "1px solid #ccc",
              textTransform: "none",
              borderRadius: "8px",
              "&:hover": { backgroundColor: "#f5f5f5" },
            }}
            onClick={() => setEditMode(true)}
          >
            Edit Profile
          </Button>
        )}

        <Box sx={{ position: "relative", mb: 2, textAlign: "center" }}>
          <Avatar
            src={profilePic || "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"}
            sx={{ width: 120, height: 120, mx: "auto", border: "2px solid #eee" }}
          />

          {editMode && (
            <Stack direction="row" justifyContent="center" spacing={1} mt={1}>
              <Button
                variant="outlined"
                size="small"
                sx={{ fontSize: "0.75rem", px: 1.5, py: 0.5, borderRadius: "6px" }}
                onClick={() => document.getElementById("profilePicInput").click()}
              >
                Change
              </Button>
              <Button
                variant="outlined"
                size="small"
                color="error"
                sx={{ fontSize: "0.75rem", px: 1.5, py: 0.5, borderRadius: "6px" }}
                onClick={handleRemoveImage}
              >
                Remove
              </Button>
            </Stack>
          )}

          <input
            id="profilePicInput"
            type="file"
            accept="image/*"
            hidden
            onChange={handleImageChange}
          />
        </Box>

        <Typography variant="h6" fontWeight="bold" align="center">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center">
          {user?.email}
        </Typography>

        <Divider sx={{ my: 2 }} />

        {!editMode ? (
          <Stack spacing={1} sx={{ mb: 2, textAlign: "left" }}>
            <Typography variant="body2">Phone: {phone || "Not added"}</Typography>
            <Typography variant="body2">Address: {address || "Not added"}</Typography>
            <Typography variant="body2">
              Interests: {interests.length > 0 ? interests.join(", ") : "No interests added"}
            </Typography>
          </Stack>
        ) : (
          <Stack spacing={2} sx={{ mb: 2, textAlign: "left" }}>
            <TextField label="Full Name" value={name} onChange={(e) => setName(e.target.value)} fullWidth />
            <TextField label="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} fullWidth />
            <TextField
              label="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              multiline
              rows={2}
              fullWidth
            />
            <Typography variant="subtitle2">Select Interests</Typography>
            <FormGroup>
              {categories.map((cat) => (
                <FormControlLabel
                  key={cat}
                  control={<Checkbox checked={interests.includes(cat)} onChange={() => handleInterestChange(cat)} color="success" />}
                  label={cat}
                />
              ))}
            </FormGroup>
            <Button sx={gradientButton} onClick={handleSave}>
              Save Changes
            </Button>
          </Stack>
        )}

        {!editMode && (
          <Stack direction="row" spacing={2} justifyContent="center" mt={2}>
            <Button sx={roundedButton} startIcon={<ShoppingCartIcon />} onClick={() => navigate("/orders")}>
              My Orders
            </Button>
            <Button sx={roundedButton} startIcon={<FavoriteBorderIcon />} onClick={() => navigate("/wishlist")}>
              Wishlist
            </Button>
          </Stack>
        )}

        {!editMode && (
          <Box mt={2} display="flex" justifyContent="center">
            <Button
              sx={{
                ...gradientButton,
                background: "linear-gradient(90deg, #F87171, #EF4444)",
              }}
              startIcon={<LogoutIcon />}
              onClick={handleLogout}
            >
              Logout
            </Button>
          </Box>
        )}
      </Card>
    </Box>
  );
};

export default Profile;
