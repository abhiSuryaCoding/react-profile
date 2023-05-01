import TLCard from './TLCard/TLCard';
import './Timeline.css';
import Bounce from 'react-reveal/Bounce';

function Timeline() {
    const EXP_DATA = [
        {
            from: '2021',
            to: '2022',
            orgName: 'Harman',
            position: 'Intern',
            projects: [
                {
                    name: 'Yoga app',
                    desc: 'Some description'
                }
            ]
        },
        {
            from: '2021',
            to: '2022',
            orgName: 'Harman',
            position: 'Intern',
            projects: [
                {
                    name: 'Yoga app',
                    desc: 'Some description'
                }
            ]
        },
        {
            from: '2021',
            to: '2022',
            orgName: 'Harman',
            position: 'Intern',
            projects: [
                {
                    name: 'Yoga app',
                    desc: 'Some description'
                }
            ]
        },
        {
            from: '2021',
            to: '2022',
            orgName: 'Harman',
            position: 'Intern',
            projects: [
                {
                    name: 'Yoga app',
                    desc: 'Some description'
                }
            ]
        },
    ]
    return (
        <>

            <div className="timeline my-4">
                <div className="tl-container left">
                    <Bounce left>
                        <TLCard data={EXP_DATA[0]}></TLCard>
                    </Bounce>
                </div>
                <div className="tl-container right">
                    <Bounce right>
                        <TLCard data={EXP_DATA[1]}></TLCard>
                    </Bounce>
                </div>
                <div className="tl-container left">
                    <Bounce left>
                        <TLCard data={EXP_DATA[2]}></TLCard>
                    </Bounce>
                </div>
                <div className="tl-container right">
                    <Bounce right>
                        <TLCard data={EXP_DATA[3]}></TLCard>
                    </Bounce>
                </div>
            </div>

        </>
    );
}

export default Timeline;