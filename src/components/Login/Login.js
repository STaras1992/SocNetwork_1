import React from 'react';
import {Field, reduxForm} from "redux-form";
import {createField, Input} from "../Common/formsControlls/formsControlls";
import {maxLengthCreator, requiredField} from "../../utils/Validators/validator";
import {connect} from "react-redux";
import {login} from "../../redux/AuthReducer";
import {Redirect} from "react-router-dom";
import styles from "../Common/formsControlls/formsControlls.module.css";

const maxlength = maxLengthCreator(30);

const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField('Login', 'login', [requiredField, maxlength], Input, {})}
            {createField('Password', 'password', [requiredField, maxlength], Input, {type: 'password'})}
            {createField(null, 'rememberMe', [], 'input', {type: 'checkbox'},'remember me')}
            {error && <div className={styles.formSubmitError}>{error}</div>}
            <div>
                <button name={'loginButton'}>Login</button>
            </div>
        </form>
    );
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

const Login = (props) => {
    debugger;
    const onSubmit = (formData) => {
        props.login(formData.login, formData.password, formData.rememberMe);
    }

    if (props.isAuth) {
        return <Redirect to='/profile'/>
    } else {
        return (
            <div>
                <h1>Login</h1>
                <LoginReduxForm onSubmit={onSubmit}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {login})(Login);