import React from 'react';

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
       if(prevProps.status !== this.props.status){
           this.setState({
               status:this.props.status
           })
       }

    }


    activateEditMode = () => {
        this.setState({editMode: true});
    }

    deActivateEditMode = () => {
        this.props.updateStatus(this.state.status);
        this.setState({editMode: false});
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        });
    }


    render() {
        return (<>
            {!this.state.editMode &&
            <div>
                <span onDoubleClick={this.activateEditMode}>{this.state.status || 'no status'}</span>
            </div>
            }
            {this.state.editMode &&
            <div>
                <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deActivateEditMode}
                       value={this.state.status}/>
            </div>
            }
        </>);
    }
}

export default ProfileStatus;