import iconImage from '../assets/vr_beneficios.png'; // Caminho para a imagem do ícone
import styles from './Icon.module.css'; // Importação do CSS do ícone

const IconVrBeneficios = () => {
    return (
    <div>
      <img src={iconImage} alt="Ícone VR Benefícios" className={styles.icon} />
    </div>
  )
};

export default IconVrBeneficios;
