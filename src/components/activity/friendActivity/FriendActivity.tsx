import User from "@/components/user/User";
import styles from "./friendActivity.module.css"

const FriendActivity = ({friend}: {friend: {id: number, username: string, status: string, activity?: string}}) => {
    return (
        <div className={styles.container}>
            <User user={friend} />
        </div>
    );
}

export default FriendActivity;