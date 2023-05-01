import React, { useRef, useState } from "react";
import { ThreeElements, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Cube(props: ThreeElements['mesh']) {
    // This reference gives us direct access to the THREE.Mesh object
    const ref = useRef<any>();
    // Hold state for hovered and clicked events
    const [hovered, hover] = useState(false);
    const [clicked, click] = useState(false);

    const [textures] = useState([
        new THREE.TextureLoader().load('https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png'),
        new THREE.TextureLoader().load('https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png'),
        new THREE.TextureLoader().load('https://pbs.twimg.com/profile_images/1390736294666506242/_D_h6aWq_400x400.png'),
        new THREE.TextureLoader().load('https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_1080,q_100,w_1080/v1/gcs/platform-data-dsc/events/spring-boot-1_5zDxm9B.jpg'),
        new THREE.TextureLoader().load('https://blog.teamtreehouse.com/wp-content/uploads/2015/05/87a5a0fdc86455c3f94b0b0eebfdb1b9_400x400.png'),
        new THREE.TextureLoader().load('https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2048px-Git_icon.svg.png'),
    ]);


    const materials = textures.map((texture) => new THREE.MeshStandardMaterial({ map: texture }));


    // Subscribe this component to the render-loop, rotate the mesh every frame
    useFrame((state, delta) => {
        ref.current.rotation.x += 0.01;
        ref.current.rotation.y += 0.01;
    });
    // Return the view, these are regular Threejs elements expressed in JSX
    return (
        <mesh
            {...props}
            ref={ref}
            scale={2}
            onClick={(event) => click(!clicked)}
            onPointerOver={(event) => hover(true)}
            onPointerOut={(event) => hover(false)}
        >
            <boxGeometry args={[1, 1, 1, 1]} attach="geometry" />

            <meshStandardMaterial key={0} attach="material-0" color={hovered ? 'white' : 'gray'} displacementScale={0.2} map={textures[0]} />
            <meshStandardMaterial key={1} attach="material-1" color={hovered ? 'white' : 'gray'} displacementScale={0.2} map={textures[1]} />
            <meshStandardMaterial key={2} attach="material-2" color={hovered ? 'white' : 'gray'} displacementScale={0.2} map={textures[2]} />
            <meshStandardMaterial key={3} attach="material-3" color={hovered ? 'white' : 'gray'} displacementScale={0.2} map={textures[3]} />
            <meshStandardMaterial key={4} attach="material-4" color={hovered ? 'white' : 'gray'} displacementScale={0.2} map={textures[4]} />
            <meshStandardMaterial key={5} attach="material-5" color={hovered ? 'white' : 'gray'} displacementScale={0.2} map={textures[5]} />

        </mesh>
    );
}

export default Cube;