"use client"
import {React, useState } from 'react'
import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux'
import { postAmigos } from '../../redux/actions'

function formAmigos() {
    /*     const getPostAmigos = useSelector(state => state.firebase.amigos)
    console.log("amigos", postAmigos) */
    const [amigosState, setAmigosState] = useState({
        image: "",
        description: "",
    });
    
    
    const dispatch = useDispatch();
    
    
    const handleChange = (e) =>{
        const { name, value } = e.target;
        setAmigosState(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(postAmigos(amigosState))
        setAmigosState({image: "", description:""})
    }
    

    return (
        <div>
            <h1>Form Amigos</h1>

            <Link href="/form">Categorias</Link>

            <br></br>

            <Link href="/form/posts">Posts</Link>

            <br></br>
            <br></br>

            <form onSubmit={handleSubmit}>
                <label>Imagenes</label>
                <input type="text" name='image' value={amigosState.image} onChange={handleChange}></input>

                <br></br>

                <label>Descripcion</label>
                <input type="text" name='description' value={amigosState.description} onChange={handleChange}></input>
            
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default formAmigos