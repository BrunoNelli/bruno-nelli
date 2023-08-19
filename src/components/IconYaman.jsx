import iconImage from '../assets/yaman.png'; // Caminho para a imagem do ícone
import styles from './Icon.module.css'; // Importação do CSS do ícone

const IconYaman = () => {
  return (
    <div>
      <img src={iconImage} alt="Ícone Yaman" className={styles.icon} />
    </div>
  )
}

export default IconYaman