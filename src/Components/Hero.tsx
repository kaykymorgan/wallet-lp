export default function Hero() {
  return (
    <main className="flex flex-col-reverse md:flex-row items-center justify-between h-auto md:h-2/3 mt-24 max-w-screen-xl mx-auto p-4 gap-8">
      
      <div className="basis-full md:basis-1/2 text-center md:text-left">
        <h1 className="font-extrabold text-2xl md:text-3xl uppercase mb-4">
          Simplifique Seus Investimentos e Potencialize Seus Resultados
        </h1>
        <span className="text-zinc-400 block mb-6">
          Gerencie sua carteira, tome decisões inteligentes e tenha controle total sobre seus investimentos.
          Nossa plataforma combina tecnologia de ponta e insights financeiros para maximizar sua performance no mercado.
        </span>
        <button className="bg-amber-200 text-zinc-950 font-medium rounded-md px-8 py-2 hover:bg-amber-400"> Veja Mais </button>
      </div>

      <div className="w-full md:basis-1/2 flex justify-center">
        <img
          src="src/assets/heroimg.png"
          alt="Hero image"
          className="max-w-full h-auto bg-zinc-600 rounded-3xl w-1/2"
          
        />
      </div>
    </main>
  );
}
