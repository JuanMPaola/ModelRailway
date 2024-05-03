import { FILTER_MARCAS } from "../../types";

const filterMarcas = (marca) => (dispatch) =>{
    try {
        console.log(`Filtro seleccionado: ${marca}`);
        dispatch({
            type:FILTER_MARCAS,
            payload:marca
        })
    } catch (error) {
        console.log("error al filtrar", error)
    }
}

export default filterMarcas;