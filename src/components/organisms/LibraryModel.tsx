import { Canvas, ReactThreeFiber } from '@react-three/fiber';
import { Suspense, useState } from 'react';
import { Model } from '@/components/atoms/Model';
import { ActionIcon, Container, TextInput } from '@mantine/core';
import { Vector3 } from 'three';
import { OrbitControls, OrbitControlsProps } from '@react-three/drei';
import { Link } from 'react-router-dom';
import { IconSearch } from '@tabler/icons-react';

type MyOrbitControlsProps = ReactThreeFiber.Overwrite<
  ReactThreeFiber.Object3DNode<OrbitControlsProps, typeof OrbitControls>,
  { target?: Vector3 | [number, number, number] | undefined }
>;

export function CustomOrbitControls(props: MyOrbitControlsProps) {
  const { target } = props;
  return <OrbitControls target={target} autoRotate={false} />;
}
export function LibraryModel() {
  const [value, setValue] = useState('');

  return (
    <Container h={'100vh'} miw={'100%'} style={{ zIndex: 9999, cursor: 'pointer' }}>
      <TextInput
        placeholder="Kitap yada yazar arayın..."
        size="lg"
        rightSection={
          <Link to={`/search/${value}`}>
            <ActionIcon variant="subtle" p={5}>
              <IconSearch size="1.5rem" stroke={2} />
            </ActionIcon>
          </Link>
        }
        value={value}
        onChange={(event) => setValue(event.currentTarget.value)}
      />
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
        <CustomOrbitControls target={[0, 0, 0]} />
      </Canvas>
    </Container>
  );
}
