
const initialState={
    categories:[],
    loading: false,
}

const reducer = (state= initialState, action) =>{
    switch(action.type){
        case "GET_CATEGORIES":
            
            return{
                ...state,
                categories: action.payload
            }

        default:
            return{
                ...state
            }
    }

}

export default reducer