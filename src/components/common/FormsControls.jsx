import styles from "./FormsControls.module.css"
export let Textarea = ({input, meta, ...props}) => {
    let hasError = meta.touched && meta.error
    return(
        <div className={styles.formControl + " " + (hasError ? styles.error : "") }>
            <div>
            <textarea  {...input} {...props}/>
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export let Input = ({input, meta, ...props}) => {
    let hasError = meta.touched && meta.error
    return(
        <div className={styles.formControl + " " + (hasError ? styles.error : "") }>
            <div>
            <input  {...input} {...props}/>
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}