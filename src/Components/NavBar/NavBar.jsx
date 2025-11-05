import "./NavBar.scss"
function NavBar() {
    return(
        <div className="NavBar">
            <div className="NavHeader">
                <span>[ Navigation ]</span>
            </div>
            <div className="NavLink">
            <span className="NavLine"> &gt; Page</span>
            <span className="NavLine Sub">Home</span>
            <span className="NavLine">&gt; Link</span>
            </div>
        </div>
    )
}

export default NavBar 