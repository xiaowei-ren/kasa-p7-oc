import '../Tag/Tag.css';

function Tag(props) {
    return (
        <div className='tag-contaier'> 
            <p className= 'tag--name'>{props.name}</p>
        </div>
    )
};

export default Tag