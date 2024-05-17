
const initialState = {
    categories: [],
    posteos: [],
    allPosteos: [],
    amigos: [],
    marcas: [],
    loading: true,
    postId: {},
    filterCat: "Todas",
    filterMar: "Todas"
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_CATEGORIES":
            return {
                ...state,
                categories: action.payload,
                loading: false,
            }
        case "GET_POSTEOS":
            return {
                ...state,
                posteos: action.payload,
                allPosteos: action.payload,
                loading: false,
            }
        case "GET_AMIGOS":
            return {
                ...state,
                amigos: action.payload
            }
        case "GET_MARCAS":
            return {
                ...state,
                marcas: action.payload,
                loading: false,
            }
            case "FILTER_CATEGORIES":
                return {
                    ...state,
                    filterCat: action.payload,
                    posteos: state.allPosteos.filter(post => {
                        const categoryMatch = action.payload === "Todas" || post.categoria === action.payload;
                        const marcaMatch = state.filterMar === "Todas" || post.marca === state.filterMar;
                        return categoryMatch && marcaMatch;
                    }),
                    loading: false
                }
            case "FILTER_MARCAS":
                return {
                    ...state,
                    filterMar: action.payload,
                    posteos: state.allPosteos.filter(post => {
                        const categoryMatch = state.filterCat === "Todas" || post.categoria === state.filterCat;
                        const marcaMatch = action.payload === "Todas" || post.marca === action.payload;
                        return categoryMatch && marcaMatch;
                    }),
                    loading: false
                }
        case "RESET_FILTERS":
            return{
                ...state,
                filterCat: "Todas",
                filterMar: "Todas",
                posteos: state.allPosteos,
                loading: false
            }
        case "LOADING":
            return {
                ...state,
                loading: true
            }
        case "GET_BYID":
            return {
                ...state,
                postId: action.payload,
                loading: true
            }

        default:
            return {
                ...state
            }
    }

}

export default reducer



/* const initialState = {
    categories: [],
    posteos: [],
    allPosteos: [],
    amigos: [],
    marcas: [],
    loading: true,
    postId: {}
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_CATEGORIES":
            return {
                ...state,
                categories: action.payload,
                loading: false,
            }
        case "GET_POSTEOS":
            return {
                ...state,
                posteos: action.payload,
                allPosteos: action.payload,
                loading: false,
            }
        case "GET_AMIGOS":
            return {
                ...state,
                amigos: action.payload
            }
        case "GET_MARCAS":
            return {
                ...state,
                marcas: action.payload,
                loading: false,
            }
        case "FILTER_CATEGORIES":
            if (action.payload === "Todas") {
                return {
                    ...state,
                    posteos: state.allPosteos,
                    loading: false,
                };
            } else {
                return {
                    ...state,
                    posteos: state.allPosteos.filter(post => post.categoria === action.payload)
                };
            }
        case "FILTER_MARCAS":
            if (action.payload === "Todas") {
                return {
                    ...state,
                    posteos: state.allPosteos,
                    loading: false,
                }
            } else {
                return {
                    ...state,
                    posteos: state.allPosteos.filter(post => post.marca === action.payload)
                };
            }
        case "LOADING":
            return {
                ...state,
                loading: true
            }
        case "GET_BYID":
            return {
                ...state,
                postId: action.payload,
                loading: true
            }

        default:
            return {
                ...state
            }
    }

}

export default reducer */