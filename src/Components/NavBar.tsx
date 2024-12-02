
function NavBar() {
  return (
    <nav className="flex justify-between max-w-screen-xl mx-auto p-4 ">

      <span className="font-bold text-2xl font-sans"> Wallet </span>

      <div className="flex gap-6">
        <button className="hover:text-violet-400">Sign up</button>
        <button className="bg-violet-400 rounded-md px-8 py-2 hover:bg-violet-500">Log in</button>
      </div>
      
    </nav>
  )
}

export default NavBar