import React, {CSSProperties} from 'react';
import {FlowPageTheme, Page} from "../types/interfaces";
import {getBackgroundColor} from '../config/helperMethods';
import {Link} from 'react-router-dom';
import styles from '../css/flowPage.module.css';

interface FlowPageExpandedProps{
    slug:string;
    trendingPages:Array<Page>;
}

export default function FlowPageExpanded(props:FlowPageExpandedProps){
    const {slug,trendingPages} = props;

    // filter page based on pathname slug
    // NOTE: naturally, a more specific api to get a single page would be much less error prone here
    let filteredPages = trendingPages.filter((page:Page) => {
        return '/'+ page.pages[0].slugName === slug});

    const pageData = (filteredPages || {pages:[]})[0].pages[0] || {};

    return (
        <div className={styles.cardContainer}
              style={getBackgroundColor(pageData.theme)}>
            <h4>{pageData.displayName}</h4>
            <img
                className={`${styles.profileImage} ${pageData.theme.profileImageShapeType === 'circle' ? styles.profileImageCircle : ''}`}
                src={pageData.profileImage} alt={`${pageData.displayName}'s Profile`}/>
        </div>
    );

}