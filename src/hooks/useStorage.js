import { useState, useEffect } from 'react';
import {
  projectStorage,
  projectFirestore,
  timestamp,
} from '../firebase/config';
import { projectAuth } from '../firebase/config';

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    const storageRef = projectStorage.ref(file.name);
    const collectionRef = projectFirestore.collection('images');

    storageRef.put(file).on(
      'state_changed',
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        collectionRef.add({
          url: url,
          createdAt: timestamp(),
          uploaderId: projectAuth.currentUser.uid,
          uploadedBy: projectAuth.currentUser.email,
        });
        setUrl(url);
      }
    );
  }, [file]);

  return { progress, url, error };
};

export default useStorage;
