"use client"
import styles from "./friends.module.css";
import { useState } from "react";
import { exampleusers } from "@/lib/exampleData";
import User from "../user/User";

const Friends = () => {
    const friends = exampleusers;

    const [filter, setFilter] = useState('');
    const filteredFriends = friends.filter(user => user.username.toLowerCase().includes(filter.toLowerCase()) || filter === '').sort((a, b) => {
        if (a.username < b.username) return -1;
        if (a.name > b.name) return 1;
        return 0;
    });

    return (
        <div className={styles.container}>
            <div className={styles.friendsHeader}>
                <div className={styles.searchcontainer}>
                    <input className={styles.searchbar} id="filter" name="filter" type="text" value={filter} placeholder="Search" onChange={event => setFilter(event.target.value)}/>
                    <div className={styles.searchIcon}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396l1.414-1.414l-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8s3.589 8 8 8m0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6s-6-2.691-6-6s2.691-6 6-6"></path></svg>
                    </div>
                </div>
                <div className={styles.friendCount}>
                    <p>All Friends - {filteredFriends.length}</p>
                </div>
            </div>
            <div className={styles.friendList}>
                {filteredFriends.map(user => {
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
