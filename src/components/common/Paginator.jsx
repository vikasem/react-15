import { useState } from 'react';
import style from './Paginator.module.css'

let Paginator = (props) => {
    let numberPages = Math.ceil(props.totalItemsCount / props.pageSize);
    let pages = [];
    let portionSize = 20;

    for (let i = 1; i <= numberPages; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(numberPages / portionSize);
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize;
    debugger;

    return (
        <div>
            { portionNumber > 1 &&
                <button onClick={() => { setPortionNumber(portionNumber - 1) }}>PREV</button> }
            { pages 
            .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map(p => <span className={props.currentPage == p && style.selectedPage} 
                onClick={() => { props.onPageChanged(p) }}>{p} </span>) }
            { portionCount > portionNumber && <button onClick={() => {setPortionNumber(portionNumber + 1)}}>NEXT</button>}

        </div>
    )
}

export default Paginator