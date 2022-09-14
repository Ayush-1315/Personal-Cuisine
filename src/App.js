import "./styles.css";
import { useState } from "react";
var buttons = ["Indian", "Japanese", "Chinese"];
export default function App() {
  const [toggle, setToggle] = useState(
    <ul>
      <li className="dishesPresent">
        Chicken Biryani 🥘
        <span className="ratings">4.5/5</span>
      </li>
      <li className="dishesPresent">
        Indian curry 🍛
        <span className="ratings">3/5</span>
      </li>
      <li className="dishesPresent">
        Tandoori Chicken 🦃
        <span className="ratings">5/5</span>
      </li>
      <li className="dishesPresent">
        Paneer Kebab 🧈
        <span className="ratings">4/5</span>
      </li>
    </ul>
  );

  function toggleHandler(cuisine) {
    if (cuisine === "Indian") {
      return setToggle(
        <ul>
          <li className="dishesPresent">
            Chicken Biryani 🥘
            <span className="ratings">3/5</span>
          </li>
          <li className="dishesPresent">
            Indian curry 🍛
            <span className="ratings">4.5/5</span>
          </li>
          <li className="dishesPresent">
            Tandoori Chicken 🦃
            <span className="ratings">5/5</span>
          </li>
          <li className="dishesPresent">
            Paneer Kebab 🧈
            <span className="ratings">4/5</span>
          </li>
        </ul>
      );
    }
    if (cuisine === "Japanese") {
      return setToggle(
        <ul>
          <li className="dishesPresent">
            Ramen 🍜
            <span className="ratings">5/5</span>
          </li>
          <li className="dishesPresent">
            Omurice 🥟
            <span className="ratings">4.5/5</span>
          </li>
          <li className="dishesPresent">
            Rolled Omlet 🍳
            <span className="ratings">4/5</span>
          </li>
          <li className="dishesPresent">
            Japanese Curry Rice 🍛
            <span className="ratings">4.9/5</span>
          </li>
        </ul>
      );
    }
    if (cuisine === "Chinese") {
      return setToggle(
        <ul>
          <li className="dishesPresent">
            Szechwan Chilli Chicken 🍗
            <span className="ratings">3/5</span>
          </li>
          <li className="dishesPresent">
            Stir Fried Tofu with Rice 🧈
            <span className="ratings">3.5/5</span>
          </li>
          <li className="dishesPresent">
            Spring Rolls 🌯
            <span className="ratings">5/5</span>
          </li>
          <li className="dishesPresent">
            Chicken with Chestnuts. 🍗+🌰
            <span className="ratings">4.5/5</span>
          </li>
        </ul>
      );
    }
  }

  return (
    <div className="App">
      <h1>🍲 Finest dishes across world</h1>
      <h2>Checkout my favourite dishes across the world!</h2>
      {buttons.map((btn) => {
        return (
          <button
            className="dishes"
            key={btn}
            onClick={() => toggleHandler(btn)}
          >
            {btn}
          </button>
        );
      })}
      <div id="output">{toggle}</div>
    </div>
  );
}
