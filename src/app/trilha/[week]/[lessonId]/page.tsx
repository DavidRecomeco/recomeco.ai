"use client"

import { useEffect, useState } from "react"
import { useRouter, useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { 
  Shield, 
  ArrowLeft,
  CheckCircle2,
  Video,
  FileText,
  BookOpen,
  Lightbulb,
  Target
} from "lucide-react"
import { LESSON_CONTENT } from "@/lib/lesson-content"

export default function LessonPage() {
  const router = useRouter()
  const params = useParams()
  const week = parseInt(params.week as string)
  const lessonId = parseInt(params.lessonId as string)
  const [user, setUser] = useState<any>(null)
  const [isCompleted, setIsCompleted] = useState(false)

  useEffect(() => {
    const userData = localStorage.getItem("user")
    if (!userData) {
      router.push("/onboarding")
      return
    }
    setUser(JSON.parse(userData))

    // Check if lesson is completed
    const completed = JSON.parse(localStorage.getItem(`week_${week}_completed`) || "[]")
    setIsCompleted(completed.includes(lessonId))
  }, [router, week, lessonId])

  const markAsComplete = () => {
    const completed = JSON.parse(localStorage.getItem(`week_${week}_completed`) || "[]")
    if (!completed.includes(lessonId)) {
      completed.push(lessonId)
      localStorage.setItem(`week_${week}_completed`, JSON.stringify(completed))
      setIsCompleted(true)
    }
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600" />
      </div>
    )
  }

  const lesson = LESSON_CONTENT[week]?.[lessonId]

  if (!lesson) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900 mb-4">Lição não encontrada</h1>
          <Button onClick={() => router.push(`/trilha/${week}`)}>
            Voltar ao módulo
          </Button>
        </div>
      </div>
    )
  }

  const getTypeIcon = () => {
    switch (lesson.type) {
      case "video":
        return <Video className="w-6 h-6" />
      case "reading":
        return <FileText className="w-6 h-6" />
      case "exercise":
        return <BookOpen className="w-6 h-6" />
      default:
        return <FileText className="w-6 h-6" />
    }
  }

  const getTypeColor = () => {
    switch (lesson.type) {
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => router.push(`/trilha/${week}`)}
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
        {/* Lesson Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${getTypeColor()}`}>
              {getTypeIcon()}
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-sm font-medium text-slate-600">
                  Semana {week} • Lição {lessonId}
                </span>
                {isCompleted && (
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                )}
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
                {lesson.title}
              </h1>
            </div>
          </div>
          <p className="text-lg text-slate-600">{lesson.description}</p>
          <p className="text-sm text-slate-500 mt-2">⏱️ {lesson.duration}</p>
        </div>

        {/* Video Player */}
        {lesson.type === "video" && lesson.videoUrl && (
          <Card className="p-0 mb-8 overflow-hidden bg-white border-slate-200">
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={lesson.videoUrl}
                title={lesson.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </Card>
        )}

        {/* Content */}
        <div className="space-y-6 mb-8">
          {lesson.content?.map((section: any, index: number) => (
            <Card key={index} className="p-6 bg-white border-slate-200">
              {section.subtitle && (
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  {section.subtitle}
                </h2>
              )}
              
              {section.text && (
                <div className="prose prose-slate max-w-none">
                  {section.text.split('\n\n').map((paragraph: string, i: number) => (
                    <p key={i} className="text-slate-700 mb-4 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              )}

              {section.list && (
                <ul className="space-y-3">
                  {section.list.map((item: string, i: number) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              )}

              {section.exercise && (
                <div className="bg-emerald-50 border-2 border-emerald-200 rounded-lg p-6 mt-4">
                  <div className="flex items-start gap-3 mb-3">
                    <Target className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                    <h3 className="text-lg font-bold text-emerald-900">
                      Exercício Prático
                    </h3>
                  </div>
                  <p className="text-slate-700 leading-relaxed whitespace-pre-line">
                    {section.exercise}
                  </p>
                </div>
              )}

              {section.tip && (
                <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 mt-4">
                  <div className="flex items-start gap-3 mb-3">
                    <Lightbulb className="w-6 h-6 text-blue-600 flex-shrink-0" />
                    <h3 className="text-lg font-bold text-blue-900">
                      Dica Importante
                    </h3>
                  </div>
                  <p className="text-slate-700 leading-relaxed">
                    {section.tip}
                  </p>
                </div>
              )}
            </Card>
          ))}
        </div>

        {/* Key Takeaways */}
        {lesson.keyTakeaways && lesson.keyTakeaways.length > 0 && (
          <Card className="p-6 mb-8 bg-gradient-to-r from-emerald-50 to-blue-50 border-emerald-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              📌 Principais Aprendizados
            </h2>
            <ul className="space-y-3">
              {lesson.keyTakeaways.map((takeaway: string, index: number) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-medium">{takeaway}</span>
                </li>
              ))}
            </ul>
          </Card>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          {!isCompleted ? (
            <Button 
              onClick={markAsComplete}
              className="flex-1 bg-emerald-600 hover:bg-emerald-700 py-6 text-lg"
            >
              <CheckCircle2 className="w-5 h-5 mr-2" />
              Marcar como concluído
            </Button>
          ) : (
            <Button 
              variant="outline"
              className="flex-1 py-6 text-lg border-emerald-600 text-emerald-600"
              disabled
            >
              <CheckCircle2 className="w-5 h-5 mr-2" />
              Lição concluída
            </Button>
          )}
          
          <Button 
            onClick={() => router.push(`/trilha/${week}`)}
            variant="outline"
            className="flex-1 py-6 text-lg"
          >
            Voltar ao módulo
          </Button>
        </div>
      </div>
    </div>
  )
}
