import { CardProjects } from "../../components/CardProjcts"
import { projects } from '../../data/projects'
import style from './style.module.css'


export const ProjectSection = () => {
  
  return(
    <section className={style.container}>
      <h2>Projetos</h2>
      <ul>
        <CardProjects name={projects[0].name} description={projects[0].descricao} />
        <CardProjects name={projects[1].name} description={projects[1].descricao} />
        <CardProjects name={projects[2].name} description={projects[2].descricao} />
        <CardProjects name={projects[3].name} description={projects[3].descricao} />
      </ul>
    </section>
  )
  }