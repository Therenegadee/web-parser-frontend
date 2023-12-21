import './App.css'
import ListParserResultsComponent from './components/parserComponents/ListParserResultsComponent';
import HeaderComponent from './components/header/HeaderComponent';
import FooterComponent from './components/footer/FooterComponent';
import ParserSettingsFormComponent from './components/parserComponents/ParserSettingsFormComponent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
      <HeaderComponent />
        <Routes>
          <Route path='/parser/results' element = {<ListParserResultsComponent />}> </Route>
          <Route path='/parser/create' element = {<ParserSettingsFormComponent />}> </Route>
        </Routes>
      <FooterComponent />
    </BrowserRouter>
  </>
  )
}

export default App
