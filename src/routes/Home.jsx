import { useContext, useState, useEffect } from "react";

import { CountDownContext } from "../context/CountDownContext";

import { useNavigate } from "react-router-dom";

import "./Home.css";

const Home = () => {
  const [title, setTitle] = useState();
  const [date, setDate] = useState();
  const [image, setImage] = useState();
  const [color, setColor] = useState();

  const { setEvent } = useContext(CountDownContext);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const eventObject = {
      title,
      date,
      image,
      color,
    };

    setEvent(eventObject);

    navigate("/countdown");

    localStorage.setItem("event", JSON.stringify(eventObject));
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("event"));

    console.log(data);
    if (data) {
      setEvent(data);

      navigate("/countdown");
    }
  }, []);

  return (
    <div className="home">
      <h2>Monte a sua contagem regressiva</h2>
      <form className="countdown-form" onSubmit={handleSubmit}>
        <label>
          <span>Título</span>
          <input
            type="text"
            name="title"
            placeholder="Digite o seu título"
            required
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>

        <label>
          <span>Data</span>
          <input
            type="date"
            name="date"
            required
            onChange={(e) => setDate(e.target.value)}
          />
        </label>

        <label>
          <span>Imagem</span>
          <input
            type="text"
            name="image"
            placeholder="Insira a url da imagem"
            onChange={(e) => setImage(e.target.value)}
          />
        </label>

        <label>
          <span>Cor do tema</span>
          <input
            type="color"
            name="color"
            required
            onChange={(e) => setColor(e.target.value)}
          />
        </label>

        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default Home;
