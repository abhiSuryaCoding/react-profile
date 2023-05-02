import SecondaryNav from "./SecondaryNav/SecondaryNav";
import './CoverLetter.css'
import Zoom from 'react-reveal/Zoom';
function CoverLetter() {
    return (
        <>
            <main>
                <SecondaryNav></SecondaryNav>
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center mb-4">
                            <img src="https://media.licdn.com/dms/image/C5603AQH-Q0p5W9vtZw/profile-displayphoto-shrink_200_200/0/1614521000182?e=1688601600&v=beta&t=kpsXay5ncEumTZvn2BuIOVE1wcezw_zdPtAE-flK4Ss" alt="..." className="img-thumbnail user-img" />
                        </div>
                        <Zoom>

                        <div className="col-12">
                            <blockquote className="q-card q-card-color-2">
                                <div className="px-4">
                                    <p>
                                        With 11 months of experience in product development from scratch using Angular 12, I have a strong foundation in creating responsive and dynamic web applications. My experience in HTML, CSS, Bootstrap 5, and jQuery has given me the ability to build beautiful and intuitive interfaces that provide a seamless user experience.
                                    </p> 

                                    <p>
                                        In addition to my frontend expertise, I have also worked with ThreeJS for animated 3D computer graphics in a web browser using WebGL. This has allowed me to push the boundaries of traditional web design and create visually stunning websites that stand out from the competition. I have also designed web apps with performance standards in mind, following Google's PageSpeed Insights (PSI) reports to ensure that the user experience is fast and efficient.
                                    </p>

                                    <p>
                                        Furthermore, I have experience with payment gateway integration with vendors like CashFree, which has enabled me to create secure and seamless payment experiences for users. My knowledge of designing backend architecture and APIs in Springboot has allowed me to create robust and scalable applications. I am also able to implement and follow REST architectural constraints for API designing.
                                    </p>
 
                                </div>
                                <div className='author'>Abhishek Suryawanshi</div>
                            </blockquote>
                        </div>
                        </Zoom>
                    </div>
                </div>
            </main>
        </>
    );
}

export default CoverLetter;