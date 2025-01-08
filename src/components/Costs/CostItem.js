import "./CostItem.css";
import CostDate from "./CostDate";
import Card from "../UI/Card";
import React, { useState } from "react";

const CostItem = (props) => {
  const [currTitle, setCurrTitle] = useState(props.title);

  const changeTitleHandler = () => {
    setCurrTitle(currTitle + "11");
    alert(setCurrTitle);
  };

  return (
    <Card className="cost-item">
      <CostDate date={props.date}></CostDate>

      <div className="cost-item__description">
        <h2>{currTitle}</h2>
        <Card className="cost-item__price">${props.price}</Card>
      </div>
      <button onClick={changeTitleHandler}>Изменить описание</button>
    </Card>
  );
};

export default CostItem;
