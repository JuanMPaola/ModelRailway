import { RESET_FILTERS } from "../../types";

const resetFilters = () => {
    try {
        return{
            type: RESET_FILTERS
        }
    } catch (error) {
        console.log("error al resetear los filtros", error)
    }
}

export default resetFilters;