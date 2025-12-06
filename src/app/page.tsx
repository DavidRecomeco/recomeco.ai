"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Shield, Brain, TrendingUp, Lock, CheckCircle2, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="w-6 h-6 text-emerald-600" />
            <span className="text-xl font-bold text-slate-800">Recomeço</span>
          </div>
          <Link href="/onboarding">
            <Button variant="outline" size="sm">
              Entrar
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-4">
            Programa baseado em ciência comportamental
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight">
            Transforme sua vida em{" "}
            <span className="text-emerald-600">30 dias</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto">
            Um programa estruturado de autoajuda para superar compulsões, 
            recuperar o controle e construir hábitos saudáveis.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Link href="/onboarding">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 text-lg">
                Começar agora
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Button 
              size="lg" 
              variant="outline" 
              className="px-8 py-6 text-lg"
              onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Como funciona
            </Button>
          </div>

          <p className="text-sm text-slate-500 pt-4">
            <Lock className="inline w-4 h-4 mr-1" />
            100% anônimo e privado. Seus dados são criptografados.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="p-6 space-y-4 border-slate-200 bg-white hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
              <Brain className="w-6 h-6 text-emerald-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-800">Baseado em CBT</h3>
            <p className="text-slate-600">
              Técnicas de terapia cognitivo-comportamental e mindfulness 
              adaptadas para autoajuda estruturada.
            </p>
          </Card>

          <Card className="p-6 space-y-4 border-slate-200 bg-white hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-800">Acompanhamento diário</h3>
            <p className="text-slate-600">
              Registre seu progresso, identifique gatilhos e visualize 
              sua evolução com gráficos simples e motivadores.
            </p>
          </Card>

          <Card className="p-6 space-y-4 border-slate-200 bg-white hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <Shield className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-800">Privacidade total</h3>
            <p className="text-slate-600">
              Sem julgamentos, sem exposição. Use um pseudônimo e 
              mantenha seus dados completamente privados.
            </p>
          </Card>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
              Como funciona o programa
            </h2>
            
            <div className="space-y-8">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">Consciência dos gatilhos</h3>
                  <p className="text-slate-600">
                    Semana 1: Identifique padrões, entenda seus gatilhos emocionais 
                    e aprenda a reconhecer os sinais antes da compulsão.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">Controle de impulsos</h3>
                  <p className="text-slate-600">
                    Semana 2: Técnicas práticas para interromper o ciclo, 
                    exercícios de respiração e estratégias de distração saudável.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">Redirecionamento do foco</h3>
                  <p className="text-slate-600">
                    Semana 3: Construa novos hábitos, encontre atividades 
                    significativas e redirecione sua energia para o que importa.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">Ritualização da mudança</h3>
                  <p className="text-slate-600">
                    Semana 4: Consolide seus novos hábitos, crie rituais de 
                    bem-estar e prepare-se para manter a transformação a longo prazo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
            Histórias de transformação
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 space-y-4 bg-white border-slate-200">
              <div className="flex items-center gap-2 text-emerald-600">
                <CheckCircle2 className="w-5 h-5" />
                <CheckCircle2 className="w-5 h-5" />
                <CheckCircle2 className="w-5 h-5" />
                <CheckCircle2 className="w-5 h-5" />
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <p className="text-slate-700 italic">
                "Depois de anos tentando parar sozinho, finalmente encontrei 
                um método que funciona. O programa me ajudou a entender meus 
                gatilhos e criar estratégias reais de mudança."
              </p>
              <p className="text-sm text-slate-500">— Rafael, 28 anos</p>
            </Card>

            <Card className="p-6 space-y-4 bg-white border-slate-200">
              <div className="flex items-center gap-2 text-emerald-600">
                <CheckCircle2 className="w-5 h-5" />
                <CheckCircle2 className="w-5 h-5" />
                <CheckCircle2 className="w-5 h-5" />
                <CheckCircle2 className="w-5 h-5" />
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <p className="text-slate-700 italic">
                "A privacidade total me deu coragem para começar. O suporte 
                da IA e os exercícios diários fizeram toda a diferença. 
                Estou no controle pela primeira vez em anos."
              </p>
              <p className="text-sm text-slate-500">— Lucas, 34 anos</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-gradient-to-r from-emerald-600 to-emerald-700 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Pronto para começar sua transformação?
          </h2>
          <p className="text-xl text-emerald-50 mb-8 max-w-2xl mx-auto">
            Junte-se a centenas de homens que estão recuperando o controle 
            de suas vidas. Comece hoje, de forma anônima e segura.
          </p>
          <Link href="/onboarding">
            <Button size="lg" className="bg-white text-emerald-600 hover:bg-slate-100 px-8 py-6 text-lg">
              Iniciar programa agora
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Shield className="w-5 h-5 text-emerald-500" />
                <span className="text-white font-bold">Recomeço</span>
              </div>
              <p className="text-sm">
                Programa de autoajuda estruturado baseado em ciência 
                comportamental para transformação pessoal.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Recursos</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Como funciona</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sobre o programa</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Perguntas frequentes</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Política de privacidade</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Termos de uso</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm">
            <p>© 2024 Recomeço. Todos os direitos reservados.</p>
            <p className="mt-2 text-slate-500">
              Este não é um serviço médico. Procure ajuda profissional se necessário.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}