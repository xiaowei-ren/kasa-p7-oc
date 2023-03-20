import '../Host/Host.css';

function Host(props) {
    return(
        <div className='host-container'>
            <p className='host--title'>
                {props.name.split(' ').map((word, index) => {
                    return (index == 0 ? <>{word}<br></br></> : <>{word}</>)
                })}
            </p>
            <img src={props.img} alt="host" className='host--img'/>
        </div>
    )
}

export default Host