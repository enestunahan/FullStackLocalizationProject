import React from 'react';
import { useTranslation } from 'react-i18next';
import './Data.css'

const DataComponent = ({ data }) => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;


  return (
    <div className="data-component">
      {data.map((item) => (
        <div key={item.id} className="data-item">
          <h3>{currentLanguage === 'en' ? item.nameen : item.nametr}</h3>
          <p>{currentLanguage === 'en' ? item.descen : item.desctr}</p>
        </div>
      ))}
    </div>
  );
};

export default DataComponent;
