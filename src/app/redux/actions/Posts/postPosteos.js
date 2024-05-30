import { db } from "../../../../firebase";
import { doc, setDoc } from "firebase/firestore";
import { POST_POSTS } from "../../types";

const postPosts = (post) => async (dispatch) => {
    try {
        const docRef = doc(db, "Post", post.title);

        console.log(post)

        await setDoc(docRef, {
            disponible: post.available,
            categoria: post.categories,
            descripcion: post.description,
            marca: post.marca,
            imagenes: post.images,
            title: post.title,
            codigo: post.codigo
        });

        dispatch({
            type: POST_POSTS,
            payload: post,
        });
    } catch (error) {
        console.error("Error posting data: ", error);
        alert("Hubo un problema al publicar el post. Intente nuevamente en 2 segundos.");
    }
};

export default postPosts;




/* import { db } from "../../../../firebase"

import { collection, addDoc } from "firebase/firestore";
import { POST_POSTS } from "../../types";

const postPosts = (post) => async (dispatch) =>{
    try {
        await addDoc(collection(db, "Post"), {
            available: post.available,
            categoria: post.categories,
            descripcion: post.description,
            marca: post.marca,
            imagenes: post.image,
            title: post.title
        })

        dispatch({
            type: POST_POSTS,
            payload:post,
        })
    } catch (error) {
        alert("error al postear posteo", error)
    }
}

export default postPosts; */