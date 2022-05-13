export type Smoothies = {[name: string]: IIngredient[]};

export interface IIngredient {
  name: string;
  quantity: number;
  unit: string;
}

export interface IState {
  smoothies: Smoothies;
}

export type SmoothieAction = AddSmoothieAction;

export interface AddSmoothieAction {
  type: "ADD_SMOOTHIE",
  name: string,
  ingredients: IIngredient[];
}
