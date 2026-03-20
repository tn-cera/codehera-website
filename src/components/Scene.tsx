'use client';

import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Environment, Float, Preload, Stars } from '@react-three/drei';
import { Suspense, useEffect, useRef, useState } from 'react';
import { MotionValue } from 'framer-motion';
import * as THREE from 'three';
import { EffectComposer, Bloom } from '@react-three/postprocessing';

interface SceneProps {
  scrollYProgress: MotionValue<number>;
}

// Cinematic Camera Controller
function CinematicCamera({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  const { camera } = useThree();
  
  useFrame(() => {
    const scroll = scrollYProgress.get();
    
    // Zoom in slowly between 0% and 60%
    const baseZ = 6;
    let targetZ = baseZ;
    const targetY = 0;
    
    if (scroll < 0.3) {
      targetZ = baseZ - (scroll / 0.3) * 1.5; // Zoom in to 4.5
    } else if (scroll < 0.6) {
      targetZ = 4.5 - ((scroll - 0.3) / 0.3) * 1.0; // Zoom in to 3.5 for full explosion
    } else {
      // Reassemble pull back
      targetZ = 3.5 + ((scroll - 0.6) / 0.4) * 2.5; // Pull back to 6.0
    }

    // Smooth position interpolation (damping)
    camera.position.lerp(new THREE.Vector3(0, targetY, targetZ), 0.05);
    camera.lookAt(0, 0, 0);
  });
  
  return null;
}

// Abstract Tech Core / AI Orb
function DigitalEngine({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  const groupRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const outerRingsRef = useRef<THREE.Group>(null);
  const shellRef1 = useRef<THREE.Mesh>(null);
  const shellRef2 = useRef<THREE.Mesh>(null);
  const shellRef3 = useRef<THREE.Mesh>(null);
  const particlesRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    const scroll = scrollYProgress.get();
    
    if (groupRef.current) {
      // Rotation
      groupRef.current.rotation.y = scroll * Math.PI * 2 + state.clock.elapsedTime * 0.15;
      groupRef.current.rotation.x = scroll * Math.PI * 0.5 + Math.sin(state.clock.elapsedTime * 0.5) * 0.1;

      // Calculate Explosion & Disassembly Factor
      let explosion = 0;
      if (scroll > 0.15 && scroll < 0.85) {
        // Spline basically, peaks near 0.6
        explosion = Math.sin(((scroll - 0.15) / 0.7) * Math.PI); 
      }

      // Emissive core glow logic
      if (coreRef.current) {
        // Glow intensifies at the end (90%+)
        const finalIntensity = scroll > 0.8 ? 2 + ((scroll - 0.8) / 0.2) * 3 : 2;
        (coreRef.current.material as THREE.MeshStandardMaterial).emissiveIntensity = finalIntensity;
        // Pulse at idle
        const pulse = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.2;
        coreRef.current.scale.setScalar(pulse);
      }

      // Disassemble Outer Shells
      if (shellRef1.current) {
        shellRef1.current.position.y = explosion * 1.5;
        shellRef1.current.position.x = explosion * 1.0;
        shellRef1.current.rotation.z = explosion * Math.PI;
      }
      if (shellRef2.current) {
        shellRef2.current.position.y = -explosion * 1.5;
        shellRef2.current.position.x = -explosion * 1.0;
        shellRef2.current.rotation.z = -explosion * Math.PI;
      }
      if (shellRef3.current) {
        shellRef3.current.position.z = explosion * 2.0;
        shellRef3.current.rotation.x = explosion * Math.PI;
      }

      // Outer rings expanding
      if (outerRingsRef.current) {
        outerRingsRef.current.scale.setScalar(1 + explosion * 2.5);
        outerRingsRef.current.rotation.y = state.clock.elapsedTime * 0.5 * (1 + explosion);
      }

      // Particles visibility and movement
      if (particlesRef.current) {
        particlesRef.current.rotation.y = state.clock.elapsedTime * 0.05;
        (particlesRef.current.material as THREE.PointsMaterial).opacity = explosion * 0.8;
      }
    }
  });

  const particlesCount = 800;
  // Keep initial positions deterministic for SSR/hydration.
  const [positions, setPositions] = useState<Float32Array>(() => new Float32Array(particlesCount * 3));

  useEffect(() => {
    const p = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i++) {
      p[i] = (Math.random() - 0.5) * 15;
    }
    setPositions(p);
  }, []);

  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
        
        {/* Inner Glowing Core */}
        <mesh ref={coreRef}>
          <octahedronGeometry args={[0.8, 1]} />
          <meshStandardMaterial 
            color="#ffffff" 
            emissive="#016795"
            emissiveIntensity={2}
            wireframe={true}
          />
        </mesh>

        <mesh>
           <sphereGeometry args={[0.7, 32, 32]} />
           <meshPhysicalMaterial 
             color="#016795" 
             transparent
             opacity={0.6}
             roughness={0.1}
             transmission={0.9} 
             thickness={1.5}
           />
        </mesh>

        {/* Outer Engine Shells */}
        <mesh ref={shellRef1}>
          <torusGeometry args={[1.2, 0.2, 16, 50, Math.PI]} />
          <meshStandardMaterial color="#0A0A0A" metalness={0.9} roughness={0.1} />
        </mesh>

        <mesh ref={shellRef2}>
          <torusGeometry args={[1.2, 0.2, 16, 50, Math.PI]} />
          <meshStandardMaterial color="#0A0A0A" metalness={0.9} roughness={0.1} />
        </mesh>
        
        <mesh ref={shellRef3} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.4, 0.05, 16, 100]} />
          <meshStandardMaterial color="#00AEEF" emissive="#00AEEF" emissiveIntensity={0.5} wireframe />
        </mesh>

        {/* Technical abstract rings */}
        <group ref={outerRingsRef}>
           <mesh rotation={[Math.PI / 4, 0, 0]}>
             <ringGeometry args={[1.8, 1.82, 64]} />
             <meshBasicMaterial color="#016795" side={THREE.DoubleSide} transparent opacity={0.5} />
           </mesh>
           <mesh rotation={[0, Math.PI / 4, 0]}>
             <ringGeometry args={[2.0, 2.02, 64]} />
             <meshBasicMaterial color="#00AEEF" side={THREE.DoubleSide} transparent opacity={0.3} />
           </mesh>
        </group>
      </Float>

      {/* Floating Particles */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute 
            attach="attributes-position"
            args={[positions, 3]}
            count={particlesCount}
          />
        </bufferGeometry>
        <pointsMaterial size={0.05} color="#00AEEF" transparent opacity={0} sizeAttenuation depthWrite={false} blending={THREE.AdditiveBlending} />
      </points>
    </group>
  );
}

export default function Scene({ scrollYProgress }: SceneProps) {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 45 }} dpr={[1, 2]}>
      <color attach="background" args={['#020202']} /> {/* slightly darker than bg to simulate fog/depth */}
      
      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
      <pointLight position={[-10, -5, -5]} intensity={2} color="#016795" />
      <pointLight position={[0, -2, 0]} intensity={1.5} color="#00AEEF" />
      
      <Suspense fallback={null}>
        <CinematicCamera scrollYProgress={scrollYProgress} />
        <DigitalEngine scrollYProgress={scrollYProgress} />
        <Environment preset="city" />
        <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
      </Suspense>

      {/* Awwwards Polish: Bloom & Glow */}
      <EffectComposer>
        <Bloom luminanceThreshold={0.5} luminanceSmoothing={0.9} intensity={1.5} mipmapBlur />
      </EffectComposer>
      
      <Preload all />
    </Canvas>
  );
}
