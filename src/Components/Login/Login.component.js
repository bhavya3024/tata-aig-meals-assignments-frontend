import React from "react";
import {
  Stack,
  StackItem,
  Label,
  TextField,
  PrimaryButton,
  Link,
} from "@fluentui/react";
import "./login.scss";
import { toast } from 'react-hot-toast';
import { LOGIN_ERROR, LOGIN_SUCCESS } from "../../redux/actions";
import jwt from 'jsonwebtoken';
import { useHistory } from 'react-router-dom';

export default function Login({ loginDispatch, token, type, message }) {
  const history = useHistory();
  const [state, setState] = React.useState({
    formIsValid: false,
  });
  const { useEffect } = React;
  useEffect(() => {
     if (type === LOGIN_ERROR) {
         toast.error(message);
     }
     if (type === LOGIN_SUCCESS) {
        history.push('/meals');
     }
  });
  const validateForm = (event) => {
    const {
      target: { value, id },
    } = event;
    switch (id) {
      case "login-username":
        document.getElementById("error-username").style.display = value
          ? "none"
          : "block";
        break;
      case "login-password":
        document.getElementById("error-password").style.display = value
          ? "none"
          : "block";
        break;
      default:
        // do-nothing
        break;
    }
    if (
      document.getElementById("login-username").value &&
      document.getElementById("login-password").value
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
  const formFieldsChanged = () => {
    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;
    if (!(username && password)) {
      setState({
        ...state,
        formIsValid: false,
      });
    } else {
      setState({
        ...state,
        formIsValid: true,
      });
    }
  };
  const onLogin = () => {
      const username = document.getElementById('login-username').value;
      const password = jwt.sign(document.getElementById('login-password').value, process.env.REACT_APP_PASSWORD_SECRET);
      loginDispatch({
         username,
         password,
      });
  };
  return (
    <Stack gap={10} padding={10} className="login-item">
      <StackItem>
        <Stack>
          <StackItem>
            <Label>Username:</Label>
          </StackItem>
          <StackItem>
            <TextField
              placeholder="Username"
              id="login-username"
              onBlur={(event) => {
                validateForm(event);
              }}
              onKeyUp={() => formFieldsChanged()}
            ></TextField>
          </StackItem>
          <StackItem id="error-username">
            <Label className="error-text">Username is required</Label>
          </StackItem>
        </Stack>
      </StackItem>
      <StackItem>
        <Stack>
          <StackItem>
            <Label>Password:</Label>
          </StackItem>
          <StackItem>
            <TextField
              placeholder="Password"
              type="password"
              id="login-password"
              onBlur={(event) => {
                validateForm(event);
              }}
              onKeyUp={() => formFieldsChanged()}
            ></TextField>
          </StackItem>
          <StackItem id="error-password">
            <Label className="error-text">Password is required</Label>
          </StackItem>
        </Stack>
      </StackItem>
      <StackItem>
        <PrimaryButton
          id="loginBtn"
          disabled={!state.formIsValid}
          onClick={() => onLogin()}
        >
          Login
        </PrimaryButton>
      </StackItem>
      <StackItem>
          <Link href="/sign-up"><PrimaryButton id='signUpBtn'>SignUp</PrimaryButton></Link>
      </StackItem>
    </Stack>
  );
}
