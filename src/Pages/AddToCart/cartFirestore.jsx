
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../Firebase";


export const saveCartToFirestore = async (userId, cartItems) => {
  try {
    await setDoc(doc(db, "users", userId), { cart: cartItems }, { merge: true });
  } catch (error) {
    console.error("Error saving cart:", error);
  }
};


export const getCartFromFirestore = async (userId) => {
  try {
    const docSnap = await getDoc(doc(db, "users", userId));
    if (docSnap.exists()) {
      const data = docSnap.data();
      return data.cart || [];
    }
  } catch (error) {
    console.error("Error loading cart:", error);
  }
  return [];
};
