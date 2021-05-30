import { connect } from "react-redux";
import { signUp } from "../../redux/actions";
import SignUp from "./Signup.component";
import { withRouter } from 'react-router'; 

const mapStateToProps = (state) => {
    const { UserReducer: { type, message  } } = state;
    return  {
      ...state,
      type,
      message,
    }
}

const mapDispatchToProps = (dispatch) => ({
  signUp: (userDetails) => {  dispatch(signUp(userDetails)) },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignUp));
