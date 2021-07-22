import React, {CSSProperties} from 'react';
import {FlowPageTheme, Page} from "../types/interfaces";
import styles from '../css/flowPage.module.css';

interface FlowPageCardProps{
    page:Page;
}


export default function FlowPageCard(props:FlowPageCardProps){
    const {page} = props;
    const pageData = page.pages[0] || {};

    // @ts-ignore
    const getBackgroundColor = (theme:FlowPageTheme) => {
        return {backgroundColor: theme.backgroundColor};
    };

    return(
      <div className={styles.cardContainer} style={getBackgroundColor(pageData.theme)}>
          <h4>{pageData.displayName}</h4>
          <img className={`${styles.profileImage} ${pageData.theme.profileImageShapeType === 'circle' ? styles.profileImageCircle : ''}`} src={pageData.profileImage} alt={`${pageData.displayName}'s Profile`}/>
      </div>
    );

}