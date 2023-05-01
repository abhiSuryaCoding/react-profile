import { Canvas } from '@react-three/fiber';
import './Banner.css'
import Navbar from './Navbar/Navbar';
import Skills from './Skills';
import Cube from './3D-Cube/Cube';
import { Suspense } from 'react';
import { OrbitControls, useTexture } from "@react-three/drei";
import BottomContainer from './Bottom-container/BottomContainer';

function Banner() {
    return (
        <>
            <div className='banner-bg'>
                <Navbar />
                <div className='d-flex'>
                    <div className='my-auto text-center'>
                        <h1 className='main-text'>Hi, I'm <span id='name'>Abhishek Suryawanshi</span></h1>
                    </div>
                    <div className='cube-container'>
                        <Canvas >
                            <Suspense fallback={null}>
                                <pointLight position={[10, 10, 10]} />

                                <Cube position={[-1.2, 0, 0]} />
                                <OrbitControls enableZoom />
                                <ambientLight intensity={0.2} />
                                <directionalLight />
                            </Suspense>

                        </Canvas>
                    </div>
                </div>
            </div>
                {/* <BottomContainer></BottomContainer>
                <BottomContainer></BottomContainer>
                <BottomContainer></BottomContainer>
                <BottomContainer></BottomContainer>
                <BottomContainer></BottomContainer>
                <BottomContainer></BottomContainer>
                <BottomContainer></BottomContainer>
                <BottomContainer></BottomContainer>
                <BottomContainer></BottomContainer>
                 */}
                <div className='banner-bg'>
                <BottomContainer></BottomContainer>
                </div>



        </>
    );
}

export default Banner;