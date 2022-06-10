import { useState } from "react";
import "./App.css";
import { FaStar } from "react-icons/fa";

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};

const stars = Array(5).fill(0);




function App() {
  return (
    <div className="App">
      <h1> Zahra </h1>
     <div style={styles.container}>
      <div style={styles.stars}>
{stars.map ((_, index) => {
return (
  <FaStar 
  key={index}
  />
)

})}
      </div>
      </div>
    </div>
  );
}


const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  stars: {
    display: "flex",
    flexDirection: "row",
  },
  textarea: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    padding: 10,
    margin: "20px 0",
    minHeight: 100,
    width: 300,
  },
  button: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    width: 300,
    padding: 10,
  },
};

export default App;
