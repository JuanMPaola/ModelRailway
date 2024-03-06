"use client"
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../../redux/actions';


function Categories(/* {categories} */) {
    const dispatch = useDispatch();
    const categoriaState = useSelector(state => state.firebase.categories)

    useEffect(() =>{
        dispatch(getCategories())
    }, [])
    return (
        <div>
            <h2>Categorias</h2>
            <ul>
            {categoriaState.map((categoria) => (
            categoria.id && <div key={categoria.id}>
                <h2>{categoria.title}</h2>
                <p >{categoria.id}</p>
                </div>
            ))}
            </ul>
        </div>
    )
}

export default Categories