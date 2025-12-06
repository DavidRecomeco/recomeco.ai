"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, TrendingUp, Flame, Target, Calendar, Award } from "lucide-react"
import { MOOD_LABELS } from "@/lib/constants"

export default function StatsPage() {
  const router = useRouter()
  const [stats, setStats] = useState({
    totalDays: 0,
    currentStreak: 0,
    longestStreak: 0,
    totalCheckIns: 0,
    urgesResisted: 0,
    relapses: 0,
    moodAverage: 0,
    checkIns: [] as any[]
  })

  useEffect(() => {
    const checkIns = JSON.parse(localStorage.getItem("checkIns") || "[]")
    const user = JSON.parse(localStorage.getItem("user") || "{}")

    // Calculate stats
    const totalCheckIns = checkIns.length
    const urgesResisted = checkIns.filter((c: any) => c.hadUrge && !c.hadRelapse).length
    const relapses = checkIns.filter((c: any) => c.hadRelapse).length
    const moodSum = checkIns.reduce((sum: number, c: any) => sum + c.mood, 0)
    const moodAverage = totalCheckIns > 0 ? moodSum / totalCheckIns : 0

    // Calculate streak
    let currentStreak = 0
    let longestStreak = 0
    let tempStreak = 0

    const sortedCheckIns = [...checkIns].sort((a, b) => 
      new Date(b.date).getTime() - new Date(a.date).getTime()
    )

    sortedCheckIns.forEach((checkIn: any, index: number) => {
      if (!checkIn.hadRelapse) {
        tempStreak++
        if (index === 0) currentStreak = tempStreak
        longestStreak = Math.max(longestStreak, tempStreak)
      } else {
        tempStreak = 0
      }
    })

    setStats({
      totalDays: user.currentDay || 0,
      currentStreak,
      longestStreak,
      totalCheckIns,
      urgesResisted,
      relapses,
      moodAverage,
      checkIns: sortedCheckIns
    })
  }, [])

  const getMoodEmoji = (mood: number) => {
    const emojis = ["😔", "😕", "😐", "🙂", "😊"]
    return emojis[mood - 1] || "😐"
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 py-8 px-4">
      <div className="max-w-6xl mx-auto">
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
            <h1 className="text-2xl font-bold text-slate-900">Suas estatísticas</h1>
            <p className="text-slate-600">Acompanhe sua evolução e progresso</p>
          </div>
        </div>

        {/* Main Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6 bg-gradient-to-br from-emerald-500 to-emerald-600 text-white">
            <div className="flex items-center justify-between mb-4">
              <Flame className="w-12 h-12 opacity-80" />
              <span className="text-4xl font-bold">{stats.currentStreak}</span>
            </div>
            <h3 className="text-lg font-semibold mb-1">Sequência atual</h3>
            <p className="text-emerald-100 text-sm">
              Dias consecutivos sem recaída
            </p>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-blue-500 to-blue-600 text-white">
            <div className="flex items-center justify-between mb-4">
              <Award className="w-12 h-12 opacity-80" />
              <span className="text-4xl font-bold">{stats.longestStreak}</span>
            </div>
            <h3 className="text-lg font-semibold mb-1">Melhor sequência</h3>
            <p className="text-blue-100 text-sm">
              Seu recorde pessoal
            </p>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-purple-500 to-purple-600 text-white">
            <div className="flex items-center justify-between mb-4">
              <Target className="w-12 h-12 opacity-80" />
              <span className="text-4xl font-bold">{stats.totalDays}</span>
            </div>
            <h3 className="text-lg font-semibold mb-1">Dia do programa</h3>
            <p className="text-purple-100 text-sm">
              De 30 dias totais
            </p>
          </Card>
        </div>

        {/* Secondary Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6 bg-white border-slate-200">
            <div className="text-center">
              <Calendar className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-slate-900 mb-1">
                {stats.totalCheckIns}
              </div>
              <div className="text-sm text-slate-600">Check-ins feitos</div>
            </div>
          </Card>

          <Card className="p-6 bg-white border-slate-200">
            <div className="text-center">
              <TrendingUp className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-slate-900 mb-1">
                {stats.urgesResisted}
              </div>
              <div className="text-sm text-slate-600">Impulsos resistidos</div>
            </div>
          </Card>

          <Card className="p-6 bg-white border-slate-200">
            <div className="text-center">
              <div className="text-4xl mb-3">
                {getMoodEmoji(Math.round(stats.moodAverage))}
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-1">
                {stats.moodAverage.toFixed(1)}
              </div>
              <div className="text-sm text-slate-600">Humor médio</div>
            </div>
          </Card>

          <Card className="p-6 bg-white border-slate-200">
            <div className="text-center">
              <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-amber-600 font-bold">{stats.relapses}</span>
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-1">
                {stats.relapses}
              </div>
              <div className="text-sm text-slate-600">Recaídas</div>
            </div>
          </Card>
        </div>

        {/* Recent Check-ins */}
        <Card className="p-6 bg-white border-slate-200">
          <h2 className="text-xl font-bold text-slate-900 mb-6">Check-ins recentes</h2>
          {stats.checkIns.length === 0 ? (
            <div className="text-center py-12">
              <Calendar className="w-16 h-16 text-slate-300 mx-auto mb-4" />
              <p className="text-slate-600">Nenhum check-in registrado ainda</p>
              <Button
                onClick={() => router.push("/checkin")}
                className="mt-4 bg-emerald-600 hover:bg-emerald-700"
              >
                Fazer primeiro check-in
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              {stats.checkIns.slice(0, 10).map((checkIn: any) => (
                <div
                  key={checkIn.id}
                  className="flex items-center justify-between p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="text-3xl">
                      {getMoodEmoji(checkIn.mood)}
                    </div>
                    <div>
                      <div className="font-medium text-slate-800">
                        {new Date(checkIn.date).toLocaleDateString("pt-BR", {
                          day: "2-digit",
                          month: "long",
                          year: "numeric"
                        })}
                      </div>
                      <div className="text-sm text-slate-600">
                        {MOOD_LABELS[checkIn.mood as keyof typeof MOOD_LABELS]}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {checkIn.hadUrge && !checkIn.hadRelapse && (
                      <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-medium rounded-full">
                        Resistiu impulso
                      </span>
                    )}
                    {checkIn.hadRelapse && (
                      <span className="px-3 py-1 bg-amber-100 text-amber-700 text-xs font-medium rounded-full">
                        Recaída
                      </span>
                    )}
                    {!checkIn.hadUrge && !checkIn.hadRelapse && (
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                        Dia tranquilo
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </Card>

        {/* Motivational Message */}
        {stats.currentStreak > 0 && (
          <Card className="p-6 mt-8 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white text-center">
            <Flame className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">
              Parabéns! {stats.currentStreak} dias de sequência!
            </h3>
            <p className="text-emerald-100">
              Continue assim! Cada dia é uma vitória e você está construindo um novo padrão.
            </p>
          </Card>
        )}
      </div>
    </div>
  )
}
