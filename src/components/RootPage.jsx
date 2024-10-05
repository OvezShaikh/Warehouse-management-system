import React from "react";
import MyModel from "./subComponents/MyModal";

export default function RootPage() {
  return (
    <div className="sketchfab-embed-wrapper" style={{height: '500px'}}>
      <iframe
      style={{ 
        position: 'relative', 
        top: 0, 
        left: 0, 
        width: '98%', 
        height: '100%',
        paddingTop: '20px',
      }}
        title="Warehouse FBX Model Free"
        frameBorder="0"
        allowFullScreen
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
        allow="autoplay; fullscreen; xr-spatial-tracking"
        xr-spatial-tracking
        execution-while-out-of-viewport
        execution-while-not-rendered
        web-share
        src="https://sketchfab.com/models/daa7fd3ff88945298d00045ca40a4c03/embed?autostart=1"
      ></iframe>
      {/* <p style={{ fontSize: '13px', fontWeight: 'normal', margin: '5px', color: '#4A4A4A' }}>
        <a
          href="https://sketchfab.com/3d-models/warehouse-fbx-model-free-daa7fd3ff88945298d00045ca40a4c03?utm_medium=embed&utm_campaign=share-popup&utm_content=daa7fd3ff88945298d00045ca40a4c03"
          target="_blank"
          rel="nofollow"
          style={{ fontWeight: 'bold', color: '#1CAAD9' }}
        >
          Warehouse FBX Model Free
        </a>{" "}
        by{" "}
        <a
          href="https://sketchfab.com/Nicholas01?utm_medium=embed&utm_campaign=share-popup&utm_content=daa7fd3ff88945298d00045ca40a4c03"
          target="_blank"
          rel="nofollow"
          style={{ fontWeight: 'bold', color: '#1CAAD9' }}
        >
          Nicholas-3D
        </a>{" "}
        on{" "}
        <a
          href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=daa7fd3ff88945298d00045ca40a4c03"
          target="_blank"
          rel="nofollow"
          style={{ fontWeight: 'bold', color: '#1CAAD9' }}
        >
          Sketchfab
        </a>
      </p> */}
    </div>
  );
}
