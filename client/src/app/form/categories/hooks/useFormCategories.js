
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories, postCategories, deleteCategories } from '../../../redux/actions';

const useFormCategories = () => {
    const [categorias, setCategorias] = useState("");
    const [listCategories, setListCategories] = useState([])
/*     console.log("no soy un useEffect") */
    const dispatch = useDispatch();
    const categoriaState = useSelector(state => state.firebase.categories)
  
    useEffect(() =>{
        dispatch(getCategories())
    },[])
/*     useEffect(() =>{
      const hasSemeData = categoriaState.length === listCategories.length;
      if(!hasSemeData){
          setListCategories(categoriaState);
      }
  },[categoriaState, listCategories]); */

    const handleSumbit = (e) => {
      e.preventDefault();
      console.log(" Test Handle Sumbmit", categorias);
      dispatch(postCategories(categorias))
      setCategorias("");
    }
  
    const handleChange = (e) =>{
      setCategorias(e.target.value)
    }
  
    const handleDelete = (id) =>{
      console.log("Aca esta el ", id);
      dispatch(deleteCategories(id))
    }


    return {categorias, handleChange, handleSumbit, categoriaState, handleDelete, listCategories}
}


export default useFormCategories