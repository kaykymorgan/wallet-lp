
function NavBar() {
  return (
    <nav className="flex justify-between max-w-screen-xl mx-auto p-4 ">

      <span className="font-bold text-2xl font-sans"> Wallet </span>

      <div className="flex gap-6">
        <button className="hover:text-amber-400">Sign up</button>
        <button className="bg-amber-200 rounded-md px-8 py-2 text-zinc-950 font-medium hover:bg-amber-400">Log in</button>
      </div>
      
    </nav>
  )
}

export default NavBar