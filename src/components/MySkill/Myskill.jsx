import "./Myskill.css";
import Cube from "../../assets/cube.png";
import Bg1 from "../../assets/backgroundImage1.png";
import { skillsData } from "../../data/portfolioData";

const MySkill = () => {
	const getSkill = (id) => skillsData.find((s) => s.id === id) || { header: "", body: "" };

	return (
		<div className="section-container" id="skills">
			<img className="background-image-1" src={Bg1} alt="" />
			<div className="section-title">
				My <br />
				Skills
			</div>
			<div className="skillsets">
				<div className="skillset skillset-spreadsheet">
					<div className="skill-body">{getSkill("spreadsheet").body}</div>
					<div className="skill-header">{getSkill("spreadsheet").header}</div>
				</div>
				
				<div className="skillset skillset-qa">
					<div className="skill-header">{getSkill("qa").header}</div>
					<div className="skill-body">{getSkill("qa").body}</div>
				</div>
				
				<div className="skillset skillset-database">
					<div className="skill-header">{getSkill("database").header}</div>
					<div className="skill-body">{getSkill("database").body}</div>
				</div>

				<div className="skill-image">
					<img src={Cube} className="floating-cube" alt="Rubik's Cube" />
				</div>
				
				<div className="skillset skillset-languages">
					<div className="skill-header">{getSkill("languages").header}</div>
					<div className="skill-body">{getSkill("languages").body}</div>
				</div>
				
				<div className="skillset skillset-visualization">
					<div className="skill-header">{getSkill("visualization").header}</div>
					<div className="skill-body">{getSkill("visualization").body}</div>
				</div>
				
				<div className="skillset skillset-cloud">
					<div className="skill-header">{getSkill("cloud").header}</div>
					<div className="skill-body">{getSkill("cloud").body}</div>
				</div>
			</div>
		</div>
	);
};

export default MySkill;
