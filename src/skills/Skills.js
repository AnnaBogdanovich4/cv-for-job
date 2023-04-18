import style from "./Skills.module.css"
import containerStyle from "./../common/styles/Container.module.css"
import allStyle from "./../common/styles/AllStyle.module.css"
import {Skill} from "../skill/Skill";

export const Skills = () => {
    return (
        <div className={`${style.skills} ${allStyle}`}>
            <div className={`${containerStyle.container} ${style.container}`}>
                <h3>Skills</h3>
                <div className={style.skillsContainer}>
                    <Skill title={'HTML5'}
                           description={'I understand the anatomy of the HTML markup of a web page and I also know  the basic tags, their attributes, and nested elements. I can make semantic layout.'}/>
                    <Skill title={'CSS3'}
                           description={'I can to style elements, layout and alignment of elements on the page (flexbox and grid), adaptive layout, cross-browser layout.'}/>
                    <Skill title={'JavaScript'}
                           description={'I know and can work with variables, data types, operators, (if...else), functions, type conversion, context(this).'}/>
                    <Skill title={'TypeScript'}
                            description={'TypeScript strong typing improves the speed and convenience of writing complex complex programs, reduces the number of potential errors in the source code, so it becomes easier to maintain, scale and test.'}/>
                    <Skill title={'React'}
                           description={'React developers implement UI layouts as web components that can send and receive data from a backend server. I know how to test a component and manage its state using Redux.'}/>
                    <Skill title={'GitHub'}
                           description={'I keep my code online so I can interact with other developers on different projects'}/>
                </div>
            </div>
        </div>
    )
}