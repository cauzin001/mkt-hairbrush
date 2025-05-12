import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="pt-24 pb-16 sm:pt-32 sm:pb-24 overflow-hidden bg-white">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-start gap-12">
          {/* Left side - Copy and CTA */}
          <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
            <div className="flex items-center gap-2 mb-6">
              {[1, 2, 3, 4, 5].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              ))}
              <span className="text-sm text-gray-600 ml-2">4.8/5 (4,327+ avaliações)</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6 fade-in">
              Transforme Seu Cabelo em <span className="text-purple-600">Minutos</span>
            </h1>

            <p className="text-xl text-gray-700 mb-6">
              Diga adeus ao frizz e cabelos rebeldes! Com a Escova Alisadora 3 em 1, você consegue:
            </p>
            
            <div className="bg-purple-50 border-l-4 border-purple-600 p-4 mb-6">
              <p className="text-lg text-gray-800">
                <span className="font-semibold">Resultados Imediatos!</span> Alise, modele e seque seus cabelos em uma única passada.
              </p>
            </div>
            
            <ul className="space-y-4 mb-8">
              {[
                'Economize até 70% do seu tempo',
                'Resultados profissionais em casa',
                'Tecnologia que protege seus fios',
                'Ideal para todos os tipos de cabelo'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-lg">
                  <div className="bg-green-100 rounded-full p-1">
                    <ArrowRight className="w-4 h-4 text-green-600" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#pricing" 
                className="btn-primary text-center"
              >
                Aproveite a Oferta Limitada
              </a>
            </div>
          </div>
          
          {/* Right side - VSL and Product Image */}
          <div className="w-full lg:w-1/2 relative">
            {/* VSL Video Section */}
            <div className="mb-8 rounded-2xl overflow-hidden shadow-2xl max-w-[240px] mx-auto">
              <div className="relative w-full" style={{ paddingTop: '177.78%' }}> {/* 9:16 Aspect Ratio */}
                <video
                  className="absolute top-0 left-0 w-full h-full"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src="/images/AQOID5g90vIgtB20yx6Yqdk_ipsJiiFTtMu4XP5ExYKyNfoRAxTc28xLoQX-3Nt0uH2n-NfUQY3mfUbuzRlYkILidNkcKrMJQHq2-Kg.mp4" type="video/mp4" />
                  Seu navegador não suporta o elemento de vídeo.
                </video>
              </div>
              <a 
                href="#pricing" 
                className="mt-4 btn-primary flex items-center justify-center space-x-2 w-full"
              >
                <ArrowRight className="w-5 h-5" />
                <span>Comprar Agora</span>
              </a>
            </div>

            <div className="relative">
              <div className="bg-purple-100 rounded-full h-[400px] w-[400px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 opacity-50"></div>
              <img 
                src="/images/16.03.2023 - ESTÁTICO - ESCOVA ALISADORA 05.png"
                alt="Escova Alisadora 3 em 1" 
                className="w-full h-auto max-w-[280px] sm:max-w-md mx-auto relative z-10"
              />
              <div className="absolute -right-6 top-10 bg-red-500 text-white rounded-full px-4 py-2 font-bold animate-bounce z-20">
                65% OFF
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;