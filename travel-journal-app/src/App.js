import Navbar from "./Components/Navbar"
import cardsData from './CardsData'
import Card from "./Components/Card"
export default function App() {

  let cardsEl = cardsData.map(card => {
    return (
      <Card
      key={card.id}
      {...card}
      />
    )
  })
  return (
    <div>
      <Navbar/>
      <div className='card-elements'>{cardsEl}</div>
      
    </div>
  )
}