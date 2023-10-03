import {colorsLan, colorsOtherHouses, colorsPsychology} from "../../data/colors"
import translations from "../../data/translations"

export const load = (()=>{
    return {
        colors: {colorsPsychology, colorsOtherHouses, colorsLan},
        translations
    }
})

