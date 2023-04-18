import './App.css';
import {Header} from "./header/Header";
import {Main} from "./main/Main";
import {AboutMe} from "./aboutme/AboutMe";
import {Skills} from './skills/Skills'
import {MyExperienceAndEducation} from "./myExpertAndExam/MyExperienceAndEducation";
import {MyProjects} from "./myProjects/MyProjects";
import {Contact} from "./contact/Contact";
import {Footer} from "./footer/Footer";

function App() {
    return (
        <div className="app">
            <Header/>
            <Main/>
            <AboutMe/>
            <Skills/>
            <MyExperienceAndEducation/>
            <MyProjects/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default App;
