import { useEffect, useState } from "react"

export default function useCustomPointer(customPointer) {

    const [posizioneMouse, setPosizioneMouse] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const posizione = (event) => {
            setPosizioneMouse({ x: event.clientX, y: event.clientY })
        }

        window.addEventListener("mousemove", posizione)

        return () => {
            window.removeEventListener("mousemove", posizione)
        }
    }, [])

    return (
        <div style={{
            position: "fixed",
            fontSize: "1.5rem",
            left: posizioneMouse.x,
            top: posizioneMouse.y,
            transform: "translate(-50%, -50%)"
        }}>
            {customPointer}
        </div>
    )
}