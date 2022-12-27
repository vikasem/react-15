import React from "react";
import classes from './Users.module.css';
import userPhoto from '../../assets/images/no_avatar.jpg'
import { NavLink } from "react-router-dom";
let User = (props) => {
    return (
            <div>
                <span>
                    <div>
                        <NavLink to={'/profile/' + props.user.id}>
                        <img className={classes.avatar} src={props.user.photos.small === null
                            ? userPhoto
                            : props.user.photos.small} />
                        </NavLink>
                    </div>
                    <div>
                        {props.user.followed
                            ? <button disabled={props.followingInProgress.some(id=>id === props.user.id)} onClick={() => {
                                props.unfollow(props.user.id) }}>Unfollow</button>
                            : <button disabled={props.followingInProgress.some(id=>id === props.user.id)} onClick={() => { 
                                props.follow(props.user.id) }}>Follow</button>
                        }
                    </div>
                </span>
                <span>
                    <span>
                        <div>{props.user.name}</div>
                        <div>{props.user.status}</div>
                    </span>
                </span>
            </div>
    );
}

export default User