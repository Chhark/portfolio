import "./A-propos.scss"

function Apropos() {
    return(
        <section className="S2 arc" id="Apropos">
            <h2 className="title">A-propos</h2>
        <div className="Apropos">
            <div className="infos">
                <h3>A'propos de moi</h3>
                <p>je suis un développeur front-end passionné par la création de sites web modernes, colorés et interactifs. J’adore réaliser toute vos idées et je suis toujours curieux d’apprendre de nouvelles technologies pour repousser les limites du code et du web.</p>
            </div>
            <div className="infos">
                <h3>Formation</h3>
                <p>J’ai suivi une formation d’intégrateur web chez OpenClassrooms, où j’ai appris a créer des site et applications web grâce a different langages "HTML, CSS/SCSS, JavaScript et React".</p>
            </div>
            <div className="infos">
                <h3>compétence</h3>
                <p>Langages: Html, CSS/SCSS, JavaScript, React</p>
                <p>Outils: Figma, Wordpress, Notion, Trello</p>
                <p>Pratique: Responsive, optimisation des performances, accessibilité, SEO</p>
            </div>
            <div className="infos">
                <h3>contact</h3>
                <div className="contact">
                    <a href="https://www.linkedin.com/in/kieran-vilain/">Linkedin</a>
                    <a href="https://github.com/Chhark">GitHub</a>
                    <a href="mailto:kieran@agence1400.fr">Mail</a>
                </div>
            </div>
        </div>
        </section>
    )
}

export default Apropos