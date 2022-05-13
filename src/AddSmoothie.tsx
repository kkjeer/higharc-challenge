import * as React from "react";
import { connect } from "react-redux";
import { Stack, Text, TextField, DefaultButton } from "@fluentui/react";
import { IState, Smoothies, IIngredient, addSmoothie } from "./state";

interface IAddSmoothieViewProps {
  smoothies: Smoothies;
  addSmoothie: (name: string, ingredients: IIngredient[]) => void;
}

interface IAddSmoothieViewState {
  name: string;
  ingredients: IIngredient[];
  numIngredients: number;
}

class AddSmoothieView extends React.Component<IAddSmoothieViewProps, IAddSmoothieViewState> {
  _pendingIngredients: IIngredient[] = [{
    name: "Dummy Ingredient",
    quantity: 2,
    unit: "cups"
  }];

  constructor(props: IAddSmoothieViewProps) {
    super(props);

    this.state = {
      name: "",
      ingredients: [{
        name: "Dummy Ingredient",
        quantity: 2,
        unit: "cups"
      }],
      numIngredients: 1
    };
  }
  
  render() {
    const { smoothies } = this.props;
    const { name, ingredients } = this.state;

    console.log("ingredients:", ingredients);

    // console.log("AddSmoothie smoothies:", smoothies);

    const conflictingName = smoothies.hasOwnProperty(name);
    const nameErrorMsg = "A smoothie with this name already exists.";

    console.log("numIngredients:", this.state.numIngredients);
    const ingIndices = [];
    for (let i = 0; i < this.state.numIngredients; ++i) {
      ingIndices.push(i);
    }
    console.log("ingIndices:", ingIndices);

    return (<Stack>
      <Text>Add Smoothie</Text>
      <TextField value={name} onChange={this._onChangeName} errorMessage={conflictingName ? nameErrorMsg : ""} />
      {ingredients.map((ingredient: IIngredient, index: number) => this._ingredient(ingredient, index))}
      {/* {ingIndices.map((n: number, index: number) => this._altIngredient(index))} */}
      <DefaultButton text="Add Ingredient" onClick={this._addIngredient} />
    </Stack>);
  }

  _altIngredient = (index: number) => {
    return <Stack key={`ingredient-${index}`}><TextField label="Ingredient name (alt)" onChange={this._editIngName(index)} /></Stack>
  }

  _editIngName = (index: number) => {
    return (ev: any, val?: string) => {
      this._pendingIngredients[index].name = val || "";
    }
  }

  _addIngAlt = (ev: any) => {
    this.setState({numIngredients: this.state.numIngredients + 1});
  }

  _ingredient = (ingredient: IIngredient, index: number) => {
    const ing = this.state.ingredients[index];
    return <Stack key={`${ingredient.name}`} horizontal>
      <TextField label="Ingredient name" onChange={this._onChangeIngredientName(index)} />
      <TextField label="Quantity" />
      <TextField label="Test" onChange={this._onChangeIngredientName(index)} />
      <input value={ingredient.name} onChange={this._onChangeIngredientName(index)} />
    </Stack>
  }

  _addIngredient = (ev: any) => {
    // this._pendingIngredients.push({
    //   name: "",
    //   quantity: 0,
    //   unit: "cups"
    // });
    // return;
    const ingredients = [...this.state.ingredients, {
      name: "",
      quantity: 0,
      unit: "cups"
    }];
    this.setState({ ingredients });
  }

  _onChangeName = (ev: any, val?: string) => {
    this.setState({name: val || ""});
  }

  _onChangeIngredientName = (index: number) => {
    return (ev: any, val?: string) => {
      // this._pendingIngredients[index].name = val || "";
      // return;
      const ingredients = JSON.parse(JSON.stringify(this.state.ingredients));
      ingredients[index].name = val || "";
      this.setState({ ingredients });
    }
  }
}

const smoothieProps = (state: IState) => ({
  smoothies: state.smoothies
});

const actions = {
  addSmoothie
};

export const AddSmoothie = connect(smoothieProps, actions)(AddSmoothieView);
