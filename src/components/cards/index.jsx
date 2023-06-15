import "./styles.css"



export const  Card = ({image, altImage, name, description}) => {
    return(
        <div class="card">
    <img src={image} alt={altImage} />
    <h2>{name}</h2>
    <p>{description}</p>
    <button>Saiba Mais</button>
  </div>
    )
}