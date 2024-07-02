import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Data.css'
import { Oval } from 'react-loader-spinner';

const DataComponent = ({ data }) => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const[loading , setLoading] = useState(false);
  const[filteredData , setFilteredData] = useState([]);

  useEffect(()=>{
    setLoading(true);
    setTimeout(() => {
      setFilteredData(data);
      setLoading(false);
    }, 1000);

  },[currentLanguage , data]);

  if(loading){
    return (
      <div className='data-component'>
            <Oval
              height={80}
              width={80}
              color="#4fa94d"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              ariaLabel="oval-loading"
              secondaryColor="#4fa94d"
              strokeWidth={2}
              strokeWidthSecondary={2}
            />
      </div>
    )
  }

  return (
    <div className="data-component">
      {filteredData.map((item) => (
        <div key={item.id} className="data-item">
          <h3>{currentLanguage === 'en' ? item.nameen : item.nametr}</h3>
          <p>{currentLanguage === 'en' ? item.descen : item.desctr}</p>
        </div>
      ))}
    </div>
  );
};

export default DataComponent;
