import ProjectFilter from "../projetList/list"
import "./projet.scss"

function Projet() {
    return(
        <section className="S3" id="projet">
            <h2 className="title">Projet</h2>
            <ProjectFilter/>
        </section>
    )
}

export default Projet