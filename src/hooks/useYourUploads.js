import { useState, useEffect } from 'react';
import { projectFirestore, projectAuth } from '../firebase/config';

const useYourUploads = (collection) => {
  const [docs1, setDocs1] = useState([]);
  // console.log(account, projectAuth.currentUser);

  useEffect(() => {
    const projectRef = projectFirestore.collection(collection);
    const getImages = projectAuth.currentUser
      ? projectRef
          .where(
            'uploaderId',
            '==',
            projectAuth.currentUser.uid
            // projectAuth.currentUser ? projectAuth.currentUser.uid : ''
          )
          .get()
          .then((querySnapshot) => {
            let documents = [];
            querySnapshot.forEach((doc) => {
              documents.push({ ...doc.data(), id: doc.id });
            });
            setDocs1(documents);
          })
      : projectRef.orderBy('createdAt', 'desc').onSnapshot((snap) => {
          let documents = [];
          snap.forEach((doc) => {
            documents.push({ ...doc.data(), id: doc.id });
          });
          setDocs1(documents);
        });

    return () => getImages();
  }, [collection, projectAuth.currentUser]);

  return { docs1 };
};

export default useYourUploads;
