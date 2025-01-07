import Costs from "./components/Costs";

function App() {
  
  const costsElements = [
    {
      date: new Date(2025, 2, 12),
      title: "Холодильник",
      price: 499.55,
    },
    {
      date: new Date(2024, 5, 10),
      title: "PC",
      price: 59.55,
    },
    {
      date: new Date(2024, 10, 7),
      title: "Mouse",
      price: 9.55,
    },
    {
      date: new Date(2024, 7, 3),
      title: "Jeanse",
      price: 99.55,
    },
  ];

  return (
    <div>
      <h1>Изучаем React</h1>
      <Costs costsToComponent = {costsElements}/>
    </div>
  );
}

export default App;
