import "./Project.css"

const projects = [
  {
    title: "T-Codex Archive Platform",
    bio: "Responsive web archive interface built with a modular React component architecture featuring secure JWT authentication and optimized client-side navigation.",
    languages_tools: ["React","JavaScript","JWT","HTML","CSS"],
    github: "https://github.com/av-jr/triumph-archive",
    live_demo: "https://radiant-crostata-116d3d.netlify.app"
  },
  {
    title: "UNIV Platform",
    bio: "Browser-based coding examination platform with role-based evaluation and real-time code execution using Monaco Editor.",
    languages_tools: ["React","Node.js","JavaScript","Monaco Editor","REST API"],
    github: "https://github.com/av-jr/univ-platform",
    live_demo: "https://classeasy.netlify.app"
  },
  {
    title: "DreamLadder Capital Platform",
    bio: "Interactive investment landing platform built with React featuring slideshow components and optimized builds using Vite.",
    languages_tools: ["React","JavaScript","Vite","HTML","CSS"],
    github: "https://github.com/av-jr/dlc",
    live_demo: "https://radiant-crostata-116d3d.netlify.app"
  },
  {
    title: "InsightFlow Analytics",
    bio: "Financial analytics pipeline processing datasets with Python and Pandas while providing visual dashboards through Flask APIs.",
    languages_tools: ["Python","Pandas","Flask","REST API"],
    github: "https://github.com/av-jr/insightflow",
    live_demo: "https://analystflow.netlify.app"
  },
  {
    title: "Wake Watch Vision System",
    bio: "Driver fatigue detection system using computer vision and OpenCV to monitor facial features and trigger alerts.",
    languages_tools: ["Python","OpenCV","Computer Vision"],
    github: "https://github.com/av-jr/wake-watch",
    live_demo: null
  }
]

const Project = () => {
  return (
    <div id="ProjectCon">

      <h2 className="projectTitle">Projects</h2>

      <div className="projectGrid">

        {projects.map((p,i) => (
          <div key={i} className="projectCard">

            <h3>{p.title}</h3>

            <p className="projectBio">
              {p.bio}
            </p>

            <div className="techStack">
              {p.languages_tools.map((t,j)=>(
                <span key={j} className="techBadge">{t}</span>
              ))}
            </div>

            <div className="projectButtons">

              <a href={p.github} target="_blank">
                <button className="gitBtn">GitHub</button>
              </a>

              {p.live_demo && (
                <a href={p.live_demo} target="_blank">
                  <button className="liveBtn">Live Demo</button>
                </a>
              )}

            </div>

          </div>
        ))}

      </div>

    </div>
  )
}

export default Project