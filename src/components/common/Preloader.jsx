import React from "react";
import loading from '../../assets/loading/loading.svg'

let Preloader = (props) => {
    return (
        <div>
            <img src = {loading} />
        </div>
    )
}

export default Preloader