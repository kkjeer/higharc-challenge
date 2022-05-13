export type Smoothies = { [name: string]: ISmoothie };

export interface ISmoothie {
  ingredients: IIngredient[];
}

export interface IIngredient {
  name: string;
  quantity: string;
  unit: string;
}

export const UNITS = ["cups", "ounces", "pounds"];