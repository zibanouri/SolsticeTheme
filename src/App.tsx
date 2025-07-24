import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

function App() {

  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    if (saved !== null) {
      return JSON.parse(saved) as boolean
    }
    return window.matchMedia("{prefers-color-scheme: dark}").matches
  })
  useEffect(() => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.add("dark")
    } else {
      html.classList.remove("dark")
    }
    localStorage.setItem("darkMode",
      JSON.stringify(isDark)
    )
  }, [isDark])

  const toggleTheme = () => {
    setIsDark((prev) => !prev)
  }

  return (
    <div className=" flex flex-col items-center justify-center h-screen
     bg-sky-50 text-sky-950 dark:bg-sky-950 dark:text-sky-50">
      <button className="p-3 rounded-lg bg-sky-200 hover:bg-sky-300 dark:bg-sky-800 dark:hover:bg-sky-700 shadow-xl/30"
        onClick={toggleTheme}
        aria-label="{isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}">
        {isDark ? (
          <Sun className="text-yellow-500" size={24} />
        ) : (
          <Moon className="text-sky-950" size={24} />
        )}
      </button>
      <div className="mx-10 text-center">
        <h1 className="font-bold text-2xl">Herzlich willkommen auf meiner Webseite!</h1>
        <p className='mt-2'>Mini-Projekt zur Wechsel des Designs</p>
      </div>
    </div>
  )
}

export default App;
