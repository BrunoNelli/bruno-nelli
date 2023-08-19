import React from 'react';
import iconImage from '../assets/ibm.svg'; // Caminho para a imagem do ícone
import styles from './Icon.module.css'; // Importação do CSS do ícone

const IconIbm = () => {
    return (
    <div>
      <img src={iconImage} alt="Ícone IBM" className={styles.icon} />
    </div>
  )
};

export default IconIbm;
