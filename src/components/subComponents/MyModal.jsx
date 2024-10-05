// src/MyModel.js
import React, { useState, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';

const MyModel = () => {
  const [loading, setLoading] = useState(true);
  const { scene, error } = useGLTF('/warehouse_fbx_model_free.glb', true); // The second argument is for loading state

  useEffect(() => {
    if (scene) {
      setLoading(false);
    }
  }, [scene]);

  if (loading) {
    return <span>Loading model...</span>; // Or a spinner component
  }

  if (error) {
    return <span>Error loading model: {error.message}</span>;
  }

  return (
    <primitive object={scene} />
  );
};

export default MyModel;
