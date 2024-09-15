import React from "react";
import "./ProductList.css";

const products = [
  { id: 1, name: "Western Wear", description: "Step into classic style with our versatile Western Wear collection. Perfect for casual outings or a rugged look, this range offers comfort and durability, all within a budget-friendly price of $50 to $160.", Price: "$50.00 - $160.00", image: "https://th.bing.com/th/id/OIP.3fUKoDhM4xoB9TsWuwwHvQHaJ4?w=208&h=277&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
  { id: 2, name: "Men Blue Smart-Casual Shirt", Price: "$30.95", offerPrice: "$20.70", description: "This blue shirt features a button-down collar, long sleeves with buttoned cuffs, and embroidered branding on the right cuff placket. It has a full buttoned placket at the front, a yoke at the back for a structured fit and a modern curved hem.", image: "https://th.bing.com/th/id/OIP.WeiSwbEA90xeBvl0oZUzWgHaJ4?w=208&h=277&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
  { id: 3, name: "Cross Strap Block Heels", Price: "$30.98", description: "Stay stylish and warm with our trendy Casual Long Coat, perfect for layering during colder seasons. Crafted for both comfort and elegance, this versatile coat pairs effortlessly with any outfit, making it an essential addition to your wardrobe.", image: "https://th.bing.com/th/id/OIP.LqZlIclYuOA27Az57OzJuAHaLH?w=134&h=201&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
  { id: 4, name: "Navy Blue Floral Dress", Price: "$10.71", description: "This elegant navy blue floral dress features a flattering A-line silhouette with a delicate floral pattern. Crafted with lightweight fabric, it offers comfort and a breezy fit, perfect for casual outings or semi-formal occasions.", image: "https://th.bing.com/th/id/OIP.sbL6xoDt_K57ZCe2z52hZwAAAA?w=186&h=335&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
  { id: 5, name: "6-in-1 Cartoon Vehicle Toy Set", Price: "$30.98", description: "This vibrant transport truck set includes one large vehicle and five colorful small cars, designed to spark children's imagination. Perfect for promoting teamwork and sharing, it encourages learning through play. A fun and engaging toy that will keep kids entertained while developing their curiosity and social skills.", image: "https://th.bing.com/th/id/OIP.A3DQdCeCY6tMtcVZV0C7cAHaHa?w=171&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
  { id: 6, name: "Smart Watch", Price: "$350.00", description: "Stay connected and ahead of the curve with our versatile Smart Watch. Combining cutting-edge technology with sleek design, this watch offers fitness tracking, notifications, and more, right on your wrist. Perfect for an active lifestyle or tech-savvy individuals, it's the ultimate accessory for modern living.", image: "https://th.bing.com/th/id/OIP.ucuEgvTEnzVxGAazopYXuwHaHa?w=216&h=216&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
  { id: 7, name: "Earrings For Women", Price: "$20.00 - $100.00", description: "Add a touch of elegance to any outfit with our stunning collection of earrings. From dainty studs to bold statement pieces, these earrings are designed to complement every style and occasion. Perfect for casual wear or special events, they make a timeless addition to your jewelry collection.", image: "https://th.bing.com/th/id/OIP.Bsj69dicjTeRmegF1-4TJwHaHa?w=212&h=212&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
  { id: 8, name: "Elegant Wrap Dress", Price: "$110.00", offerPrice: "$95.99", description: "Discover effortless sophistication with our Elegant Wrap Dress. Featuring a flattering wrap design and a graceful silhouette, this dress offers a chic and versatile look suitable for both formal events and everyday wear. Its timeless style and comfortable fit make it a wardrobe staple for any occasion.", image: "https://th.bing.com/th/id/OIP.TYcbzrfFcdxEbKXS3ADm4wHaHa?w=174&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
];

const ProductList = ({ addToCart, removeFromCart, isInCart }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p className="price">
            {product.name === "Men Blue Smart-Casual Shirt" || product.name === "Elegant Wrap Dress" ? (
              <>
                <span className="strike-price">{product.Price}</span>
                {product.offerPrice && <span className="offer-price"> {product.offerPrice}</span>}
              </>
            ) : (
              product.Price
            )}
          </p>
          <p>{product.description}</p>
          <div>
            {product.name === "Western Wear" || product.name === "Earrings For Women" ? (
              <button onClick={() => alert("Where rugged Western charm meets the elegance of shimmering earrings.")}>View Options</button>
            ) : isInCart(product) ? (
              <button
                className="remove-cart-button"
                onClick={() => removeFromCart(product)}
              >
                Remove from Cart
              </button>
            ) : (
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
