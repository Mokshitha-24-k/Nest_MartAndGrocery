import React from 'react';
import Header from '../Components/Shell/Header/Header';
import ReusableCarousel from '../Components/Common/Carousel/Carousel';
import Images from '../Assets/Images';
import CardSlider from '../Components/Common/FeaturedCategoriesCard/CardSlider';
import AddsCard from '../Components/Common/AddsCard/AddsCard';
import './Home.css';
import PopularProductCard from '../Components/Common/PopularProductCard/PopularProductcard';
import PopularProductData from "./PopularProductData";
import Footer from '../Components/Shell/Footer/Footer';

const slidesData = [
  {
    image: Images.CarouselBG1,
    heading: 'Fresh Vegetables Big discount',
    subText: 'Save up to 50% off on your first order',
    buttonLabel: 'Subscribe',
  },
  {
    image: Images.CarouselBG2,
    heading: 'Dont Miss amazing Grocery Deals',
    subText: 'Signup for daily newsletter',
    buttonLabel: 'Subscribe',
  },
];

const items = [
  { image: Images.Burger, title: 'Burger', description: '26 items',bgcolor:'#F2FCE4' },
  { image: Images.Kiwi, title: 'Organic Kiwi', description: '28 items' ,bgcolor:'#FFFCEB' },
  { image: Images.Peach, title: 'Peach', description: '14 items',bgcolor:'#ECFFEC' },
  { image: Images.RedApple, title: 'Red Apple', description: '54 items',bgcolor:'#FEEFEA' },
  { image: Images.Snaks, title: 'Snack', description: '56 items',bgcolor:'#FFF3EB' },
  { image: Images.Cabbage, title: 'Vegetables', description: '72 items',bgcolor:'#FFF3FF' },
  { image: Images.Strawberry, title: 'Strawberry', description: '36 items',bgcolor:'#F2FCE4' },
  { image: Images.Black_Plum, title: 'Black plum', description: '123 items' ,bgcolor:'#FEEFEA'},
  { image: Images.CustardApple, title: 'Custrad Apple', description: '34 items',bgcolor:'#FFFCEB' },
  { image: Images.Coffee, title: 'Coffee and Tea', description: '89 items',bgcolor:'#FEEFEA' }
 
];

const promoCards = [
    {
      image: Images.Add1, 
      text: 'Everyday fresh & clean with our products',
    },
    {
      image: Images.Add2,
      text: 'Make your Breakfast healthy and easy',
    },
    {
      image: Images.Add3,
      text: 'The best Organic Products Online',
    },
  ];

const Home2 = () => {
  return (
    <div>
        <div>
        <Header /> 
        </div>
      <div>
      <ReusableCarousel slides={slidesData} />
      </div>
      
     <div>
     <CardSlider items={items} />
     </div>
     <div className="promo-card-container">
      {promoCards.map((card, index) => (
        <AddsCard
          key={index}
          image={card.image}
          text={card.text}
          onClick={() => alert(`Clicked ${card.text}`)}
        />
      ))}
    </div>
 <div>
   <div className='Pop'>
   <div>
        <span className="Heading"><h3>Popular Products</h3></span>
      </div>
      <div className='Pop-Links'>
        <a href="">All</a>
        <a href="">Milks & Dairies</a>
        <a href="">Coffes & Teas</a>
        <a href="">Pet Foods</a>
        <a href="">Meats</a>
        <a href="">Vegetables</a>
        <a href="">Fruits</a>
      </div>
      </div>
  
    <div className="product-list-container">
  {PopularProductData.map((product) => (
    <PopularProductCard
      key={product.id}
      discount={product.discount}
      discountBG={product.discountBG}
      image={product.image}
      category={product.category}
      title={product.title}
      rating={product.rating}
      brand={product.brand}
      price={product.price}
      oldPrice={product.oldPrice}
      onAddToCart={() => console.log(`Added ${product.title}`)}
    />
  ))}

</div>
</div>
<div>
  <Footer />
</div>

   
    </div>
  );
};

export default Home2;
