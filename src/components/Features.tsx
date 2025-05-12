import React from 'react';
import { Zap, Shield, RotateCcw, Theater as Thermostat, Award, Sparkle } from 'lucide-react';

const Features = () => {
  const techFeatures = [
    {
      icon: <Zap className="h-8 w-8 text-purple-600" />,
      title: "Tecnologia Íon Tourmaline",
      description: "Reduz o frizz e proporciona mais brilho e maciez aos fios."
    },
    {
      icon: <Shield className="h-8 w-8 text-purple-600" />,
      title: "Proteção contra Calor",
      description: "Protege os fios contra danos causados pelo calor excessivo."
    },
    {
      icon: <Thermostat className="h-8 w-8 text-purple-600" />,
      title: "3 Níveis de Temperatura",
      description: "Personalize de acordo com seu tipo de cabelo e necessidade."
    },
    {
      icon: <RotateCcw className="h-8 w-8 text-purple-600" />,
      title: "Cabo Giratório 360º",
      description: "Facilita o manuseio e evita que o cabo fique emaranhado."
    },
    {
      icon: <Award className="h-8 w-8 text-purple-600" />,
      title: "Revestimento Cerâmico",
      description: "Distribui o calor uniformemente, protegendo seus fios."
    },
    {
      icon: <Sparkle className="h-8 w-8 text-purple-600" />,
      title: "Design Ergonômico",
      description: "Leve e confortável, evita cansaço durante o uso."
    }
  ];

  return (
    <section id="features" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16 fade-in">
          <span className="inline-block text-purple-600 bg-purple-100 px-3 py-1 rounded-full text-sm font-medium mb-3">
            TECNOLOGIA AVANÇADA
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Por Que Nosso Secador é Diferente?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            O segredo está na combinação perfeita de tecnologias que cuidam do seu cabelo
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 staggered">
          {techFeatures.map((feature, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition duration-300 flex">
              <div className="bg-purple-100 rounded-full p-3 h-fit mr-4 flex-shrink-0">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 fade-in">
          <div className="relative overflow-hidden rounded-2xl">
            <img 
              src="https://images.pexels.com/photos/7479812/pexels-photo-7479812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Woman styling hair" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-80"></div>
            <div className="absolute bottom-0 left-0 p-8 text-white">
              <h3 className="text-2xl font-bold mb-3">Antes e Depois</h3>
              <p className="mb-4">Transforme seu cabelo em minutos e economize tempo na sua rotina.</p>
              <a href="#pricing" className="text-white underline underline-offset-4 font-medium hover:text-purple-200 transition-colors">
                Ver resultados
              </a>
            </div>
          </div>
          
          <div className="relative overflow-hidden rounded-2xl bg-purple-900 text-white p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-6">Como Funciona</h3>
              <ul className="space-y-4">
                <li className="flex">
                  <div className="bg-purple-700 rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-semibold text-lg">Seque</h4>
                    <p className="text-purple-200">Potência profissional seca os fios rapidamente</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="bg-purple-700 rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-semibold text-lg">Modele</h4>
                    <p className="text-purple-200">O design especial permite modelar curvas e ondas</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="bg-purple-700 rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">3</div>
                  <div>
                    <h4 className="font-semibold text-lg">Alise</h4>
                    <p className="text-purple-200">A tecnologia Tourmaline alisa os fios sem danificar</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <a href="#pricing" className="inline-block bg-white text-purple-700 font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-gray-100 transition duration-300 mt-8 text-center">
              Comprar Agora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;