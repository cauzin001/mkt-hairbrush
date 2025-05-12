import React, { useState, useEffect } from 'react';
import { ShoppingBag, Truck, Shield, Check, Clock, CheckCircle as CircleCheck, CreditCard, Package } from 'lucide-react';

const Pricing = () => {
  const [countdown, setCountdown] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });
  
  const [remainingItems, setRemainingItems] = useState(147);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          return { hours: 23, minutes: 59, seconds: 59 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const randomDecrease = () => {
      const timeout = Math.floor(Math.random() * 30000) + 15000;
      setTimeout(() => {
        setRemainingItems(prev => (prev > 1 ? prev - 1 : 1));
        randomDecrease();
      }, timeout);
    };
    
    randomDecrease();
  }, []);

  return (
    <section id="pricing" className="section-padding bg-gradient-to-b from-purple-50 to-white">
      <div className="container-custom">
        <div className="text-center mb-12 fade-in">
          <span className="inline-block text-purple-600 bg-purple-100 px-3 py-1 rounded-full text-sm font-medium mb-3">
            OFERTA ESPECIAL
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Transforme Seu Cabelo Por Um Preço Incrível
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Promoção por tempo limitado com frete grátis para todo o Brasil
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden fade-in">
            <div className="bg-purple-600 py-4 px-6 text-white text-center">
              <h3 className="font-bold text-lg">OFERTA ESPECIAL - PAGUE APENAS APÓS RECEBER O PRODUTO</h3>
            </div>
            
            <div className="p-8">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-1/2">
                  <div className="aspect-square relative mb-6 mx-auto max-w-sm">
                    <div className="absolute -top-4 -right-4 bg-red-500 text-white rounded-full py-2 px-4 shadow-lg transform rotate-12 z-10">
                      <span className="font-bold">65% OFF</span>
                    </div>
                    <img 
                      src="/images/1.png" 
                      alt="Escova Alisadora" 
                      className="w-full h-full object-contain rounded-lg shadow-lg"
                    />
                  </div>
                  
                  <div className="flex justify-center space-x-4 mb-6">
                    <div className="text-center">
                      <div className="bg-purple-600 text-white w-12 h-12 rounded-lg flex items-center justify-center text-xl font-bold">
                        {countdown.hours.toString().padStart(2, '0')}
                      </div>
                      <p className="text-xs mt-1">horas</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-purple-600 text-white w-12 h-12 rounded-lg flex items-center justify-center text-xl font-bold">
                        {countdown.minutes.toString().padStart(2, '0')}
                      </div>
                      <p className="text-xs mt-1">min</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-purple-600 text-white w-12 h-12 rounded-lg flex items-center justify-center text-xl font-bold">
                        {countdown.seconds.toString().padStart(2, '0')}
                      </div>
                      <p className="text-xs mt-1">seg</p>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded">
                    <p className="text-yellow-800 text-sm flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      Restam apenas <span className="font-bold mx-1">{remainingItems}</span> unidades com desconto!
                    </p>
                  </div>

                  <div className="mt-6 bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2 flex items-center">
                      <Shield className="w-5 h-5 mr-2" />
                      Compre com Segurança Total
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-center text-green-700">
                        <CircleCheck className="w-4 h-4 mr-2" />
                        Pague somente após receber o produto
                      </li>
                      <li className="flex items-center text-green-700">
                        <CircleCheck className="w-4 h-4 mr-2" />
                        Sem risco - Satisfação garantida
                      </li>
                      <li className="flex items-center text-green-700">
                        <CircleCheck className="w-4 h-4 mr-2" />
                        7 dias para testar em casa
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="w-full md:w-1/2">
                  <h3 className="text-2xl font-bold mb-2">Escova Alisadora 3 em 1 StylePro</h3>
                  <div className="flex items-center mb-4">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 ml-2">(4,327 avaliações)</span>
                  </div>

                  {/* Individual Price */}
                  <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold mb-2">Comprar 1 Unidade</h4>
                    <p className="text-gray-500 text-sm mb-1">Preço normal</p>
                    <p className="text-2xl font-bold text-gray-400 line-through">R$ 397,00</p>
                    <div className="flex items-end gap-2">
                      <p className="text-3xl font-bold text-purple-600">R$ 139,99</p>
                      <p className="text-sm text-gray-600 mb-1">à vista no Pix</p>
                    </div>
                    <p className="text-gray-700">ou 12x de R$ 13,99</p>
                    <p className="text-green-600 font-medium mt-2 mb-2">
                      Pague somente após receber o produto
                    </p>
                    <a 
                      href="https://entrega.logzz.com.br/pay/memz3p30v/1-unidade-escova-alisadora"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full btn-primary flex items-center justify-center space-x-2 py-3 mt-4"
                    >
                      <ShoppingBag className="w-5 h-5" />
                      <span>COMPRAR 1 UNIDADE</span>
                    </a>
                  </div>

                  {/* Bundle Price */}
                  <div className="mb-6 p-4 bg-purple-50 rounded-lg border-2 border-purple-200">
                    <div className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium inline-block mb-2">
                      MELHOR OFERTA
                    </div>
                    <h4 className="font-semibold mb-2">Leve 2 Unidades</h4>
                    <p className="text-gray-500 text-sm mb-1">De R$ 794,00 por apenas</p>
                    <div className="flex items-end gap-2">
                      <p className="text-4xl font-bold text-purple-600">R$ 219,99</p>
                      <p className="text-sm text-gray-600 mb-1">à vista no Pix</p>
                    </div>
                    <p className="text-gray-700">ou 12x de R$ 21,99</p>
                    <p className="text-green-600 font-medium mt-2 mb-2">
                      Pague somente após receber os produtos
                    </p>
                    <p className="text-green-600 font-medium mb-2">
                      Economize R$ 574,01 (72% OFF)
                    </p>
                    <a 
                      href="https://entrega.logzz.com.br/pay/memz3p30v/bcrdm-2-unidades-escova-alisadora"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full btn-primary flex items-center justify-center space-x-2 py-3 mt-4"
                    >
                      <ShoppingBag className="w-5 h-5" />
                      <span>COMPRAR 2 UNIDADES</span>
                    </a>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-gray-700">
                      <CircleCheck className="w-5 h-5 text-green-500 mr-2" />
                      <span>Frete Grátis para todo o Brasil</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <CircleCheck className="w-5 h-5 text-green-500 mr-2" />
                      <span>Brinde exclusivo nas primeiras 300 unidades</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <CircleCheck className="w-5 h-5 text-green-500 mr-2" />
                      <span>Garantia incondicional de 7 dias</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center space-x-4 mt-4">
                    <div className="flex items-center">
                      <Package className="w-5 h-5 text-gray-600 mr-1" />
                      <span className="text-sm text-gray-600">5-12 dias úteis</span>
                    </div>
                    <div className="flex items-center">
                      <CreditCard className="w-5 h-5 text-gray-600 mr-1" />
                      <span className="text-sm text-gray-600">Pagamento seguro</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-green-50 p-4 text-center border-t border-green-100">
              <p className="text-green-700 flex items-center justify-center">
                <Shield className="w-5 h-5 mr-2" />
                <span>
                  Pague apenas após receber o produto. Satisfação garantida ou seu dinheiro de volta.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Star = (props: any) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      stroke="currentColor" 
      strokeWidth="0" 
      {...props}
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
};

export default Pricing;