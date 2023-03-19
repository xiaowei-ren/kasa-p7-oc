import './Card.css';

function Card(props) {
    return (
        <div className='card-container'>
            <img src={props.cover}/>
            <div className= 'card--layer'>
                <p className= 'card--title'>{props.title}</p>
            </div>
        </div>
    )
}

export default Card