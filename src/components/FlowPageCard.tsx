import React, {CSSProperties} from 'react';
import {FlowPageTheme, Page} from "../types/interfaces";
import {Link} from 'react-router-dom';
import {getBackgroundColor} from '../config/helperMethods';
import styles from '../css/flowPage.module.css';

interface FlowPageCardProps{
    page:Page;
}

export default function FlowPageCard(props:FlowPageCardProps){
    const {page} = props;
    const pageData = (page || {pages:[]}).pages[0] || {};

    return (
        <Link to={`/${pageData.slugName}`} className={styles.cardContainer}
              style={getBackgroundColor(pageData.theme)}>
            <h4>{pageData.displayName}</h4>
            <img
                className={`${styles.profileImage} ${pageData.theme.profileImageShapeType === 'circle' ? styles.profileImageCircle : styles.profileImageSquare}`}
                src={pageData.profileImage} alt={`${pageData.displayName}'s Profile`}/>
        </Link>
    );

}