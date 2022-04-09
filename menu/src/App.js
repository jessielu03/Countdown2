import './App.css';
import { useState } from "react"
import Menu from "./Menu.js"


function App() {
  const [myVeg, setMyVeg] = useState(false);
  const foodOptions =
  {
    "breakfast": [
      {"food": "pancakes", "price": 5.00, "vegetarian": true},
      {"food": "waffles", "price": 5.00, "vegetarian": true},
      {"food": "orange juice", "price": 2.00, "vegetarian": true}
    ],
    "lunch": [
      {"food": "turkey sandwich", "price": 8.00, "vegetarian": false},
      {"food": "grilled cheese", "price": 6.00, "vegetarian": true},
      {"food": "hamburger", "price": 8.00, "vegetarian": false}
    ],
    "dinner": [
      {"food": "chicken alfredo", "price": 10.00, "vegetarian": false},
      {"food": "tofu stir-fry", "price": 9.00, "vegetarian": true},
      {"food": "chili", "price": 8.00, "vegetarian": false}
    ]
  };
  
  return (
    <div className="App">
      <h1>Menu</h1>
      <button onClick={() => setMyVeg(true)}>Show only vegetarian</button>
      <h2>Breakfast</h2>
      {foodOptions.breakfast.map((option) => <Menu food={option.food} price={option.price} veggie={option.vegetarian} veg={myVeg}/>)}
      <h2>Lunch</h2>
      {foodOptions.lunch.map((option) => <Menu food={option.food} price={option.price} veggie={option.vegetarian} veg={myVeg}/>)}
      <h2>Dinner</h2>
      {foodOptions.dinner.map((option) => <Menu food={option.food} price={option.price} veggie={option.vegetarian} veg={myVeg}/>)}
      

    </div>
  );
}

export default App;
