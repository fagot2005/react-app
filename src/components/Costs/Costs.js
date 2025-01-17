import "./Costs.css";
import CostItem from "./CostItem";
import Card from "../UI/Card";

const Costs = (props) => {
  return (
    <Card className="costs">
      <CostItem
        date={props.costsToComponent[0].date}
        title={props.costsToComponent[0].title}
        price={props.costsToComponent[0].price}
      ></CostItem>
      <CostItem
        date={props.costsToComponent[1].date}
        title={props.costsToComponent[1].title}
        price={props.costsToComponent[1].price}
      ></CostItem>
      <CostItem
        date={props.costsToComponent[2].date}
        title={props.costsToComponent[2].title}
        price={props.costsToComponent[2].price}
      ></CostItem>
      <CostItem
        date={props.costsToComponent[3].date}
        title={props.costsToComponent[3].title}
        price={props.costsToComponent[3].price}
      ></CostItem>
    </Card>
  );
}

export default Costs;
