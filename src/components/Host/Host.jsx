import '../Host/Host.css';

function Host(props) {
    return(
        <div className='host-container'>
            <p className='host--title'>{props.name}</p>
            <img src={props.img} alt="host" className='host--img'/>
        </div>
    )
}

export default Host