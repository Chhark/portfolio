import { useEffect, useState } from "react";

import Console from "../Console/console";


function Screen() {
    const [Boot , setBoot] = useState(true)

    useEffect(() =>{
        const timer = setTimeout(() => {
            setBoot(false)
        }, 5000)
    },[])
    
    return(
        <div>
            {Boot ? (
                <Console onFinish={() => setBoot(false)} />
            ) : (
                <div>Hello ^^</div> 
            )}
        </div>
    )
}

export default Screen