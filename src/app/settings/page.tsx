"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Shield, ArrowLeft, User, Trash2, Save } from "lucide-react"

export default function SettingsPage() {
  const router = useRouter()
  const [user, setUser] = useState<any>(null)
  const [pseudonym, setPseudonym] = useState("")
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)

  useEffect(() => {
    const userData = localStorage.getItem("user")
    if (!userData) {
      router.push("/onboarding")
      return
    }
    const parsedUser = JSON.parse(userData)
    setUser(parsedUser)
    setPseudonym(parsedUser.pseudonym)
  }, [router])

  const handleSave = () => {
    if (!pseudonym.trim()) {
      alert("Por favor, insira um pseudônimo válido")
      return
    }

    const updatedUser = { ...user, pseudonym: pseudonym.trim() }
    localStorage.setItem("user", JSON.stringify(updatedUser))
    setUser(updatedUser)
    alert("Configurações salvas com sucesso!")
  }

  const handleDeleteAccount = () => {
    if (showDeleteConfirm) {
      localStorage.clear()
      router.push("/")
    } else {
      setShowDeleteConfirm(true)
      setTimeout(() => setShowDeleteConfirm(false), 5000)
    }
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600" />
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
            onClick={() => router.push("/dashboard")}
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

      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
            Configurações
          </h1>
          <p className="text-lg text-slate-600">
            Gerencie suas preferências e dados
          </p>
        </div>

        {/* Profile Settings */}
        <Card className="p-6 mb-6 bg-white border-slate-200">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
              <User className="w-6 h-6 text-emerald-600" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-800">Perfil</h2>
              <p className="text-sm text-slate-600">Suas informações pessoais</p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <Label htmlFor="pseudonym" className="text-slate-700 mb-2 block">
                Pseudônimo
              </Label>
              <Input
                id="pseudonym"
                type="text"
                value={pseudonym}
                onChange={(e) => setPseudonym(e.target.value)}
                placeholder="Seu pseudônimo"
                className="w-full"
              />
              <p className="text-xs text-slate-500 mt-1">
                Este é o nome que aparecerá no app. Mantenha sua privacidade.
              </p>
            </div>

            <div>
              <Label className="text-slate-700 mb-2 block">
                Dia atual do programa
              </Label>
              <div className="flex items-center gap-2">
                <Input
                  type="text"
                  value={`Dia ${user.currentDay} de 30`}
                  disabled
                  className="flex-1"
                />
              </div>
              <p className="text-xs text-slate-500 mt-1">
                Seu progresso no programa de 30 dias
              </p>
            </div>

            <div>
              <Label className="text-slate-700 mb-2 block">
                Semana atual
              </Label>
              <Input
                type="text"
                value={`Semana ${user.currentWeek} de 4`}
                disabled
                className="w-full"
              />
            </div>

            <Button 
              onClick={handleSave}
              className="w-full bg-emerald-600 hover:bg-emerald-700"
            >
              <Save className="w-4 h-4 mr-2" />
              Salvar alterações
            </Button>
          </div>
        </Card>

        {/* Privacy Info */}
        <Card className="p-6 mb-6 bg-blue-50 border-blue-200">
          <h3 className="font-bold text-slate-800 mb-2">🔒 Privacidade garantida</h3>
          <p className="text-sm text-slate-600">
            Todos os seus dados são armazenados localmente no seu dispositivo. 
            Nada é enviado para servidores externos. Você tem controle total 
            sobre suas informações.
          </p>
        </Card>

        {/* Danger Zone */}
        <Card className="p-6 bg-red-50 border-red-200">
          <div className="flex items-center gap-3 mb-4">
            <Trash2 className="w-6 h-6 text-red-600" />
            <div>
              <h2 className="text-xl font-bold text-red-800">Zona de perigo</h2>
              <p className="text-sm text-red-600">Ações irreversíveis</p>
            </div>
          </div>

          <p className="text-sm text-slate-700 mb-4">
            Excluir sua conta removerá permanentemente todos os seus dados, 
            incluindo check-ins, diário, progresso e configurações. Esta ação 
            não pode ser desfeita.
          </p>

          <Button 
            onClick={handleDeleteAccount}
            variant="destructive"
            className="w-full"
          >
            {showDeleteConfirm ? "Clique novamente para confirmar" : "Excluir conta e dados"}
          </Button>

          {showDeleteConfirm && (
            <p className="text-xs text-red-600 mt-2 text-center">
              Tem certeza? Esta ação é permanente!
            </p>
          )}
        </Card>
      </div>
    </div>
  )
}
