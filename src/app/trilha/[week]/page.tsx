"use client"

import { useEffect, useState } from "react"
import { useRouter, useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { 
  Shield, 
  ArrowLeft,
  CheckCircle2,
  Video,
  FileText,
  BookOpen,
  Lock,
  Play,
  Clock
} from "lucide-react"
import Link from "next/link"
import { LESSON_CONTENT } from "@/lib/lesson-content"

export default function WeekPage() {
  const router = useRouter()
  const params = useParams()
  const week = parseInt(params.week as string)
  const [user, setUser] = useState<any>(null)
  const [completedLessons, setCompletedLessons] = useState<number[]>([])

  useEffect(() => {
    const userData = localStorage.getItem("user")
    if (!userData) {
      router.push("/onboarding")
      return
    }
    setUser(JSON.parse(userData))

    // Get completed lessons for this week
    const completed = JSON.parse(localStorage.getItem(`week_${week}_completed`) || "[]")
    setCompletedLessons(completed)
  }, [router, week])

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600" />
      </div>
    )
  }

  const lessons = LESSON_CONTENT[week]
  if (!lessons) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900 mb-4">Semana não encontrada</h1>
          <Button onClick={() => router.push("/")}>
            Voltar ao início
          </Button>
        </div>
      </div>
    )
  }

  const progressPercentage = (completedLessons.length / Object.keys(lessons).length) * 100

  // Check if week is locked (only allow current week and previous weeks)
  const isLocked = week > user.currentWeek

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "video":
        return <Video className="w-5 h-5" />
      case "reading":
        return <FileText className="w-5 h-5" />
      case "exercise":
        return <BookOpen className="w-5 h-5" />
      default:
        return <FileText className="w-5 h-5" />
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "video":
        return "bg-purple-100 text-purple-600"
      case "reading":
        return "bg-blue-100 text-blue-600"
      case "exercise":
        return "bg-emerald-100 text-emerald-600"
      default:
        return "bg-slate-100 text-slate-600"
    }
  }

  if (isLocked) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
        {/* Header */}
        <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4 flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => router.push("/")}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar
            </Button>
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6 text-emerald-600" />
              <span className="text-xl font-bold text-slate-800">Recomeço</span>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 py-16 max-w-2xl">
          <Card className="p-8 text-center space-y-6 bg-white border-slate-200">
            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto">
              <Lock className="w-8 h-8 text-slate-400" />
            </div>
            
            <div className="space-y-2">
              <h1 className="text-2xl font-bold text-slate-900">
                Semana {week} - Bloqueada
              </h1>
              <p className="text-slate-600">
                Você precisa completar a Semana {user.currentWeek} para desbloquear esta semana.
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-slate-50 rounded-lg p-4">
                <h3 className="font-semibold text-slate-800 mb-2">Para desbloquear:</h3>
                <p className="text-sm text-slate-600">
                  Complete todas as lições da Semana {user.currentWeek} para avançar.
                </p>
              </div>

              <Button 
                onClick={() => router.push(`/trilha/${user.currentWeek}`)}
                className="w-full bg-emerald-600 hover:bg-emerald-700"
              >
                Ir para Semana {user.currentWeek}
                <Play className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => router.push("/")}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar
          </Button>
          <div className="flex items-center gap-2">
            <Shield className="w-6 h-6 text-emerald-600" />
            <span className="text-xl font-bold text-slate-800">Recomeço</span>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Week Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
                Semana {week}
              </h1>
              <p className="text-lg text-slate-600 mt-2">
                {week === 1 && "Consciência dos Gatilhos"}
                {week === 2 && "Controle de Impulsos"}
                {week === 3 && "Redirecionamento do Foco"}
                {week === 4 && "Ritualização da Mudança"}
              </p>
            </div>
            
            <div className="text-right">
              <div className="text-sm text-slate-500 mb-1">
                Progresso da semana
              </div>
              <div className="text-2xl font-bold text-emerald-600">
                {completedLessons.length}/{Object.keys(lessons).length}
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-slate-600">
              <span>Progresso</span>
              <span>{Math.round(progressPercentage)}%</span>
            </div>
            <Progress value={progressPercentage} className="h-2" />
          </div>
        </div>

        {/* Lessons List */}
        <div className="space-y-4">
          {Object.entries(lessons).map(([lessonId, lesson]: [string, any]) => {
            const isCompleted = completedLessons.includes(parseInt(lessonId))
            
            return (
              <Card key={lessonId} className="p-6 bg-white border-slate-200 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${getTypeColor(lesson.type)}`}>
                    {getTypeIcon(lesson.type)}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-sm font-medium text-slate-600">
                            Lição {lessonId}
                          </span>
                          {isCompleted && (
                            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                          )}
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">
                          {lesson.title}
                        </h3>
                        <p className="text-slate-600 mb-3">
                          {lesson.description}
                        </p>
                        <div className="flex items-center gap-4 text-sm text-slate-500">
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {lesson.duration}
                          </div>
                        </div>
                      </div>
                      
                      <Link href={`/trilha/${week}/${lessonId}`}>
                        <Button 
                          className={isCompleted ? "bg-emerald-100 text-emerald-700 hover:bg-emerald-200" : "bg-emerald-600 hover:bg-emerald-700"}
                        >
                          {isCompleted ? "Revisar" : "Começar"}
                          <Play className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>

        {/* Week Completion */}
        {progressPercentage === 100 && (
          <Card className="p-6 mt-8 bg-gradient-to-r from-emerald-50 to-blue-50 border-emerald-200">
            <div className="text-center space-y-4">
              <CheckCircle2 className="w-16 h-16 text-emerald-600 mx-auto" />
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Semana {week} Concluída! 🎉
                </h3>
                <p className="text-slate-600">
                  Parabéns! Você completou todas as lições desta semana.
                </p>
              </div>
              
              {week < 4 && (
                <Button 
                  onClick={() => router.push(`/trilha/${week + 1}`)}
                  className="bg-emerald-600 hover:bg-emerald-700"
                >
                  Próxima Semana
                  <Play className="w-4 h-4 ml-2" />
                </Button>
              )}
              
              {week === 4 && (
                <div className="space-y-2">
                  <p className="text-slate-600">
                    Você completou o programa de 30 dias! Parabéns pela transformação.
                  </p>
                  <Button 
                    onClick={() => router.push("/")}
                    className="bg-emerald-600 hover:bg-emerald-700"
                  >
                    Voltar ao Início
                  </Button>
                </div>
              )}
            </div>
          </Card>
        )}
      </div>
    </div>
  )
}