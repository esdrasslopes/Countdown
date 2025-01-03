import { Outlet } from "react-router-dom";

import DateImg from "./assets/newyear.jpg";

import { useContext } from "react";

import { CountDownContext } from "./context/CountDownContext";

import "./App.css";

function App() {
  const { event } = useContext(CountDownContext);

  let eventImage = null;

  if (event) eventImage = event.image;

  return (
    <div
      className="app"
      style={
        eventImage
          ? { backgroundImage: `url(${eventImage})` }
          : { backgroundImage: `url(${DateImg})` }
      }
    >
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
