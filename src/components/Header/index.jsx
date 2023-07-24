import logo from '../../assets/portfolio.png'
import styles from '../Header/style.module.css'
import { HeaderList } from '../HeaderList'


export const Header = () => {
  return(
    <header className={styles.header}>
      <img src={logo} alt="Portfolio" />
      <ul className={styles.containerAbout}>
        <HeaderList/><a className={styles.item} href="">Sobre</a><HeaderList/>
        <HeaderList/><a className={styles.item} href="">Stack</a><HeaderList/>
        <HeaderList/><a className={styles.item} href="">Projetos</a><HeaderList/>
      </ul>
      <button>Contato</button>
    </header>

    
  )
}