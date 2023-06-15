import React, { useLayoutEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { Cloud, Float, PerspectiveCamera, useScroll, Stars } from "@react-three/drei";
import Background from "./Background";
import Airplane from "./Components/Airplane";
import { useFrame } from "@react-three/fiber";
import TextSection from "./Components/TextSection";
import {  Vector3 } from "three";
import { gsap } from "gsap";
import { textDisplay } from "./Components/Sections/textDisplay";
import { cloudDisplay } from "./Components/Sections/cloudDisplay";
import { usePlay } from "./Play";

const LINE_IN_POINTS = 1000;
const CURVE_DISTANCE = 250;
const CURVE_AHEAD_CAMERA = 0.008;
const FRICTION_DIS = 42;

export const curvePoints = [
  new THREE.Vector3(0, 0, 0),
  new THREE.Vector3(0, 0, -CURVE_DISTANCE),
  new THREE.Vector3(100, 0, -2 * CURVE_DISTANCE),
  new THREE.Vector3(-100, 0, -3 * CURVE_DISTANCE),
  new THREE.Vector3(100, 0, -4 * CURVE_DISTANCE),
  new THREE.Vector3(0, 0, -5 * CURVE_DISTANCE),
  new THREE.Vector3(0, 0, -6 * CURVE_DISTANCE),
  new THREE.Vector3(0, 0, -7 * CURVE_DISTANCE),
]


const FlightLine = () => {
  const curve = useMemo(() => {
    return new THREE.CatmullRomCurve3(curvePoints, false, "catmullrom", 0.5);
  }, []);

  const shape = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(0, -0.08);
    shape.lineTo(0, 0.08);

    return shape;
  }, [curve]);

  return (
    <group position-y={-2}>
      <mesh >
        <extrudeGeometry args={[shape, {
          steps: LINE_IN_POINTS,
          bevelEnabled: false,
          extrudePath: curve,
        }]} />
        <meshStandardMaterial
          color={"white"}
          transparent
          opacity={0.3}
          envMapIntensity={2}
        />
      </mesh>
    </group>
  )
}

const Experience = () => {
  const sceneOpacity = useRef(0);
  const curve = useMemo(() => {
    return new THREE.CatmullRomCurve3(curvePoints, false, "catmullrom", 0.5);
  }, []);

  const textSections = useMemo(() => { return textDisplay() }, [])
  const cloudSections = useMemo(() => { return cloudDisplay() }, [])
  const cameraGroup = useRef();
  const cameraRails = useRef();
  const scroll = useScroll();
  const { end, setEnd } = usePlay()


  useFrame((_state, delta) => {
    const scrollOffset = Math.max(0, scroll.offset);
    textSections.forEach((textSection) => {
      const distance = textSection.position.distanceTo(cameraGroup.current.position)
      if (distance < FRICTION_DIS) {
        const targetCameraRailPosition = new Vector3((1 - distance / FRICTION_DIS) * textSection.cameraRailDistance, 0, 0);
        cameraRails.current.position.lerp(targetCameraRailPosition, delta)
      }
    })
    if (end && sceneOpacity.current > 0) {
      sceneOpacity.current = THREE.MathUtils.lerp(
        sceneOpacity.current,
        0,
        delta
      );
    }

    if (end) {
      return;
    }
    if (
      cameraGroup.current.position.z <
      curvePoints[curvePoints.length - 1].z + 100
    ) {
      setEnd(true);
      planeOutTl.current.play();
    }

    tl.current.seek(scrollOffset * tl.current.duration())
    const curPoint = curve.getPoint(scrollOffset);

    // Follow the curve points
    cameraGroup.current.position.lerp(curPoint, delta * 24);

    // Make the group look ahead on the curve

    const lookAtPoint = curve.getPoint(
      Math.min(scrollOffset + CURVE_AHEAD_CAMERA, 1)
    );

    const currentLookAt = cameraGroup.current.getWorldDirection(
      new THREE.Vector3()
    );
    const targetLookAt = new THREE.Vector3()
      .subVectors(curPoint, lookAtPoint)
      .normalize();

    const lookAt = currentLookAt.lerp(targetLookAt, delta * 24);
    cameraGroup.current.lookAt(
      cameraGroup.current.position.clone().add(lookAt)
    );


  });

  const airplane = useRef();
  const tl = useRef();
  const planeOutTl = useRef();

  const backgroundColors = useRef({
    colorA: "#243c3b",
    colorB: "#946c4c",
  });

  useLayoutEffect(() => {
    tl.current = gsap.timeline();

    tl.current.to(backgroundColors.current, {
      duration: 1,
      colorA: "#2e576a",
      colorB: "#c45513",
    });
    tl.current.to(backgroundColors.current, {
      duration: 1,
      colorA: "#04578d",
      colorB: "#b2ddfb",
    });
    tl.current.to(backgroundColors.current, {
      duration: 1,
      colorA: "#4b2c50",
      colorB: "#ce3e3c",
    });

    tl.current.pause();
    planeOutTl.current = gsap.timeline();
    planeOutTl.current.pause();

    planeOutTl.current.to(
      airplane.current.position,
      {
        duration: 10,
        z: -250,
        y: 10,
      },
      0
    );
    planeOutTl.current.to(
      cameraRails.current.position,
      {
        duration: 8,
        y: 12,
      },
      0
    );
  }, []);


  return (
    <>
      <directionalLight position={[0, 3, 1]} intensity={0.1} />
      {/* <OrbitControls enableZoom={false} /> */}
      <group ref={cameraGroup}>
        <Background backgroundColors={backgroundColors} />
        <group ref={cameraRails}>
          <PerspectiveCamera position={[0, 0, 5]} fov={50} makeDefault />
        </group>
        <group ref={airplane}>
          <Float floatIntensity={2} speed={2}>
            <Airplane rotation-y={Math.PI / 2} scale={[0.5, 0.5, 0.5]} position-y={0.4} />
          </Float>
        </group>
      </group>
      {textSections.map((textSection, index) => (<TextSection {...textSection} key={index} />))}
      <FlightLine />
      {cloudSections.map((cloud, index) => (<Cloud {...cloud} key={index} />))}
      <Cloud opacity={0.3} position={[-2, -4, -15]} />
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
    </>
  )
};

export default Experience;