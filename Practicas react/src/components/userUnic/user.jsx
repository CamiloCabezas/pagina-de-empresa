import styles from "./userUnic.module.css"

const UserShow = ({id, name, lastName, iN}) => {
    return(
        <div className={styles.card}>
            {/* <p>{id}</p> */}
            <p className={styles.partes}>{name}</p>
            <p className={styles.partes}>{lastName}</p>
            <p className={styles.partes}>{iN}</p>
        </div>
    )
}

export default UserShow