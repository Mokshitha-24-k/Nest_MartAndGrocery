import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  updateQuantity,
  clearCart,
} from "../../Redux/cartActions";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Button,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cartItems);
  const dispatch = useDispatch();
  console.log(cartItems);

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <Box sx={{ p: 4 }}>
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
                mb: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <CardMedia
                component="img"
                image={item.image}
                sx={{ width: 120, height: 120, objectFit: "contain", p: 2 }}
              />
              <CardContent sx={{ flex: 1 }}>
                <Typography variant="h6">{item.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.category}
                </Typography>
                <Typography>
                  ${item.price} × {item.quantity}
                </Typography>
              </CardContent>
              <IconButton onClick={() => dispatch(removeFromCart(item.id))}>
                <DeleteIcon />
              </IconButton>
            </Card>
          ))}

          <Box sx={{ mt: 4 }}>
            <Typography variant="h6">Total: ${total.toFixed(2)}</Typography>
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
