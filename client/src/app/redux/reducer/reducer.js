
const initialState = {
    categories: [],
    posteos: [],
    allPosteos: [],
    amigos: [],
    loading: false,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_CATEGORIES":
            return {
                ...state,
                categories: action.payload
            }
        case "POST_CATEGORIES":
            return {
                ...state,
                categories: [...state.categories, action.payload]
            }
        case "DELETE_CATEGORIES":
            return {
                ...state,
                categories: state.categories.filter(cat => cat.id !== action.payload)
            };
        case "GET_POSTEOS":
            return {
                ...state,
                posteos: action.payload,
                allPosteos: action.payload
            }
        case "POST_POSTS":
            return {
                ...state,
                posteos: [...state.posteos, action.payload],
                allPosteos: [...state.allPosteos, action.payload],
            };
        case "DELETE_POSTEOS":
            return {
                ...state,
                posteos: state.posteos.filter(post => post.id !== action.payload),
                allPosteos: state.allPosteos.filter(post => post.id !== action.payload)
            };
        case "GET_AMIGOS":
            return {
                ...state,
                amigos: action.payload
            }
        case "POST_AMIGOS":
            return {
                ...state,
                amigos: [...state.amigos, action.payload]
            }
        case "FILTER_CATEGORIES":
            if (action.payload === "Todas") {
                return {
                    ...state,
                    posteos: state.allPosteos
                };
            } else {
                return {
                    ...state,
                    posteos: state.allPosteos.filter(post => post.categories === action.payload)
                };
            }


        default:
            return {
                ...state
            }
    }

}

export default reducer