
import './TLCard.css';

function TLCard(props: any) {
    return (
        <>
            <div className="content">
                <div className='d-flex flex-row align-items-baseline'><h2>{props.data.from} - {props.data.to}</h2> <span className='ms-2'>{props.data.position}</span></div>
                <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
            </div>
        </>
    )
}

export default TLCard;