import axios from "../helpers/axios"
import { authConstant } from "./constants"

export const login = (user) => {

    console.log(user)
    return async (dispatch) => {

        const res = await axios.post('/admin/signin', {
            ...user

        })

        dispatch({
            type: authConstant.LOGIN_REQUEST,
            payload: {
                ...user
            }
        })
    }
}