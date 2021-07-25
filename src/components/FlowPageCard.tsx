import React from 'react';
import {Page} from "../types/interfaces";
import {Link} from 'react-router-dom';
import {getBackgroundColor, getColorHSL} from '../config/helperMethods';
import styles from '../css/flowPage.module.css';

interface FlowPageCardProps{
    page:Page;
}

export default function FlowPageCard(props:FlowPageCardProps){
    const {page} = props;
    const pageData = (page || {pages:[]}).pages[0] || {};
    return (
        <Link to={`${process.env.PUBLIC_URL}/${pageData.slugName}`} className={styles.cardContainer}
              style={getBackgroundColor(pageData.theme)}>
            <h4 className={getColorHSL(pageData.theme).lightness > 0.6 ? styles.textDark: styles.textLight}>{pageData.displayName}</h4>
            <img
                className={`${styles.profileImage} ${pageData.theme.profileImageShapeType === 'circle' ? styles.profileImageCircle : styles.profileImageSquare}`}
                src={pageData.profileImage} alt={`${pageData.displayName}'s Profile`}/>
        </Link>
    );

}