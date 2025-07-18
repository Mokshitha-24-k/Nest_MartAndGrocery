import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  updateQuantity,
  clearCart,
  setCart,
} from "../../Redux/cartActions";
import {
  saveCartToFirestore,
  getCartFromFirestore,
} from "./cartFirestore";
import { useAuth } from "../../AuthContext"; 

import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Button,
  Rating,
  TextField,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cartItems);
  const dispatch = useDispatch();
  const { user, loading } = useAuth(); 

  
  useEffect(() => {
    const fetchCart = async () => {
      if (user) {
        const savedCart = await getCartFromFirestore(user.uid);
        dispatch(setCart(savedCart));
      } else {
        dispatch(setCart([]));
      }
    };
    if (!loading) {
      fetchCart();
    }
  }, [user, loading, dispatch]);

  
  useEffect(() => {
    if (user && cartItems) {
      saveCartToFirestore(user.uid, cartItems);
    }
  }, [cartItems, user]);

  const handleQuantityChange = (id, quantity) => {
    if (quantity >= 1) {
      dispatch(updateQuantity(id, quantity));
    }
  };

  const total = cartItems.reduce(
    (acc, item) => acc + parseFloat(item.price) * item.quantity,
    0
  );

  if (loading) {
    return <Typography>Loading your cart...</Typography>;
  }

  if (!user) {
    return <Typography>Please log in to view your cart.</Typography>;
  }

  return (
    <Box sx={{ p: { xs: 2, md: 4 } }}>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Your Cart
      </Typography>

      {cartItems.length === 0 ? (
        <Typography>No items in your cart.</Typography>
      ) : (
        <>
          {cartItems.map((item) => (
            <Card
              key={item.id}
              sx={{
                mb: 3,
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                alignItems: "flex-start",
                gap: 2,
                p: 2,
                position: "relative",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: { xs: "100%", sm: 150, md: 350 },
                  height: { xs: 200, sm: 150, md: 350 },
                  flexShrink: 0,
                  borderRadius: 1,
                  overflow: "hidden",
                }}
              >
                <CardMedia
                  component="img"
                  image={item.image}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </Box>

              <CardContent sx={{ flex: 1, width: "100%" }}>
                <Typography variant="h6">{item.title}</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                  {item.category}
                </Typography>

                {item.brand && (
                  <Typography variant="body2">Brand: {item.brand}</Typography>
                )}

                {item.stockStatus && (
                  <Typography
                    variant="body2"
                    color={
                      item.stockStatus.toLowerCase().includes("out")
                        ? "red"
                        : "green"
                    }
                    sx={{ mt: 1 }}
                  >
                    {item.stockStatus}
                  </Typography>
                )}

                {item.text && (
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    {item.text.slice(0, 100)}...
                  </Typography>
                )}

                {item.rating && (
                  <Rating
                    value={item.rating}
                    precision={0.5}
                    readOnly
                    size="small"
                    sx={{ mt: 1 }}
                  />
                )}

                <Box sx={{ mt: 2 }}>
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    Price: ${item.price}
                  </Typography>

                  <TextField
                    type="number"
                    label="Quantity"
                    size="small"
                    value={item.quantity}
                    onChange={(e) =>
                      handleQuantityChange(item.id, parseInt(e.target.value))
                    }
                    inputProps={{ min: 1 }}
                    sx={{ width: 100, mt: 1 }}
                  />

                  <Typography
                    variant="body1"
                    sx={{ mt: 1, fontWeight: "bold", color: "primary.main" }}
                  >
                    Total: ${(parseFloat(item.price) * item.quantity).toFixed(2)}
                  </Typography>
                </Box>
              </CardContent>

              <IconButton
                onClick={() => dispatch(removeFromCart(item.id))}
                sx={{ alignSelf: { xs: "flex-end", sm: "center" } }}
              >
                <DeleteIcon />
              </IconButton>
            </Card>
          ))}

          <Box sx={{ mt: 4 }}>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", fontSize: { xs: "1.2rem", md: "1.5rem" } }}
            >
              Total Price: ${total.toFixed(2)}
            </Typography>

            <Button
              variant="contained"
              color="error"
              sx={{ mt: 2 }}
              onClick={() => dispatch(clearCart())}
            >
              Clear Cart
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
};

export default CartPage;
