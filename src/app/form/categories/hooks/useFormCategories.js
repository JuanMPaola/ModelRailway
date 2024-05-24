import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories, postCategories, deleteCategories } from '../../../redux/actions';

const useFormCategories = () => {
    const [categorias, setCategorias] = useState("");
    const [listCategories, setListCategories] = useState([]);
    const dispatch = useDispatch();
    const categoriaState = useSelector(state => state.firebase.categories);

    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch]);

    useEffect(() => {
        const hasSameData = categoriaState.length === listCategories.length;
        if (!hasSameData) {
            setListCategories(categoriaState);
        }
    }, [categoriaState, listCategories]);

    const handleSubmit = (e) => {  // Corrige el nombre aquí
        e.preventDefault();
        console.log("Test Handle Submit", categorias);
        dispatch(postCategories(categorias));
        setCategorias("");
    }

    const handleChange = (e) => {
        setCategorias(e.target.value);
    }

    const handleDelete = (id) => {
        console.log("Aca esta el ", id);
        dispatch(deleteCategories(id));
    }

    return { categorias, handleChange, handleSubmit, categoriaState, handleDelete, listCategories };
}

export default useFormCategories;
