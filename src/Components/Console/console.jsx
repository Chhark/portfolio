import "./console.scss"

function Console({onFinish}) {
    return(
        <div className="terminal">
            <div className="terminal-line" style={{animationDelay: "0s" ,}}> INITIALIZING NEON LABS SYSTEM...</div>
            <div className="terminal-line" style={{animationDelay: "0.8s"}}> LOADING CYBERPUNK PROTOCOL v4.2...</div>
            <div className="terminal-line" style={{animationDelay: "1.6s"}}> CONNECTING TO MATRIX... <span class="success">[OK]</span></div>
            <div className="terminal-line" style={{animationDelay: "2.4s"}}> BOOTING RETRO ENGINE... <span class="success">[OK]</span></div>
            <div className="terminal-line" style={{animationDelay: "3.2s"}}> ACTIVATING NEON GRID... <span class="success">[OK]</span></div>
            <div className="terminal-line blink" style={{animationDelay: "4s"}} onAnimationEnd={onFinish}> SYSTEM READY_</div>
        </div>
    )
}

export default Console