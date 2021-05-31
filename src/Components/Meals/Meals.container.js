import Meals from "./Meals.component";
import { newMeal, getMeals, updateMeal, deleteMeal } from "../../redux/actions";
import { connect } from 'react-redux'; 

const mapStateToProps = (state) => {
  const {
    MealReducer: { message, type, payload: meals },
  } = state;
  return {
    ...state,
    message,
    type,
    meals,
  };
};

const mapDispatchToProps = (dispatch) => ({
  createNewMeal: (mealDetails) => dispatch(newMeal(mealDetails)),
  getMeals: (queryParams) => dispatch(getMeals(queryParams)),
  updateMeal: (mealDetails) => dispatch(updateMeal(mealDetails)),
  deleteMeal: (payload) => dispatch(deleteMeal(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Meals);