import  whatsapp  from '../../assets/whatsapp-icon.png'
import linkedin from '../../assets/linkedin-icon.png'
import github from '../../assets/github-icon.png'

import style from '../Footer/style.module.css'

export const ContactSection = () => {
  return(
    <footer className={style.container}>
      <div className={style.containerImg}>
      <h2>Contato</h2>
        <div>
        <img src={whatsapp} alt="Logo do whatsapp" />
        <img src={linkedin} alt="logo do linkedin" />
        <img src={github} alt="Logo do Github" />
        </div>
      </div>
      <div>
        <p>Todos os direitos reservados - Hala Madrid</p>
      </div>
    </footer>
  )
  }