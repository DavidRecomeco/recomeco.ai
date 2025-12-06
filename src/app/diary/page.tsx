"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, Lock, Plus, BookOpen } from "lucide-react"

interface DiaryEntry {
  id: string
  date: string
  title: string
  content: string
}

export default function DiaryPage() {
  const router = useRouter()
  const [entries, setEntries] = useState<DiaryEntry[]>([])
  const [isWriting, setIsWriting] = useState(false)
  const [currentEntry, setCurrentEntry] = useState({ title: "", content: "" })

  useEffect(() => {
    const savedEntries = JSON.parse(localStorage.getItem("diaryEntries") || "[]")
    setEntries(savedEntries)
  }, [])

  const handleSave = () => {
    if (!currentEntry.title || !currentEntry.content) return

    const newEntry: DiaryEntry = {
      id: crypto.randomUUID(),
      date: new Date().toISOString(),
      title: currentEntry.title,
      content: currentEntry.content
    }

    const updatedEntries = [newEntry, ...entries]
    setEntries(updatedEntries)
    localStorage.setItem("diaryEntries", JSON.stringify(updatedEntries))
    
    setCurrentEntry({ title: "", content: "" })
    setIsWriting(false)
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => router.push("/dashboard")}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar
            </Button>
            <div>
              <h1 className="text-2xl font-bold text-slate-900">Diário privado</h1>
              <p className="text-slate-600 flex items-center gap-2">
                <Lock className="w-4 h-4" />
                Suas reflexões são criptografadas e privadas
              </p>
            </div>
          </div>
          {!isWriting && (
            <Button
              onClick={() => setIsWriting(true)}
              className="bg-emerald-600 hover:bg-emerald-700"
            >
              <Plus className="w-4 h-4 mr-2" />
              Nova entrada
            </Button>
          )}
        </div>

        {/* Writing Area */}
        {isWriting && (
          <Card className="p-8 bg-white border-slate-200 mb-8">
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Título da entrada..."
                value={currentEntry.title}
                onChange={(e) => setCurrentEntry({ ...currentEntry, title: e.target.value })}
                className="w-full text-2xl font-bold border-none outline-none focus:ring-0 placeholder:text-slate-300"
              />
              <textarea
                placeholder="Escreva seus pensamentos, reflexões, desafios ou vitórias..."
                value={currentEntry.content}
                onChange={(e) => setCurrentEntry({ ...currentEntry, content: e.target.value })}
                className="w-full min-h-[300px] border-none outline-none focus:ring-0 resize-none placeholder:text-slate-400"
              />
              <div className="flex gap-3 pt-4 border-t">
                <Button
                  onClick={handleSave}
                  disabled={!currentEntry.title || !currentEntry.content}
                  className="bg-emerald-600 hover:bg-emerald-700"
                >
                  Salvar entrada
                </Button>
                <Button
                  variant="outline"
                  onClick={() => {
                    setIsWriting(false)
                    setCurrentEntry({ title: "", content: "" })
                  }}
                >
                  Cancelar
                </Button>
              </div>
            </div>
          </Card>
        )}

        {/* Entries List */}
        {entries.length === 0 && !isWriting ? (
          <Card className="p-12 bg-white border-slate-200 text-center">
            <BookOpen className="w-16 h-16 text-slate-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-slate-800 mb-2">
              Seu diário está vazio
            </h3>
            <p className="text-slate-600 mb-6">
              Comece a escrever suas reflexões e acompanhe sua jornada
            </p>
            <Button
              onClick={() => setIsWriting(true)}
              className="bg-emerald-600 hover:bg-emerald-700"
            >
              <Plus className="w-4 h-4 mr-2" />
              Criar primeira entrada
            </Button>
          </Card>
        ) : (
          <div className="space-y-4">
            {entries.map((entry) => (
              <Card key={entry.id} className="p-6 bg-white border-slate-200 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-slate-800">{entry.title}</h3>
                  <span className="text-sm text-slate-500">{formatDate(entry.date)}</span>
                </div>
                <p className="text-slate-700 whitespace-pre-wrap">{entry.content}</p>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
