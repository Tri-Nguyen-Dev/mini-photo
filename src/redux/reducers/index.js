import { combineReducers } from "redux";
import PhotoRuducer from '../slices/PhotoSlice'



const rootReducer = combineReducers({
    photos: PhotoRuducer
})

export default rootReducer