import Login from './Login.component';
import { login } from "../../redux/actions";
import { connect } from 'react-redux';
import { withRouter } from 'react-router'; 

const mapStateToProps = (state) => {
  const { UserReducer: {  type, message } } = state;
  return {
     ...state,
     type,
     message,
  }
};


const mapDispatchToProps = (dispatch) => ({
   loginDispatch: (userCreds) => dispatch(login(userCreds))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));