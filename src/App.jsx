import HomePageComponent from './components/homePageComponent/HomePageComponent'
import ListParserResultsComponent from './components/parserComponents/ListParserResultsComponent';
import HeaderComponent from './components/header/HeaderComponent';
import FooterComponent from './components/footer/FooterComponent';
import AboutPageComponent from './components/aboutProjectPageComponent/AboutPageComponent';
import ParserSettingsFormComponent from './components/parserComponents/ParserSettingsFormComponent';
import ProjectComponent from './components/ProjectComponent/ProjectComponent'
import HelpComponent from './components/HelpComponent/HelpComponent'
import SettingsComponent from './components/SettingsComponent/SettingsComponent'
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
            <Route path='/about' element={<AboutPageComponent />}/>
            <Route path='/parser/results' element = {<ListParserResultsComponent />} /> 
            <Route path='/projects/create' element = {<ParserSettingsFormComponent />} />
            <Route path='/settings' element= {<SettingsComponent />} />
            <Route path='/projects' element= {<ProjectComponent />} />
            <Route path='/help' element= {<HelpComponent />} />
          </Routes>
      </div>
    </BrowserRouter>
    <FooterComponent />
  </>
  )
}

export default App
