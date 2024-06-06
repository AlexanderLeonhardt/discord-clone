import { exampleusers } from "@/lib/exampleData";
import styles from "./activity.module.css";
import FriendActivity from "./friendActivity/FriendActivity";

const Activity = () => {
    const friends = exampleusers;
    const activeFriends = friends.filter(friend => friend.activity);

    return (
        <div className={styles.container}>
            <h3>Active Now</h3>
            {activeFriends.map(friend =>
                <FriendActivity key={friend.id} friend={friend} />
            )}
        </div>
    );
}

export default Activity;