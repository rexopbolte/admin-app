import { combineReducers } from 'redux'
import userReducer from './user.reducers'
import authReducer from './auth.reducers'
import productReducer from './product.reducer'
import categoryReducer from './category.reducer'
import ordersReducer from './orders.reducer'

const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    category: categoryReducer,
    product: productReducer,
    orders: ordersReducer
})

export default rootReducer;