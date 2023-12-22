import HomePageComponent from './components/homePageComponent/HomePageComponent'
import ListParserResultsComponent from './components/parserComponents/ListParserResultsComponent';
import HeaderComponent from './components/header/HeaderComponent';
import FooterComponent from './components/footer/FooterComponent';
import ParserSettingsFormComponent from './components/parserComponents/ParserSettingsFormComponent';
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
    <HeaderComponent />
      <div>
          <Routes>
            <Route path="/" element={<HomePageComponent />}/>
            <Route path='/parser/results' element = {<ListParserResultsComponent />} /> 
            <Route path='/parser/create' element = {<ParserSettingsFormComponent />} />
          </Routes>
      </div>
    </BrowserRouter>
    <FooterComponent />
  </>
  )
}

export default App
