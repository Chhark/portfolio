import "../slide/slide.scss"
import git from "../../assets/github.svg"
import menu from "../../assets/menu.svg"
import {slider} from "../../Data/slider.js"
import { useEffect, useState } from "react"

function Slide() {
    const [index , setindex] = useState(1)
    const next = () => setindex(prev =>{ 
        const newIndex = prev - 1
        return newIndex < 0 ? slider.length - 1 : newIndex
    })

    useEffect(() => {
        const interval = setInterval(next, 6000)
        return () => clearInterval(interval)
    },[])
    const [width, setWidth] = useState(window.innerWidth);
    const [toggleMenu, UpdateToggleMenu] = useState(false);

    useEffect(() => {
    const updateWidth = () => setWidth(window.innerWidth);
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
    }, []);
    return(
        <div className="slide">
            <h1 className="main-title"><span>DECOUVREZ</span> MON TRAVAIL ET MES RÉALISATIONS <span>DECOUVREZ</span> MON TRAVAIL ET MES RÉALISATIONS</h1>
            <h2 className="main-title transparent"><span>DECOUVREZ</span> MON TRAVAIL ET MES RÉALISATIONS <span>DECOUVREZ</span> MON TRAVAIL ET MES RÉALISATIONS</h2>
            <div className="slider"
            style={{
                transform:`translateX(-${index * 100}%)`
            }}
            >
                {slider.map(slide =>(
                    <div key={slide.id} className="diapo">
                    <img  src={slide.image} alt="" className="slide-img"/>
                    </div>
                ))}
            </div>
            <div className="infosBar">
                <div className="slideTitle"style={{
                        transform:`translateY(-${index * 72}px)`
                    }}>
                    {slider.map(slide =>(
                    <h2 key={slide.id + slide.title}className="">{slide.title}</h2>
                ))}
                </div>
                {width > 1024 ? (<div className="nav">
                    <a href="#Apropos">A-propos</a>
                    <a href="#projet">Projet</a>
                    {/* <span>Fr/En</span> */}
                    <img src={git} alt="" className="LGgit"/>
                </div>) : (
                <div className="nav">
                    <div className={toggleMenu? "navMobile active" : "navMobile"}>
                        <a href="#Apropos">A-propos</a>
                        <a href="#projet">Projet</a>
                        {/* <span>Fr/En</span> */}
                        <a href="https://github.com/Chhark">
                        <img src={git} alt="" className="LGgit"/>
                        </a>
                    </div>
                    <img className="burger" src={menu} alt="" onClick={() => UpdateToggleMenu(!toggleMenu)}  />
                </div>)}
            </div>
        </div>
    )
}

export default Slide