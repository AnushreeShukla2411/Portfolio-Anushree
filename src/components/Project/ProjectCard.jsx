import "./ProjectCard.css";
import ProjectBackground from "../../assets/ProjectBackground.png";

const ProjectCard = (props) => {
	return (
		<div
			className="project-card"
			style={{
				backgroundImage: `url(${ProjectBackground})`,
				backgroundRepeat: "no-repeat",
				backgroundSize: "auto",
			}}>
			<div className="top-right">
				<a href={props.data.liveLink} target="_blank" rel="noreferrer" className="project-btn live">
					Live
				</a>
				<a href={props.data.githubLink} target="_blank" rel="noreferrer" className="project-btn github">
					GitHub
				</a>
			</div>
			<div className="project-title">{props.data.projectTitle}</div>
			<div className="project-tools">{props.data.projectTools}</div>
			<div className="project-description">{props.data.projectDescription}</div>
		</div>
	);
};

export default ProjectCard;
