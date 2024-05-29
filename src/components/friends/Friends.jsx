import Friend from "./friend/Friend";
import styles from "./friends.module.css";
import { generateUsers } from "@/lib/exampleData";

const Friends = () => {
    const users = generateUsers(50);
    return (
        <div className={styles.container}>
            {users.map(user => {
                return <Friend key={user.id} user={user} />
            })}
        </div>
    );
}

export default Friends;
