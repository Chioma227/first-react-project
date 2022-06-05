import React from 'react'
import ReactDOM from 'react-dom'
import './App.css'
import Body from './components/Body'
import Footer from './components/Footer'

function Parent(){
  return(
    <div>
        <Body />
        <Footer />
    </div> 
  )
}
export default Parent
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Parent />)