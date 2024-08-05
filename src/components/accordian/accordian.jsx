import React, { useState } from "react";
import data from "./data";
import "./style.css";
export default function Accordian() {
  const [itemId, setItemId] = useState(null);
  const [isMultiEnabled, setIsMultiEnabled] = useState(false);
  const [multiValue, setMultiValue] = useState([]);

  function handleItemID(currentId) {
    if (!isMultiEnabled) {
      setItemId(currentId === itemId ? null : currentId);
    } else {
      const temp = [...multiValue];
      let x = temp.indexOf(currentId);
      if (x === -1) {
        temp.push(currentId);
      } else {
        temp.splice(x, 1);
      }

      setMultiValue(temp);
    }
  }
  return (
    <div className="wrapper">
      <button
        className="select"
        onClick={() => setIsMultiEnabled(!isMultiEnabled)}
      >
        {isMultiEnabled ? "Disable Multi Select" : "Enable Multi Select"}
      </button>
      <div className="secondWrapper">
        {data.map((dataitem) => (
          <div className="items">
            <div onClick={() => handleItemID(dataitem.id)} className="title">
              <h3>{dataitem.question} \/</h3>
            </div>
            {(dataitem.id === itemId ||
              multiValue.indexOf(dataitem.id) !== -1) && (
              <div className="answer">{dataitem.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
