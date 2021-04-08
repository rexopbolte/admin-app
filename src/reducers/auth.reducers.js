import { authConstant } from "../actions/constants"

const initState = {
    name: 'Ashish'
}

export default (state = initState, action) => {
    console.log(action)

    switch (action.type) {
        case authConstant.LOGIN_REQUEST:
            state = {
                ...state,
                ...action.payload
            }
            break
    }

    return state;
}