import { useParams } from "react-router-dom"
import { slider } from "../Data/slider";
import "./projet.scss"
import { useState } from "react";
import { useEffect } from "react";


function Projet() {
    const {id} = useParams();
    const projet = slider.find(u => u.title === id)
    const Tag = projet.Tag

    const [width, setWidth] = useState(window.innerWidth);
    
    useEffect(() => {
    const updateWidth = () => setWidth(window.innerWidth);
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
    }, []);

    return(
        <div className="Pprojet">
            <img src={width > 1024 ? projet.image : projet.Mimage } alt="" className="PprojetImg"/>
            <div className="PprojetTexte">
                <h1 className="PprojetTitle">{projet.title}</h1>
                <div className="tagList">
                {Tag.map(tag =>(
                    <div key={tag} onClick={() => Setfilter(tag)} className="tag PprojetTag">{tag}</div>
                ))}
            </div>
                <p className="PprojetP">{projet.p}</p>
            </div>
        </div>
    )
}

export default Projet