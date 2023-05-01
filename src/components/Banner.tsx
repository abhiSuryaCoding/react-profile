import { Canvas } from '@react-three/fiber';
import './Banner.css'
import Navbar from './Navbar/Navbar';
import Skills from './Skills';
import Cube from './3D-Cube/Cube';
import { Suspense } from 'react';
import { OrbitControls, useTexture } from "@react-three/drei";
import BottomContainer from './Bottom-container/BottomContainer';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import Timeline from './Timeline/Timeline';

function Banner() {

    return (
        <>
            <div className='banner-bg'>
                <Navbar />
                <div className='d-flex responsive-size'>
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
            <section id="exp-sec">
                <header className='sec-header text-center py-4'>
                    <h1>Experience</h1>
                </header>
                <Timeline></Timeline>
            </section>

        </>
    );
}

export default Banner;