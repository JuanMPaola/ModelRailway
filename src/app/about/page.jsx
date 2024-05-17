import React from 'react'
import style from './about.module.css'


function About() {
  return (
    <div className={style.container}>
      <div className={style.seccion1}>
        <div className={style.containerImg}>
          <img src="/assets/adrian1.jpg" alt="" />
        </div>
        <div className={style.containerText}>
          <p>A jugar con los trenes ! Yo me sumo y si puedo -y me permitís- te ayudo, o mejor aún nos ayudamos. A mis 5 años papá trajo a casa el primer tren -Märklin- y desde entonces ando por los rieles del ferromodelismo e intento jugar cada día más y mejor.
            Entretenerse con los trenes a escala es uno de los pasatiempos más lindos y apasionantes.
            Desde planificar y armar un tendido de vías imitando escenas soñadas para hacer correr formaciones preferidas hasta poner a punto una pieza y colocarla en nuestra vitrina para su lucimiento.
            Todos los trenes a escala tienen su encanto. Solo hay que animarse a descubrirlo y disfrutarlo. Prohibido encerrarse en preconceptos y apreciaciones ajenas categóricas.
            No lo sufras, por favor. Si no te divierte, dejalo. Hay muchos otros hobbies que te esperan.
            Trataré de compartir mis piezas nuevas y usadas seleccionadas. Cuanto más viejas más grande es el desafío que plantean a la vez que ofrecen un atractivo muy particular que los nostálgicos y coleccionistas desean encontrar y así preservar parte de nuestro ADN cultural propio de este  hobbie.
            ¡ Te invito, subamos al tren !</p>
        </div>
      </div>
      <div className={style.seccion2}>
        <h2>¡A jugar con los trenes ! </h2>
        <p>Yo me sumo y si puedo -y me permitís- te ayudo, o mejor aún nos ayudamos.
          Entretenerse con los trenes a escala es uno de los pasatiempos más lindos y apasionantes.
          Desde planificar y armar un tendido de vías imitando escenas soñadas para hacer correr formaciones preferidas hasta poner a punto una pieza y colocarla en nuestra vitrina para su lucimiento.
          Todos los trenes a escala tienen su encanto. Solo hay que animarse a descubrirlo y disfrutarlo. Prohibido encerrarse en preconceptos y apreciaciones ajenas categóricas.
          No lo sufras, por favor. Si no te divierte, dejalo. Hay muchos otros hobbies que te esperan.
          Trataré de compartir mis piezas nuevas y usadas seleccionadas. Cuanto más viejas más grande es el desafío que plantean a la vez que ofrecen un atractivo muy particular que los nostálgicos y coleccionistas desean encontrar y así preservar parte de nuestro ADN cultural propio de este  hobbie.
          ¡Te invito, subamos al tren!</p>
      </div>
    </div>

  )
}

export default About