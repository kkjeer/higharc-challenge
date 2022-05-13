import React from "react";
import { Stack, Text } from "@fluentui/react";
import { initializeIcons } from '@fluentui/font-icons-mdl2';
import { Smoothies, ISmoothie } from "./types";
import { AddSmoothie } from "./AddSmoothie";
import { ViewSmoothies } from "./ViewSmoothies";

// Initialize the Fluent UI icons to enable their use across the app.
initializeIcons();

interface IAppState {
  smoothies: Smoothies;
}

// Key used to store smoothies in window.localStorage.
const STORAGE_KEY = "smoothies";

export class App extends React.Component<{}, IAppState> {
  constructor(props: {}) {
    super(props);

    const currSmoothies = window.localStorage.getItem(STORAGE_KEY) || "{}";
    const smoothies = JSON.parse(currSmoothies);
    console.log(STORAGE_KEY, smoothies);

    this.state = {
      smoothies
    };
  }

  render() {
    const { smoothies } = this.state;
    return (
      <Stack tokens={{childrenGap: 20}} styles={{root: {padding: 10}}}>
        <Text variant="large">Smoothie Recipe Book</Text>
        <AddSmoothie smoothies={smoothies} onAddSmoothie={this._addSmoothie} />
        <ViewSmoothies smoothies={smoothies} onDeleteSmoothie={this._deleteSmoothie} />
      </Stack>
    );
  }

  _addSmoothie = (name: string, smoothie: ISmoothie) => {
    console.log("adding smoothie", name, smoothie);
    const smoothies = {
      ...this.state.smoothies,
      [name]: smoothie
    };
    this._updateStorage(smoothies);
    this.setState({ smoothies });
  }

  _deleteSmoothie = (name: string) => {
    console.log("deleting smoothie", name);
    const smoothies = {
      ...this.state.smoothies
    };
    delete smoothies[name];
    this._updateStorage(smoothies);
    this.setState({ smoothies })
  }

  _updateStorage = (smoothies: Smoothies) => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(smoothies));
  }
}
