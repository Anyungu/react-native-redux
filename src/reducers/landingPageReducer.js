
import {
    STORENAMEFAIL,
    STORENAMESUCCESS,
    STORINGNAME,
    TYPENAME
} from '../actions/types';

const INITIAL = { name: '', loading: false, error: '' };


export default (state = INITIAL, action) => {

    switch (action.type) {

        case STORENAMEFAIL:
            return { ...state, loading: false, error: action.payload };

        case STORENAMESUCCESS:
            return { ...state, loading: false, name: action.payload, error: '' };

        case STORINGNAME:
            return { ...state, loading: true, error: '' };

        case TYPENAME:
            return { ...state, loading: false, name: action.payload, error: '' };

        default:
            return state;
    }


};