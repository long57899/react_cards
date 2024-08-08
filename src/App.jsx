import { Card } from './components/card'
import './App.css'

function App() {
  return (
    <div className='cards'>
      <Card 
        image='https://sun1-17.userapi.com/s/v1/if1/ed5QLpIY5pyZEi0PBKtEBx4-Z7bKTBvFBPuzbu1nVOGxFe44KctWWtfPsc6h8WA9NHVHPAZK.jpg?size=975x975&quality=96&crop=284,3,975,975&ava=1'>
        <h5 className='card-title'>Card title</h5>
        <p className='card-text'>Some quick example 
        text to build on the card title and make up 
        the bulk of the card's content.
        </p>
        <a href='#' className='btn btn-primary'>Go somewhere</a>
      </Card> 
      <Card>
        <h5 className='card-title'>Speecial title treatment</h5>
        <p className='card-text'>With supporting text below as 
        a natural lead-in to additional content.
        </p>
        <a href='#' className='btn btn-primary'>Go somewhere</a>
      </Card> 
    </div>
  )
}

export default App
