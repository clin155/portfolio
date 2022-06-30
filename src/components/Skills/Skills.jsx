import "./Skills.scss";
import trees from "./../../static/images/trees.png";

import SkillsTable from "./SkillsTable.jsx";

export function Skills(props) {
    return (
        <div className='skillsPage'>
            <SkillsTable />
            <img className='frontPage secTrees' src={trees} alt="background"></img>

        </div>
    )
}