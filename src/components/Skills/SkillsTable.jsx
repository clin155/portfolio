import './Skills.scss';
import data from './skills.json';


export default function SkillsTable(props) {
    let elems = []
    Object.entries(data).forEach(([key, value]) => {
        elems.push(<h3 className='titleSkill'>{key}</h3>);
        elems.push(<hr/>);
        value.forEach((entry) => {
            if (typeof(entry) === 'string') {
                elems.push(<li>{entry}</li>)
            } 
            else if (typeof(entry) === 'object') {
                elems.push(<ul/>)
                Object.entries(entry).forEach(([key2, val2]) => {
                    elems.push(<ul/>)
                    elems.push(<h3 className="titleSkill">{key2}</h3>);
                    // elems.push(<hr/>);
                    val2.forEach((entry) => {
                        if (typeof(entry) === 'string') {
                            elems.push(<li>{entry}</li>);
                        }
                    });
                })
            }
        })
    })

    return <div className="skillsTable vertical-scroll">{elems}</div>
};