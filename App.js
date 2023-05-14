import './App.css';
import {useEffect, useState} from 'react'
import axios from 'axios' //npm install axios

function App() {
  const [val, setVal] = useState(0)
  const [price, setPrice] = useState(0)
  const [name, setName] = useState('Loading........')
  const [email, setEmail] = useState('Loading........')
  const [gender, setGender] = useState('Loading........')

  //axios.get(url).then(res => {})
  //console.log('hello)
  //useEffect(() =>{}, []) --sintex

  useEffect(
    ()=>{
      axios.get('https://randomuser.me/api/').then(res => {
        console.log(res.data.results[0]);
        setName(res.data.results[0].name.first)
        setEmail(res.data.results[0].email)
        setGender(res.data.results[0].gender)
      })
    }, [])


  return (
    <div className="App">
      Count: {val} <br></br>
      <button onClick={() => {setVal(val + 1)}}> + </button>
      <br></br>
      Price: {price} <br></br>
      <button onClick={() => {setPrice(price + 1)}}> Price </button>
      <br></br>
      Name: {name}<br></br>
      Email: {email}<br></br>
      Gender: {gender}<br></br>

    </div>
  );
}

export default App;
