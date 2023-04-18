import style from "./MyExperienceAndEducation.module.css"
import containerStyle from "./../common/styles/Container.module.css"
import allStyle from "./../common/styles/AllStyle.module.css"
import {Work} from "../work/Work";
import {Education} from "../educations/Education";

export const MyExperienceAndEducation = () => {
    return (
        <div className={`${style.myExperienceAndEducation} ${allStyle}`}>
            <div className={`${containerStyle.container} ${style.container}`}>
                <div className={style.educationExperience}>
                    <h3>Education history</h3>
                    <div className={style.educations}>
                        <Education who={'Engineer-technologist at a catering company'}
                                   where={'Belarusian State University of Food and Chemical Technologies'}
                                   when={'2009-2014'}/>
                        <Education who={'JavaScript Developer'} where={'RS Schools Course «JavaScript/Front-end»'}
                                   when={'2021-2022'}/>
                        <Education who={'React Developer'} where={'IT-INCUBATOR'} when={'2022-2023'}/>
                    </div>
                </div>
                <div className={style.workExperience}>
                    <h3>Work experience</h3>
                    <div className={style.works}>
                        <Work who={'React developer'}
                              where={'Freelance'} when={'2021-2023'}
                              property1={' Development of a website based on a layout from Figma.'}
                              property2={'Development of new application functionality in React, TypeScript, Material UI.'}
                              property3={'Testing and optimization of the existing application code.'}
                              property4={'Use FLUX architecture on the project.'}
                              property5={'Working in a team with designers and developers.'}/>


                        <Work who={'Secretary'}
                              where={'Mogilev Children\'s Art School'} when={'2022-2023'}
                              property1={'Record keeping.'}
                              property2={'Registration of personal files of children.'}
                              property3={'Drawing up a time sheet for teachers.'}
                              property4={'Control the execution of orders.'}
                              property5={'Organization of the reception of visitors.'}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}