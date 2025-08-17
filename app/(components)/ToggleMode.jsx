"use client"

import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ToggleMode = () => {
    const {theme, setTheme} = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return <div>Hello</div>
    }

    const isDark = theme === "dark";

    return (
        <div className="hover:cursor-pointer hover:text-primary">
            {isDark? <Sun onClick={() => setTheme("light")}/> : <Moon onClick={() => setTheme("dark")}/>}
        </div>
    )
}

export default ToggleMode;