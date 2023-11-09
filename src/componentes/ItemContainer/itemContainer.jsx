import "./itemcontainer.css"


export const ItemContainer = (props) => {


    return (

        <div className="Carta">

            <img src={props.imagen} alt="" width={"20px"}/>
            <h1>{props.titulo}</h1>
            <p>{props.descripcion}</p>
            <button>Comprar</button>






        </div>







    )

}