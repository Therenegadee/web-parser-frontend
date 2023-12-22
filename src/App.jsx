import './App.css'
import ListParserResultsComponent from './components/parserComponents/ListParserResultsComponent';
import HeaderComponent from './components/header/HeaderComponent';
import FooterComponent from './components/footer/FooterComponent';
import ParserSettingsFormComponent from './components/parserComponents/ParserSettingsFormComponent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePageComponent from './components/homePageComponent/HomePageComponent'

function App() {
  return (
    <>
    <BrowserRouter>
    <HeaderComponent />
      <div className = "page-content">
          <Routes>
            <Route path="/" element={<HomePageComponent />} />
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
