import styles from './Notification.module.scss';
import {IoNotificationsOutline} from "react-icons/io5";

const Notification = () => {

    return (
        <div className={styles['container']}>
            <IoNotificationsOutline className={styles['icon']}/>
        </div>
    );
};

export default Notification;
