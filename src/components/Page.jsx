import React from 'react';
import styles from './Page.module.css';

export const Page = ({title, children}) => {
    return(
        <div className={styles.page}>
            <h2>{title}</h2>
            {children}
        </div>
    )
}
