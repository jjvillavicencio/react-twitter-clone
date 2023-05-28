import {axi} from "./useAxios.js";

export const loginReq = async (data) => {
    await axi.post('/users/login/', data)
}

