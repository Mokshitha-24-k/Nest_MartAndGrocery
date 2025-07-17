import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  InputAdornment,
  Checkbox,
  FormControlLabel,
  useMediaQuery,
  Divider,
  Snackbar,
  Alert,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useNavigate, Link } from "react-router-dom";
import Images from "../../Assets/Images";

import { auth } from "../../Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState(""); // renamed from username
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [snack, setSnack] = useState({ open: false, message: "", severity: "info" });

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!email || !password) {
      setSnack({ open: true, message: "Please fill in all fields", severity: "warning" });
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      setSnack({ open: true, message: "Login successful! Welcome to NestMart 🛒", severity: "success" });
      setTimeout(() => navigate("/Home2"), 1500);
    } catch (error) {
      let errorMsg = "Login failed. Please check your credentials.";
      if (error.code === "auth/user-not-found") {
        errorMsg = "User not found.";
      } else if (error.code === "auth/wrong-password") {
        errorMsg = "Incorrect password.";
      } else if (error.code === "auth/invalid-email") {
        errorMsg = "Invalid email format.";
      }
      setSnack({ open: true, message: errorMsg, severity: "error" });
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#f3fef3",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        py: 2,
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: 900,
          backgroundColor: "#fff",
          borderRadius: 3,
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
          overflow: "hidden",
          display: "flex",
          flexDirection: isSmallScreen ? "column" : "row",
        }}
      >
        {!isSmallScreen && (
          <Box
            sx={{
              width: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              p: 4,
            }}
          >
            <Box
              component="img"
              src={Images.Grocery2}
              alt="NestMart Grocery"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          </Box>
        )}

        <Box
          sx={{
            width: isSmallScreen ? "100%" : "50%",
            p: isSmallScreen ? 3 : 5,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Box display="flex" justifyContent="center" alignItems="center" gap={1} mb={1}>
            <Box
              component="img"
              src={Images.HalfLogo}
              alt="NestMart"
              sx={{
                width: 32,
                height: 32,
                objectFit: "contain",
              }}
            />
            <Typography variant="h4" fontWeight="bold" color="#3BB77E">
              NestMart
            </Typography>
          </Box>

          <Typography variant="subtitle2" textAlign="center" color="text.secondary" mb={3}>
            Log in to continue shopping
          </Typography>

          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            fullWidth
            label="Password"
            variant="outlined"
            margin="normal"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPassword((prev) => !prev)} edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <FormControlLabel control={<Checkbox />} label="Remember me" sx={{ mt: 1 }} />

          <Button
            fullWidth
            variant="contained"
            sx={{ mt: 2, fontWeight: "bold", backgroundColor: "#3BB77E" }}
            onClick={handleLogin}
          >
            LOG IN
          </Button>

          <Typography textAlign="center" mt={2}>
            <Link to="/signup" style={{ textDecoration: "none", color: "#2e7d32" }}>
              New here? Create an account
            </Link>
          </Typography>

          <Divider sx={{ my: 3 }}>OR</Divider>

          <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
            <IconButton href="https://www.google.com" target="_blank">
              <FcGoogle size={26} />
            </IconButton>
            <IconButton href="https://www.facebook.com/login" target="_blank">
              <FaFacebookF size={26} color="#1877F2" />
            </IconButton>
            {/* <IconButton href="/email-login">
              <MdEmail size={26} color="#d93025" />
            </IconButton> */}
            <IconButton href="">
              <Box sx={{ transform: "scaleX(-1)" }}>
                <FaPhone size={24} color="#2e7d32" />
              </Box>
            </IconButton>
          </Box>
        </Box>
      </Box>

      <Snackbar
        open={snack.open}
        autoHideDuration={4000}
        onClose={() => setSnack({ ...snack, open: false })}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert severity={snack.severity} onClose={() => setSnack({ ...snack, open: false })}>
          {snack.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Login;
