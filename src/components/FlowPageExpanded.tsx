import React, {CSSProperties} from 'react';
import {FlowPage, FlowPageLink, FlowPageTheme, Page} from "../types/interfaces";
import {getBackgroundColor} from '../config/helperMethods';
import styles from '../css/flowPageExpanded.module.css';

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

    const pageData:FlowPage | undefined = filteredPages[0] ? filteredPages[0].pages[0] : undefined;

    if(pageData) {
        return (
            <div className={styles.expandedPage}
                style={getBackgroundColor(pageData.theme)}>
                <h4>{pageData.displayName}</h4>
                <img
                    className={`${styles.profileImage} ${pageData.theme.profileImageShapeType === 'circle' ? styles.profileImageCircle : styles.profileImageSquare}`}
                    src={pageData.profileImage} alt={`${pageData.displayName}'s Profile`}/>
                <h5>{pageData.caption || ''}</h5>
                {pageData.links.map((linkData: FlowPageLink) => (
                        <div className={styles.linkItem} onClick={() => window.open(linkData.actionData.link, '_blank')}>
                            <h5>{linkData.title}</h5>
                            <img className={styles.iconImage} src={linkData.thumbNailImgUrl} alt={''}/>
                        </div>
                    )
                )}
            </div>
        );
    } else {
        return (
            <div className={styles.expandedPage}>
                <h3>Loading...</h3>
            </div>
        );
    }

}