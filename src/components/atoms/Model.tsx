import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';
import { useRef } from 'react';
import { useAnimations, useGLTF } from '@react-three/drei';

type GLTFResult = GLTF & {
  nodes: {
    Object_33: THREE.SkinnedMesh;
    libros_base_libros_0: THREE.Mesh;
    libros003_base_libros_0: THREE.Mesh;
    libros001_base_libros_0: THREE.Mesh;
    mesa_Base_0: THREE.Mesh;
    pluma_Base_0: THREE.Mesh;
    scroles_Base_0: THREE.Mesh;
    Object_105: THREE.SkinnedMesh;
    Object_106: THREE.SkinnedMesh;
    Object_107: THREE.SkinnedMesh;
    Object_109: THREE.SkinnedMesh;
    Object_111: THREE.SkinnedMesh;
    Object_113: THREE.SkinnedMesh;
    Object_115: THREE.SkinnedMesh;
    Object_116: THREE.SkinnedMesh;
    Object_118: THREE.SkinnedMesh;
    Object_120: THREE.SkinnedMesh;
    Object_121: THREE.SkinnedMesh;
    Object_122: THREE.SkinnedMesh;
    Object_124: THREE.SkinnedMesh;
    velas_Base_0: THREE.Mesh;
    joya_base_tranparencia_0: THREE.Mesh;
    joyero_Base_0: THREE.Mesh;
    base_adorno_Base_0: THREE.Mesh;
    base_adorno_BrillO2_0: THREE.Mesh;
    adorno_Base_0: THREE.Mesh;
    adorno_BrillO2_0: THREE.Mesh;
    _rootJoint: THREE.Bone;
    _rootJoint_1: THREE.Bone;
  };
  materials: {
    base_llama: THREE.MeshStandardMaterial;
    base_libros: THREE.MeshStandardMaterial;
    Base: THREE.MeshStandardMaterial;
    Metal: THREE.MeshStandardMaterial;
    BrillO2: THREE.MeshStandardMaterial;
    ['Material.002']: THREE.MeshStandardMaterial;
    ['Material.001']: THREE.MeshStandardMaterial;
    ['metales.002']: THREE.MeshStandardMaterial;
    base_tranparencia: THREE.MeshPhysicalMaterial;
  };
};
type ActionName = 'Scene';
type GLTFActions = Record<ActionName, THREE.AnimationAction>;
const gltfPath = `${import.meta.env.VITE_BASE_URL}/libro_arcano_animado.glb`;
export function Model() {
  const modelRef = useRef<THREE.Group>(null);
  const { nodes, materials, animations } = useGLTF(gltfPath) as unknown as GLTFResult;
  const animationClip = useAnimations(animations, modelRef);
  const actions = animationClip.actions as GLTFActions;

  const startAnimation = () => {
    actions['Scene'].play();
  };

  return (
    <group ref={modelRef} dispose={null} onClick={() => startAnimation()}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={0.18}>
          <group
            name="e1794e6b43bb438fafae60ac0b4d6265fbx"
            rotation={[Math.PI / 2, -Math.PI / 1.5, -Math.PI / 20]}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="Camera"
                  position={[1829.009, 842.21, -592.801]}
                  rotation={[-3.142, -0.283, 2.855]}
                  scale={100}
                >
                  <group name="Object_5" />
                </group>
                <group name="Sun" position={[141.549, 744.131, 256.372]} scale={100}>
                  <group name="Object_7" rotation={[Math.PI / 2, 0, 0]}>
                    <group name="Object_8" />
                  </group>
                </group>
                <group
                  name="Velas"
                  position={[157.037, 441.239, 258.723]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={2.239}
                >
                  <group name="Object_10">
                    <primitive object={nodes._rootJoint} />
                    <skinnedMesh
                      name="Object_33"
                      geometry={nodes.Object_33.geometry}
                      material={materials.base_llama}
                      skeleton={nodes.Object_33.skeleton}
                    />
                    <group
                      name="Object_32"
                      position={[156.456, 377.819, 257.648]}
                      rotation={[-Math.PI / 2, 0, 0]}
                      scale={28.907}
                    />
                  </group>
                </group>
                <group
                  name="Circle001"
                  position={[156.456, 377.819, 257.648]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={28.907}
                />
                <group
                  name="libros"
                  position={[-128.1, 560.26, 60.091]}
                  rotation={[-Math.PI / 2, 0, 0.684]}
                  scale={[38.359, 25.588, 6.813]}
                >
                  <mesh
                    name="libros_base_libros_0"
                    geometry={nodes.libros_base_libros_0.geometry}
                    material={materials.base_libros}
                  />
                </group>
                <group
                  name="libros003"
                  position={[-139.121, 410.633, 279.128]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={[42.648, 16.05, 46.567]}
                >
                  <mesh
                    name="libros003_base_libros_0"
                    geometry={nodes.libros003_base_libros_0.geometry}
                    material={materials.base_libros}
                  />
                </group>
                <group
                  name="libros001"
                  position={[-143.33, 423.92, 165.555]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={[42.648, 16.05, 46.567]}
                >
                  <mesh
                    name="libros001_base_libros_0"
                    geometry={nodes.libros001_base_libros_0.geometry}
                    material={materials.base_libros}
                  />
                </group>
                <group
                  name="mesa"
                  position={[0, 118.869, 0]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <mesh
                    name="mesa_Base_0"
                    geometry={nodes.mesa_Base_0.geometry}
                    material={materials.Base}
                  />
                </group>
                <group
                  name="pluma"
                  position={[150.166, 370.178, -213.056]}
                  rotation={[-Math.PI / 2, 0, -0.809]}
                  scale={34.656}
                >
                  <mesh
                    name="pluma_Base_0"
                    geometry={nodes.pluma_Base_0.geometry}
                    material={materials.Base}
                  />
                </group>
                <group name="scroles" position={[-105.319, 432.348, -134.111]} scale={55.117}>
                  <mesh
                    name="scroles_Base_0"
                    geometry={nodes.scroles_Base_0.geometry}
                    material={materials.Base}
                  />
                </group>
                <group
                  name="armature_libro"
                  position={[126.813, 384.163, 26.188]}
                  rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                  scale={78.189}
                >
                  <group name="Object_48">
                    <primitive object={nodes._rootJoint_1} />
                    <skinnedMesh
                      name="Object_105"
                      geometry={nodes.Object_105.geometry}
                      material={materials.Base}
                      skeleton={nodes.Object_105.skeleton}
                    />
                    <skinnedMesh
                      name="Object_106"
                      geometry={nodes.Object_106.geometry}
                      material={materials.Metal}
                      skeleton={nodes.Object_106.skeleton}
                    />
                    <skinnedMesh
                      name="Object_107"
                      geometry={nodes.Object_107.geometry}
                      material={materials.BrillO2}
                      skeleton={nodes.Object_107.skeleton}
                    />
                    <skinnedMesh
                      name="Object_109"
                      geometry={nodes.Object_109.geometry}
                      material={materials.BrillO2}
                      skeleton={nodes.Object_109.skeleton}
                    />
                    <skinnedMesh
                      name="Object_111"
                      geometry={nodes.Object_111.geometry}
                      material={materials['Material.002']}
                      skeleton={nodes.Object_111.skeleton}
                    />
                    <skinnedMesh
                      name="Object_113"
                      geometry={nodes.Object_113.geometry}
                      material={materials['Material.001']}
                      skeleton={nodes.Object_113.skeleton}
                    />
                    <skinnedMesh
                      name="Object_115"
                      geometry={nodes.Object_115.geometry}
                      material={materials.Metal}
                      skeleton={nodes.Object_115.skeleton}
                    />
                    <skinnedMesh
                      name="Object_116"
                      geometry={nodes.Object_116.geometry}
                      material={materials.Base}
                      skeleton={nodes.Object_116.skeleton}
                    />
                    <skinnedMesh
                      name="Object_118"
                      geometry={nodes.Object_118.geometry}
                      material={materials['metales.002']}
                      skeleton={nodes.Object_118.skeleton}
                    />
                    <skinnedMesh
                      name="Object_120"
                      geometry={nodes.Object_120.geometry}
                      material={materials.Metal}
                      skeleton={nodes.Object_120.skeleton}
                    />
                    <skinnedMesh
                      name="Object_121"
                      geometry={nodes.Object_121.geometry}
                      material={materials.BrillO2}
                      skeleton={nodes.Object_121.skeleton}
                    />
                    <skinnedMesh
                      name="Object_122"
                      geometry={nodes.Object_122.geometry}
                      material={materials.Base}
                      skeleton={nodes.Object_122.skeleton}
                    />
                    <skinnedMesh
                      name="Object_124"
                      geometry={nodes.Object_124.geometry}
                      material={materials.Metal}
                      skeleton={nodes.Object_124.skeleton}
                    />
                    <group
                      name="Object_104"
                      position={[126.813, 386.508, 37.916]}
                      rotation={[-Math.PI, 0, Math.PI / 2]}
                      scale={78.189}
                    />
                    <group
                      name="Object_108"
                      position={[127.414, 380.508, 90.702]}
                      rotation={[-Math.PI, 0, Math.PI / 2]}
                      scale={78.189}
                    />
                    <group
                      name="Object_110"
                      position={[126.813, 386.508, 37.916]}
                      rotation={[-Math.PI, 0, Math.PI / 2]}
                      scale={78.189}
                    />
                    <group
                      name="Object_112"
                      position={[126.813, 386.508, 37.916]}
                      rotation={[-Math.PI, 0, Math.PI / 2]}
                      scale={78.189}
                    />
                    <group
                      name="Object_114"
                      position={[124.627, 388.334, 148.672]}
                      rotation={[-3.127, 0, Math.PI / 2]}
                      scale={[12.172, 78.189, 78.189]}
                    />
                    <group
                      name="Object_117"
                      position={[124.54, 385.188, 147.49]}
                      rotation={[1.54, 0, Math.PI / 2]}
                      scale={[12.172, 78.189, 78.189]}
                    />
                    <group
                      name="Object_119"
                      position={[124.896, 392.588, -97.123]}
                      rotation={[-0.021, 0, Math.PI / 2]}
                      scale={[8.244, 71.474, 49.87]}
                    />
                    <group
                      name="Object_123"
                      position={[124.816, 385.426, -96.374]}
                      rotation={[0.052, 0, Math.PI / 2]}
                      scale={[12.172, 78.189, 78.189]}
                    />
                  </group>
                </group>
                <group
                  name="Paginas_R"
                  position={[126.813, 386.508, 37.916]}
                  rotation={[-Math.PI, 0, Math.PI / 2]}
                  scale={78.189}
                />
                <group
                  name="Paginas_R001"
                  position={[127.414, 380.508, 90.702]}
                  rotation={[-Math.PI, 0, Math.PI / 2]}
                  scale={78.189}
                />
                <group
                  name="Paginas_R002"
                  position={[126.813, 386.508, 37.916]}
                  rotation={[-Math.PI, 0, Math.PI / 2]}
                  scale={78.189}
                />
                <group
                  name="Paginas_R003"
                  position={[126.813, 386.508, 37.916]}
                  rotation={[-Math.PI, 0, Math.PI / 2]}
                  scale={78.189}
                />
                <group
                  name="TORQUE_1"
                  position={[124.54, 385.188, 147.49]}
                  rotation={[1.54, 0, Math.PI / 2]}
                  scale={[12.172, 78.189, 78.189]}
                >
                  <group
                    name="CERRADURA1"
                    position={[124.627, 388.334, 148.672]}
                    rotation={[-3.127, 0, Math.PI / 2]}
                    scale={[12.172, 78.189, 78.189]}
                  />
                </group>
                <group
                  name="TORQUE_2"
                  position={[124.816, 385.426, -96.374]}
                  rotation={[0.052, 0, Math.PI / 2]}
                  scale={[12.172, 78.189, 78.189]}
                >
                  <group
                    name="CERRADURA2"
                    position={[124.896, 392.588, -97.123]}
                    rotation={[-0.021, 0, Math.PI / 2]}
                    scale={[8.244, 71.474, 49.87]}
                  />
                </group>
                <group
                  name="velas"
                  position={[156.456, 377.113, 257.648]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={28.907}
                >
                  <mesh
                    name="velas_Base_0"
                    geometry={nodes.velas_Base_0.geometry}
                    material={materials.Base}
                  />
                </group>
                <group
                  name="joya"
                  position={[-123.502, 569.497, 58.702]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={8.922}
                >
                  <mesh
                    name="joya_base_tranparencia_0"
                    geometry={nodes.joya_base_tranparencia_0.geometry}
                    material={materials.base_tranparencia}
                  />
                </group>
                <group
                  name="joyero"
                  position={[-123.502, 565.04, 58.702]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={15.478}
                >
                  <mesh
                    name="joyero_Base_0"
                    geometry={nodes.joyero_Base_0.geometry}
                    material={materials.Base}
                  />
                </group>
                <group
                  name="base_adorno"
                  position={[0.832, 373.325, 274.718]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={33.357}
                >
                  <mesh
                    name="base_adorno_Base_0"
                    geometry={nodes.base_adorno_Base_0.geometry}
                    material={materials.Base}
                  />
                  <mesh
                    name="base_adorno_BrillO2_0"
                    geometry={nodes.base_adorno_BrillO2_0.geometry}
                    material={materials.BrillO2}
                  />
                </group>
                <group
                  name="adorno"
                  position={[1.755, 412.869, 273.761]}
                  rotation={[-3.057, 0.419, -2.76]}
                  scale={33.357}
                >
                  <mesh
                    name="adorno_Base_0"
                    geometry={nodes.adorno_Base_0.geometry}
                    material={materials.Base}
                  />
                  <mesh
                    name="adorno_BrillO2_0"
                    geometry={nodes.adorno_BrillO2_0.geometry}
                    material={materials.BrillO2}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}
useGLTF.preload(gltfPath);
