
function Services() {
  return (
    <>
        <h1 className="flex justify-center font-extrabold text-3xl uppercase mt-10">soluções Inteligentes para Seus Pagamentos</h1>
        <div className="flex mt-10 max-w-screen-xl mx-auto">
            
            <div className="flex flex-col items-center text-center border border-zinc-600 rounded-md flex-1 p-4 m-2">
                <img src="src/assets/cardsicon.png" alt="" />
                <h1 className="font-bold text-2xl my-3">Cartão Customizado</h1>
                <p>Personalize seu próprio cartão de acordo com suas necessidades exatas de receitas e despesas.</p>
            </div>

            <div className="flex flex-col items-center text-center border border-zinc-600 rounded-md flex-1 p-4 m-2" >
                <img src="src/assets/coinicon.png" alt="" />
                <h1 className="font-bold text-2xl my-3">Sem taxa de pagamento</h1>
                <p>Transfira seu pagamento para todo o mundo sem taxa de pagamento.</p>
            </div>

            <div className="flex flex-col items-center text-center border border-zinc-600 rounded-md flex-1 p-4 m-2">
                <img src="src/assets/purseicon.png" alt="" />
                <h1 className="font-bold text-2xl my-3">Tudo em um só lugar</h1>
                <p>O lugar certo para guardar seus cartões de crédito e débito, cartões de embarque e muito mais.</p>
            </div>
        </div>
        
        <div className="flex justify-center">
            <button className=" bg-amber-200 text-zinc-950 font-medium rounded-md px-8 py-2 mt-6 hover:bg-amber-400 "> Veja Mais </button>
        </div>
        
    </>
  )
}

export default Services