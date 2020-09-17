

import {
    TYPENAME,
    STORENAMEFAIL,
    STORENAMESUCCESS,
    STORINGNAME
} from './types';


import { Actions } from 'react-native-router-flux';



export const typeName = (name) => {
    return ({
        type: TYPENAME,
        payload: name
    })
}


export const storeName = (name) => {

    return (dispatch) => {

        dispatch({
            type: STORINGNAME
        });

        //Async function to store the name will be created here.
        //if successfull we will call the storingNameSuccess action creator
        //if unsuccessfull we will call the storingNameFail action creator

        setTimeout(() => {


            if (name !== '') {
                storingNameSuccess(name, dispatch);
            } else {
                storingNameFail("Message cannot Empty", dispatch);
            }

        }, 5000);

    };

};



const storingNameSuccess = (name, dispatch) => {

    dispatch({
        type: STORENAMESUCCESS,
        payload: name
    })

    Actions.HomePage();

}

const storingNameFail = (errorMessage, dispatch) => {

    dispatch({
        type: STORENAMEFAIL,
        payload: errorMessage
    })

}