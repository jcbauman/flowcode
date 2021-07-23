import React, {CSSProperties} from 'react';
import {Page} from "../types/interfaces";
import {FlowPageCard} from "./index";



export interface FlowPageExplorerProps{
    trendingPages:Array<Page>;
}


export default function FlowPageExplorer(props:FlowPageExplorerProps) {
    const {trendingPages} = props;
    return(
        <div>
            {(trendingPages || []).map((page:Page) =>
                <FlowPageCard page={page}/>
            )}
        </div>
    )
}