import { useEffect, useState } from "react";
import "./App.css";
import Watch from "./Components/Watch/Watch";

function App() {
  const [watchDetail, setWatchDetail] = useState([]);

  // In memory Object:
  // const watchDetail = [
  //   { id: 1, brand: "Apple", price: 700 },
  //   { id: 2, brand: "MI", price: 300 },
  //   { id: 3, brand: "Samsung", price: 500 },
  //   { id: 4, brand: "ASUS", price: 200 },
  //   { id: 5, brand: "OPPO", price: 300 },
  // ];

  // const watchDetail = [
  //   { id: 1, brand: "Apple", price: 399 },
  //   { id: 2, brand: "Samsung", price: 299 },
  //   { id: 3, brand: "Garmin", price: 249 },
  //   { id: 4, brand: "Fitbit", price: 199 },
  //   { id: 5, brand: "Fossil", price: 179 },
  // ];

  useEffect(() => {
    fetch("watches.json")
      .then((res) => res.json())
      .then((data) => setWatchDetail(data));
  }, []);
  return (
    <>
      <h2>Loading Fake data</h2>
      {watchDetail.map((singleWatch) => (
        <Watch key={singleWatch.id} watchValue={singleWatch}></Watch>
      ))}
    </>
  );
}

export default App;
