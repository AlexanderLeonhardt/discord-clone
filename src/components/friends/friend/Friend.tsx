import styles from "./friend.module.css"

const Status = ({status}: any) => {
    switch(status) {
        case "idle": {
            return <div className={styles.idle}></div>;
        }
        case "dnd": {
            return <div className={styles.dnd}></div>;
        }
        case "offline": {
            return <div className={styles.offline}></div>;
        }
        default: {
            return <div className={styles.online}></div>;
        }
    }
}

const Friend = (param: {user:{id:number, status:string}}) => {
    const user = param.user;
    return (
        <div className={styles.container}>
            <div className={styles.avatar}>
                <div className={styles.status}>
                    <Status status={user.status} />
                </div>
            </div>
            <div>
                <p className={styles.name}>{user.id}</p>
                <p className={styles.statusText}>{user.status}</p>
            </div>
        </div>
    );
}

export default Friend;