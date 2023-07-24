
import img from '../../assets/git-icon.png'

export const CardProjects = ({name, description}) => {
  return (
    <li >
      <div>
      <h3>{name}</h3>
      <p>{description}</p>
      <a href="">Saiba mais</a>
      </div>
      <img src={img} alt="Logo do Github" />
    </li>
  )
}