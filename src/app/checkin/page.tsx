"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Shield, ArrowLeft, CheckCircle2 } from "lucide-react"
import { COMMON_TRIGGERS, MOOD_LABELS } from "@/lib/constants"

export default function CheckInPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    mood: 3,
    hadUrge: false,
    hadRelapse: false,
    triggers: [] as string[],
    notes: "",
    victories: ""
  })

  const toggleTrigger = (trigger: string) => {
    setFormData(prev => ({
      ...prev,
      triggers: prev.triggers.includes(trigger)
        ? prev.triggers.filter(t => t !== trigger)
        : [...prev.triggers, trigger]
    }))
  }

  const handleSubmit = () => {
    // Save check-in data
    const checkIns = JSON.parse(localStorage.getItem("checkIns") || "[]")
    checkIns.push({
      id: crypto.randomUUID(),
      date: new Date().toISOString(),
      ...formData
    })
    localStorage.setItem("checkIns", JSON.stringify(checkIns))
    
    // Update user stats
    const user = JSON.parse(localStorage.getItem("user") || "{}")
    user.lastCheckIn = new Date().toISOString()
    localStorage.setItem("user", JSON.stringify(user))
    
    router.push("/dashboard")
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Button
            variant="outline"
            size="sm"
            onClick={() => router.push("/dashboard")}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar
          </Button>
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Check-in diário</h1>
            <p className="text-slate-600">Como você está se sentindo hoje?</p>
          </div>
        </div>

        <Card className="p-8 bg-white border-slate-200 space-y-8">
          {/* Mood */}
          <div>
            <Label className="text-lg font-semibold mb-4 block">
              Como está seu humor hoje?
            </Label>
            <div className="flex gap-2 justify-between">
              {[1, 2, 3, 4, 5].map((mood) => (
                <button
                  key={mood}
                  onClick={() => setFormData({ ...formData, mood })}
                  className={`
                    flex-1 p-4 rounded-lg border-2 transition-all text-center
                    ${formData.mood === mood
                      ? 'border-emerald-600 bg-emerald-50'
                      : 'border-slate-200 hover:border-slate-300'
                    }
                  `}
                >
                  <div className="text-2xl mb-2">
                    {mood === 1 ? "😔" : mood === 2 ? "😕" : mood === 3 ? "😐" : mood === 4 ? "🙂" : "😊"}
                  </div>
                  <div className="text-xs text-slate-600">
                    {MOOD_LABELS[mood as keyof typeof MOOD_LABELS]}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Urges and Relapses */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 p-4 border rounded-lg">
              <Checkbox
                id="hadUrge"
                checked={formData.hadUrge}
                onCheckedChange={(checked) => 
                  setFormData({ ...formData, hadUrge: checked as boolean })
                }
              />
              <Label htmlFor="hadUrge" className="cursor-pointer flex-1">
                Tive impulsos hoje
              </Label>
            </div>

            <div className="flex items-center gap-3 p-4 border rounded-lg">
              <Checkbox
                id="hadRelapse"
                checked={formData.hadRelapse}
                onCheckedChange={(checked) => 
                  setFormData({ ...formData, hadRelapse: checked as boolean })
                }
              />
              <Label htmlFor="hadRelapse" className="cursor-pointer flex-1">
                Tive uma recaída hoje
              </Label>
            </div>
          </div>

          {/* Triggers */}
          {(formData.hadUrge || formData.hadRelapse) && (
            <div>
              <Label className="text-lg font-semibold mb-4 block">
                Quais foram seus gatilhos?
              </Label>
              <div className="grid grid-cols-2 gap-3">
                {COMMON_TRIGGERS.map((trigger) => (
                  <div
                    key={trigger}
                    onClick={() => toggleTrigger(trigger)}
                    className={`
                      p-3 border-2 rounded-lg cursor-pointer transition-all
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
            </div>
          )}

          {/* Notes */}
          <div>
            <Label htmlFor="notes" className="text-lg font-semibold mb-4 block">
              Observações do dia (opcional)
            </Label>
            <textarea
              id="notes"
              placeholder="Como foi seu dia? O que você aprendeu?"
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              className="w-full min-h-[100px] p-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          {/* Victories */}
          <div>
            <Label htmlFor="victories" className="text-lg font-semibold mb-4 block">
              Vitórias de hoje (opcional)
            </Label>
            <textarea
              id="victories"
              placeholder="O que você fez bem hoje? Celebre suas conquistas!"
              value={formData.victories}
              onChange={(e) => setFormData({ ...formData, victories: e.target.value })}
              className="w-full min-h-[100px] p-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          {/* Submit */}
          <Button
            onClick={handleSubmit}
            className="w-full bg-emerald-600 hover:bg-emerald-700 py-6 text-lg"
          >
            <CheckCircle2 className="w-5 h-5 mr-2" />
            Salvar check-in
          </Button>
        </Card>
      </div>
    </div>
  )
}
