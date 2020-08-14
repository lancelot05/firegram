const { projectFirestore, projectAuth } = require('../firebase/config');

const useYours = (account) => {
  const projectRef = projectFirestore.collection('images');
  const query = projectRef.where('uploaderId', '==', account.uid);
  return query;
};

export default useYours;
