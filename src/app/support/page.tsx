"use client"

import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, Send, Bot, User } from "lucide-react"
import { SUPPORT_PROMPTS, CBT_TECHNIQUES } from "@/lib/constants"

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
  timestamp: Date
}

export default function SupportPage() {
  const router = useRouter()
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Welcome message
    if (messages.length === 0) {
      addAssistantMessage(
        "Olá! Eu sou seu assistente de apoio. Estou aqui para te ajudar nos momentos difíceis, celebrar suas vitórias e oferecer técnicas práticas baseadas em CBT. Como posso te ajudar hoje?"
      )
    }
  }, [])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const addAssistantMessage = (content: string) => {
    const newMessage: Message = {
      id: crypto.randomUUID(),
      role: "assistant",
      content,
      timestamp: new Date()
    }
    setMessages(prev => [...prev, newMessage])
  }

  const generateResponse = (userMessage: string) => {
    const lowerMessage = userMessage.toLowerCase()

    // Detect urge/impulse
    if (lowerMessage.includes("impulso") || lowerMessage.includes("vontade") || lowerMessage.includes("difícil")) {
      const responses = SUPPORT_PROMPTS.urge
      return responses[Math.floor(Math.random() * responses.length)] + 
        "\n\nQue tal experimentar uma dessas técnicas agora?\n\n" +
        CBT_TECHNIQUES.map((t, i) => `${i + 1}. **${t.name}**: ${t.description}`).join("\n")
    }

    // Detect victory
    if (lowerMessage.includes("consegui") || lowerMessage.includes("vitória") || lowerMessage.includes("resisti")) {
      const responses = SUPPORT_PROMPTS.victory
      return responses[Math.floor(Math.random() * responses.length)]
    }

    // Detect relapse
    if (lowerMessage.includes("recaída") || lowerMessage.includes("falhei") || lowerMessage.includes("não consegui")) {
      const responses = SUPPORT_PROMPTS.relapse
      return responses[Math.floor(Math.random() * responses.length)]
    }

    // Ask about techniques
    if (lowerMessage.includes("técnica") || lowerMessage.includes("exercício") || lowerMessage.includes("ajuda")) {
      return "Claro! Aqui estão algumas técnicas que podem te ajudar agora:\n\n" +
        CBT_TECHNIQUES.map((t, i) => `${i + 1}. **${t.name}** (${t.duration} min)\n${t.description}`).join("\n\n")
    }

    // Ask about progress
    if (lowerMessage.includes("progresso") || lowerMessage.includes("evolução")) {
      return "Seu progresso é único e valioso! Cada dia que você se compromete com a mudança é uma vitória. Lembre-se: não é sobre perfeição, mas sobre consistência e aprendizado. Quer ver suas estatísticas no dashboard?"
    }

    // Default supportive response
    return "Entendo. Estou aqui para te apoiar. Você pode me contar mais sobre como está se sentindo? Ou posso te sugerir algumas técnicas práticas que podem ajudar agora."
  }

  const handleSend = () => {
    if (!input.trim()) return

    // Add user message
    const userMessage: Message = {
      id: crypto.randomUUID(),
      role: "user",
      content: input,
      timestamp: new Date()
    }
    setMessages(prev => [...prev, userMessage])
    setInput("")

    // Simulate typing
    setIsTyping(true)
    setTimeout(() => {
      const response = generateResponse(input)
      addAssistantMessage(response)
      setIsTyping(false)
    }, 1000 + Math.random() * 1000)
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit"
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 flex flex-col">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => router.push("/dashboard")}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar
          </Button>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
              <Bot className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-slate-900">Assistente de Apoio</h1>
              <p className="text-sm text-slate-600">Sempre disponível para você</p>
            </div>
          </div>
        </div>
      </header>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto">
        <div className="container mx-auto px-4 py-6 max-w-4xl">
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-3 ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                {message.role === "assistant" && (
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Bot className="w-5 h-5 text-purple-600" />
                  </div>
                )}
                <div
                  className={`max-w-[70%] rounded-2xl px-4 py-3 ${
                    message.role === "user"
                      ? "bg-emerald-600 text-white"
                      : "bg-white border border-slate-200 text-slate-800"
                  }`}
                >
                  <p className="whitespace-pre-wrap">{message.content}</p>
                  <span className={`text-xs mt-1 block ${
                    message.role === "user" ? "text-emerald-100" : "text-slate-500"
                  }`}>
                    {formatTime(message.timestamp)}
                  </span>
                </div>
                {message.role === "user" && (
                  <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="w-5 h-5 text-emerald-600" />
                  </div>
                )}
              </div>
            ))}
            {isTyping && (
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Bot className="w-5 h-5 text-purple-600" />
                </div>
                <div className="bg-white border border-slate-200 rounded-2xl px-4 py-3">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>
      </div>

      {/* Input */}
      <div className="border-t bg-white">
        <div className="container mx-auto px-4 py-4 max-w-4xl">
          <div className="flex gap-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
              placeholder="Digite sua mensagem..."
              className="flex-1 px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <Button
              onClick={handleSend}
              disabled={!input.trim() || isTyping}
              className="bg-emerald-600 hover:bg-emerald-700 px-6"
            >
              <Send className="w-5 h-5" />
            </Button>
          </div>
          <p className="text-xs text-slate-500 mt-2 text-center">
            Este é um assistente automatizado baseado em CBT. Não substitui atendimento profissional.
          </p>
        </div>
      </div>
    </div>
  )
}
