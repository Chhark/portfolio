import { useState } from "react"
import {slider} from "../../Data/slider"
import "./List.scss"
import { Link } from "react-router-dom"

function ProjectFilter() {
    const Tag = ["all" , ...new Set(slider.flatMap(item => item.Tag))]
    console.log(Tag)
    const [filter , Setfilter] = useState("all")
    const fiteredList = filter === "all" ? slider : slider.filter(projet => projet.Tag.includes(filter))
    return(
        <div className="filterList">
            <div className="tagList">
                {Tag.map(tag =>(
                    <div key={tag} onClick={() => Setfilter(tag)} className="tag">{tag}</div>
                ))}
            </div>
            <div className="projetList">
                {fiteredList.map(projet =>(
                    <Link key={projet.title} to={`/portfolio/projet/${projet.title}`} className="projet">
                        <img src={projet.image} alt={projet.title} className="projetImg"/>
                        <div className="projetTitle">    
                            <h3>{projet.title}</h3>
                        </div>
                    </Link>
                ))}
            </div>

        </div>
    )
}

export default ProjectFilter