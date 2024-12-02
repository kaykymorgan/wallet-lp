import { useForm } from "react-hook-form";

type TFormData = {
  name: string;
  phone: string;
  email: string;
};

export default function Contact() {
  const { register, handleSubmit } = useForm<TFormData>();
  const handleSave = (data: TFormData) => {
    console.log(data);
  };

  return (
    <div className="flex items-center justify-between max-w-screen-xl mx-auto mt-28">

        <div className="basis-1/2">
            <h1 className="font-extrabold text-3xl uppercase mb-4"> Alguma dúvida? Fale conosco!</h1>
            <span className="text-zinc-400 ">Estamos aqui para ajudar! Sinta-se à vontade para nos ligar, enviar um e-mail ou nos encontrar nas redes sociais.</span>
            <ul className="mt-6 gap-4 list-disc  list-inside">
                <li>contato@wallet.com</li>
                <li>duvidas@wallet.com</li>
                <li>+55 15 99861-8972</li>
            </ul>
        </div>

      <div className="w-full max-w-lg p-8 bg-white rounded-lg">

        <h1 className="text-2xl font-bold text-center mb-6 text-gray-700"> Entre em Contato </h1>

        <form onSubmit={handleSubmit(handleSave)} className="space-y-6">
         
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700"> Nome </label>
            <input
              id="name"
              type="text"
              {...register("name", { required: true })}
              placeholder="Insira seu nome"
              className="w-full mt-1 p-2 border text-zinc-600 border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>
        
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700"> E-mail </label>
            <input
              id="email"
              type="email"
              {...register("email", { required: true })}
              placeholder="Digite seu melhor e-mail"
              className="w-full mt-1 p-2 border text-zinc-600 border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700"> Telefone </label>
            <input
              id="phone"
              type="text"
              {...register("phone", { required: true })}
              placeholder="Insira seu número de contato"
              className="w-full mt-1 p-2 border text-zinc-600 border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          
          <button
            type="submit"
            className="w-full bg-amber-200 text-zinc-950 font-medium py-2 rounded-md hover:bg-amber-300 transition duration-300"
          >
            Entrar em Contato
          </button>
        </form>
      </div>
    </div>
  );
}
