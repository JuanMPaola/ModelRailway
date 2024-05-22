import { useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import firebaseConfig from './firebaseConfig';

useFirebaseStorage = () => {
  const [storage, setStorage] = useState(null);

  useEffect(() => {

    // Inicializa la aplicación Firebase
    const firebaseApp = initializeApp(firebaseConfig);

    // Obtiene la instancia de almacenamiento
    const storageInstance = getStorage(firebaseApp);

    // Establece el almacenamiento en el estado
    setStorage(storageInstance);

    // Devuelve una función de limpieza para desconectar el almacenamiento cuando el componente se desmonte
    return () => {
      // Limpia el estado
      setStorage(null);
    };
  }, []); // Ejecuta este efecto solo una vez al montar el componente

  return storage;
};

export default useFirebaseStorage;
