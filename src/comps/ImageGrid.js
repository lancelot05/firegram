import React from 'react';
import useFirestore from '../hooks/useFirestore';
import { motion } from 'framer-motion';
import useYourUploads from '../hooks/useYourUploads';

const ImageGrid = ({ toggle, setSelectedImg }) => {
  // useEffect(() => {

  // })
  const { docs2 } = useFirestore('images');
  const { docs1 } = useYourUploads('images');
  // let docs;
  // if (toggle === true) {
  //   docs = docs1;
  // } else {
  //   docs = docs2;
  // }
  // console.log(docs1[0]);
  return toggle ? (
    <div className='img-grid'>
      {docs1 &&
        docs1.map((doc) => (
          <motion.div
            className='img-wrap'
            key={doc.id}
            layout
            whileHover={{ opacity: 1 }}
            onClick={() => setSelectedImg(doc.url)}
          >
            <motion.img
              src={doc.url}
              alt='uploaded pic'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            />
          </motion.div>
        ))}
    </div>
  ) : (
    <div className='img-grid'>
      {docs2 &&
        docs2.map((doc) => (
          <motion.div
            className='img-wrap'
            key={doc.id}
            layout
            whileHover={{ opacity: 1 }}
            onClick={() => setSelectedImg(doc.url)}
          >
            <motion.img
              src={doc.url}
              alt='uploaded pic'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            />
          </motion.div>
        ))}
    </div>
  );
};

export default ImageGrid;
