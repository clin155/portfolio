import "./Skills.scss";
import trees from "./../../static/images/trees.png";

import SkillsTable from "./SkillsTable.jsx";

export function Skills(props) {
    return (
        <div className='skillsPage table'>
            <SkillsTable />
            <h1 className="title title2">Skills <br></br>&amp; Experience</h1>
            <img className='frontPage secTrees' src={trees} alt="background"></img>

        </div>
    )
}