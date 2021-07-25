import React, {useState, useEffect} from 'react';
import {FlowPage, FlowPageLink, Page} from "../types/interfaces";
import {getBackgroundColor, getColorHSL} from '../config/helperMethods';
import styles from '../css/flowPageExpanded.module.css';

interface FlowPageExpandedProps{
    slug:string;
    trendingPages:Array<Page>;
}

export default function FlowPageExpanded(props:FlowPageExpandedProps){
    const {slug,trendingPages} = props;

    //for storing sharable link copying state
    const [justCopied,setJustCopied] = useState(false);

    // filter page based on pathname slug
    let filteredPages = trendingPages.filter((page:Page) => {
        return process.env.PUBLIC_URL + '/'+ page.pages[0].slugName === slug});

    const pageData:FlowPage | undefined = filteredPages[0] ? filteredPages[0].pages[0] : undefined;

    //copy sharing link onClick
    const copySharingLink = () => {
        var aux = document.createElement("input");
        aux.setAttribute("value", (pageData || {shortUrl:''}).shortUrl);
        document.body.appendChild(aux);
        aux.select();
        document.execCommand("copy");
        document.body.removeChild(aux);
        setJustCopied(true);
    };

    //adjust sharable link copying UI after ~1 second
    useEffect(() => {
        if(justCopied) {
            setTimeout(function () {
                setJustCopied(false);
            }, 1200);
        }
    },[justCopied])

    if(pageData) {
        return (
            <div className={styles.expandedPage}
                 style={getBackgroundColor(pageData.theme)}>
                <h2 className={getColorHSL(pageData.theme).lightness > 0.6 ? styles.textDark: styles.textLight}>
                    {pageData.displayName}
                </h2>
                <img
                    className={`${styles.profileImage} ${pageData.theme.profileImageShapeType === 'circle' ? styles.profileImageCircle : styles.profileImageSquare}`}
                    src={pageData.profileImage} alt={`${pageData.displayName}'s Profile`}/>
                <h5 className={getColorHSL(pageData.theme).lightness > 0.6 ? styles.textDark: styles.textLight}>
                    {pageData.caption || ''}
                </h5>
                {pageData.share ?
                    <div className={!justCopied ? styles.shareButton : styles.shareButtonCopied} onClick={() => copySharingLink()}>
                        <p className={styles.shareButtonText}>{!justCopied ? 'Share' : 'Copied!'}</p>

                    </div>: ''}
                {pageData.links.map((linkData: FlowPageLink) => (
                        <div className={`${styles.linkItem} ${getColorHSL(pageData.theme).lightness > 0.6 ? styles.linkItemDark: styles.linkItemLight}`}
                             onClick={() => window.open(linkData.actionData.link, '_blank')}
                             key={`${linkData.title}-button`}>
                            {linkData.thumbNailImgUrl ? <img className={styles.linkIconImage} src={linkData.thumbNailImgUrl} alt={''}/> : ''}
                            <h5 className={styles.linkText}>{linkData.title}</h5>
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