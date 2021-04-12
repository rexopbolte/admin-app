import axios from "../helpers/axios"
import { authConstant, userConstant } from "./constants"

export const signup = (user) => {

    console.log(user)
    return async (dispatch) => {

        dispatch({ type: userConstant.USER_REGISTER_REQUEST });

        const res = await axios.post('/admin/signup', {
            ...user

        })

        if (res.status === 200) {
            const { token, user } = res.data;
            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(user));
            dispatch({
                type: userConstant.USER_REGISTER_SUCCESS,
                payload: {
                    token, user
                }
            })

        } else {
            if (res.status === 400) {
                dispatch({
                    type: userConstant.USER_REGISTER_FAILURE,
                    payload: {
                        error: res.data.error
                    }
                })
            }
        }

    }
}