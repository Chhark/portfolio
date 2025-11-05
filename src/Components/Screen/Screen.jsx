import { useEffect, useState } from "react";

import Console from "../Console/console";
import Home from "../Home/Home";
import NavBar from "../NavBar/NavBar";

import { useSelector } from "react-redux";
import { HashRouter as Rooter,Routes , Route } from 'react-router-dom'

import "./Screen.scss"

function Screen() {
    const isActive = useSelector(state => state.toggle.value)
    const [Boot , setBoot] = useState(true)
    
    return(
        <div className="Screen">
            {!isActive ? (
                <div className="placeHolder"></div>
            ) : Boot ? (
                <Console onFinish={() => setBoot(false)} />
            ) : (
               <Rooter>
                    <Routes>
                        <Route path="/" element={<Home />}/>
                    </Routes>
                    <NavBar></NavBar>
               </Rooter> 
               
            )}
        </div>
    )
}

export default Screen