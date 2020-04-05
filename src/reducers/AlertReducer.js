import { SHOW_ALERT, HIDE_ALERT } from "../types";

const intialSate = {
    alert : false
}
export default function( state = intialSate, action ){
    switch( action.type ){
        case SHOW_ALERT :
            return {
                ...state,
                alert : action.payload  
            }
        case HIDE_ALERT : 
        return{
            ...state,
            alert : null
        }
        default:
            return intialSate;
    }
}