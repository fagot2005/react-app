import CostItem from "./components/CostItem";

function App() {
  const cost = [
    {
      date: new Date(2025, 2, 12),
      title: "Холодильник",
      price: 499.55,
    },
    {
      date: new Date(2024, 5, 12),
      title: "PC",
      price: 59.55,
    },
    {
      date: new Date(2024, 10, 12),
      title: "Mouse",
      price: 9.55,
    },
    {
      date: new Date(2024, 7, 16),
      title: "Jeanse",
      price: 99.55,
    },
  ];

  return (
    <div>
      <h1>Изучаем React</h1>
      <CostItem
        date={cost[0].date}
        title={cost[0].title}
        price={cost[0].price}
      ></CostItem>
      <CostItem
        date={cost[1].date}
        title={cost[1].title}
        price={cost[1].price}
      ></CostItem>
      <CostItem
        date={cost[2].date}
        title={cost[2].title}
        price={cost[2].price}
      ></CostItem>
    </div>
  );
}

export default App;
