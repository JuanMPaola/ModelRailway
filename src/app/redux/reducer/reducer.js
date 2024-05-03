
const initialState = {
    categories: [],
    posteos: [],
    allPosteos: [],
    amigos: [],
    marcas: [],
    loading: false,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_CATEGORIES":
            return {
                ...state,
                categories: action.payload
            }
        case "GET_POSTEOS":
            return {
                ...state,
                posteos: action.payload,
                allPosteos: action.payload
            }
        case "GET_AMIGOS":
            return {
                ...state,
                amigos: action.payload
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
                    posteos: state.allPosteos.filter(post => post.categoria === action.payload)
                };
            }
        case "GET_MARCAS":
            return {
                ...state,
                marcas: action.payload
            }
            case "FILTER_MARCAS":
                if (action.payload === "All") {
                    return {
                        ...state,
                        posteos: state.allPosteos
                    }
                } else {
                    return {
                        ...state,
                        posteos: state.allPosteos.filter(post => post.marca === action.payload)
                    };
                }
        default:
            return {
                ...state
            }
    }

}

export default reducer