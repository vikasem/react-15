import React from "react";
import classes from './Users.module.css';
import userPhoto from '../../assets/images/no_avatar.jpg'

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
                        <img className={classes.avatar} src={u.photos.small === null
                            ? userPhoto
                            : u.photos.small} />
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                            : <button onClick={() => { props.follow(u.id) }}>Follow</button>
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