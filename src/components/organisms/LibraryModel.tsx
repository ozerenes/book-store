import { Canvas, ReactThreeFiber } from '@react-three/fiber';
import { Suspense, useEffect, useState } from 'react';
import { Model } from '@/components/atoms/Model';
import { Vector3 } from 'three';
import { OrbitControls, OrbitControlsProps } from '@react-three/drei';

type MyOrbitControlsProps = ReactThreeFiber.Overwrite<
  ReactThreeFiber.Object3DNode<OrbitControlsProps, typeof OrbitControls>,
  {
    target?: Vector3 | [number, number, number] | undefined;
    autoRotate: boolean;
    autoRotateSpeed: number;
  }
>;

export function CustomOrbitControls({ target, autoRotate, autoRotateSpeed }: MyOrbitControlsProps) {
  return <OrbitControls target={target} autoRotate={autoRotate} autoRotateSpeed={26.5} />;
}
export function LibraryModel() {
  const [autoRotate, setAutoRotate] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAutoRotate(false);
    }, 1333);
  }, []);
  return (
    <Canvas
      gl={{ preserveDrawingBuffer: true }}
      shadows
      dpr={[1, 1.5]}
      camera={{ position: [-100, 180, 180], fov: 50 }}
    >
      <ambientLight intensity={0.7} color="#ffffff" />
      <directionalLight color="#fff" position={[0, 5, 5]} />
      <Suspense fallback={null}>
        <Model />
      </Suspense>
      <CustomOrbitControls target={[0, 0, 0]} autoRotate={autoRotate} autoRotateSpeed={10} />
    </Canvas>
  );
}
