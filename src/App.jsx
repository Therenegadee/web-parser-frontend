import HomePageComponent from './components/Home/HomePageComponent'
import ListParserResultsComponent from './components/Parser/ListParserResultsComponent';
import HeaderComponent from './components/Header/HeaderComponent';
import FooterComponent from './components/Footer/FooterComponent';
import AboutPageComponent from './components/About/AboutPageComponent';
import ParserSettingsFormComponent from './components/Parser/ParserSettingsFormComponent';
import ProjectComponent from './components/Project/ProjectComponent'
import HelpComponent from './components/Help/HelpComponent'
import SettingsComponent from './components/Settings/SettingsComponent'
import './styles/Variables.css'
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
