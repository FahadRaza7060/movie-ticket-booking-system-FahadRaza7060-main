import React, { useState, useEffect } from "react";
import "../styles/Box.css";

function Box({ x, setSelectedSeats, selectedSeats }) {
  const [selectBox, setSelectBox] = useState("btn-enable");
  const [alreadySelected, setAlreadySelected] = useState(false);

  useEffect(() => {
    const storedSeats = JSON.parse(localStorage.getItem("selectedSeats"));
    if (storedSeats && storedSeats.includes(x)) {
      setSelectBox("btn-disable");
      setAlreadySelected(true);
    }
  }, [x]);

  const seatHandler = () => {
    // copy of the current selectedSeats
    const newSelectedSeats = [...selectedSeats];
    const seatIndex = newSelectedSeats.indexOf(x);

    console.log("seat number: ", x);
    console.log({ newSelectedSeats, seatIndex });

    if (seatIndex === -1) {
      newSelectedSeats.push(x);
      setSelectBox("btn-disable");
      console.log("seat selected");
    } else {
      newSelectedSeats.splice(seatIndex, 1);
      console.log("seat deselected");

      setSelectBox("btn-enable");
    }

    // call the parent component's state with new array values
    setSelectedSeats(newSelectedSeats);

    
    // set the new selected seat again into the local storage
    // localStorage.setItem("selectedSeats", JSON.stringify(newSelectedSeats));
  };

  return (
    <div>
      <button
        style={{
          margin: "5px",
          padding: "5px",
          borderRadius: "5px",
          width: "50px",
        }}
        className={`box ${selectBox}`}
        // disabled={selectBox === "btn-disable"}
        onClick={() => {
          if (!alreadySelected) {
            seatHandler();
          }
        }}
      >
        {" "}
        {x}{" "}
      </button>
    </div>
  );
}

export default Box;
