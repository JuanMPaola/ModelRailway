const { combineReducers } = require("redux");
import reducer from "./reducer"

const rootReducer = combineReducers({
    firebase: reducer
})

export default rootReducer;