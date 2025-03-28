import { Clock } from "lucide-react"
import { useEffect, useState } from "react"


function App() {
  const [dots, setDots] = useState(".")

  // Simple animation for the dots to create a subtle loading effect
  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length < 3 ? prev + "." : "."))
    }, 800)
  
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-black p-4">
      <div className="w-full max-w-md mx-auto text-center space-y-8">
        {/* Logo/Icon */}
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border-2 border-black mb-2">
          <Clock className="w-8 h-8" />
        </div>

        {/* Main heading */}
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tighter">Coming Soon{dots}</h1>

        {/* Separator line */}
        <div className="w-16 h-1 bg-black mx-auto my-6" />

        {/* Follow on X */}
        <div className="space-y-4">
          <p className="text-lg text-gray-700">Follow for updates</p>
          <a
            href="https://x.com/austinwalker"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border-2 border-black font-medium hover:bg-black hover:text-white transition-colors duration-200"
          >
            @austinwalker
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-4 text-xs text-gray-400">
        &copy; {new Date().getFullYear()} • All rights reserved
      </footer>
    </div>
  );
}

export default App;

