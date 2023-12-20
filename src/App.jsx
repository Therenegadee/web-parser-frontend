import './App.css'
import ListParserResultsComponent from './components/ListParserResultsComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import ParserComponent from './components/ParserComponent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
      <HeaderComponent />
        <Routes>
          <Route path='/parser/results' element = {<ListParserResultsComponent />}> </Route>
          <Route path='/parser/create' element = {<ParserComponent />}> </Route>
        </Routes>
      <FooterComponent />
    </BrowserRouter>
  </>
  )
}

export default App
