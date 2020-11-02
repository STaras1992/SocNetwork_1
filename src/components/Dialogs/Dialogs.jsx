import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {Field, reduxForm} from "redux-form";
import {TextArea} from "../Common/formsControlls/formsControlls";
import {maxLengthCreator, requiredField} from "../../utils/Validators/validator";

const maxLength10 = maxLengthCreator(10);

const NewMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'enter message'} name={'newMessageBody'} component={TextArea} validate={[requiredField,maxLength10]}/>
            </div>
            <div>
                <button >Add message</button>
            </div>
        </form>
    );
}

const MessageReduxForm = reduxForm({form:'newMessage'})(NewMessageForm);

const Dialogs = (props) => {
    let dialogsElements = props.dialogsPage.dialogs.map(data => <DialogItem id={data.id} key={data.id}
                                                                            name={data.name}/>);
    let messegesElements = props.dialogsPage.messages.map(data => <Message message={data.message} key={data.id}/>);

    let addNewMessage= (values) => {
        props.addNewMessage(values.newMessageBody)
    }

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>
                {messegesElements}
            </div>
            <MessageReduxForm onSubmit={addNewMessage} />
        </div>
    );
}

export default Dialogs;