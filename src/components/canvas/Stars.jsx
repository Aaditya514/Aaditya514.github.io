import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Stars = (props) => {
  const ref = useRef();
  const [sphere] = useState(() => {
    // 1200 points * 3 (x, y, z) = 3600 floats. Guaranteed clean 3-stride.
    const coords = random.inSphere(new Float32Array(3600), { radius: 1.2 });
    for (let i = 0; i < coords.length; i++) {
      if (isNaN(coords[i])) coords[i] = 0;
    }
    return coords;
  });

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.0022}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className="w-full h-auto absolute inset-0 z-[-1] pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 1] }}
        dpr={[1, 1.5]}
        gl={{ powerPreference: "low-power", antialias: false }}
      >
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default StarsCanvas;