import React from 'react';
import { useState } from 'react';
import { storage } from '../firebase/firebase';
import { ref, uploadBytes } from 'firebase/storage';

function Tostorage() {
  const [image, setImage] = useState(null);

  const uploadImage = () => {
    if (image == null) return;
    const imageRef = ref(storage, `customPcs pictures/${image.name}`);
    uploadBytes(imageRef, image).then(() => {
      console.log('img uploaded');
    });
  };

  return (
    <div>
      <div>
        <input
          type="file"
          onChange={(event) => {
            setImage(event.target.files[0]);
          }}
        />
        <button onClick={uploadImage}>uploadImage</button>
        <p>{/* <a href={Url}>{Url}</a> */}</p>
      </div>
    </div>
  );
}

export default Tostorage;
