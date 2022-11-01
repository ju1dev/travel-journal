export default function Card(props) {
    return (
        <div className='card'>
            <img src={props.img} />

            <div className='card-content'>
                <h4>{props.country}</h4>
                <h1>{props.location}</h1>
                <p>{props.dateTime}</p>
                <p>{props.description}</p>
            </div>
        </div>
    )
}