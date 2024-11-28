import React, {useState} from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
      <Button />
    </div>
  );
}
function Header() {
  return <h1 style={{color: "orange", fontSize: "48px", textTransform: "uppercase"}}>Jeron's Pizza Co.</h1>;
}
function Pizza({pizzaData}) {
  return (
    <div className="pizza">
      {pizzaData.map((pizza, index) => (
        <div key={index}>
          <img src={pizza.photoName} alt={pizza.name}/>
          <h3>{pizza.name}</h3>
          <p>{pizza.ingredients}</p>
          <p>{pizza.price}</p>
          <p>{pizza.soldOut ? "Sold Out" : "Available"}</p>
        </div>
      ))}
    </div>
  );
}

function Menu() {
  const [searchP, setSearchP] = useState("");
  const [filteredPizza, setFilteredP] = useState(pizzaData);
  const currTime = new Date().getHours() * 100 + new Date().getMinutes();

  const handleInputChange = (e) => {
    const query = e.target.value;
    setSearchP(query);
    const filteredPizzas = pizzaData.filter((pizza) => {
      return (
        pizza.name.toLowerCase().includes(query.toLowerCase()) ||
        pizza.ingredients.toLowerCase().includes(query.toLowerCase())
      );
    });
    setFilteredP(filteredPizzas);
  };

  return (
    <div className="menu">
      <h2>Our Menu</h2>
      <p>{currTime >= 1000 && currTime <= 2200 ? "Authentic Italian Cuisine" : ""}</p>
      <input
        type="text"
        placeholder="Search for pizza"
        value={searchP}
        onChange={handleInputChange}
      />
      <Pizza pizzaData={filteredPizza} />
    </div>
  );
}
function Button() {
  return <button className="btn">Order</button>
}
function Footer() {
  return (
    <footer className="footer">
      {currTime >= 1000 && currTime <= 2200
        ? "We're currently open"
        : "Sorry we're closed"}
    </footer>
  );
}
const hours = new Date().getHours();
const minutes = new Date().getMinutes();
const paddedMinutes = parseInt(String(minutes).padStart(2, '0'));
const currTime = `${hours}${paddedMinutes}`;
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
