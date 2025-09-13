export type FooterBarProp = {
  darkMode: boolean;
}

export const FooterBar = ({darkMode}:FooterBarProp) => {
    return (
    <footer className={`w-full h-auto py-4 text-center text-gray-400 border-t ${darkMode ? 'text-gray-400 border-gray-600' : 'text-gray-800 border-gray-900'}`}>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-2 md:text-[15px] text-[12px]">
        <span>
          © 2025 | Desenvolvido por
        </span>
        <a
          href="https://github.com/bruno-kirashy"
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center gap-2 font-semibold transition-colors hover:text-blue-500/90 hover:underline ${darkMode ? 'text-gray-400' : 'text-gray-800'}`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" 
          width="24"
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="lucide lucide-github-icon lucide-github">
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
          <path d="M9 18c-4.51 2-5-2-7-2"/>
          </svg>

          bruno-kirashy
        </a>
      </div>
    </footer>
    )
}