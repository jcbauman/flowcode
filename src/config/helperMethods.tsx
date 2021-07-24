import {FlowPageTheme} from "../types/interfaces";

//modifier for style based on theme
export const getBackgroundColor = (theme:FlowPageTheme) => {
        if(theme) {
            return {backgroundColor: theme.backgroundColor};
        }
        return;
    };

//constant for filter list
export const filterConfig : Array<{title:string,filterString:string}> = [{title:'All',filterString:''},{title:'Writers',filterString:'writer'},{title:'Athletes',filterString:'athlete'},{title:'Influencers',filterString:'influencer'}];

//returns hsl theme for rbg color item
//use for determining text color
export const getColorHSL = (theme:FlowPageTheme) => {
  let color = theme.backgroundColor;

  let rgb = color.substring(4, color.length-1)
         .replace(/ /g, '')
         .split(',');


  let r = parseFloat(rgb[0]) / 255;
  let g = parseFloat(rgb[1]) / 255;
  let b = parseFloat(rgb[2]) / 255;

  var max = Math.max(r, g, b), min = Math.min(r, g, b);
  var h, s, l = (max + min) / 2;

  if (max === min) {
    h = s = 0; // achromatic
  } else {
    var d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }

      if(h) h /= 6;
  }

  return { hue:h, saturation:s, lightness:l };

}