import "./Home.scss"
import Windows from "../Windows/windows"
function Home(){
    return(
        <div className="Home">
            <Windows ofstX = {100} ofstY = {100} Size={"clasicSize"}>
                <span>Hello</span>
            </Windows>
            <Windows ofstX = {100} ofstY = {100} Size={"LargeSize"}>
                <span>Hello</span>
            </Windows>
            <Windows ofstX = {100} ofstY = {100} Size={"clasicSize"}>
                <span>Hello</span>
            </Windows>
            <Windows ofstX = {100} ofstY = {100} Size={"clasicSize"}>
                <span>Hello</span>
            </Windows>
        </div>
    )
}

export default Home