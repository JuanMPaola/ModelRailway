"use client";
import useFormCategories from './hooks/useFormCategories';
import Link from 'next/link';

function FormCategories() {
    const { categorias, handleChange, handleSubmit, categoriaState, handleDelete, listCategories } = useFormCategories();

    return (
        <div>
            <h1>Form Categorias</h1>

            <Link href="/form/posts">Posts</Link>
            <br />
            <Link href="/form/amigos">Amigos</Link>
            <br />

            <form onSubmit={handleSubmit}>
                <label>Nombre</label>
                <input type="text" value={categorias} onChange={handleChange} />
                <button type='submit'>Enviar Name</button>
            </form>
            
            <br />
            <p>Aca se va a renderizar una lista de las categorias que ya existen.</p>
            <div>
                {listCategories.map(categoria => (
                    categoria.id && (
                        <div key={categoria.id}>
                            <button onClick={() => handleDelete(categoria.id)}>Delete {categoria.id}</button>
                            <h2>{categoria.title}</h2>
                        </div>
                    )
                ))}
            </div>
            <p>Se le podria agregar a cada categoria existente una cruz que permita eliminarla.</p>
        </div>
    );
}

export default FormCategories;
