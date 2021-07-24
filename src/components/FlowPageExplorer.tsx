import React, {CSSProperties, useEffect, useState} from 'react';
import {Page} from "../types/interfaces";
import {FlowPageCard} from "./index";
import {filterConfig} from "../config/helperMethods";
import styles from '../css/flowPageExplorer.module.css';


export interface FlowPageExplorerProps{
    trendingPages:Array<Page>;
}


export default function FlowPageExplorer(props:FlowPageExplorerProps) {
    const {trendingPages} = props;
    const [filter,setFilter] = useState<string>('');

    //filter by selected category
    const filteredPages = (filterString: string) => {
        if(filterString === ''){
            return trendingPages;
        } else {
            return trendingPages.filter((page:Page) => page.category === filterString);
        }
   };

    return(
        <div className={styles.flowExplorer}>
        <div className={styles.filterContainer}>
            {filterConfig.map((filterSet:{title:string,
                filterString:string}) =>
                <p className={`${styles.filterButton} ${filter === filterSet.filterString ? styles.filterButtonSelected : ''}`} onClick={() => setFilter(filterSet.filterString)}>
                    {filterSet.title}
                </p>
            )}
        </div>
        <div className={styles.pageContainer}>
            {filteredPages(filter).map((page:Page) =>
                <FlowPageCard page={page}/>
            )}
        </div>
        </div>
    )
}