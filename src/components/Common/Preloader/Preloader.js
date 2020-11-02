import preloader from "../../../assets/loading.gif";
import React from "react";


let Preloader = (props) => {
    return <div>
        {props.isFetching ? <img src={preloader}/> : null}
    </div>
}

export default Preloader;