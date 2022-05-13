import * as React from "react";
import { Smoothies, IIngredient, ISmoothie, UNITS } from "./types";
import { Stack, Text, TextField, DefaultButton, IconButton, PrimaryButton, Dropdown, IDropdownOption } from "@fluentui/react";

interface IAddSmoothieProps {
  smoothies: Smoothies;
  onAddSmoothie: (name: string, smoothie: ISmoothie) => void;
}

interface IAddSmoothieState {
  name: string;
  ingredients: IIngredient[];
}

const EMPTY_INGREDIENT = {
  name: "",
  quantity: "0",
  unit: UNITS[0]
};

/**
 * Renders UI that allows the user to add one new smoothie at a time.
 */
export class AddSmoothie extends React.Component<IAddSmoothieProps, IAddSmoothieState> {
  constructor(props: IAddSmoothieProps) {
    super(props);

    this.state = {
      name: "",
      ingredients: [EMPTY_INGREDIENT]
    };
  }

  render() {
    const { name, ingredients } = this.state;

    const ingredientError = !this._checkIngredients();

    return (
      <Stack
        className="card"
        tokens={{childrenGap: 10}}
        horizontalAlign="start"
        styles={{root: {
          padding: 10,
          alignSelf: "flex-start"
        }}}>
        <Text variant="large">Add a smoothie</Text>
        <Stack horizontal verticalAlign="end" tokens={{childrenGap: 10}}>
          <TextField
            label="Smoothie name"
            value={name}
            onChange={this._changeSmoothieName}
            errorMessage={this._isNameConflict() ? "A smoothie with this name already exists." : ""}
          />
          <PrimaryButton
            text="Add smoothie"
            onClick={this._addSmoothie}
            disabled={this._isNameConflict() || !name || ingredients.length < 1 || ingredientError}
          />
          <Stack tokens={{childrenGap: 5}} styles={{root: {maxWidth: 250}}}>
            {
              !name &&
              <Text className="errorText">
                Smoothie must have a nonempty name.
              </Text>
            }
            {
              ingredients.length < 1 &&
              <Text className="errorText">
                Smoothie must have at least one ingredient.
              </Text>
            }
            {
              ingredientError &&
              <Text className="errorText">
                All ingredients must have a nonempty name and a positive numerical quantity.
              </Text>
            }
          </Stack>
        </Stack>
        {ingredients.map((ingredient: IIngredient, index: number) => this._ingredient(ingredient, index))}
        <DefaultButton text="Add ingredient" onClick={this._addIngredient} />
      </Stack>
    );
  }

  /**
   * Event handler for changing the pending name of the smoothie to add.
   */
  _changeSmoothieName = (ev: any, val?: string) => {
    this.setState({ name: val || "" });
  }

  /**
   * Event handler to add the current pending smoothie.
   */
  _addSmoothie = (ev: any) => {
    const { onAddSmoothie } = this.props;
    const { name, ingredients } = this.state;

    const smoothie = {
      ingredients: ingredients.filter(ingredient => ingredient.name != "").map(ingredient => ({
        ...ingredient,
        unit: ingredient.unit || UNITS[0]
      }))
    };

    onAddSmoothie(name, smoothie);
    this.setState({
      name: "",
      ingredients: [EMPTY_INGREDIENT]
    })
  }

  /**
   * Renders the UI to construct a single pending ingredient.
   */
  _ingredient = (ingredient: IIngredient, index: number) => {
    const quantityErrorMsg = isNaN(Number(ingredient.quantity || "0")) ? "Quantity must be a number." : "";

    return (
      <Stack key={index} horizontal verticalAlign="end" tokens={{childrenGap: 10}}>
        <TextField
          label="Ingredient name"
          value={ingredient.name}
          onChange={this._changeIngredientName(index)}
        />
        <TextField
          label="Quantity"
          value={ingredient.quantity}
          onChange={this._changeIngredientQuantity(index)}
          errorMessage={quantityErrorMsg}
        />
        <Dropdown
          label="Unit"
          options={UNITS.map(unit => ({ key: unit, text: unit }))}
          selectedKey={ingredient.unit || UNITS[0]}
          onChange={this._changeUnit(index)}
          styles={{
            root: {
              minWidth: 80
            }
          }}
        />
        <IconButton iconProps={{iconName: "Delete"}} onClick={this._deleteIngredient(index)} />
      </Stack>
    );
  }

  /**
   * Event handler to add a new blank pending ingredient.
   */
  _addIngredient = (ev: any) => {
    const ingredients = [...this.state.ingredients, {
      name: "",
      quantity: "0",
      unit: ""
    }];
    this.setState({ ingredients });
  }

  /**
   * Returns an event handler to change the name of the pending ingredient at the given index.
   */
  _changeIngredientName = (index: number) => {
    return (ev: any, val?: string) => {
      const ingredients = JSON.parse(JSON.stringify(this.state.ingredients));
      ingredients[index].name = val || "";
      this.setState({ ingredients });
    }
  }

  /**
   * Returns an event handler to change the quantity of the pending ingredient at the given index.
   */
  _changeIngredientQuantity = (index: number) => {
    return (ev: any, val?: string) => {
      const ingredients = JSON.parse(JSON.stringify(this.state.ingredients));
      ingredients[index].quantity = val || "";
      this.setState({ ingredients });
    }
  }

  /**
   * Returns an event handler to change the unit of the pending ingredient at the given index.
   */
  _changeUnit = (index: number) => {
    return (ev: any, option?: IDropdownOption) => {
      if (!option) return;
      const ingredients = [...this.state.ingredients];
      ingredients[index].unit = option.key.toString();
      this.setState({ ingredients });
    }
  }

  /**
   * Returns an event handler to delete the pending ingredient at the given index.
   */
  _deleteIngredient = (index: number) => {
    return (ev: any) => {
      let ingredients = this.state.ingredients;
      ingredients.splice(index, 1);
      this.setState({ ingredients });
    }
  }

  /**
   * Returns true if and only if there is already a smoothie with the same
   * (case-insensitive) name as the name of the pending smoothie.
   */
  _isNameConflict = () => {
    const { smoothies } = this.props;
    const { name } = this.state;

    if (!name) {
      return false;
    }

    for (const existingName in smoothies) {
      if (existingName.toLowerCase() == name.toLowerCase()) {
        return true;
      }
    }

    return false;
  }

  /**
   * Returns true if an only if all pending ingredients:
   * 1. Have nonempty names, and:
   * 2. Have positive numerical quantities
   */
  _checkIngredients = () => {
    const { ingredients } = this.state;
    for (const i in ingredients) {
      const { name, quantity } = ingredients[i];
      if (!name) {
        return false;
      }
      const quant = Number(quantity);
      if (isNaN(quant) || quant <= 0) {
        return false;
      }
    }
    return true;
  }
}