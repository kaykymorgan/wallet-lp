import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


export default function Testimonials() {
  const clients = [
    {
      name: "Teste",
      description:
        "Esse produto mudou completamente minha rotina! A qualidade é incrível e o suporte foi excelente. Com certeza recomendo para todos!",
    },
    {
      name: "Ana",
      description:
        "O cartão é prático e super fácil de usar. A integração com o app facilita muito o controle financeiro. Recomendo para quem busca praticidade!",
    },
    {
      name: "Carlos",
      description:
        "Eu estava em dúvida antes de comprar, mas valeu cada centavo! A carteira virtual é segura e cheia de funcionalidades úteis para o meu dia a dia.",
    },
    {
      name: "Luiza",
      description:
        "Adorei a experiência! As taxas são transparentes e o cashback é um diferencial incrível. Não troco por outro!",
    },
    {
      name: "Ricardo",
      description:
        "O design do cartão é moderno e o suporte no app é excelente. Nunca tive problemas, só elogios a fazer!",
    },
    {
      name: "Fernanda",
      description:
        "Facilitou muito meu dia a dia. O app é intuitivo e o atendimento ao cliente é super rápido. Perfeito para organizar minha vida financeira.",
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto p-4 my-16">
    <h1 className="flex justify-center text-center font-extrabold text-3xl uppercase my-10">
        depoimento de nossos clientes
    </h1>

      <Swiper
        slidesPerView={3} 
        spaceBetween={30}
        pagination={{ clickable: true }}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 }, 
          640: { slidesPerView: 1.5, spaceBetween: 15 }, 
          768: { slidesPerView: 2, spaceBetween: 20 }, 
          1024: { slidesPerView: 3, spaceBetween: 30 }, 
        }}
        className="h-auto"
      >
        {clients.map((client, id) => (
          <SwiperSlide
            key={id}
            className="bg-amber-200 rounded-md flex flex-col items-center justify-center text-center p-6 min-h-[260px]"
          >
            <p className="text-gray-700 text-lg italic mb-4">
              "{client.description}"
            </p>
            <h3 className="text-gray-900 text-xl font-bold">{client.name}</h3>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
