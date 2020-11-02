import React from 'react';
import Dialogs from "./Dialogs";
import {addNewMessageCreator} from "../../redux/DialogsReducer";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../Hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return{
        dialogsPage: state.dialogsPage,
        newMessageText: state.dialogsPage.newMessageText,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addNewMessage: (message) => {dispatch(addNewMessageCreator(message))}
    }
}

export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    withAuthRedirect
)(Dialogs);

// let AuthRedirectComponent = withAuthRedirect(Dialogs);
//
// const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(AuthRedirectComponent);
//
// export default DialogsContainer;