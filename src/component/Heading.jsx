import styles from './Heading.module.css'
export function Heading(props){
    console.log(props)
    return(
        <h2 className={styles.Heading}>{props.children}</h2>
    )
}