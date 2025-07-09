
import Images from "../../../Assets/Images"; 

const deals = [
  {
    image: Images.DealsOfDay1,
    title: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
    rating: 4.0,
    brand: "NestFood",
    price: 32.85,
    oldPrice: 33.8,
    onAddToCart: () => alert("Added Earbuds"),
    timer: {
      days: 426,
      hours: "07",
      minutes: "33",
      seconds: "46"
    }
  },
  {
    image: Images.DealsOfDay2,
    title: "Perdue Simply Smart Organics Gluten Free",
    rating: 4.0,
    brand: "Old El Paso",
    price: 24.85,
    oldPrice: 26.8,
    onAddToCart: () => alert("Added Watch"),
    timer: {
      days: 822,
      hours: "07",
      minutes: "33",
      seconds: "46"
    }
  },
  {
    image: Images.DealsOfDay3,
    title: "Signature Wood-Fired Mushroom Mushroom",
    rating: 3.0,
    brand: "Progresso",
    price: 12.85,
    oldPrice: 13.8,
    onAddToCart: () => alert("Added Watch"),
    timer: {
      days: 1156,
      hours: "07",
      minutes: "33",
      seconds: "46"
    }
  },
  {
    image: Images.DealsOfDay4,
    title: "Simply Lemonade with Raspberry Juice",
    rating: 3.0,
    brand: "Yoplait",
    price: 15.85,
    oldPrice: 16.8,
    onAddToCart: () => alert("Added Watch"),
    timer: {
      days: 398,
      hours: "07",
      minutes: "33",
      seconds: "46"
    }
  }
];

export default deals;
