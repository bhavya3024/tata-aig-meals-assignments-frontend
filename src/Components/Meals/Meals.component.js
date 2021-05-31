import React, { useEffect } from "react";
import {
  Stack,
  StackItem,
  DetailsList,
  MarqueeSelection,
  DetailsListLayoutMode,
  PrimaryButton,
  Modal,
  Label,
  TextField,
} from "@fluentui/react";
import { useBoolean } from "@fluentui/react-hooks";
import {
  NEW_MEAL_SUCCESS,
  NEW_MEAL_ERROR,
  UPDATE_MEAL_SUCCESS,
  UPDATE_MEAL_ERROR,
  DELETE_MEAL_SUCCESS,
} from "../../redux/actions";
import { toast } from "react-hot-toast";
import { useHistory } from "react-router-dom";
import "./meals.scss";
import moment from "moment";

const tokens = {
  childrenGap: 5,
  padding: 10,
};

export default function Meals({
  meals = [],
  createNewMeal,
  type,
  message,
  getMeals,
  updateMeal,
  deleteMeal,
}) {
  const [isModalOpen, { setTrue: showModal, setFalse: hideModal }] =
    useBoolean(false);
  const [isAddMealFormValid, { setTrue: validMeal, setFalse: invalidMeal }] =
    useBoolean(false);
  const [state, setState] = React.useState({
    date: moment(new Date()).format("YYYY-MM-DD"),
    currentItem: {},
  });
  const history = useHistory();

  const modifiedMeals = meals.map((meal) => {
    return {
      ...meal,
      schedule_time: moment(meal.schedule_time).format("YYYY-MM-DD HH:mm:ss"),
    };
  });
  const columns = [
    {
      key: "id",
      name: "Id",
      fieldName: "id",
      maxWidth: 200,
      minWidth: 100,
      isResizable: true,
    },
    {
      key: "name",
      name: "Name",
      fieldName: "name",
      minWidth: 100,
      maxWidth: 200,
      isResizable: true,
    },
    {
      key: "calories",
      name: "Calories",
      fieldName: "calories",
      minWidth: 100,
      maxWidth: 200,
      isResizable: true,
    },
    {
      key: "schedule_time",
      name: "Date",
      fieldName: "schedule_time",
      minWidth: 100,
      maxWidth: 200,
      isResizable: true,
    },
  ];
  useEffect(() => {
    getMeals({
      date: state.date,
    });
  }, []);
  if (
    [NEW_MEAL_SUCCESS, UPDATE_MEAL_SUCCESS, DELETE_MEAL_SUCCESS].includes(type)
  ) {
    toast.dismiss();
    toast.success(message);
    getMeals({
      date: state.date,
    });
  } else if (
    [NEW_MEAL_ERROR, UPDATE_MEAL_ERROR, UPDATE_MEAL_SUCCESS].includes(type)
  ) {
    toast.error(message);
  }

  const previous = () => {
    const date = moment(state.date).subtract(1, "days").format("YYYY-MM-DD");
    getMeals({
      date,
    });
    setState({ ...state, date });
  };

  const next = () => {
    const date = moment(state.date).add(1, "days").format("YYYY-MM-DD");
    getMeals({
      date,
    });
    setState({ ...state, date });
  };

  const validateAddMealForm = (event) => {
    const {
      target: { id, value },
    } = event;
    switch (id) {
      case "mealName":
        document.getElementById("error-meal-name").style.display = value
          ? "none"
          : "block";
        invalidMeal();
        break;
      case "calories":
        document.getElementById("error-meal-calories").style.display = value
          ? "none"
          : "block";
        invalidMeal();
        break;
      default:
        // do nothing
        break;
    }
    if (
      document.getElementById("mealName").value &&
      document.getElementById("calories").value
    ) {
      validMeal();
    }
  };

  const onMealFormChanged = () => {
    if (
      document.getElementById("mealName").value &&
      document.getElementById("calories").value
    ) {
      validMeal();
    } else {
      invalidMeal();
    }
  };

  const mealSubmitted = () => {
    const name = document.getElementById("mealName").value;
    const calories = document.getElementById("calories").value;
    const date = document.getElementById("date").value;
    console.log('DATE', date);
    createNewMeal({
      name,
      calories,
      date,
    });
  };

  const modifyMealItem = () => {
    const id = state.currentItem.id;
    const name = document.getElementById("mealName").value;
    const calories = document.getElementById("calories").value;
    const date = document.getElementById("date").value;
    updateMeal({
      id,
      name,
      calories,
      date,
    });
  };

  const deleteMealItem = () => {
    deleteMeal({
      id: state.currentItem.id,
    });
  };

  const onMealItemInvoked = (item) => {
    const currentItem = item;
    setState({
      ...state,
      currentItem,
    });
    showModal();
  };

  const logOut = () => {
    localStorage.removeItem("token");
    window.location.pathname = '/login';
  };

  return (
    <Stack className="meals" tokens={tokens}>
      <StackItem className="meals-heading">
        <h2>Manage your Meals: {state.date}</h2>
        <PrimaryButton
          onClick={() => {
            logOut();
          }}
        >
          LogOut
        </PrimaryButton>
      </StackItem>
      <StackItem className="meals-body">
        <MarqueeSelection>
          <DetailsList
            items={modifiedMeals}
            columns={columns}
            setKey={"set"}
            layoutMode={DetailsListLayoutMode.justified}
            onItemInvoked={(item) => onMealItemInvoked(item)}
          />
        </MarqueeSelection>
      </StackItem>
      <StackItem className="meals-footer">
        <Stack horizontal tokens={tokens} className="meals-options">
          <StackItem>
            <PrimaryButton
              onClick={() => {
                previous();
              }}
            >
              Previous
            </PrimaryButton>
          </StackItem>
          <StackItem>
            <PrimaryButton
              onClick={() => {
                setState({ ...state, currentItem: {} });
                showModal();
              }}
            >
              Create Meal
            </PrimaryButton>
          </StackItem>
          <StackItem>
            <PrimaryButton
              onClick={() => {
                next();
              }}
            >
              Next
            </PrimaryButton>
          </StackItem>
        </Stack>
      </StackItem>
      <Modal isOpen={isModalOpen} onDismiss={hideModal} isBlocking={false}>
        <Stack tokens={tokens}>
          <StackItem>
            <h2>Add New Meal</h2>
          </StackItem>
          <StackItem>
            <Label>Meal Name</Label>
            <TextField
              id="mealName"
              placeholder="Enter Meal Name"
              onBlur={(event) => validateAddMealForm(event)}
              onKeyUp={() => onMealFormChanged()}
              defaultValue={state.currentItem.name ?? ""}
            ></TextField>
          </StackItem>
          <StackItem id="error-meal-name">
            <Label className="error-text">Meal Name is required</Label>
          </StackItem>
          <StackItem>
            <Label>Calories</Label>
            <TextField
              id="calories"
              type="number"
              placeholder="Calories"
              onBlur={(event) => validateAddMealForm(event)}
              onKeyUp={() => onMealFormChanged()}
              defaultValue={state.currentItem.calories ?? ""}
            ></TextField>
          </StackItem>
          <StackItem id="error-meal-calories">
            <Label className="error-text">Meal Calories are required</Label>
          </StackItem>
          <StackItem>
            <Label>Date</Label>
            <TextField
              type="date"
              id="date"
              placeholder="Enter Meal Date"
              defaultValue={
                state.currentItem.schedule_time
                  ? moment(state.currentItem.schedule_time).format("YYYY-MM-DD")
                  : ""
              }
            ></TextField>
          </StackItem>
          <Stack horizontal className="meal-options" tokens={tokens}>
            <StackItem
              style={{ display: state.currentItem.id ? "none" : "block" }}
            >
              <PrimaryButton
                id="newMealButton"
                disabled={!isAddMealFormValid}
                onClick={() => {
                  mealSubmitted();
                  hideModal();
                }}
              >
                Add New Meal
              </PrimaryButton>
            </StackItem>
            <StackItem
              style={{ display: state.currentItem.id ? "block" : "none" }}
            >
              <PrimaryButton
                id="updateMealButton"
                disabled={!isAddMealFormValid}
                onClick={() => {
                  modifyMealItem();
                  hideModal();
                }}
              >
                Update Meal
              </PrimaryButton>
            </StackItem>
            <StackItem
              style={{ display: state.currentItem.id ? "block" : "none" }}
            >
              <PrimaryButton
                id="deleteMealButton"
                onClick={() => {
                  deleteMealItem();
                  hideModal();
                }}
              >
                Delete Meal
              </PrimaryButton>
            </StackItem>
          </Stack>
        </Stack>
      </Modal>
    </Stack>
  );
}
