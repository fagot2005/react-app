import "./CostItem.css";
import CostDate from "./CostDate";
import Card from "../UI/Card";

const CostItem = (props) => {
  return (
    <Card className="cost-item">
      <CostDate date={props.date}></CostDate>

      <div className="cost-item__description">
        <h2>{props.title}</h2>
        <Card className="cost-item__price">${props.price}</Card>
      </div>
    </Card>
  );
}

export default CostItem;
