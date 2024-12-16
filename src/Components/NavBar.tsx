export default function NavBar() {
  return (
    <nav className="flex items-center justify-between max-w-screen-xl mx-auto p-4">
      
      <span className="font-bold text-2xl font-sans"> Wallet </span>

      <div className="hidden sm:flex gap-6">
        <button className="hover:text-amber-400">Sign up</button>
        <button className="bg-amber-200 rounded-md px-8 py-2 text-zinc-950 font-medium hover:bg-amber-400"> Log in </button>
      </div>

      <div className="sm:hidden">
        <button
          className="p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
          aria-label="Open Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
}
