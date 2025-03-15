


function Body() {
    return <main>
        <section class="first">
            <div class="first-info">
                Hi, My name is <span class="name-color">Raghav</span>
                <div>and I a passionate </div>
                <span id="element"></span>

                <div class="buttons">
                    <button class="button">Download Resume</button>
                    <button class="button">Visit GitHub</button>
                </div>
            </div>
            <div class="first-image">
                <img src="./develop-image.png" alt="" id="develop-image" />

            </div>
        </section>
        <hr />
        <section class="projects">
            <div class="projects-title">
                <ul>
                    <li>PROJECTS</li>
                </ul>
            </div>
            <div class="project-list">

                <div class="project-card">
                    <span id="project-title">GARCIA</span>
                    <div class="project-description">
                        Gracia is a personal style recommendation website designed specifically for women. It analyzes
                        your body shape to offer personalized advice on the best accessories and dresses that enhance
                        your natural beauty.
                    </div>
                </div>

                <div class="project-card">
                    <span id="project-title">Medi_Bot</span>
                    <div class="project-description">An ML driven Online Doctor. Which can predict diseases based on
                        symptoms and can recommend you cure and which doctor to prefer.</div>
                </div>

                <div class="project-card">
                    <span id="project-title">Banking System - Java</span>
                    <div class="project-description">
                        This robust Java-based banking system streamlines everyday financial operations by supporting
                        essential features such as deposits, withdrawals, fund transfers, and a comprehensive passbook
                        for tracking transactions. It incorporates secure login capabilities for both users and
                        administrators, ensuring that each role receives tailored access and management privileges for
                        an efficient banking experience
                    </div>
                </div>

                <div class="project-card">
                    <span id="project-title">MUSIC SPOT</span>
                    <div class="project-description">
                        This project is a simple music app that displays a list of songs in a card layout. Each card
                        represents a music track that you can click on to listen, offering an intuitive and
                        straightforward way to explore your favorite tunes.
                    </div>
                </div>

            </div>
        </section>
    </main>

}

export default Body;