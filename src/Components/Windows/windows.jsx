import { useState , useEffect, useRef } from "react"
import "./windows.scss"

function Windows({children , ofstX , ofstY , Size}) {
    const [pos , setPos] = useState({x : ofstX, y: ofstY})
    const [drag , SetDrag] = useState(false)
    const [offset , setOffset] = useState({ x: 0, y: 0 })
    const windowRef = useRef(null)

    function startDrag(e) {
    SetDrag(true);
    setOffset({ x: e.clientX - pos.x, y: e.clientY - pos.y });
  }

  function onDrag(e) {
    if (!drag || !windowRef.current) return;

    const parent = windowRef.current.parentElement;
    const parentRect = parent.getBoundingClientRect();
    const windowRect = windowRef.current.getBoundingClientRect();

    let newX = e.clientX - offset.x;
    let newY = e.clientY - offset.y;

    newX = Math.max(0, Math.min(newX, parentRect.width - windowRect.width));
    newY = Math.max(0, Math.min(newY, parentRect.height - windowRect.height));    

    setPos({ x: newX, y: newY});
  }

  function stopDrag() {
    SetDrag(false);
  }

  useEffect(() => {
    window.addEventListener("mousemove", onDrag);
    window.addEventListener("mouseup", stopDrag);
    return () => {
      window.removeEventListener("mousemove", onDrag);
      window.removeEventListener("mouseup", stopDrag);
    };
  });
    return(<div ref={windowRef} className={`windows ${Size}`} style={{
        position : "absolute" ,
        top : pos.y ,
        left : pos.x ,
    }} onMouseMove={onDrag} onMouseUp={stopDrag}>
        <div className="windowHeader" onMouseDown={startDrag}>
            <span>[ title ]</span>
        </div>
        <div>{children}</div>
    </div>
    )

}

export default Windows 