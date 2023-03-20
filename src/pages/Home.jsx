import { useEffect, useState } from 'react';
import Banner from '../components/Banner/Banner';
import { Link } from 'react-router-dom';
import Card from '../components/Card/Card';
import '../style/Home.css';

function Home() {
  const [data, setData] = useState([]);

  //requeter les donnees du document json
  useEffect(() => {
     fetch('/datas/logement.json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
  }, []);
   

  return (
      <>
          <Banner />
            <div className='cards-container container'>
              {data.map((appart, id) => {
                return (
                  <div className='card--container' key={id}>
                      <Link to={`/logement/${appart.id}`}>
                        <Card cover={appart.cover} title={appart.title}/>
                      </Link>
                  </div>
                )
              })}
            </div>
      </>
  )
}

export default Home