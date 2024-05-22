// "use client"
// import { React, useEffect, useState } from 'react'
// import Link from 'next/link'
// import { useSelector, useDispatch } from 'react-redux'
// import { postAmigos, getAmigos, deleteAmigos } from '../../redux/actions'


// function formAmigos() {
//     const [amigosState, setAmigosState] = useState({
//         image: "",
//         description: "",
//     });

//     const dispatch = useDispatch();

//     const getPostAmigos = useSelector(state => state.firebase.amigos)
//     console.log("amigos", getPostAmigos)

//     useEffect(() => {
//         dispatch(getAmigos())
//     }, [dispatch])

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setAmigosState(prevState => ({
//             ...prevState,
//             [name]: value
//         }));
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         dispatch(postAmigos(amigosState))
//         setAmigosState({ image: "", description: "" })
//     }

//     const handleDelete = (id) => {
//         console.log("Aca esta el ", id);
//         dispatch(deleteAmigos(id))
//     }



//     return (
//         <div>
//             <h1>Form Amigos</h1>

//             <Link href="/form">Categorias</Link>

//             <br></br>

//             <Link href="/form/posts">Posts</Link>

//             <br></br>
//             <br></br>

//             <form onSubmit={handleSubmit}>
//                 <label>Imagenes</label>
//                 <input type="text" name='image' value={amigosState.image} onChange={handleChange}></input>

//                 <br></br>

//                 <label>Descripcion</label>
//                 <input type="text" name='description' value={amigosState.description} onChange={handleChange}></input>

//                 <button type='submit'>Submit</button>
//             </form>

//             <div>
//                 <h2>Amigos</h2>
//                 <ul>
//                     {getPostAmigos.map(amigo => (
//                         <li>
//                             <button onClick={() => handleDelete(amigo.id)}>Delete{amigo.id}</button>
//                             <p>Descripcion: {amigo.description}</p>
//                             <p>Imagen: {amigo.image}</p>
//                         </li>
//                     ))}
//                 </ul>
//             </div>

//             {/* <div>
//                 {listCategories.map((categoria) => (
//                     categoria.id && <div key={categoria.id}>
//                         <button onClick={() => handleDelete(categoria.id)}>Delete{categoria.id}</button>
//                         <h2 >{categoria.title}</h2>
//                     </div>
//                 ))}
//             </div> */}


//         </div>
//     )
// }

// export default formAmigos