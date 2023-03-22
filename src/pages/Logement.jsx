import Carrousel from '../components/Carrousel/Carrousel';
import Rate from '../components/Rate/Rate';
import Host from '../components/Host/Host';
import Tag from '../components/Tag/Tag';
import Title from '../components/Title/Title';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import '../style/Logement.css';
import DropdownOpen from '../components/DropdownOpen/DropdownOpen';
import { useNavigate } from "react-router-dom";

function Logement() {

    const [data, setData] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch('/datas/logement.json')
            .then(response => response.json())
            .then(logements => {
                let logementFound = false
                for (let i = 0; i < logements.length; i++) {
                    if (logements[i].id === id) {
                        setData(logements[i])
                        logementFound = true
                        break;
                    }
                }
                if (!logementFound) return navigate("*");
            })
            .catch(error => console.error(error));
    }, [id, navigate]);

    return (
        <>
            {data.pictures ? <Carrousel images={data.pictures} /> : <></>}
            <div className='info container'>
                <div className='title-tags-container'>
                    <Title
                        location={data.location ? data.location : ''}
                        title={data.title ? data.title : ''} />
                    <ul className='tags-container'>
                        {data.tags ?
                            data.tags.map((tag, index) => <Tag key={index} name={tag} />)
                            : <></>}
                    </ul>
                </div>
                <div className='rate-host-container'>
                    <Host
                        name={data.host ? data.host.name : ''}
                        img={data.host ? data.host.picture : ''}
                    />
                    <Rate rating={data.rating} />
                </div>
            </div>
            <div className='dropdownopens container'>
                <DropdownOpen
                    title={"Description"}
                    description={data.description} />
                <DropdownOpen
                    title={"Équipements"}
                    description={data.equipments ? data.equipments.map((equipment, index) => {
                        return <li key={index}>{equipment}</li>
                    }) : ''} />
            </div>
        </>
    )
}

export default Logement