import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Juliana M.",
      location: "São Paulo",
      rating: 5,
      text: "Meu cabelo é cacheado e nunca consegui modelar sem frizz. Essa escova mudou TUDO! Prática, leve e eficiente. Já não sofro mais para me arrumar de manhã. Recomendo demais!"
    }
  ];

  return (
    <section id="testimonials" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12 fade-in">
          <span className="inline-block text-purple-600 bg-purple-100 px-3 py-1 rounded-full text-sm font-medium mb-3">
            RESULTADOS REAIS
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold">Transformações Reais</h2>
          <p className="text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
            Veja os resultados impressionantes em diferentes tipos de cabelo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Before and After Grid */}
          <div className="bg-white rounded-xl overflow-hidden shadow-lg p-6">
            <h3 className="text-xl font-bold mb-4">Cabelo Cacheado</h3>
            <img 
              src="/images/8GgqY_X46_mid.jpg" 
              alt="Resultado em cabelo cacheado" 
              className="w-full h-auto rounded-lg mb-4"
            />
            <div className="mt-4">
              <div className="flex items-center mb-2">
                {[1,2,3,4,5].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 italic">
                "Resultado incrível! Meu cabelo ficou super liso e brilhante em poucos minutos."
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl overflow-hidden shadow-lg p-6">
            <h3 className="text-xl font-bold mb-4">Cabelo Ondulado</h3>
            <img 
              src="/images/ClGMHzEyM_mid.jpg" 
              alt="Resultado em cabelo ondulado" 
              className="w-full h-auto rounded-lg mb-4"
            />
            <div className="mt-4">
              <div className="flex items-center mb-2">
                {[1,2,3,4,5].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 italic">
                "Nunca tive resultados tão bons! Meu cabelo ficou liso e macio como nunca."
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl overflow-hidden shadow-lg p-6">
            <h3 className="text-xl font-bold mb-4">Cabelo Crespo</h3>
            <img 
              src="/images/nP231itC__mid.jpg" 
              alt="Resultado em cabelo crespo" 
              className="w-full h-auto rounded-lg mb-4"
            />
            <div className="mt-4">
              <div className="flex items-center mb-2">
                {[1,2,3,4,5].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 italic">
                "Transformação completa! A escova deixou meu cabelo perfeitamente liso."
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl overflow-hidden shadow-lg p-6">
            <h3 className="text-xl font-bold mb-4">Resultado Profissional</h3>
            <img 
              src="/images/470460703_18040939478244256_7902396938007865230_n.jpg" 
              alt="Resultado profissional" 
              className="w-full h-auto rounded-lg mb-4"
            />
            <div className="mt-4">
              <div className="flex items-center mb-2">
                {[1,2,3,4,5].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 italic">
                "Acabamento profissional em casa! Economizo tempo e dinheiro com a escova."
              </p>
            </div>
          </div>
        </div>

        {/* Product Features */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">Por que escolher nossa Escova Alisadora?</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                    <Star className="w-5 h-5 text-purple-600" />
                  </div>
                  <span>Resultados profissionais em minutos</span>
                </li>
                <li className="flex items-center">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                    <Star className="w-5 h-5 text-purple-600" />
                  </div>
                  <span>Tecnologia que protege seus fios</span>
                </li>
                <li className="flex items-center">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                    <Star className="w-5 h-5 text-purple-600" />
                  </div>
                  <span>Ideal para todos os tipos de cabelo</span>
                </li>
              </ul>
            </div>
            <div>
              <img 
                src="/images/27_01 imagem.png"
                alt="Escova Alisadora 3 em 1" 
                className="w-full h-auto max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
        
        <div className="mt-16 bg-purple-600 rounded-2xl p-8 text-white fade-in">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-3/4 mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">Junte-se às mais de 100 mil mulheres satisfeitas</h3>
              <p className="opacity-90 mb-4">
                Transforme sua rotina com a Escova Alisadora 3 em 1 e tenha cabelos de salão todos os dias.
              </p>
              <a href="#pricing" className="inline-block bg-white text-purple-600 font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-gray-100 transition duration-300">
                Quero Experimentar
              </a>
            </div>
            <div className="w-full md:w-1/4 flex justify-center">
              <div className="bg-white bg-opacity-20 rounded-full h-32 w-32 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-3xl font-bold">100k+</div>
                  <div className="text-sm opacity-90">clientes</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;