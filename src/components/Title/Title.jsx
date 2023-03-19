import '../Title/Title.css';

function Title(props) {
    return(
        <div className='title-container'>
            <h1 className='title-text1'>{props.title}</h1>
            <h3 className='title-location'>{props.location}</h3>
        </div>
    )
}

export default Title