import packgens from '../../assets/banner-img.png'
import style from '../HomeSection/style.module.css'

export const HomeSection = () => {
return(
  <section className={style.container}>
    <div>
      <p>Hala Madrid</p>
      <h1>Bem vindo ao meu portifólio</h1>
      <p>Xampaoli Xampaoli</p>
      <button>Saiba mais</button>
    </div>
    <img src={packgens} alt="banner da imagem" />
  </section>
)
}