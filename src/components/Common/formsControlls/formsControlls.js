import React from 'react';
import styles from './formsControlls.module.css';
import {Field} from "redux-form";
import {requiredField} from "../../../utils/Validators/validator";

const FormsControll = ({input, meta:{touched,error}, ...props}) => {
    const hasError = touched && error;
    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            <div>
                {props.children}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    );
}

export const TextArea = (props) => {
    const {input, meta, ...restProps} = props;
    return (
        <FormsControll {...props}><textarea {...input} {...restProps}/></FormsControll>
    );
}

export const Input = (props) => {
    const {input, meta, ...restProps} = props;
    return (
        <FormsControll {...props}><input {...input} {...restProps}/></FormsControll>
    );
}

export const createField = (placeholder, name, validators, component, props = {} ,text = "") =>
    <div>
        <Field name={name} placeholder={placeholder} component={component}
               validate={validators} {...props}/>{text}
    </div>

