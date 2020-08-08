import React, { useState } from 'react';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';
import ImageGrid from './comps/ImageGrid';
import Modal from './comps/Modal';
import useAuth from './hooks/useAuth';

function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  const { authenticated } = useAuth();

  return (
    <div className="App container">
      <Title/>
      { authenticated && <UploadForm /> }
      <ImageGrid setSelectedImg={setSelectedImg}/>
      { selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg}/>}
    </div>
  );
}

export default App;
