"use client"
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories, getMarcas } from '../../redux/actions';
import filterCategories from "../../redux/actions/Filters/filterCategories";
import filterMarcas from "../../redux/actions/Filters/filterMarcas";
import isLoading from '../../redux/actions/Loading/loading';
import style from "./Categories.module.css"


function Categories() {
    const dispatch = useDispatch();
    const categoriaState = useSelector(state => state.firebase.categories)
    const categories = useSelector(state => state.firebase.categories);
    const marcas = useSelector(state => state.firebase.marcas)
    const startLoading = useSelector(state => state.firebase.loading);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedMarcas, setSelectedMarcas] = useState("");

    console.log(marcas)
    const handleFilter = (category) => {
        setSelectedCategory(category)
        dispatch(filterCategories(category));
    }

    const handleFilterMarcas = (marca) => {
        setSelectedMarcas(marca)
        dispatch(filterMarcas(marca));
    }

    useEffect(() => {
        dispatch(isLoading())
        dispatch(getCategories())
        dispatch(getMarcas())
    }, [dispatch])
    return (
        <div className={style.container}>
            {startLoading ? (
                <div className={style.spinner}></div>
            ) : (
                <>
                    <div>
                        <ul>
                            {marcas.map((marca) => (
                                <div key={marca.id} onClick={() => handleFilterMarcas(marca.id)} value={selectedMarcas}>
                                    <img className={style.marcaImg} src={marca.imagen} alt={marca.id} />
                                    <p>{marca.id}</p>
                                </div>
                            ))}
                        </ul>
                        {/*                 <select value={selectedMarcas} onChange={(e) => handleFilterMarcas(e.target.value)}>
                            <option value="All">Todas</option>
                            {marcas.map((marca) => (
                                <option key={marca.id} value={marca.id}>{marca.id}</option>
                            ))}
                        </select> */}
                    </div>

                    <div>
                        <h2>Categoria:</h2>
                        <select value={selectedCategory} onChange={(e) => handleFilter(e.target.value)}>
                            <option value="Todas">Todas</option>
                            {categories.map(category => (
                                <option key={category.id} value={category.id}>{category.id}</option>
                            ))}
                        </select>
                    </div>
                </>
            )}
        </div>
    )
}

export default Categories