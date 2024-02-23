
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
        case "POST_CATEGORIES":
            return{
                ...state,
                categories: [...state.categories, action.payload]
            }
        case "DELETE_CATEGORIES":
            return {
                ...state,
                categories: state.categories.filter(cat => cat.id !== action.payload)
            };

        default:
            return{
                ...state
            }
    }

}

export default reducer