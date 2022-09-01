import "./Skills.scss";

import { SkillsTable } from "./";

export function Skills(props) {
    return (
        <div className='page3'>
            <div className="skillFlex">
                <h1 className="topSkill">Skills &amp; Experience</h1>
                <p className="pText2">On the right are all the languages and technologies I have used. The list is mostly in descending order of
                    proficiency. These skills include Python, Javascript, C++, React, Node, Sass, Git, Docker and more. You can download my resume
                    <a href="/portfolio/resume.pdf"> here.</a></p>
            </div>
            {/* <img className='frontPage secTrees' src={tzees} alt="background"></img> */}
            <SkillsTable />
        </div>   
    )
}