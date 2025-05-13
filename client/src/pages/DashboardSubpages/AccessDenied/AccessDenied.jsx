import React from 'react';
import styles from './AccessDenied.module.scss';

const AccessDenied = () => {
    return (
        <div className={styles["access-denied"]}>
            <div className={styles["content"]}>
                <p className={styles["error-code"]}>404</p>
                <h1 className={styles["title"]}>Page not found</h1>
                <p className={styles["message"]}>
                    You don't have permission to view this page.
                </p>
                <div className={styles["actions"]}>
                    <a href="/" className={styles["home-button"]}>
                        Go back home
                    </a>
                    <a href="/" className={styles["support-link"]}>
                        Contact support <span aria-hidden="true">&rarr;</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default AccessDenied;
