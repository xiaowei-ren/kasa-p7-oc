
import AboutBanner from '../components/AboutBanner/AboutBanner';
import Dropdownlarge from '../components/Dropdownlarge/Dropdownlarge';
import { useState, useEffect } from 'react';
import '../style/Propos.css';



function Propos() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/datas/about.json")
      .then(res => res.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
  }, []) 

  return (
      <>
        <AboutBanner className='aboutbanner'/>
        <div className='dropdowns container'>
          {data.map((dropdown, index) => {
            return(
              <Dropdownlarge
                key={index}
                title={dropdown.aboutTitle}
                text={dropdown.aboutText} />
            )
          })}
        </div>
      </>
  )
}

export default Propos