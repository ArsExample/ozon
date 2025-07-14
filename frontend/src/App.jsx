import Button from 'react-bootstrap/Button';

import Header from "./components/Header"
import MainPage from './pages/MainPage';

import "./styles/App.css"

function App() {

  return (
    <>
      <Header></Header>
      <MainPage/>
    </>
  )
}

export default App

// <Button variant="primary">Primary</Button>