
function Hero() {
  return (
    <main className="flex items-center justify-between h-2/3 mt-24 max-w-screen-xl mx-auto p-4 ">

        <div className="basis-1/2"> 
            <h1 className="font-extrabold text-3xl uppercase mb-4">Simplifique Seus Investimentos e Potencialize Seus Resultados</h1>
            <span className="text-zinc-500 ">
                Gerencie sua carteira, tome decisões inteligentes e tenha controle total sobre seus investimentos.
                Nossa plataforma combina tecnologia de ponta e insights financeiros para maximizar sua performance no mercado.
            </span> <br />
            <button className="bg-yellow-300 text-zinc-950 font-medium rounded-md px-8 py-2 mt-6 hover:bg-yellow-400"> Veja Mais </button>
        </div>

        <div className="bg-zinc-600 rounded-3xl">
            <img src="src/assets/heroimg.png" alt="" />
        </div>
    </main>
  )
}

export default Hero