//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
import React from "react";
import ReactDOM from "react-dom";

const d = new Date();
const dHours = d.getHours();
// console.log(d.getHours());

var timeOfDay = "morning";
var timeOfDayColor = { color: "red" };

if (dHours > 12 && dHours < 18) {
  timeOfDay = "Afternoon";
  timeOfDayColor.color = "green";
} else if (dHours > 18 && dHours < 24) {
  timeOfDay = "evening";
  timeOfDayColor.color = "blue";
}

ReactDOM.render(
  <h1 className="heading" style={timeOfDayColor}>
    Good {timeOfDay}
  </h1>,
  document.getElementById("root")
);
