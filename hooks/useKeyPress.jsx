import { useEffect, useState } from "react"

export default function useKeyPress(target) {

    const [isPressed, setIsPressed] = useState(false)

    useEffect(() => {
        const handleKeyDown = event => {
            if (event.key === target)
                setIsPressed(true)
        }

        const handleKeyUp = event => {
            if (event.key === target)
                setIsPressed(false)
        }

        window.addEventListener("keydown", handleKeyDown)
        window.addEventListener("keyup", handleKeyUp)

        return () => {
            window.removeEventListener("keydown", handleKeyDown)
            window.removeEventListener("keyup", handleKeyUp)
        }
    }, [target])

    return isPressed
}
