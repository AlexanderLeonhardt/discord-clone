import User from "../user/User";
import styles from "./friends.module.css";
import { generateUsers } from "@/lib/exampleData";
import SearchFriend from "./searchFriend/SearchFriend";

const Friends = () => {
    const friends = generateUsers(50);
    return (
        <div className={styles.container}>
            <div className={styles.friendsHeader}>
                <SearchFriend />
                <div className={styles.friendCount}>
                    <p>All Friends - {friends.length}</p>
                </div>
            </div>
            <div className={styles.friendList}>
                {friends.map(user => {
                    return (
                        <div key={user.id} className={styles.row}>
                            <User user={user} />
                            <div className={styles.buttons}>
                                <div className={styles.button}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 21a9 9 0 1 0-7.605-4.185L3 21l4.185-1.395A8.958 8.958 0 0 0 12 21"></path></svg>
                                </div>
                                <div className={styles.button}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 5.92A.96.96 0 1 0 12 4a.96.96 0 0 0 0 1.92m0 7.04a.96.96 0 1 0 0-1.92a.96.96 0 0 0 0 1.92M12 20a.96.96 0 1 0 0-1.92a.96.96 0 0 0 0 1.92"></path></svg>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Friends;
