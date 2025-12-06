"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Shield, Check } from "lucide-react"

export default function SubscriptionPage() {
  return (
    <div className="min-h-screen bg-[#0B0B0B] py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Shield className="w-8 h-8 text-[#00FF87]" />
            <span className="text-2xl font-bold text-white">Recomeço AI</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Escolha seu plano para desbloquear o Recomeço AI e iniciar sua jornada.
          </h1>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Plano Mensal */}
          <Card className="bg-[#1A1A1A] border-[#2A2A2A] p-8 hover:border-[#00FF87] transition-all duration-300">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">PLANO MENSAL</h2>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-[#00FF87]">R$ 19,90</span>
                  <span className="text-slate-400">/mês</span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#00FF87] flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">Acesso completo às trilhas</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#00FF87] flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">Exercícios diários</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#00FF87] flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">Conteúdos científicos</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#00FF87] flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">Estatísticas básicas</span>
                </div>
              </div>

              <Button
                onClick={() => window.location.href = "https://checkout.keoto.com/91ea0202-bdcf-4eac-8b14-e4fa82438713"}
                className="w-full bg-[#00FF87] text-black hover:bg-[#00DD75] font-semibold py-6 text-lg"
              >
                Escolher Mensal
              </Button>
            </div>
          </Card>

          {/* Plano Anual */}
          <Card className="bg-[#1A1A1A] border-[#00FF87] p-8 relative hover:shadow-2xl hover:shadow-[#00FF87]/20 transition-all duration-300">
            {/* Badge "Mais escolhido" */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="bg-[#00FF87] text-black text-xs font-semibold px-4 py-1 rounded-full">
                Mais escolhido
              </span>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">PLANO ANUAL</h2>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-[#00FF87]">R$ 34,90</span>
                  <span className="text-slate-400">/ano</span>
                </div>
                <p className="text-sm text-slate-400 mt-1">Economia de 85%</p>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#00FF87] flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">Todos os recursos completos</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#00FF87] flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">Trilhas avançadas de 90 dias</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#00FF87] flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">Histórico completo</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#00FF87] flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">Desafios mensais exclusivos</span>
                </div>
              </div>

              <Button
                onClick={() => window.location.href = "https://checkout.keoto.com/f3dbdd4e-f950-42f1-8e6d-534677c160f1"}
                className="w-full bg-[#00FF87] text-black hover:bg-[#00DD75] font-semibold py-6 text-lg"
              >
                Escolher Anual
              </Button>
            </div>
          </Card>
        </div>

        {/* Footer Info */}
        <div className="text-center mt-12 space-y-4">
          <p className="text-slate-400 text-sm">
            <Shield className="inline w-4 h-4 mr-1" />
            Pagamento seguro e criptografado
          </p>
          <p className="text-slate-500 text-xs max-w-2xl mx-auto">
            Ao escolher um plano, você concorda com nossos termos de serviço. 
            Você pode cancelar a qualquer momento.
          </p>
        </div>
      </div>
    </div>
  )
}