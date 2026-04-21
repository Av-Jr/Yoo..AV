import "./Connect.css"

const Connect = () => {

    const contacts = [
        {
            title: "Email",
            value: "emailtoav09@gmail.com",
            link: "mailto:emailtoav09@gmail.com"
        },
        {
            title: "GitHub",
            value: "github.com/av-jr",
            link: "https://github.com/av-jr"
        },
        {
            title: "LinkedIn",
            value: "linkedin.com/in/aryansh-vashishtha",
            link: "https://linkedin.com/in/aryansh-vashishtha"
        }
    ]

    const resumeLink =
        "https://drive.google.com/file/d/1Rz0lNgBf_vR_-gCRSvrFKzo6bxEIyBL4/view"

    return (
        <div id="ConnectCon">

            <div className="connectInner">

                <h2 className="connectTitle">Let's Connect</h2>

                <p className="connectIntro">
                    Interested in collaborating, discussing systems, or exploring new ideas?
                    Feel free to reach out.
                </p>

                <div className="contactGrid">

                    {contacts.map((c, i) => (
                        <a
                            key={i}
                            href={c.link}
                            target="_blank"
                            rel="noreferrer"
                            className="contactCard"
                        >
                            <h3>{c.title}</h3>
                            <p>{c.value}</p>
                        </a>
                    ))}

                </div>

                <div className="resumeSection">

                    <a
                        href={resumeLink}
                        target="_blank"
                        rel="noreferrer"
                        className="resumeBtn"
                    >
                        View Resume
                    </a>

                </div>

            </div>

        </div>
    )
}

export default Connect