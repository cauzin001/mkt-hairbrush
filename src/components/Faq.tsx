import React, { useState } from 'react';
import { ChevronDown, ChevronUp, AlertCircle, TruckIcon, CreditCard, Package, ShieldCheck } from 'lucide-react';

const Faq = () => {
  const faqs = [
    {
      question: "Funciona em cabelo cacheado/crespo?",
      answer: "Sim! A Escova Alisadora 3 em 1 foi testada e aprovada para todos os tipos de cabelo, desde os lisos até os crespos. A tecnologia Íon Tourmaline ajuda a reduzir o frizz e proporcionar um alisamento suave mesmo em cabelos mais volumosos."
    },
    {
      question: "Ela danifica os fios?",
      answer: "Não! Pelo contrário: sua tecnologia de proteção térmica ajuda a proteger os fios do calor excessivo. O revestimento cerâmico distribui o calor uniformemente, evitando pontos quentes que poderiam danificar o cabelo. Os íons negativos ainda ajudam a selar as cutículas, contribuindo para cabelos mais saudáveis."
    },
    {
      question: "Quanto tempo leva para chegar?",
      answer: "O prazo de entrega é de 5 a 12 dias úteis para todo o Brasil. Você receberá um código de rastreio assim que seu pedido for despachado, permitindo acompanhar o envio em tempo real."
    },
    {
      question: "Posso usar em cabelos molhados?",
      answer: "Sim! A Escova Alisadora 3 em 1 foi projetada para ser usada em cabelos molhados ou úmidos. Na verdade, os melhores resultados são obtidos quando você começa a modelar o cabelo ainda úmido, pois isso facilita a modelagem e o alisamento."
    },
    {
      question: "Qual a voltagem do aparelho?",
      answer: "A Escova Alisadora 3 em 1 é bivolt automática (110V/220V), então você pode utilizá-la em qualquer tomada do Brasil sem preocupações. Não é necessário ajustar nenhuma chave, o aparelho identifica automaticamente a voltagem."
    },
    {
      question: "Como funciona a garantia?",
      answer: "Oferecemos 7 dias de garantia incondicional. Se você não ficar satisfeita com o produto, por qualquer motivo, basta entrar em contato conosco e devolveremos 100% do seu dinheiro. Além disso, o produto tem 1 ano de garantia contra defeitos de fabricação."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12 fade-in">
          <span className="inline-block text-purple-600 bg-purple-100 px-3 py-1 rounded-full text-sm font-medium mb-3">
            PERGUNTAS FREQUENTES
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Tire Suas Dúvidas</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Encontre respostas para as perguntas mais comuns sobre a Escova Alisadora 3 em 1
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto fade-in">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="mb-4 bg-white rounded-lg shadow-md overflow-hidden"
            >
              <button 
                className={`w-full text-left p-5 flex justify-between items-center focus:outline-none transition-colors ${
                  openIndex === index ? 'bg-purple-50' : ''
                }`}
                onClick={() => toggleFaq(index)}
                aria-expanded={openIndex === index}
              >
                <span className="font-semibold text-gray-800">{faq.question}</span>
                {openIndex === index ? 
                  <ChevronUp className="w-5 h-5 text-purple-600" /> : 
                  <ChevronDown className="w-5 h-5 text-gray-600" />
                }
              </button>
              <div 
                className={`px-5 transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index ? 'max-h-96 pb-5' : 'max-h-0'
                }`}
              >
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 max-w-3xl mx-auto fade-in">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="bg-purple-600 p-4 text-white">
              <h3 className="font-bold text-lg flex items-center">
                <AlertCircle className="w-5 h-5 mr-2" />
                Ainda tem dúvidas?
              </h3>
            </div>
            <div className="p-6">
              <p className="text-gray-700 mb-4">
                Se você tem alguma pergunta que não foi respondida acima, entre em contato conosco. 
                Nossa equipe está pronta para ajudar.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a 
                  href="mailto:contato@stylepro.com.br" 
                  className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="bg-purple-100 rounded-full p-2 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium">contato@stylepro.com.br</span>
                </a>
                <a 
                  href="https://wa.me/5527998685597" 
                  className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="bg-green-100 rounded-full p-2 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium">(27) 99868-5597</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 fade-in">
          <div className="bg-white p-5 rounded-lg shadow-md text-center">
            <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <TruckIcon className="text-purple-600 w-6 h-6" />
            </div>
            <h3 className="font-semibold mb-2">Frete Grátis</h3>
            <p className="text-gray-600 text-sm">Para todo o Brasil em todas as compras</p>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-md text-center">
            <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <CreditCard className="text-purple-600 w-6 h-6" />
            </div>
            <h3 className="font-semibold mb-2">Pagamento Seguro</h3>
            <p className="text-gray-600 text-sm">Todas as formas de pagamento</p>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-md text-center">
            <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Package className="text-purple-600 w-6 h-6" />
            </div>
            <h3 className="font-semibold mb-2">Enviamos em 24h</h3>
            <p className="text-gray-600 text-sm">Pedidos despachados em dia útil</p>
          </div>
          
          <div className="bg-white p-5 rounded-lg shadow-md text-center">
            <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <ShieldCheck className="text-purple-600 w-6 h-6" />
            </div>
            <h3 className="font-semibold mb-2">Garantia de 7 dias</h3>
            <p className="text-gray-600 text-sm">Satisfação ou seu dinheiro de volta</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;