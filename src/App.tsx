import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Clock, Star, Pizza, Beer, ChevronRight, Utensils, Navigation } from 'lucide-react';

const REVIEWS = [
  {
    id: 1,
    author: 'maira ariel',
    date: 'há 3 anos',
    text: 'Lugar top te fazem se sentir em casa um lanche sensacional muito bem servido ❤️❤️',
    rating: 5,
  },
  {
    id: 2,
    author: 'Kariny Mello',
    date: 'há 9 meses',
    text: 'A melhor pizza de Osasco! Amooooooo, experimentem a de atum com brócolis, é divina! E o atendimento do início ao fim é ótimo e pra completar o custo-benefício 🤍✨',
    rating: 5,
  },
  {
    id: 3,
    author: 'Rose Silva',
    date: 'há 9 meses',
    text: 'Um dos melhores atedimento ,, pizza , 🍕 e cerveja gelada',
    rating: 5,
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-[#FFF9F2] text-[#2D1B14] font-sans selection:bg-orange-500/30">
      {/* Navigation */}
      <nav className="fixed w-full z-50 top-0 left-0 border-b border-orange-100 bg-white/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-orange-500 rounded-2xl flex items-center justify-center rotate-3 shadow-lg shadow-orange-200">
              <span className="text-white text-2xl font-bold font-serif italic">M</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-orange-950 uppercase font-serif mb-0 leading-tight">Maju</h1>
              <p className="text-[10px] tracking-widest text-orange-500 font-bold uppercase m-0 leading-tight">Lanchonete & Pizzaria</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-[#2D1B14]">
            <a href="#menu" className="hover:text-orange-600 transition-colors">Cardápio</a>
            <a href="#reviews" className="hover:text-orange-600 transition-colors">Avaliações</a>
            <a href="#location" className="hover:text-orange-600 transition-colors">Localização</a>
          </div>
          <a 
            href="https://pedido.anota.ai" 
            target="_blank" 
            rel="noreferrer"
            className="px-6 py-2.5 bg-orange-500 text-white rounded-full font-bold shadow-lg shadow-orange-300 hover:bg-orange-600 transition-colors"
          >
            Fazer Pedido
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 px-6 flex items-center">
        <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="md:col-span-7 flex flex-col justify-center gap-6"
          >
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full w-fit shadow-sm border border-orange-50">
              <span className="flex text-yellow-400">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </span>
              <span className="text-sm font-bold text-orange-950">5.0</span>
              <span className="text-sm text-orange-400">• 15 avaliações</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold leading-[1.1] text-orange-950 tracking-tighter">
              A melhor pizza & snacks de <span className="text-orange-500">Osasco.</span>
            </h1>
            <p className="text-xl text-orange-800/70 max-w-lg leading-relaxed">
              Lanches sensacionais, pizzas divinas e o atendimento que faz você se sentir em casa. Sabores que valem cada centavo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <div className="flex flex-col gap-1 p-4 bg-white rounded-2xl border-2 border-orange-100 flex-1">
                <p className="text-xs font-bold text-orange-400 uppercase tracking-widest">Popular agora</p>
                <p className="text-lg font-bold">Atum com Brócolis</p>
                <p className="text-sm text-orange-800/60 leading-tight">A favorita da casa, peça agora e experimente.</p>
              </div>
              <div className="flex flex-col gap-1 p-4 bg-orange-100/50 rounded-2xl border-2 border-transparent flex-1">
                <p className="text-xs font-bold text-orange-500 uppercase tracking-widest">Faixa de Preço</p>
                <p className="text-lg font-bold">R$ 20 — 40</p>
                <p className="text-sm text-orange-800/60 leading-tight">Qualidade premium por preço justo.</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="md:col-span-5 relative flex items-center justify-center min-h-[400px] mt-8 md:mt-0"
          >
            <div className="absolute inset-0 bg-orange-400 rounded-[3rem] rotate-3 shadow-2xl"></div>
            <div className="absolute inset-0 bg-white rounded-[3rem] -rotate-3 overflow-hidden border-8 border-white shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1590947132387-155cc02f3212?q=80&w=2670&auto=format&fit=crop" 
                alt="Artisanal Pizza" 
                className="w-full h-full object-cover grayscale-[20%] brightness-90"
              />
            </div>
            <div className="absolute bottom-6 -right-4 md:-right-6 bg-yellow-400 px-6 py-4 rounded-full shadow-2xl animate-bounce">
              <p className="text-sm font-bold leading-none text-center">Massa<br />Fresca!</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Info Bar */}
      <div className="border-y border-orange-100 bg-white/40">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-wrap justify-center md:justify-around items-center gap-8">
          <div className="flex items-center gap-3">
            <Utensils className="w-5 h-5 text-orange-500" />
            <span className="font-bold text-orange-950 uppercase tracking-wide text-[11px]">Comer no local</span>
          </div>
          <div className="flex items-center gap-3">
            <Pizza className="w-5 h-5 text-orange-500" />
            <span className="font-bold text-orange-950 uppercase tracking-wide text-[11px]">Recolha móvel</span>
          </div>
          <div className="flex items-center gap-3">
            <Beer className="w-5 h-5 text-orange-500" />
            <span className="font-bold text-orange-950 uppercase tracking-wide text-[11px]">Entrega rápida</span>
          </div>
        </div>
      </div>

      {/* Menu Highlights Section */}
      <section id="menu" className="py-24 px-6 bg-[#FFF9F2]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[10px] uppercase tracking-widest text-orange-500 font-bold mb-4">Os Favoritos</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-orange-950 tracking-tight">De dar água na boca</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* MenuItem 1 */}
            <div className="bg-white border-2 border-orange-100 rounded-3xl overflow-hidden group shadow-sm">
              <div className="h-48 overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=2669&auto=format&fit=crop" alt="Pizza de Atum" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute top-4 left-4 bg-orange-500 text-white shadow-lg shadow-orange-300 text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">A Mais Pedida</div>
              </div>
              <div className="p-6">
                <h4 className="font-serif text-xl font-bold mb-2 text-orange-950">Atum com Brócolis</h4>
                <p className="text-orange-800/60 text-sm mb-4 leading-tight">Divina! A recomendação número um dos nossos clientes, recheio generoso e sabor único.</p>
              </div>
            </div>

            {/* MenuItem 2 */}
            <div className="bg-white border-2 border-transparent hover:border-orange-100 rounded-3xl overflow-hidden group shadow-sm transition-colors">
              <div className="h-48 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=2581&auto=format&fit=crop" alt="Pizzas Clássicas" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="p-6">
                <h4 className="font-serif text-xl font-bold mb-2 text-orange-950">Pizzas Tradicionais</h4>
                <p className="text-orange-800/60 text-sm mb-4 leading-tight">Massa crocante, borda recheada e ingredientes selecionados com o padrão Maju.</p>
              </div>
            </div>

            {/* MenuItem 3 */}
            <div className="bg-white border-2 border-transparent hover:border-orange-100 rounded-3xl overflow-hidden group shadow-sm transition-colors">
              <div className="h-48 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=2599&auto=format&fit=crop" alt="Lanches Especiais" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="p-6">
                <h4 className="font-serif text-xl font-bold mb-2 text-orange-950">Lanches Sensacionais</h4>
                <p className="text-orange-800/60 text-sm mb-4 leading-tight">Muito bem servidos para fazer você se sentir em casa. Vale cada centavo.</p>
              </div>
            </div>

            {/* MenuItem 4 */}
            <div className="bg-white border-2 border-transparent hover:border-orange-100 rounded-3xl overflow-hidden group shadow-sm transition-colors">
              <div className="h-48 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1615332579037-3c44b3660b53?q=80&w=2670&auto=format&fit=crop" alt="Cerveja Gelada" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="p-6">
                <h4 className="font-serif text-xl font-bold mb-2 text-orange-950">Bebidas e Cervejas</h4>
                <p className="text-orange-800/60 text-sm mb-4 leading-tight">Para acompanhar sua pizza ou lanche, a cerveja mais gelada da região.</p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
             <a 
                href="https://wa.me/5511947024579?text=Ol%C3%A1%2C%20gostaria%20de%20ver%20o%20card%C3%A1pio" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-orange-100 border-2 border-orange-200 text-orange-600 hover:bg-orange-200 rounded-full font-bold transition-colors uppercase tracking-widest text-[10px]"
              >
                Ver Cardápio Completo <ChevronRight className="w-4 h-4" />
             </a>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-24 px-6 relative bg-white border-y border-orange-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[10px] uppercase tracking-widest text-orange-500 font-bold mb-4">A Voz dos Clientes</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-orange-950 tracking-tight">O que dizem sobre nós</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {REVIEWS.map((review, i) => (
              <motion.div 
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#FFF9F2] border-2 border-orange-100 p-8 rounded-3xl flex flex-col items-start shadow-sm relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-orange-200/20 rounded-bl-[100px] -z-0"></div>
                <div className="flex gap-1 mb-6 relative z-10">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-orange-900 text-lg italic mb-8 grow font-medium relative z-10">"{review.text}"</p>
                <div className="flex items-center justify-between w-full mt-auto relative z-10">
                  <span className="font-bold text-orange-950">{review.author}</span>
                  <span className="text-[10px] font-bold text-orange-400 uppercase tracking-wider">{review.date}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-24 px-6 bg-[#FFF9F2]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-[10px] uppercase tracking-widest text-orange-500 font-bold mb-4">Visite-nos</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-orange-950 mb-8 leading-tight">Venha saborear<br />no local</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center shrink-0 border border-orange-200">
                  <MapPin className="w-5 h-5 text-orange-600" />
                </div>
                <div className="pt-1">
                  <h4 className="text-[10px] font-bold text-orange-400 uppercase tracking-widest mb-1">Onde estamos</h4>
                  <p className="text-[#2D1B14] font-semibold">R. Profeta Zacarias, 77<br />Conceicao, Osasco - SP<br />06145-136</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center shrink-0 border border-orange-200">
                  <Clock className="w-5 h-5 text-orange-600" />
                </div>
                <div className="pt-1">
                  <h4 className="text-[10px] font-bold text-orange-400 uppercase tracking-widest mb-1">Funcionamento</h4>
                  <p className="text-[#2D1B14] font-semibold">Aberto hoje até às 23:30</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center shrink-0 border border-orange-200">
                  <Phone className="w-5 h-5 text-orange-600" />
                </div>
                <div className="pt-1">
                  <h4 className="text-[10px] font-bold text-orange-400 uppercase tracking-widest mb-1">Peça pelo WhatsApp</h4>
                  <p className="text-orange-950 font-bold text-xl">(11) 94702-4579</p>
                </div>
              </div>
            </div>

            <div className="mt-10 flex gap-4">
              <a 
                href="https://maps.google.com/?q=R.+Profeta+Zacarias,+77+-+Conceicao,+Osasco+-+SP,+06145-136" 
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 bg-white hover:bg-orange-50 border-2 border-orange-200 text-orange-600 rounded-full font-bold transition-colors flex items-center gap-2 text-sm shadow-sm"
              >
                <Navigation className="w-4 h-4" /> Obter Direções
              </a>
            </div>
          </div>

          <div className="relative h-[500px] rounded-[3rem] overflow-hidden shadow-xl border-8 border-white group">
            <img 
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2574&auto=format&fit=crop" 
              alt="Lanchonete Interior" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-orange-950/20 mix-blend-multiply"></div>
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-6 rounded-3xl border border-orange-100 shadow-lg">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-serif text-xl font-bold text-orange-950">Maju Lanchonete e Pizzaria</h4>
                  <p className="text-orange-600 text-[10px] font-bold mt-1 uppercase tracking-widest">Faixa de preço: R$ 20 - 40</p>
                </div>
                <a 
                  href="https://maps.google.com/?q=R.+Profeta+Zacarias,+77+-+Conceicao,+Osasco+-+SP,+06145-136" 
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 bg-orange-500 rounded-2xl rotate-3 flex items-center justify-center hover:bg-orange-600 hover:rotate-0 transition-transform shadow-lg shadow-orange-300"
                >
                  <Navigation className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-orange-100 bg-white text-center">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center rotate-3 shadow-sm shadow-orange-200">
              <span className="text-white text-lg font-bold font-serif italic">M</span>
            </div>
            <span className="font-serif text-lg font-bold text-orange-950">MAJU</span>
          </div>
          <p className="text-orange-400 font-bold text-xs uppercase tracking-wider">
            © {new Date().getFullYear()} Lanchonete e Pizzaria Maju. Todos os direitos reservados.
          </p>
          <div className="flex gap-4">
            <a href="https://pedido.anota.ai" target="_blank" rel="noreferrer" className="text-orange-600 hover:text-orange-800 transition-colors text-xs font-bold uppercase tracking-wider">Cardápio</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
