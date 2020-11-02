import React, {useState,useEffect} from 'react';
import {updateStatus} from "../../../redux/ProfileReducer";

const ProfileStatusWithHooks = (props) => {
    // let state = useState(false);
    // let editMode = state[0];
    // let setEditMode = state[1];

    let [editMode,setEditMode] = useState(false);
    let [status,setStatus] = useState(props.status);

    useEffect(()=>{
        setStatus(props.status);
    },[props.status]);

    const activateMode = () => {
        setEditMode(true);
    }

    const deactivateMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (<div>
        {!editMode &&
        <div>
            <span onDoubleClick={activateMode}>{props.status || 'no status'}</span>
        </div>
        }
        {editMode &&
        <div>
            <input value={status} onChange={onStatusChange} onBlur={deactivateMode} autoFocus={true}/>
        </div>
        }
    </div>);

}

export default ProfileStatusWithHooks;