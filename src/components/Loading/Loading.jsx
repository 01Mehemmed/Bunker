import React, { useEffect } from 'react';

const Loading = () => {
  useEffect(() => {
    if (window.customElements && !window.customElements.get('l-trefoil')) {
      import('ldrs').then((module) => {
        module.trefoil.register();
      });
    }
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <l-trefoil
        size="40"
        stroke="4"
        stroke-length="0.15"
        bg-opacity="0.1"
        speed="1"
        color="black"
      ></l-trefoil>
    </div>
  );
};

export default Loading;
