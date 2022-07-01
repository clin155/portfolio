import "./Skills.scss";

import { SkillsTable } from "./";

export function Skills(props) {
    return (
        <div className='page3'>
            <h1 className="smallerTitle">Skills <br></br>&amp; Experience</h1>
            {/* <img className='frontPage secTrees' src={tzees} alt="background"></img> */}
            <SkillsTable />
        </div>   
    )
}