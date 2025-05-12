import React from 'react';
import { Clock, Check, Sparkles, Feather, ShoppingBag } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: <Clock className="h-10 w-10 text-purple-600" />,
      title: "Economize tempo",
      description: "O fim da rotina cansativa com chapinha, secador e escova separados. Realize tudo em um único passo."
    },
    {
      icon: <Check className="h-10 w-10 text-purple-600" />,
      title: "Para todos os tipos de cabelo",
      description: "Do liso ao crespo, a Escova Alisadora 3 em 1 foi testada e aprovada para todos os tipos de cabelo."
    },
    {
      icon: <Sparkles className="h-10 w-10 text-purple-600" />,
      title: "Resultados profissionais",
      description: "Acabamento de salão no conforto da sua casa, com economia e praticidade."
    },
    {
      icon: <Feather className="h-10 w-10 text-purple-600" />,
      title: "Sem danificar os fios",
      description: "A tecnologia exclusiva protege seus cabelos do calor excessivo enquanto alisa e modela."
    }
  ];

  return (
    <section id="benefits" className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="section-title fade-in">
          Uma Escova, <span className="text-purple-600">Três Funções</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10 staggered">
          {benefits.map((benefit, index) => (
            <div key={index} className="card group hover:bg-purple-50">
              <div className="mb-6 transform transition-transform duration-300 group-hover:scale-110">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-purple-100 rounded-2xl p-8 fade-in">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full">
              <div className="flex gap-8 items-start">
                <div className="flex flex-col items-center">
                  <div className="rounded-xl overflow-hidden shadow-lg w-[240px] flex-shrink-0">
                    <video
                      className="w-full h-full object-cover"
                      autoPlay
                      controls
                      loop
                      playsInline
                    >
                      <source src="/images/27_01 vídeo 2.mp4" type="video/mp4" />
                      Seu navegador não suporta o elemento de vídeo.
                    </video>
                  </div>
                  <a 
                    href="#pricing" 
                    className="mt-4 btn-primary flex items-center justify-center space-x-2 w-full"
                  >
                    <ShoppingBag className="w-5 h-5" />
                    <span>Comprar Agora</span>
                  </a>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4">Seca, Alisa e Modela em Um Único Passo</h3>
                  <p className="text-gray-700 mb-4">
                    Você já perdeu tempo tentando alisar ou modelar o cabelo com ferramentas diferentes?
                    A Escova Alisadora 3 em 1 foi criada para resolver isso em poucos minutos — unindo praticidade, 
                    tecnologia e resultados de salão no conforto da sua casa.
                  </p>
                  <ul className="space-y-2">
                    {['Seca com potência profissional', 'Modela com efeito duradouro', 
                      'Alisa sem danificar os fios', 'Ideal para todos os tipos de cabelo'].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;