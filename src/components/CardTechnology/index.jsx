
export const CardTechnologies = ({img, name}) =>{
  return (
    <li>
      <img src={img} alt={name} />
      <span>{name}</span>
    </li>
  )
}