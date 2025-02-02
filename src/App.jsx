import React from 'react'
// rfce//


// function App() {
//   return (
//     <div>App</div>
//   )
// }

// export default App


// rafce


// import React from 'react'

// const App = () => {
//   return (
//     <div>App</div>
//   )
// }

// export default App
import './App.css'
import Card from './card'
import Form from './form'


export default function App() {
    return (
        <div className='display-on-page'>
            <Card />
            <Form />
        </div>
    )
}