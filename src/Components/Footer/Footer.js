import React, {Component}   from 'react';
import styles               from './Footer.module.css';
import {appInfo}            from '../../GlobalConfig'

export default class Footer extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.footerSection}>
                <div className={styles.footerRow}>
                    <div className={styles.leftSection}>
                        <span className={styles.applicationName}>{appInfo.applicationName}</span>
                    </div>
                    <div className={styles.rightSection}>
                        <span className={styles.otherInfo}>Version - {appInfo.version}</span>
                    </div>
                </div>
                <div className={styles.divider}></div>
                <div className={styles.footerRow}>
                    <div className={styles.leftSection}>
                        <span className={styles.otherInfo}>
                            &copy; {new Date().getFullYear()} Aditya.
                        </span>
                    </div>
                    <div className={styles.rightSection}>
                        <span className={styles.otherInfo}>
                            <a className="whiteAnchor" rel="noopener noreferrer" href="test" target="_blank">Privacy Statement </a>
                            &nbsp;|&nbsp;
                            <a className="whiteAnchor" rel="noopener noreferrer" href="test" target="_blank">Terms of Use and Linking Policy </a>
                            &nbsp;|&nbsp; 
                            <a className="whiteAnchor" rel="noopener noreferrer" href="test" target="_blank">Cookie Policy </a>
                            &nbsp;|&nbsp; 
                            <a className="whiteAnchor" rel="noopener noreferrer" href="test" target="_blank">Legal Statements </a>
                        </span>
                    </div>
                </div>
            </div>
        )
    }

}