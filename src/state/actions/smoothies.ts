import { IIngredient, AddSmoothieAction } from "../state.types";

export const addSmoothie = (name: string, ingredients: IIngredient[]): AddSmoothieAction => ({
  type: "ADD_SMOOTHIE",
  name,
  ingredients
});