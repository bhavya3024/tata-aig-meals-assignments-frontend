import React from "react";
import {
  Stack,
  TextField,
  Label,
  StackItem,
  DefaultButton,
  PrimaryButton,
} from "@fluentui/react";
import "./signup.scss";
import jwt from "jsonwebtoken";
import { SIGNUP_SUCCESS, SIGNUP_ERROR } from "../../redux/actions";
import toast from "react-hot-toast";

export default function SignUp({ signUp, type, message }) {
  const { useEffect } = React;
  useEffect(() => {
    if (type === SIGNUP_SUCCESS) {
      toast.success(message);
    }
    if (type === SIGNUP_ERROR) {
      toast.error(message);
    }
  });
  const [state, setState] = React.useState({
    formIsValid: false,
  });
  const resetButtonClicked = () => {
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    document.getElementById("confirmPassword").value = "";
  };
  const valiDateForm = (event) => {
    const { target: { value, id } = {} } = event;
    switch (id) {
      case "firstName":
        setState({
          ...state,
          formIsValid: false,
        });
        document.getElementById("error-display-none-first-name").style.display =
          value ? "none" : "block";
        break;
      case "lastName":
        document.getElementById("error-display-none-last-name").style.display =
          value ? "none" : "block";
        setState({
          ...state,
          formIsValid: false,
        });
        break;
      case "username":
        document.getElementById("error-display-none-username").style.display =
          value ? "none" : "block";
        setState({
          ...state,
          formIsValid: false,
        });
        break;
      case "password":
        document.getElementById("error-display-none-password").style.display =
          value ? "none" : "block";
        setState({
          ...state,
          formIsValid: false,
        });
        break;
      case "confirmPassword":
        const passwordValue = document.getElementById("password")?.value;
        if (passwordValue && value !== passwordValue) {
          document.getElementById(
            "error-display-none-password-confirm"
          ).style.display = "block";
          setState({
            ...state,
            formIsValid: false,
          });
        } else {
          document.getElementById(
            "error-display-none-password-confirm"
          ).style.display = "none";
        }
        break;
      default:
        //nothing
        break;
    }
  };
  const formFieldsChanged = () => {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const userName = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    if (
      firstName &&
      lastName &&
      userName &&
      password &&
      password === confirmPassword
    ) {
      setState({
        ...state,
        formIsValid: true,
      });
    } else {
      setState({
        ...state,
        formIsValid: false,
      });
    }
  };
  const onSubmit = () => {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const middleName = document.getElementById("middleName").value;
    const username = document.getElementById("username").value;
    const password = jwt.sign(document.getElementById("password").value, "p");
    signUp({ firstName, lastName, middleName, username, password });
  };
  return (
      <Stack gap={10} padding={10} className="sign-up-item">
        <Stack.Item>
          <Stack>
            <StackItem>
              <Label>First name: </Label>
            </StackItem>
            <StackItem>
              <TextField
                placeholder="First name"
                id="firstName"
                onBlur={(event) => {
                  valiDateForm(event);
                }}
                onKeyUp={() => formFieldsChanged()}
              ></TextField>
            </StackItem>
            <StackItem id="error-display-none-first-name">
              <Label className="error-text">First Name is required</Label>
            </StackItem>
          </Stack>
        </Stack.Item>
        <Stack.Item>
          <Stack>
            <StackItem>
              <Label>Middle name: </Label>
            </StackItem>
            <StackItem>
              <TextField
                placeholder="Middle name"
                id="middleName"
                onBlur={(event) => {
                  valiDateForm(event);
                }}
                onKeyUp={() => formFieldsChanged()}
              ></TextField>
            </StackItem>
          </Stack>
        </Stack.Item>
        <Stack.Item>
          <Stack>
            <StackItem>
              <Label>Last name: </Label>
            </StackItem>
            <StackItem>
              <TextField
                placeholder="Last name"
                id="lastName"
                onBlur={(event) => {
                  valiDateForm(event);
                }}
                onKeyUp={() => formFieldsChanged()}
              ></TextField>
            </StackItem>
            <StackItem id="error-display-none-last-name">
              <Label className="error-text">Last Name is required</Label>
            </StackItem>
          </Stack>
        </Stack.Item>
        <Stack.Item>
          <Stack>
            <StackItem>
              <Label>Username:</Label>
            </StackItem>
            <StackItem>
              <TextField
                placeholder="Username"
                id="username"
                onBlur={(event) => {
                  valiDateForm(event);
                }}
                onKeyUp={() => formFieldsChanged()}
              ></TextField>
            </StackItem>
            <StackItem id="error-display-none-username">
              <Label className="error-text">Username is required</Label>
            </StackItem>
          </Stack>
        </Stack.Item>
        <Stack.Item>
          <Stack>
            <StackItem>
              <Label>Password:</Label>
            </StackItem>
            <StackItem>
              <TextField
                placeholder="Password"
                type="password"
                id="password"
                onBlur={(event) => {
                  valiDateForm(event);
                }}
                onKeyUp={() => formFieldsChanged()}
              ></TextField>
            </StackItem>
            <StackItem id="error-display-none-password">
              <Label className="error-text">Password is required</Label>
            </StackItem>
          </Stack>
        </Stack.Item>
        <Stack.Item>
          <Stack>
            <StackItem>
              <Label>Confirm Password:</Label>
            </StackItem>
            <StackItem>
              <TextField
                id="confirmPassword"
                placeholder="Confirm password"
                type="password"
                onBlur={(event) => {
                  valiDateForm(event);
                }}
                onKeyUp={() => formFieldsChanged()}
              ></TextField>
            </StackItem>
            <StackItem id="error-display-none-password-confirm">
              <Label className="error-text">Passwords must match</Label>
            </StackItem>
          </Stack>
        </Stack.Item>
        <Stack.Item align="end">
          <Stack horizontal gap={10}>
            <StackItem>
              <DefaultButton onClick={() => resetButtonClicked()}>
                Reset Fields
              </DefaultButton>
            </StackItem>
            <StackItem>
              <PrimaryButton
                id="submitBtn"
                disabled={!state.formIsValid}
                onClick={() => onSubmit()}
              >
                Submit
              </PrimaryButton>
            </StackItem>
          </Stack>
        </Stack.Item>
      </Stack>
  );
}
