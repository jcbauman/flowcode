import {FlowPageTheme} from "../types/interfaces";

export const getBackgroundColor = (theme:FlowPageTheme) => {
        if(theme) {
            return {backgroundColor: theme.backgroundColor};
        }
        return;
    };

export const filterConfig : Array<{title:string,filterString:string}> = [{title:'All',filterString:''},{title:'Writers',filterString:'writer'},{title:'Athletes',filterString:'athlete'},{title:'Influencers',filterString:'influencer'}];