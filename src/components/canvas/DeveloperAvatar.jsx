import { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, RoundedBox, Sphere, Cylinder, Torus, ContactShadows } from "@react-three/drei";
import * as THREE from "three";

/**
 * Standalone 3D Cartoon Avatar Character
 * Designed specifically for a modern software developer portfolio.
 * 
 * Clean Pixar-style stylized 3D appearance:
 * - ONE clean, smooth skin surface on head/face (no overlapping transparent patches or shadow bands)
 * - Large expressive cartoon eyes with glossy pupils & dual specular highlights (EXACTLY preserved)
 * - Soft, broad front-facing studio lighting (face remains bright, smooth and readable)
 * - Neat beard with clean edges at lower jaw/chin
 * - Dark charcoal oversized hoodie with kangaroo pocket & metallic aglets
 * - Plain dark T-shirt peeking at collar notch
 * - Slim dark jeans & clean modern sneakers
 * - Smartwatch on right wrist with subtle glowing status display
 * - Slim modern space-grey laptop held under left arm with glowing Git badge
 * - Screen-wide cursor tracking (head rotation + gaze) with smooth lerp
 */
const DeveloperMascot = () => {
  const headGroupRef = useRef();
  const neckRef = useRef();
  const torsoRef = useRef();
  const leftEyeRef = useRef();
  const rightEyeRef = useRef();
  const leftPupilRef = useRef();
  const rightPupilRef = useRef();
  const laptopRef = useRef();

  // Screen-wide normalized mouse coordinates [-1 to 1]
  const screenMouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      screenMouse.current = { x, y };
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame((state) => {
    const { x, y } = screenMouse.current;

    // Smooth head tracking cursor across entire window
    if (headGroupRef.current) {
      headGroupRef.current.rotation.y = THREE.MathUtils.lerp(
        headGroupRef.current.rotation.y,
        x * 0.62,
        0.08
      );
      headGroupRef.current.rotation.x = THREE.MathUtils.lerp(
        headGroupRef.current.rotation.x,
        -y * 0.36,
        0.08
      );
      headGroupRef.current.rotation.z = THREE.MathUtils.lerp(
        headGroupRef.current.rotation.z,
        -x * 0.08,
        0.08
      );
    }

    // Neck tracks with subtle lag
    if (neckRef.current) {
      neckRef.current.rotation.y = THREE.MathUtils.lerp(
        neckRef.current.rotation.y,
        x * 0.22,
        0.06
      );
      neckRef.current.rotation.x = THREE.MathUtils.lerp(
        neckRef.current.rotation.x,
        -y * 0.14,
        0.06
      );
    }

    // Lively cartoon eyes gaze follow cursor
    const lookX = x * 0.026;
    const lookY = y * 0.022;

    if (leftPupilRef.current && rightPupilRef.current) {
      leftPupilRef.current.position.x = THREE.MathUtils.lerp(
        leftPupilRef.current.position.x,
        lookX,
        0.2
      );
      leftPupilRef.current.position.y = THREE.MathUtils.lerp(
        leftPupilRef.current.position.y,
        lookY,
        0.2
      );

      rightPupilRef.current.position.x = THREE.MathUtils.lerp(
        rightPupilRef.current.position.x,
        lookX,
        0.2
      );
      rightPupilRef.current.position.y = THREE.MathUtils.lerp(
        rightPupilRef.current.position.y,
        lookY,
        0.2
      );
    }

    // Breathing float on torso
    if (torsoRef.current) {
      torsoRef.current.position.y =
        -0.42 + Math.sin(state.clock.elapsedTime * 2.2) * 0.012;
      torsoRef.current.rotation.y = THREE.MathUtils.lerp(
        torsoRef.current.rotation.y,
        x * 0.1,
        0.04
      );
    }
  });

  // Color Palette per specification: Clean, smooth warm-medium skin
  const skinColor = "#e69c83"; // Clean, warm-medium skin tone (bright & smooth)
  const skinShadow = "#d68b72"; // Soft warm tone for nose
  const stubbleColor = "#452d22"; // Neat short beard / stubble contour with clean edges
  const hairColor = "#221711"; // Medium-length dark brown messy hair
  const eyebrowColor = "#1a120c";
  const hoodieColor = "#1a1a24"; // Dark charcoal/black oversized hoodie
  const tshirtColor = "#0f1015"; // Plain dark T-shirt underneath
  const jeansColor = "#1e2533"; // Slim dark indigo jeans
  const sneakerWhite = "#f8fafc"; // Clean modern sneakers
  const sneakerGrey = "#94a3b8";
  const sneakerDark = "#334155";
  const laptopMetal = "#2e3440"; // Space-grey slim modern laptop
  const glowAccent = "#00cea8"; // Subtle smartwatch cyan glow
  const gitPurple = "#a855f7"; // Subtle Git/code purple glow

  return (
    <group position={[0, -0.3, 0]} scale={0.88}>
      {/* ================= LOWER BODY: SLIM DARK JEANS & MODERN SNEAKERS ================= */}
      <group position={[0, -1.02, 0]}>
        {/* Left Leg */}
        <group position={[-0.21, -0.4, 0.02]} rotation={[0.04, 0, 0.05]}>
          <Cylinder args={[0.125, 0.105, 0.74, 20]}>
            <meshStandardMaterial color={jeansColor} roughness={0.75} />
          </Cylinder>
          {/* Left Pant Cuff */}
          <group position={[0, -0.36, 0]}>
            <Cylinder args={[0.115, 0.115, 0.06, 20]}>
              <meshStandardMaterial color="#161c28" roughness={0.7} />
            </Cylinder>
          </group>

          {/* Left Sneaker */}
          <group position={[0, -0.44, 0.08]} rotation={[-0.04, 0.08, 0]}>
            <RoundedBox args={[0.21, 0.08, 0.46]} radius={0.035} position={[0, -0.04, 0]}>
              <meshStandardMaterial color={sneakerWhite} roughness={0.3} />
            </RoundedBox>
            <RoundedBox args={[0.19, 0.13, 0.4]} radius={0.05} position={[0, 0.04, 0]}>
              <meshStandardMaterial color={sneakerGrey} roughness={0.6} />
            </RoundedBox>
            <RoundedBox args={[0.185, 0.1, 0.14]} radius={0.03} position={[0, 0.05, -0.13]}>
              <meshStandardMaterial color={sneakerDark} roughness={0.5} />
            </RoundedBox>
            <group position={[0, 0.02, -0.2]}>
              <RoundedBox args={[0.12, 0.03, 0.04]} radius={0.015}>
                <meshBasicMaterial color={glowAccent} />
              </RoundedBox>
            </group>
            <Sphere position={[0, 0.01, 0.17]} args={[0.092, 16, 16]} scale={[1, 0.6, 0.8]}>
              <meshStandardMaterial color={sneakerWhite} roughness={0.3} />
            </Sphere>
          </group>
        </group>

        {/* Right Leg */}
        <group position={[0.21, -0.4, 0.02]} rotation={[-0.03, 0, -0.05]}>
          <Cylinder args={[0.125, 0.105, 0.74, 20]}>
            <meshStandardMaterial color={jeansColor} roughness={0.75} />
          </Cylinder>
          {/* Right Pant Cuff */}
          <group position={[0, -0.36, 0]}>
            <Cylinder args={[0.115, 0.115, 0.06, 20]}>
              <meshStandardMaterial color="#161c28" roughness={0.7} />
            </Cylinder>
          </group>

          {/* Right Sneaker */}
          <group position={[0, -0.44, 0.08]} rotation={[0.03, -0.08, 0]}>
            <RoundedBox args={[0.21, 0.08, 0.46]} radius={0.035} position={[0, -0.04, 0]}>
              <meshStandardMaterial color={sneakerWhite} roughness={0.3} />
            </RoundedBox>
            <RoundedBox args={[0.19, 0.13, 0.4]} radius={0.05} position={[0, 0.04, 0]}>
              <meshStandardMaterial color={sneakerGrey} roughness={0.6} />
            </RoundedBox>
            <RoundedBox args={[0.185, 0.1, 0.14]} radius={0.03} position={[0, 0.05, -0.13]}>
              <meshStandardMaterial color={sneakerDark} roughness={0.5} />
            </RoundedBox>
            <group position={[0, 0.02, -0.2]}>
              <RoundedBox args={[0.12, 0.03, 0.04]} radius={0.015}>
                <meshBasicMaterial color={glowAccent} />
              </RoundedBox>
            </group>
            <Sphere position={[0, 0.01, 0.17]} args={[0.092, 16, 16]} scale={[1, 0.6, 0.8]}>
              <meshStandardMaterial color={sneakerWhite} roughness={0.3} />
            </Sphere>
          </group>
        </group>
      </group>

      {/* ================= TORSO: OVERSIZED CHARCOAL HOODIE & T-SHIRT ================= */}
      <group ref={torsoRef} position={[0, -0.42, 0]}>
        {/* Main Oversized Hoodie Body */}
        <RoundedBox
          args={[1.18, 0.94, 0.72]}
          radius={0.34}
          smoothness={6}
          position={[0, 0, 0]}
        >
          <meshStandardMaterial
            color={hoodieColor}
            roughness={0.7}
            metalness={0.02}
          />
        </RoundedBox>

        {/* Ribbed Bottom Hem Band */}
        <group position={[0, -0.46, 0]}>
          <Cylinder args={[0.54, 0.52, 0.1, 32]}>
            <meshStandardMaterial color="#14141d" roughness={0.8} />
          </Cylinder>
        </group>

        {/* Plain Dark T-Shirt Peeking at Collar Notch */}
        <group position={[0, 0.46, 0.02]}>
          <Cylinder args={[0.25, 0.28, 0.12, 24]}>
            <meshStandardMaterial color={tshirtColor} roughness={0.8} />
          </Cylinder>
        </group>

        {/* Hoodie Collar Ring */}
        <group position={[0, 0.42, 0]}>
          <Cylinder args={[0.28, 0.33, 0.12, 24]}>
            <meshStandardMaterial color="#22222e" roughness={0.65} />
          </Cylinder>
        </group>

        {/* Soft Folded Hood draped on shoulders */}
        <group position={[0, 0.35, -0.22]} rotation={[0.4, 0, 0]}>
          <RoundedBox args={[0.76, 0.28, 0.38]} radius={0.12}>
            <meshStandardMaterial color={hoodieColor} roughness={0.72} />
          </RoundedBox>
        </group>

        {/* Front Kangaroo Hoodie Pocket */}
        <group position={[0, -0.16, 0.35]}>
          <RoundedBox args={[0.66, 0.34, 0.08]} radius={0.06}>
            <meshStandardMaterial color="#15151e" roughness={0.72} />
          </RoundedBox>
        </group>

        {/* Hoodie Drawstrings with Metallic Aglet Tips */}
        <group position={[-0.09, 0.25, 0.38]}>
          <Cylinder args={[0.009, 0.009, 0.24, 10]}>
            <meshStandardMaterial color="#f1f5f9" roughness={0.5} />
          </Cylinder>
          <Sphere position={[0, -0.13, 0]} args={[0.016, 10, 10]}>
            <meshStandardMaterial color="#cbd5e1" metalness={0.9} roughness={0.15} />
          </Sphere>
        </group>
        <group position={[0.09, 0.22, 0.38]}>
          <Cylinder args={[0.009, 0.009, 0.2, 10]}>
            <meshStandardMaterial color="#f1f5f9" roughness={0.5} />
          </Cylinder>
          <Sphere position={[0, -0.11, 0]} args={[0.016, 10, 10]}>
            <meshStandardMaterial color="#cbd5e1" metalness={0.9} roughness={0.15} />
          </Sphere>
        </group>

        {/* ================= RIGHT ARM: CASUAL RELAXED ARM WITH SMARTWATCH ================= */}
        <group position={[0.55, 0.24, 0]} rotation={[-0.08, 0, -0.24]}>
          {/* Upper Arm */}
          <Cylinder args={[0.13, 0.12, 0.42, 16]} position={[0.06, -0.18, 0]}>
            <meshStandardMaterial color={hoodieColor} roughness={0.7} />
          </Cylinder>

          {/* Forearm angled naturally downward */}
          <group position={[0.08, -0.4, 0.04]} rotation={[0.38, 0.1, -0.08]}>
            <Cylinder args={[0.115, 0.095, 0.38, 16]} position={[0, -0.15, 0]}>
              <meshStandardMaterial color={hoodieColor} roughness={0.7} />
            </Cylinder>

            {/* Smartwatch on Wrist */}
            <group position={[0, -0.32, 0]}>
              <Cylinder args={[0.098, 0.098, 0.06, 20]}>
                <meshStandardMaterial color="#09090b" roughness={0.3} metalness={0.2} />
              </Cylinder>
              <RoundedBox args={[0.095, 0.065, 0.04]} radius={0.015} position={[0, 0, 0.09]}>
                <meshStandardMaterial color="#18181b" metalness={0.8} roughness={0.2} />
              </RoundedBox>
              <group position={[0, 0, 0.112]}>
                <RoundedBox args={[0.075, 0.045, 0.005]} radius={0.008}>
                  <meshBasicMaterial color={glowAccent} />
                </RoundedBox>
              </group>
            </group>

            {/* Hand */}
            <group position={[0, -0.44, 0]}>
              <Sphere args={[0.085, 16, 16]} scale={[0.9, 1.2, 0.7]}>
                <meshStandardMaterial color={skinColor} roughness={0.42} />
              </Sphere>
            </group>
          </group>
        </group>

        {/* ================= LEFT ARM: HOLDING SLIM MODERN LAPTOP ================= */}
        <group position={[-0.55, 0.24, 0]} rotation={[0.22, 0, 0.22]}>
          {/* Upper Arm */}
          <Cylinder args={[0.13, 0.12, 0.42, 16]} position={[-0.06, -0.18, 0]}>
            <meshStandardMaterial color={hoodieColor} roughness={0.7} />
          </Cylinder>

          {/* Forearm */}
          <group position={[-0.08, -0.38, 0.1]} rotation={[-0.45, -0.15, 0]}>
            <Cylinder args={[0.115, 0.095, 0.38, 16]} position={[0, -0.15, 0]}>
              <meshStandardMaterial color={hoodieColor} roughness={0.7} />
            </Cylinder>

            {/* Hand */}
            <group position={[0, -0.38, 0]}>
              <Sphere args={[0.085, 16, 16]} scale={[0.9, 1.1, 0.8]}>
                <meshStandardMaterial color={skinColor} roughness={0.42} />
              </Sphere>
            </group>

            {/* Laptop */}
            <group ref={laptopRef} position={[0.02, -0.32, 0.12]} rotation={[-0.1, 0.35, 0.8]}>
              <RoundedBox args={[0.74, 0.035, 0.54]} radius={0.028}>
                <meshStandardMaterial
                  color={laptopMetal}
                  metalness={0.88}
                  roughness={0.2}
                />
              </RoundedBox>

              {/* Glowing Git Emblem on Lid */}
              <group position={[0, 0.02, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <Cylinder args={[0.065, 0.065, 0.005, 24]}>
                  <meshStandardMaterial color="#1e293b" metalness={0.6} roughness={0.3} />
                </Cylinder>
                <Sphere position={[0, 0.004, 0]} args={[0.024, 14, 14]}>
                  <meshBasicMaterial color={gitPurple} />
                </Sphere>
                <Sphere position={[-0.035, 0.004, 0]} args={[0.009, 10, 10]}>
                  <meshBasicMaterial color={glowAccent} />
                </Sphere>
                <Sphere position={[0.035, 0.004, 0]} args={[0.009, 10, 10]}>
                  <meshBasicMaterial color={glowAccent} />
                </Sphere>
              </group>
            </group>
          </group>
        </group>
      </group>

      {/* ================= CONNECTED HUMAN NECK ================= */}
      <group ref={neckRef} position={[0, 0.04, 0]}>
        <Cylinder args={[0.16, 0.21, 0.32, 24]} position={[0, 0.04, 0]}>
          <meshStandardMaterial
            color={skinShadow}
            roughness={0.42}
            metalness={0.0}
          />
        </Cylinder>
      </group>

      {/* ================= 3D CARTOON HEAD & EXPRESSIVE FACE ================= */}
      {/* ONE clean, smooth skin surface on head/face - no overlapping transparent shapes */}
      <group ref={headGroupRef} position={[0, 0.46, 0]}>
        {/* Continuous Smooth Head Base */}
        <Sphere args={[0.53, 48, 48]} scale={[0.96, 1.12, 0.94]}>
          <meshStandardMaterial
            color={skinColor}
            roughness={0.44}
            metalness={0.0}
          />
        </Sphere>

        {/* Neat Short Stubble / Beard with clean defined edges at lower jaw & chin */}
        <group position={[0, -0.33, 0.12]}>
          <Sphere args={[0.22, 28, 28]} scale={[1.05, 0.88, 0.86]}>
            <meshStandardMaterial
              color={stubbleColor}
              roughness={0.78}
              metalness={0.0}
            />
          </Sphere>
        </group>

        {/* Ears with Small Wireless Earbuds */}
        {/* Left Ear */}
        <group position={[-0.49, 0.02, 0]}>
          <Sphere args={[0.13, 20, 20]} scale={[0.45, 1.15, 0.85]}>
            <meshStandardMaterial color={skinShadow} roughness={0.45} />
          </Sphere>
          <group position={[0.02, 0, 0.04]}>
            <Sphere args={[0.035, 14, 14]}>
              <meshStandardMaterial color="#f8fafc" roughness={0.2} metalness={0.1} />
            </Sphere>
            <Cylinder args={[0.012, 0.01, 0.06, 10]} position={[0, -0.04, 0.01]} rotation={[0.2, 0, 0]}>
              <meshStandardMaterial color="#f8fafc" roughness={0.2} />
            </Cylinder>
          </group>
        </group>

        {/* Right Ear */}
        <group position={[0.49, 0.02, 0]}>
          <Sphere args={[0.13, 20, 20]} scale={[0.45, 1.15, 0.85]}>
            <meshStandardMaterial color={skinShadow} roughness={0.45} />
          </Sphere>
          <group position={[-0.02, 0, 0.04]}>
            <Sphere args={[0.035, 14, 14]}>
              <meshStandardMaterial color="#f8fafc" roughness={0.2} metalness={0.1} />
            </Sphere>
            <Cylinder args={[0.012, 0.01, 0.06, 10]} position={[0, -0.04, 0.01]} rotation={[0.2, 0, 0]}>
              <meshStandardMaterial color="#f8fafc" roughness={0.2} />
            </Cylinder>
          </group>
        </group>

        {/* Thick Expressive Eyebrows */}
        <group position={[-0.17, 0.25, 0.46]} rotation={[0.06, 0, -0.07]}>
          <RoundedBox args={[0.18, 0.055, 0.04]} radius={0.026}>
            <meshStandardMaterial color={eyebrowColor} roughness={0.65} />
          </RoundedBox>
        </group>
        <group position={[0.17, 0.25, 0.46]} rotation={[0.06, 0, 0.07]}>
          <RoundedBox args={[0.18, 0.055, 0.04]} radius={0.026}>
            <meshStandardMaterial color={eyebrowColor} roughness={0.65} />
          </RoundedBox>
        </group>

        {/* Large Friendly Cartoon Eyes (KEPT EXACTLY AS THEY ARE) */}
        {/* Left Eye */}
        <group ref={leftEyeRef} position={[-0.165, 0.09, 0.47]}>
          {/* Eye Sclera (Soft White) */}
          <Sphere args={[0.075, 24, 24]} scale={[0.88, 1.3, 0.7]}>
            <meshStandardMaterial color="#f8fafc" roughness={0.15} />
          </Sphere>

          {/* Iris & Pupil Group (Gaze Tracking) */}
          <group ref={leftPupilRef} position={[0, 0, 0.04]}>
            {/* Deep Warm Espresso Iris */}
            <Sphere args={[0.052, 20, 20]} scale={[0.88, 1.25, 0.6]}>
              <meshStandardMaterial color="#2d1a12" roughness={0.1} />
            </Sphere>
            {/* Glossy Black Pupil */}
            <Sphere position={[0, 0, 0.018]} args={[0.034, 16, 16]} scale={[0.88, 1.2, 0.6]}>
              <meshStandardMaterial color="#050508" roughness={0.05} />
            </Sphere>
            {/* Primary Catchlight Dot */}
            <Sphere position={[-0.016, 0.025, 0.038]} args={[0.016, 12, 12]}>
              <meshBasicMaterial color="#ffffff" />
            </Sphere>
            {/* Secondary Micro Catchlight Dot */}
            <Sphere position={[0.012, -0.018, 0.038]} args={[0.008, 10, 10]}>
              <meshBasicMaterial color="#ffffff" />
            </Sphere>
          </group>
        </group>

        {/* Right Eye */}
        <group ref={rightEyeRef} position={[0.165, 0.09, 0.47]}>
          {/* Eye Sclera */}
          <Sphere args={[0.075, 24, 24]} scale={[0.88, 1.3, 0.7]}>
            <meshStandardMaterial color="#f8fafc" roughness={0.15} />
          </Sphere>

          {/* Iris & Pupil Group */}
          <group ref={rightPupilRef} position={[0, 0, 0.04]}>
            {/* Deep Warm Espresso Iris */}
            <Sphere args={[0.052, 20, 20]} scale={[0.88, 1.25, 0.6]}>
              <meshStandardMaterial color="#2d1a12" roughness={0.1} />
            </Sphere>
            {/* Glossy Black Pupil */}
            <Sphere position={[0, 0, 0.018]} args={[0.034, 16, 16]} scale={[0.88, 1.2, 0.6]}>
              <meshStandardMaterial color="#050508" roughness={0.05} />
            </Sphere>
            {/* Primary Catchlight Dot */}
            <Sphere position={[-0.016, 0.025, 0.038]} args={[0.016, 12, 12]}>
              <meshBasicMaterial color="#ffffff" />
            </Sphere>
            {/* Secondary Micro Catchlight Dot */}
            <Sphere position={[0.012, -0.018, 0.038]} args={[0.008, 10, 10]}>
              <meshBasicMaterial color="#ffffff" />
            </Sphere>
          </group>
        </group>

        {/* Cute Rounded Cartoon Nose (Smooth single sphere with gentle shadow underneath) */}
        <group position={[0, -0.015, 0.505]}>
          <Sphere args={[0.062, 24, 24]} scale={[1.05, 0.92, 0.88]}>
            <meshStandardMaterial color={skinShadow} roughness={0.44} metalness={0.0} />
          </Sphere>
        </group>

        {/* Confident Friendly Slight Natural Smile */}
        <group position={[0, -0.185, 0.48]} rotation={[0.15, 0, 0]}>
          <Torus
            args={[0.095, 0.018, 14, 28, Math.PI * 0.72]}
            rotation={[0, 0, Math.PI * 0.64]}
          >
            <meshStandardMaterial color="#b9584e" roughness={0.42} />
          </Torus>
        </group>

        {/* ================= MEDIUM-LENGTH DARK BROWN SLIGHTLY MESSY DEVELOPER HAIR ================= */}
        <group position={[0, 0.23, -0.02]}>
          {/* Main Skull Hair Volume */}
          <Sphere args={[0.54, 36, 36]} scale={[1.02, 1.08, 1.04]}>
            <meshStandardMaterial
              color={hairColor}
              roughness={0.45}
              metalness={0.04}
            />
          </Sphere>

          {/* Messy Textured Top & Front Fringe Tufts */}
          <group position={[0, 0.32, 0.22]} rotation={[0.2, 0, 0]}>
            {/* Center Front Wave */}
            <Sphere args={[0.22, 20, 20]} scale={[1.3, 0.7, 0.9]}>
              <meshStandardMaterial color={hairColor} roughness={0.45} />
            </Sphere>
            {/* Messy Right Tuft */}
            <Sphere position={[0.18, 0.06, 0.04]} args={[0.15, 16, 16]} scale={[1.1, 0.8, 0.8]}>
              <meshStandardMaterial color={hairColor} roughness={0.45} />
            </Sphere>
            {/* Messy Left Tuft */}
            <Sphere position={[-0.18, 0.04, 0.04]} args={[0.15, 16, 16]} scale={[1.1, 0.8, 0.8]}>
              <meshStandardMaterial color={hairColor} roughness={0.45} />
            </Sphere>
            {/* Crown Volume */}
            <Sphere position={[0, 0.1, -0.16]} args={[0.26, 20, 20]} scale={[1.1, 0.7, 1.0]}>
              <meshStandardMaterial color={hairColor} roughness={0.45} />
            </Sphere>
          </group>

          {/* Clean Sideburns */}
          <RoundedBox
            position={[-0.45, -0.14, 0.08]}
            args={[0.07, 0.26, 0.2]}
            radius={0.03}
          >
            <meshStandardMaterial color={hairColor} roughness={0.5} />
          </RoundedBox>
          <RoundedBox
            position={[0.45, -0.14, 0.08]}
            args={[0.07, 0.26, 0.2]}
            radius={0.03}
          >
            <meshStandardMaterial color={hairColor} roughness={0.5} />
          </RoundedBox>
        </group>
      </group>
    </group>
  );
};

// Canvas Wrapper: Perfectly framed full-body developer mascot with soft studio lighting & ground shadow
const DeveloperAvatar = () => {
  return (
    <div className="w-full h-full relative flex items-center justify-center select-none pointer-events-auto">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, -0.32, 5.0], fov: 34 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        className="w-full h-full"
      >
        {/* Soft, broad ambient lighting so the entire face is evenly illuminated */}
        <ambientLight intensity={1.55} color="#ffffff" />

        {/* Soft, broad front-facing key light (placed directly in front & slightly above, eliminating harsh side shadows) */}
        <directionalLight
          position={[0.3, 1.8, 4.8]}
          intensity={1.75}
          color="#fffaf5"
        />

        {/* Gentle fill light from opposite angle to soften any remaining contrast */}
        <directionalLight
          position={[-0.8, 1.5, 4.5]}
          intensity={0.85}
          color="#f1f5f9"
        />

        {/* Soft rim backlight for hair & hoodie silhouette */}
        <pointLight position={[0, 3.5, -3.2]} intensity={1.9} color="#a855f7" />

        {/* Subtle ground bounce fill */}
        <pointLight position={[0.8, -2.2, 2.5]} intensity={0.5} color="#00cea8" />

        {/* Soft Ambient Ground Contact Shadow */}
        <ContactShadows
          position={[0, -1.68, 0]}
          opacity={0.45}
          scale={4.2}
          blur={2.4}
          far={2.2}
          color="#000000"
        />

        <Float
          speed={1.2}
          rotationIntensity={0.06}
          floatIntensity={0.14}
          floatingRange={[-0.015, 0.015]}
        >
          <DeveloperMascot />
        </Float>
      </Canvas>
    </div>
  );
};

export default DeveloperAvatar;
