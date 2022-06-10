import { useState } from "react";
import "./App.css";
import { FaStar } from "react-icons/fa";

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};



function App() {
 const stars = Array(5).fill(0);
const [value, setValue] = useState(0);
const[hovervalue, setHoverValue] = useState(undefined);

const handleClick = event => {
  setValue(event);
}
  const handleMouseOver = (newHoverValue) => {
    setHoverValue(newHoverValue);
  };
const handleMouseLeave = () => {
  setHoverValue(undefined);
};


  return (
    <div className="App">
      <h1> Zahra Rating</h1>
      <div style={styles.container}>
        <div style={styles.stars}>
          {stars.map((_, index) => {
            return (
              <FaStar
                key={index}
                onClick={() => handleClick(index + 1)}
                onMouseOver={() => handleMouseOver(index + 1)}
                onMouseLeave={handleMouseLeave}
                color={
                  (hovervalue || value) > index ? colors.orange : colors.grey
                }
                style={{
                  marginRight: 10,
                  cursor: "pointer",
                }}
                size={30}
              />
            );
          })}
        </div>
        <textarea
          placeholder="What's your experience?"
          style={styles.textarea}
        />

        <button style={styles.button}>Submit</button>
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
