"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Shield, ArrowRight, ArrowLeft } from "lucide-react"
import { COMMON_TRIGGERS, PRIVACY_PRINCIPLES } from "@/lib/constants"
import { useRouter } from "next/navigation"

export default function OnboardingPage() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    pseudonym: "",
    age: "",
    mainGoal: "",
    triggers: [] as string[],
    motivation: "",
    privacyConsent: false
  })

  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1)
    } else {
      // Save to localStorage (temporary - will be replaced with Supabase)
      localStorage.setItem("user", JSON.stringify({
        ...formData,
        id: crypto.randomUUID(),
        createdAt: new Date().toISOString(),
        currentDay: 1,
        currentWeek: 1
      }))
      router.push("/subscription")
    }
  }

  const handleBack = () => {
    if (step > 1) setStep(step - 1)
  }

  const toggleTrigger = (trigger: string) => {
    setFormData(prev => ({
      ...prev,
      triggers: prev.triggers.includes(trigger)
        ? prev.triggers.filter(t => t !== trigger)
        : [...prev.triggers, trigger]
    }))
  }

  const canProceed = () => {
    switch (step) {
      case 1:
        return formData.pseudonym.length >= 3 && formData.age.length > 0
      case 2:
        return formData.mainGoal.length >= 10
      case 3:
        return formData.triggers.length > 0
      case 4:
        return formData.motivation.length >= 10 && formData.privacyConsent
      default:
        return false
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Shield className="w-8 h-8 text-emerald-600" />
            <span className="text-2xl font-bold text-slate-800">Recomeço</span>
          </div>
          <p className="text-slate-600">Vamos conhecer você melhor para personalizar sua jornada</p>
        </div>

        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between mb-2">
            <span className="text-sm text-slate-600">Etapa {step} de 4</span>
            <span className="text-sm text-slate-600">{Math.round((step / 4) * 100)}%</span>
          </div>
          <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-emerald-600 transition-all duration-300"
              style={{ width: `${(step / 4) * 100}%` }}
            />
          </div>
        </div>

        {/* Step Content */}
        <Card className="p-8 bg-white border-slate-200">
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-slate-800 mb-2">
                  Escolha seu pseudônimo
                </h2>
                <p className="text-slate-600">
                  Sua privacidade é fundamental. Use um nome que não revele sua identidade.
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="pseudonym">Pseudônimo</Label>
                  <Input
                    id="pseudonym"
                    placeholder="Ex: Guerreiro123, Fênix, Recomeço2024"
                    value={formData.pseudonym}
                    onChange={(e) => setFormData({ ...formData, pseudonym: e.target.value })}
                    className="mt-2"
                  />
                  <p className="text-xs text-slate-500 mt-1">
                    Mínimo 3 caracteres. Este nome será usado apenas internamente.
                  </p>
                </div>

                <div>
                  <Label htmlFor="age">Idade</Label>
                  <Input
                    id="age"
                    type="number"
                    placeholder="Ex: 28"
                    value={formData.age}
                    onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                    className="mt-2"
                    min="18"
                    max="100"
                  />
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-slate-800 mb-2">
                  Qual é seu objetivo principal?
                </h2>
                <p className="text-slate-600">
                  Seja específico. Isso nos ajudará a personalizar seu programa.
                </p>
              </div>

              <div>
                <Label htmlFor="mainGoal">Descreva seu objetivo</Label>
                <textarea
                  id="mainGoal"
                  placeholder="Ex: Quero recuperar o controle da minha vida, melhorar meus relacionamentos, ter mais energia e foco..."
                  value={formData.mainGoal}
                  onChange={(e) => setFormData({ ...formData, mainGoal: e.target.value })}
                  className="mt-2 w-full min-h-[120px] p-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <p className="text-xs text-slate-500 mt-1">
                  Mínimo 10 caracteres. Seja honesto consigo mesmo.
                </p>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-slate-800 mb-2">
                  Quais são seus principais gatilhos?
                </h2>
                <p className="text-slate-600">
                  Selecione as situações que mais desencadeiam seus impulsos.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {COMMON_TRIGGERS.map((trigger) => (
                  <div
                    key={trigger}
                    onClick={() => toggleTrigger(trigger)}
                    className={`
                      p-4 border-2 rounded-lg cursor-pointer transition-all
                      ${formData.triggers.includes(trigger)
                        ? 'border-emerald-600 bg-emerald-50'
                        : 'border-slate-200 hover:border-slate-300'
                      }
                    `}
                  >
                    <div className="flex items-center gap-2">
                      <Checkbox
                        checked={formData.triggers.includes(trigger)}
                        onCheckedChange={() => toggleTrigger(trigger)}
                      />
                      <span className="text-sm font-medium text-slate-700">
                        {trigger}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-xs text-slate-500">
                Selecione pelo menos um gatilho. Você poderá adicionar mais depois.
              </p>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-slate-800 mb-2">
                  O que te motiva a mudar?
                </h2>
                <p className="text-slate-600">
                  Lembre-se deste motivo nos momentos difíceis.
                </p>
              </div>

              <div>
                <Label htmlFor="motivation">Sua motivação</Label>
                <textarea
                  id="motivation"
                  placeholder="Ex: Quero ser uma pessoa melhor, ter relacionamentos mais profundos, me sentir no controle..."
                  value={formData.motivation}
                  onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
                  className="mt-2 w-full min-h-[120px] p-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div className="bg-slate-50 p-6 rounded-lg space-y-4">
                <h3 className="font-semibold text-slate-800 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-emerald-600" />
                  Compromisso de privacidade
                </h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  {PRIVACY_PRINCIPLES.map((principle, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-emerald-600 mt-1">✓</span>
                      <span>{principle}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex items-start gap-3 pt-4">
                  <Checkbox
                    id="privacy"
                    checked={formData.privacyConsent}
                    onCheckedChange={(checked) => 
                      setFormData({ ...formData, privacyConsent: checked as boolean })
                    }
                  />
                  <Label htmlFor="privacy" className="text-sm leading-relaxed cursor-pointer">
                    Eu li e concordo com os termos de privacidade. Entendo que este 
                    é um programa de autoajuda e não substitui atendimento profissional.
                  </Label>
                </div>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-between mt-8 pt-6 border-t">
            <Button
              variant="outline"
              onClick={handleBack}
              disabled={step === 1}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar
            </Button>
            <Button
              onClick={handleNext}
              disabled={!canProceed()}
              className="bg-emerald-600 hover:bg-emerald-700"
            >
              {step === 4 ? "Começar jornada" : "Próximo"}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </Card>
      </div>
    </div>
  )
}
