import starred from '../../assets/starred.svg';
import stargrey from '../../assets/stargrey.svg';
import '../Rate/Rate.css';

function Rate(props) {

    const setStars = () => {
        let result = []
        for(let i = 0; i < parseInt(props.rating); i++){
            result.push(<img key={i} src={starred} alt="star-red" />)
        }

        let numberGrey = 5 - result.length
        for(let i = 0; i < numberGrey; i++) {
            result.push(<img key={i + '' + i} src={stargrey} alt="star-grey"/>)
        } 

        return result
    }

    const stars = setStars()

    return(
        <div className='star-conaiter'>
            {stars.map(element => {
                return element
            })}

        </div>
    )
};

export default Rate