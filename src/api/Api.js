import axios from 'axios';

async function get(endpoint, params=null) {
    let url = 'http://localhost:8000/' + endpoint;
    return await axios.get(url);
}

export async function fetchInputs() {
    return await get('web/inputs/');
}

export async function fetchOutputs() {
    return await get('web/outputs/');
}

export async function fetchControllers() {
    return await get('web/controllers/');
}