import { useState } from "react"
import slider from "../../Data/slider"

function projectFilter() {
    const Tag = [...new Set(slider.flatMap(item => item.Tag))]
    console.log(Tag)
    const [projectList , SetProjectList] = useState(slider)
    return(
        <div>
            <div>
                {Tag.map(tag =>(
                    <div>{tag}</div>
                ))}
            </div>
            
        </div>
    )
}

export default projectFilter