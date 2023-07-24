import { CardTechnologies } from '../../components/CardTechnology/index'
import { technologies } from '../../data/technologies'
import style from './style.module.css'


export const TechnologySection = () => {
  const [htmlIcon, cssIcon, jsIcon, reactIcon] = technologies

  return (
    <section className={style.container}>
      <h2>Tecnologias</h2>
      <ul>
        <CardTechnologies {...htmlIcon} />
        <CardTechnologies {...cssIcon} />
        <CardTechnologies {...jsIcon} />
        <CardTechnologies {...reactIcon} />
      </ul>
    </section>
  )
}