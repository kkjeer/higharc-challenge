import React from "react";
import "./App.css";
import { Stack, Text } from "@fluentui/react";
import { AddSmoothie } from "./AddSmoothie";

export class App extends React.Component {
  componentDidMount() {
    let currSmoothies = window.localStorage.getItem("smoothies");
    if (!currSmoothies) {
      const dummySmoothies = [{name: "My Smoothie", ingredients: [{name: "Yogurt", quantity: 2, unit: "cups"}]}];
      window.localStorage.setItem("smoothies", JSON.stringify(dummySmoothies));
    }
    currSmoothies = window.localStorage.getItem("smoothies") || "[]";
    const smoothies = JSON.parse(currSmoothies);
    console.log("smoothies", smoothies);
  }

  render() {
    return (
      <Stack>
        <Text>Hello Higharc Challenge</Text>
        <AddSmoothie />
      </Stack>
    );
  }
}
