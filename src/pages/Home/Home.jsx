import styles from './Home.module.css'

// images
import viteLogo from './../../../src/assets/vite.svg'
import reactLogo from './../../../src/assets/react.svg'
import gitHubLogo from './../../../src/assets/github.svg'

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>Portóflio desenvolvido com Vite + React + Github Pages</p>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://pages.github.com/" target="_blank">
          <img src={gitHubLogo} className="logo github" alt="Github Pages logo" />
        </a>
      </div>
      <p className={styles.read_the_docs}>
        Clique nos logos para saber mais sobre cada tecnologia
      </p>
    </div>
  )
}

export default Home