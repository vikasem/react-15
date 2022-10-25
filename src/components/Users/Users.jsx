import React from "react";
import classes from './Users.module.css';
import userPhoto from '../../assets/images/no_avatar.jpg'
import { NavLink } from "react-router-dom";
import { usersApi } from "../../api/api";
let Users = (props) => {
    let numberPages = Math.ceil(props.totalUsersCount / props.pageSize); 
    let pages = [];

    for (let i = 1; i <= numberPages; i++) {
        pages.push(i);
    } 

    return (<div>
        <div>
            {pages.map(p => <span className={props.currentPage == p && classes.selectedPage}
                onClick={() => { props.onPageChanged(p) }}>{p} </span>)}
        </div>
        {props.users.map(u =>
            <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                        <img className={classes.avatar} src={u.photos.small === null
                            ? userPhoto
                            : u.photos.small} />
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button disabled={props.followingInProgress.some(id=>id === u.id)} onClick={() => {
                                props.setIsFollowing(true, u.id)
                                usersApi.userDelete(u.id)
                                    .then(data => {
                                        if(data.resultCode === 0) {
                                            props.unfollow(u.id) 
                                        }
                                        props.setIsFollowing(false, u.id)
                                    })
                            }}>Unfollow</button>
                            : <button disabled={props.followingInProgress.some(id=>id === u.id)} onClick={() => { 
                                props.setIsFollowing(true, u.id)
                                usersApi.userPost(u.id)
                                    .then(data => {
                                        if(data.resultCode === 0) {
                                            props.follow(u.id)  
                                        }
                                        props.setIsFollowing(false, u.id)
                                    })
                            }}>Follow</button>
                        }
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
            </div>)}
    </div>
    );
}

export default Users 