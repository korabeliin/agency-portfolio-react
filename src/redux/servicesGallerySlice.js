import { createSlice } from '@reduxjs/toolkit'
import SOFA from "../images/SOFA.png";
import KeyBoard from "../images/KeyBoard.png";
import Work_Media from "../images/Work_Media.png";
import DDDone from "../images/DDDone.png";
import Abstract from "../images/Abstract.png";
import HandP from "../images/HandP.png";
import Architect from "../images/Architect.png";
import CalC from "../images/CalC.png";
import Sport from "../images/Sport.png";

const initialState = [
        {imgSrc: SOFA, name: 'SOFA', category: 'Design', id: 1, chosen: false},
        {imgSrc: KeyBoard, name: 'KeyBoard', category: 'Branding', id: 2, chosen: false},
        {imgSrc: Work_Media, name: 'Work Media', category: 'Illustration', id: 3, chosen: false},
        {imgSrc: DDDone, name: 'DDDone', category: 'Motion', id: 4, chosen: false},
        {imgSrc: Abstract, name: 'Abstract', category: 'Design', id: 5, chosen: false},
        {imgSrc: HandP, name: 'HandP', category: 'Branding', id: 6, chosen: false},
        {imgSrc: Architect, name: 'Architect', category: 'Motion', id: 7, chosen: false},
        {imgSrc: CalC, name: 'CalC', category: 'Design', id: 8, chosen: false},
        {imgSrc: Sport, name: 'Sport', category: 'Branding', id: 9, chosen: false}
    ];

export const servicesGallerySlice = createSlice({
    name: 'services',
    initialState,
    reducers: {
        ITEM_CHOOSE: (state, action) => {
            return state.map(img => img.id === action.payload ? {...img, chosen: !img.chosen} : {...img})
        },
        ITEM_DELETE: (state, action) => {
            return state.filter(img => !img.chosen)
        },
        LOAD_MORE: (state, action) => {
            return [...state, ...action.payload]
        }
    }
});

export const { ITEM_CHOOSE, ITEM_DELETE, LOAD_MORE } = servicesGallerySlice.actions;

export default servicesGallerySlice.reducer;