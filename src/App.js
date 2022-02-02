
import React from 'react'
import NavBar from './components/NavBar'
import Header from './components/Header'
import File from './components/File'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
const App = () => {
    return(
        <>
        <Router>
            <NavBar />
            <Routes>
                <Route exact path = '/' element = {<Header />}></Route>
                <Route exact path = '/files' element = {<File />}></Route>
            </Routes>
        </Router>
        </>
    )
}
export default App