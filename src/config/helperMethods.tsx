import {FlowPageTheme} from "../types/interfaces";

export const getBackgroundColor = (theme:FlowPageTheme) => {
        if(theme) {
            return {backgroundColor: theme.backgroundColor};
        }
        return;
    };