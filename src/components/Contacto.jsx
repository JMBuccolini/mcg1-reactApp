
export default function Contacto(){

    const datos = [
        {name: "Eugenia", id: 1},
        {name: "Corina", id:2},
        {name: "Yanina", id: 3},
        {name: "Delia", id:4}
    ]

    return(
        <div>
            <h1>Contacto</h1>
            <p>Este es el primer componente de React creado con las chicas del mcg1</p>
        <ul style={{listStyle : "none"}}>
            {
                datos.map((el)=>(
                    <li key={el.id}>{el.name}</li>
                ))
            }
        </ul>
        
        </div>
    )
}