import Activity from "@/components/activity/Activity";
import styles from "./page.module.css";
import Friends from "@/components/friends/Friends";
import Header from "@/components/header/Header";

const FriendsPage = () => {
    return (
        <div className={styles.wrapper}>
            <Header />
            <div className={styles.main}>
                <Friends />
                <Activity />
            </div>
        </div>
    );
}

export default FriendsPage;