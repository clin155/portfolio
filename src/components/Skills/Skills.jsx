import "./Skills.scss";

import { SkillsTable } from "./";
import github from "./../../static/images/github.png";
import linkedin from "./../../static/images/linkedin.png";

export function Skills(props) {
    return (
        <div className='page3'>
            <div className="skillFlex">
                <h1 className="topSkill">Skills &amp; Experience</h1>
                <p className="pText2">On the right are all the languages and technologies I have used. The list is mostly in descending order of
                    proficiency. These skills include Python, Javascript, C++, React, Node, Sass, Git, Docker and more. You can download my resume
                    <a href="/portfolio/resume.pdf"> here.</a></p>
                <div className="icons">
                    <a href="https://github.com/clin155"><img className="ic" src={github} alt="gork"></img></a>
                    <a href="https://www.linkedin.com/in/christopher-lin-5220a6202/"><img className="ic" src={linkedin} alt="gork"></img></a>
                </div>
            </div>
            {/* <img className='frontPage secTrees' src={tzees} alt="background"></img> */}
            <SkillsTable />
        </div>   
    )
}