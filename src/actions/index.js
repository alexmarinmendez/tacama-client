import axios from 'axios';
import { GET_VINOS } from './names';

export function getVinos() {
    return async function(dispatch) {
        let vinos = await axios.get('http://localhost:3001/vinos');
        return dispatch({
            type: GET_VINOS,
            payload: vinos.data
        });
    }
};