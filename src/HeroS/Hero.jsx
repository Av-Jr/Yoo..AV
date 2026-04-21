import "./Hero.css"

const Hero = () =>{
    return(
        <div id="HeroCon">

            <div id="NavB">
                <ul className="nav">
                    <li className="navEles"><a href="#HeroCon">Home</a></li>
                    <li className="navEles"><a href="#ProjectCon">Projects</a></li>
                    <li className="navEles"><a href="#AboutCon">About</a></li>
                    <li className="navEles"><a href="#ConnectCon">Connect</a></li>
                </ul>
            </div>

            <div id="ConHero">
                <div className="ConEles B">
                    <img src="/AVGrey2.svg" alt="" className="slidingImg"/>
                </div>
                <div className="ConEles MT">
                    <p className="heroMT">Building Scalable digital Products with clarity and Performance.</p>
                    <button className="connectBtn" onClick={() => document.querySelector("#ConnectCon").scrollIntoView({behavior:"smooth"})}
>Let's Talk</button>
                </div>
                <div className="ConEles HeroImg">
                    <img src="/AVme3.png" alt="" className="imgH"/>
                </div>
            </div>
        </div>
    )
}

export default Hero;