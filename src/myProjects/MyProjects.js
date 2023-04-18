import style from "./MyProjects.module.css"
import containerStyle from "../common/styles/Container.module.css";
import allStyle from "../common/styles/AllStyle.module.css";
import {Project} from "../project/Project";
import background1 from '../assets/img/social-network.png'
import background2 from '../assets/img/todolist.png'
import background3 from '../assets/img/portfolio.png'
import background4 from '../assets/img/shelter.png'
import background5 from '../assets/img/bookshop.png'


export const MyProjects = () => {
    return (
        <div className={`${style.myProjects} ${allStyle}`} id="my-projects">
            <div className={`${containerStyle.container} ${style.container}`}>
                <h3>My projects</h3>
                <div className={style.projects}>
                    <Project title={'Social network'}
                             description={'The social network is currently under development.' +
                                 '\'I use TypeScript,React and Redux to make it.'}
                             href={'https://annabogdanovich4.github.io/Social_network/'}
                             url={`${background1}`}
                    />
                    <Project title={'Todo List'}
                             description={'TodoList is the task manager. This is SPA works at React.\n' +
                                 'You can add, remove, sort and update tasks.' +
                                      'I use TypeScript,Hooks,Redux and.\n' +
                                 'javaScript functions such as map(), filter() method and spread array.' +
                                 'I create style with Material UI.'}
                             href={'#'}
                             url={`${background2}`}
                    />
                    <Project title={"Photographer's portfolio"}
                             description={'Website - portfolio of photographer. I made adaptive cross-browser layout based from Figma. I used CSS-animations, BEM, SVG in layout.\n' +
                                 'I used flex and grid in creating the layout. \n' +
                                 'I can change the language, the theme, select photos, animate the button, and work with the video player with JavaScript.'}
                             href={'https://annabogdanovich4.github.io/Portfolio/'}
                             url={`${background3}`}
                    />
                    <Project title={'Shelter'}
                             description={'Website for an animal shelter. I made adaptive cross-browser layout based from Figma. I used CSS-animations, BEM, SVG in layout.\n' +
                                 'I used flex and grid in creating the layout. \n' +
                                 'The site has a google map, a pop-up window, a slider, a feedback form.'}
                             href={'#'}
                             url={`${background4}`}
                    />
                    <Project title={"Book's shop"}
                             description={'Website for bookshop. I made adaptive cross-browser layout based from Figma. I used CSS-animations, BEM, SVG in layout.\n' +
                                 'I used flex and grid in creating the layout. \n' +
                                 'The site has a feedback form and its validation, a pop-up window and a slider.'}
                             href={'#'}
                             url={`${background5}`}
                    />
                </div>
            </div>
        </div>
    )
}