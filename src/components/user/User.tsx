import styles from "./user.module.css";

const StatusIcon = ({status}: {status: string}) => {
    let inner = <></>;
    switch(status) {
        default: {
            inner = <div className={`${styles.inner} ${styles.offline}`}></div>;
            break;
        }
        case "online": {
            inner = <div className={`${styles.inner} ${styles.online}`}></div>;
            break;
        }
        case "idle": {
            inner = <div className={`${styles.inner} ${styles.idle}`}></div>;
            break;
        }
        case "dnd": {
            inner = <div className={`${styles.inner} ${styles.dnd}`}></div>;
            break;
        }
    }
    return (
        <div className={styles.statusIcon}>
            {inner}
        </div>
    );
}

const User = ({user}: { user: {id: number, username: string, status: string, activity?: string} }) => {

    let displayStatus = user.status;
    if (user.activity) displayStatus = user.activity;

    return (
        <div className={styles.container}>
            <div className={styles.profile}>
                <StatusIcon status={user.status}/>
            </div>
            <div>
                <div className={styles.username}>
                    {user.username}
                </div>
                {}
                <div className={styles.status}>
                    {displayStatus}
                </div>
            </div>
        </div>
    );
}

export default User;