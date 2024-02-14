import React from 'react'

function Categoris({categoris}) {
    return (
        <div>
            <h2>Categorias</h2>
            <ul>
                {
                    categoris.map(categori => (
                        <li key={categori.id}>
                            <div>

                                <p>{categori.title}</p>

                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Categoris