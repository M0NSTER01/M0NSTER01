import {Link} from "react-router-dom"


function Head() {
    return <title-nav>
        <div class="title-logo">Raghav's Portfolio</div>
        <div class="title-nav">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/Projects">Projects</Link></li>
                <li><Link to="/Contact">Contact me</Link></li>
            </ul>
        </div>
    </title-nav>

}

export default Head;