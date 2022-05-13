import { Smoothies, SmoothieAction, AddSmoothieAction } from "../state.types";

const DEFAULT_STATE: Smoothies = {
    "Test Smoothie": [{name: "Yogurt", quantity: 3, unit: "cups"}]
};

export const smoothies = (state: Smoothies = DEFAULT_STATE, action: SmoothieAction) => {
  switch (action.type) {
    case "ADD_SMOOTHIE": {
      const { name, ingredients } = action as AddSmoothieAction;
      const updatedState = {
        ...state,
        ...state.smoothies,
        [name]: ingredients
      };
      window.localStorage.setItem("smoothies", JSON.stringify(updatedState));
      return updatedState;
    }

    default:
      return state;
  }
}
