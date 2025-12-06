"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { 
  Shield, 
  Calendar, 
  TrendingUp, 
  BookOpen, 
  MessageCircle,
  CheckCircle2,
  Target,
  Flame,
  Settings
} from "lucide-react"
import { WEEK_MODULES } from "@/lib/constants"

export default function DashboardPage() {
  const router = useRouter()
  const [user, setUser] = useState<any>(null)
  const [stats, setStats] = useState({
    currentStreak: 0,
    totalCheckIns: 0
  })

  useEffect(() => {
    const userData = localStorage.getItem("user")
    if (!userData) {
      router.push("/onboarding")
      return
    }
    setUser(JSON.parse(userData))

    // Load stats
    const checkIns = JSON.parse(localStorage.getItem("checkIns") || "[]")
    const totalCheckIns = checkIns.length
    
    // Calculate current streak
    let currentStreak = 0
    const sortedCheckIns = [...checkIns].sort((a: any, b: any) => 
      new Date(b.date).getTime() - new Date(a.date).getTime()
    )
    
    for (const checkIn of sortedCheckIns) {
      if (!checkIn.hadRelapse) {
        currentStreak++
      } else {
        break
      }
    }

    setStats({ currentStreak, totalCheckIns })
  }, [router])

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600" />
      </div>
    )
  }

  const progressPercentage = (user.currentDay / 30) * 100

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="w-6 h-6 text-emerald-600" />
            <span className="text-xl font-bold text-slate-800">Recomeço</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-slate-600">
              Olá, <span className="font-semibold text-slate-800">{user.pseudonym}</span>
            </span>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => router.push("/settings")}
            >
              <Settings className="w-4 h-4 mr-2" />
              Configurações
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
            Bem-vindo à sua jornada
          </h1>
          <p className="text-lg text-slate-600">
            Dia {user.currentDay} de 30 • Semana {user.currentWeek}
          </p>
        </div>

        {/* Progress Overview */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6 bg-white border-slate-200">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                <Flame className="w-6 h-6 text-emerald-600" />
              </div>
              <span className="text-3xl font-bold text-slate-900">{stats.currentStreak}</span>
            </div>
            <h3 className="text-sm font-medium text-slate-600">Dias consecutivos</h3>
            <p className="text-xs text-slate-500 mt-1">Continue assim!</p>
          </Card>

          <Card className="p-6 bg-white border-slate-200">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Target className="w-6 h-6 text-blue-600" />
              </div>
              <span className="text-3xl font-bold text-slate-900">{user.currentDay}</span>
            </div>
            <h3 className="text-sm font-medium text-slate-600">Dia atual</h3>
            <p className="text-xs text-slate-500 mt-1">De 30 dias totais</p>
          </Card>

          <Card className="p-6 bg-white border-slate-200">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-purple-600" />
              </div>
              <span className="text-3xl font-bold text-slate-900">{stats.totalCheckIns}</span>
            </div>
            <h3 className="text-sm font-medium text-slate-600">Check-ins feitos</h3>
            <p className="text-xs text-slate-500 mt-1">Registre seu dia</p>
          </Card>
        </div>

        {/* Main Progress */}
        <Card className="p-6 mb-8 bg-white border-slate-200">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-slate-800">Progresso do programa</h2>
            <span className="text-sm font-medium text-emerald-600">
              {Math.round(progressPercentage)}%
            </span>
          </div>
          <Progress value={progressPercentage} className="h-3 mb-2" />
          <p className="text-sm text-slate-600">
            Você está na {WEEK_MODULES[user.currentWeek - 1].title}
          </p>
        </Card>

        {/* Week Modules */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Trilhas de transformação</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {WEEK_MODULES.map((module) => (
              <Card 
                key={module.week}
                className="p-6 border-2 transition-all border-slate-200 bg-white hover:shadow-lg"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-white bg-emerald-600">
                      {module.week}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-800">{module.title}</h3>
                      <p className="text-xs text-slate-500">Semana {module.week}</p>
                    </div>
                  </div>
                  {module.week < user.currentWeek && (
                    <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                  )}
                </div>
                <p className="text-sm text-slate-600 mb-4">{module.description}</p>
                <Button 
                  className="bg-emerald-600 hover:bg-emerald-700 w-full"
                  onClick={() => router.push(`/trilha/${module.week}`)}
                >
                  {module.week === user.currentWeek ? "Continuar" : 
                   module.week < user.currentWeek ? "Revisar" : "Acessar"}
                </Button>
              </Card>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-6">
          <Link href="/checkin">
            <Card className="p-6 bg-white border-slate-200 hover:shadow-lg transition-shadow cursor-pointer h-full">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <Calendar className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="font-bold text-slate-800 mb-2">Check-in diário</h3>
              <p className="text-sm text-slate-600 mb-4">
                Registre como você está se sentindo hoje
              </p>
              <Button variant="outline" className="w-full">
                Fazer check-in
              </Button>
            </Card>
          </Link>

          <Link href="/diary">
            <Card className="p-6 bg-white border-slate-200 hover:shadow-lg transition-shadow cursor-pointer h-full">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-bold text-slate-800 mb-2">Diário privado</h3>
              <p className="text-sm text-slate-600 mb-4">
                Escreva seus pensamentos e reflexões
              </p>
              <Button variant="outline" className="w-full">
                Abrir diário
              </Button>
            </Card>
          </Link>

          <Link href="/support">
            <Card className="p-6 bg-white border-slate-200 hover:shadow-lg transition-shadow cursor-pointer h-full">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <MessageCircle className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-bold text-slate-800 mb-2">Suporte IA</h3>
              <p className="text-sm text-slate-600 mb-4">
                Converse com nosso assistente de apoio
              </p>
              <Button variant="outline" className="w-full">
                Iniciar conversa
              </Button>
            </Card>
          </Link>
        </div>

        {/* Stats Preview */}
        <Card className="p-6 mt-8 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
          <div className="flex items-center gap-4 mb-4">
            <TrendingUp className="w-8 h-8" />
            <div>
              <h3 className="text-xl font-bold">
                {stats.totalCheckIns > 0 
                  ? "Seu progresso está evoluindo!" 
                  : "Seu progresso está começando!"}
              </h3>
              <p className="text-emerald-100">
                {stats.totalCheckIns > 0
                  ? "Veja suas estatísticas completas e acompanhe sua evolução"
                  : "Complete seu primeiro check-in para começar a acompanhar sua evolução"}
              </p>
            </div>
          </div>
          <Link href="/stats">
            <Button className="bg-white text-emerald-600 hover:bg-emerald-50">
              Ver estatísticas completas
            </Button>
          </Link>
        </Card>
      </div>
    </div>
  )
}
