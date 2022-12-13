import React from "react";
import { useEffect, useState } from "react"

let ProfileStatus = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status)


    useEffect(() => {
        setStatus(props.status);
    }, [props.status])

    
    let activateEditMode = () => {
        setEditMode(true)
    }

    let deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    let onChangeStatus = (e) => {
        setStatus(e.currentTarget.value)
    }


    return (
        <div>
                {!editMode &&
                    <div>
                        <span onDoubleClick={activateEditMode}>{status || "No status"}</span>
                    </div>
                }
                {editMode &&
                    <div>
                        <input onChange={onChangeStatus} onBlur={deactivateEditMode} value={status} autoFocus />
                    </div>
                }

            </div>
    )
}

export default ProfileStatus