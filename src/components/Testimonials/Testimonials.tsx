import './Testimonial.css'
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

function Testimonials() {

    const content = [
        {
            title: 'Hello world!',
            description: 'Some description for slider',
            img: ''
        },
        {
            title: 'Hello world!',
            description: 'Some description for slider',
            img: ''
        },
        {
            title: 'Hello world!',
            description: 'Some description for slider',
            img: ''
        }
    ]

    return (
        <>
            <section className='testimonial'>
                <Slider autoplay={300}>
                    {content.map((article, index) => <div key={index}>
                        <div className="testimonial4_slide">
                            <img src="https://i.ibb.co/8x9xK4H/team.jpg" className="img-circle img-responsive" />
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                            <h4>Client {index+1}</h4>
                        </div>
                    </div>)}
                </Slider>
            </section>

        </>
    )
}

export default Testimonials;