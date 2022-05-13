import * as React from "react";
import { Stack, Text, IconButton } from "@fluentui/react";
import { Smoothies, IIngredient } from "./types";

interface IViewSmoothiesProps {
  smoothies: Smoothies;
  onDeleteSmoothie: (name: string) => void;
}

interface IViewSmoothiesState { }

/**
 * Renders a set of smoothies in a grid view.
 * Each smoothie UI contains the capability to delete that smoothie.
 */
export class ViewSmoothies extends React.Component<IViewSmoothiesProps, IViewSmoothiesState> {
  constructor(props: IViewSmoothiesProps) {
    super(props);
  }

  render() {
    const { smoothies } = this.props;
    return (
      <Stack
        horizontal
        wrap
        tokens={{childrenGap: 20}}
        horizontalAlign="start">
        {Object.keys(smoothies).map(name => this._smoothie(name))}
      </Stack>
    );
  }

  /**
   * Renders one smoothie.
   */
  _smoothie = (name: string) => {
    const smoothie = this.props.smoothies[name];
    return (
      <Stack
        className="card"
        key={name}
        tokens={{childrenGap: 10}}
        styles={{root: {
          padding: 5,
          paddingBottom: 10,
          paddingLeft: 10
        }}}>
          <Stack
            horizontal
            horizontalAlign="space-between"
            verticalAlign="center"
            tokens={{childrenGap: 20}}>
            <Text variant="mediumPlus">{name}</Text>
            <IconButton iconProps={{iconName: "Delete"}} onClick={this._deleteSmoothie(name)} />
          </Stack>
          <Stack tokens={{childrenGap: 10}} styles={{root: {paddingLeft: 5}}}>
            {smoothie.ingredients.map(ingredient => this._ingredient(ingredient))}
          </Stack>
      </Stack>
    );
  }

  /**
   * Renders the information for one ingredient.
   */
  _ingredient = (ingredient: IIngredient) => {
    const { name, quantity, unit } = ingredient;

    // Remove the last "s" in the unit display string if the quantity is 1
    let unitStr = unit;
    if (Number(quantity) === 1) {
      unitStr = unitStr.substring(0, unitStr.length - 1);
    }

    return <Text key={name}>{quantity} {unitStr} of {name.toLowerCase()}</Text>
  }

  /**
   * Returns an event handler to delete the smoothie with the given name.
   */
  _deleteSmoothie = (name: string) => {
    return (ev: any) => {
      this.props.onDeleteSmoothie(name);
    }
  }
}