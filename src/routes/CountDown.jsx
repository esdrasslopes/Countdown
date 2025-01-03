import Title from "../components/Title";

import { useContext } from "react";

import { useNavigate } from "react-router-dom";

import { Navigate } from "react-router-dom";

import { CountDownContext } from "../context/CountDownContext";

import Counter from "../components/Counter";

import useCountdown from "../hooks/useCountdown";

const CountDown = () => {
  const { event, setEvent } = useContext(CountDownContext);

  if (!event) return <Navigate to="/" />;

  const eventColor = event.color;

  const [day, hour, minute, second] = useCountdown(event.date);

  const data = JSON.parse(localStorage.getItem("event"));

  const navigate = useNavigate();

  function handleHome() {
    localStorage.removeItem("event");

    setEvent({});

    navigate("/");
  }

  return (
    <div>
      <>
        <Title title={event.title} eventColor={eventColor} />

        <div className="countdown-container">
          <Counter title="Dias" number={day} eventColor={eventColor} />
          <Counter title="Horas" number={hour} eventColor={eventColor} />
          <Counter title="Minutos" number={minute} eventColor={eventColor} />
          <Counter title="Segundos" number={second} eventColor={eventColor} />
        </div>

        {data && (
          
          <div className="back">
            <button onClick={handleHome} className="back-btn" style={eventColor && {backgroundColor: eventColor}}>
              Voltar
            </button>
          </div>  
        )}
      </>
    </div>
  );
};

export default CountDown;
