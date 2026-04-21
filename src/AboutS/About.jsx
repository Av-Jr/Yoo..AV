import "./About.css"

const skills = {
    Languages: ["JavaScript","TypeScript","Python","C++","HTML","CSS"],
    Frameworks: ["React","Node.js","Express","Flask"],
    Data_ML: ["Pandas","scikit-learn","OpenCV"],
    Tools: ["Git","MongoDB","Vite","JWT","REST APIs"]
}

const About = () => {
    return(
        <div id="AboutCon">

            <div className="aboutInner">

                <h2 className="aboutTitle">About Me</h2>

                <div className="aboutText">

                    <p>
                        I'm a full-stack engineer focused on building scalable web
                        applications and developer-centric systems. My work spans
                        interactive interfaces, backend services, and data-driven
                        workflows using technologies like React, Node.js and Python.
                    </p>

                    <p>
                        I enjoy designing systems that automate complex processes,
                        analyze large datasets, and simplify developer tooling.
                        My projects range from full-stack platforms and analytics
                        pipelines to computer-vision based applications.
                    </p>

                    <p>
                        Outside software development I explore robotics and
                        hardware-software integration as part of the KIIT
                        Robotics Society, experimenting with automation and
                        intelligent system behaviour.
                    </p>

                </div>

                <div className="skillsSection">

                    {Object.entries(skills).map(([category,items]) => (
                        <div className="skillGroup" key={category}>

                            <h4>{category}</h4>

                            <div className="skillList">
                                {items.map((skill,index)=>(
                                    <span key={index} className="skillBadge">
                                        {skill}
                                    </span>
                                ))}
                            </div>

                        </div>
                    ))}

                </div>

            </div>

        </div>
    )
}

export default About