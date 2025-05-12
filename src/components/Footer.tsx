import React from 'react';
import { Instagram, Facebook, Twitter, Youtube, CreditCard, Shield } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">StylePro</h3>
            <p className="text-gray-400 mb-4">
              Transformando a rotina de cuidados com o cabelo das mulheres brasileiras desde 2022.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Termos e Condições</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Política de Troca</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Rastreamento de Pedido</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Seg-Sex: 8h às 18h</li>
              <li><a href="mailto:contato@stylepro.com.br" className="text-gray-400 hover:text-white transition-colors">contato@stylepro.com.br</a></li>
              <li><a href="tel:+551199999999" className="text-gray-400 hover:text-white transition-colors">(11) 99999-9999</a></li>
              <li className="text-gray-400">São Paulo, SP - Brasil</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Formas de Pagamento</h3>
            <div className="grid grid-cols-3 gap-2">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="bg-gray-800 rounded p-2 flex justify-center">
                  <CreditCard className="w-6 h-6 text-gray-400" />
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-center text-gray-400">
              <Shield className="w-5 h-5 mr-2" />
              <span className="text-sm">Site Seguro</span>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} StylePro. Todos os direitos reservados.</p>
          <p className="mt-2">
            As imagens são meramente ilustrativas. Secador 3 em 1 StylePro é uma marca registrada.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;