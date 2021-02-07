import { Platform } from "react-native";
import { PixelRatio } from "react-native";
import { Dimensions } from "react-native";

const WINDOW_WIDTH = Dimensions.get('window').width;


// Width do modelo do figma
const guidelineBaseWidth = 414;


export const scaleSize = (size: number) => (WINDOW_WIDTH / guidelineBaseWidth) * size;

/*
export const scaleFont = (size: number) => {
    console.log('Pixel Ratio', PixelRatio.getFontScale());
    return size;
};
*/

const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
} = Dimensions.get('window');


const scale = SCREEN_WIDTH / guidelineBaseWidth;

export function scaleFont(size: number) {
    const newSize = size * scale;

    if (Platform.OS === 'ios') {
        return Math.round(PixelRatio.roundToNearestPixel(newSize));
    } else {

        return Math.round(PixelRatio.roundToNearestPixel(newSize));
    }
}