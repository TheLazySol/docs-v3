'use client';

import Threads from './Threads';

const ThemedBackground = () => {
  return (
    <Threads
      color={[0.29, 0.52, 1.0]}
      amplitude={1.2}
      distance={0.45}
      enableMouseInteraction={true}
    />
  );
};

export default ThemedBackground;

