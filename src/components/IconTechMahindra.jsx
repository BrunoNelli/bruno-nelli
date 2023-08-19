import iconImage from '../assets/tech_mahindra.png'; // Caminho para a imagem do ícone
import styles from './Icon.module.css'; // Importação do CSS do ícone

const IconTechMahindra = () => {
  return (
    <div>
      <img src={iconImage} alt="Ícone TechMahindra" className={styles.icon} />
    </div>
  )
}

export default IconTechMahindra