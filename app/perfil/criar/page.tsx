import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import Link from "next/link"

export default function CriarPerfilPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 py-8">
      <div className="container max-w-3xl px-4">
        <div className="flex items-center justify-center mb-6">
          <Link href="/">
            <Image src="/logo.png" alt="UniConnect Logo" width={60} height={60} className="mr-2" />
          </Link>
          <h1 className="text-2xl font-bold text-unifor-blue">UniConnect</h1>
        </div>

        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-unifor-blue">Complete seu perfil</CardTitle>
            <CardDescription>
              Preencha as informações abaixo para personalizar sua experiência no UniConnect
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="obrigatorio" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="obrigatorio">Dados Obrigatórios</TabsTrigger>
                <TabsTrigger value="complementar">Dados Complementares</TabsTrigger>
              </TabsList>

              <TabsContent value="obrigatorio" className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="nome">Nome completo</Label>
                    <Input id="nome" placeholder="Seu nome completo" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="curso">Curso</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione seu curso" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="eng-computacao">Engenharia da Computação</SelectItem>
                        <SelectItem value="direito">Direito</SelectItem>
                        <SelectItem value="psicologia">Psicologia</SelectItem>
                        <SelectItem value="medicina">Medicina</SelectItem>
                        <SelectItem value="administracao">Administração</SelectItem>
                        <SelectItem value="arquitetura">Arquitetura e Urbanismo</SelectItem>
                        <SelectItem value="design">Design</SelectItem>
                        <SelectItem value="jornalismo">Jornalismo</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="semestre">Semestre atual</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione seu semestre" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1º Semestre</SelectItem>
                        <SelectItem value="2">2º Semestre</SelectItem>
                        <SelectItem value="3">3º Semestre</SelectItem>
                        <SelectItem value="4">4º Semestre</SelectItem>
                        <SelectItem value="5">5º Semestre</SelectItem>
                        <SelectItem value="6">6º Semestre</SelectItem>
                        <SelectItem value="7">7º Semestre</SelectItem>
                        <SelectItem value="8">8º Semestre</SelectItem>
                        <SelectItem value="9">9º Semestre</SelectItem>
                        <SelectItem value="10">10º Semestre</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="formatura">Previsão de formatura</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione o semestre" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2024.1">2024.1</SelectItem>
                        <SelectItem value="2024.2">2024.2</SelectItem>
                        <SelectItem value="2025.1">2025.1</SelectItem>
                        <SelectItem value="2025.2">2025.2</SelectItem>
                        <SelectItem value="2026.1">2026.1</SelectItem>
                        <SelectItem value="2026.2">2026.2</SelectItem>
                        <SelectItem value="2027.1">2027.1</SelectItem>
                        <SelectItem value="2027.2">2027.2</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Interesse em estágios/emprego</Label>
                    <RadioGroup defaultValue="sim">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="sim" id="estagio-sim" />
                        <Label htmlFor="estagio-sim">Sim</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="nao" id="estagio-nao" />
                        <Label htmlFor="estagio-nao">Não</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="complementar" className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Hobbies</Label>
                    <div className="grid grid-cols-2 gap-2">
                      {["Leitura", "Cinema", "Música", "Viagens", "Jogos", "Esportes", "Culinária", "Fotografia"].map(
                        (hobby) => (
                          <div key={hobby} className="flex items-center space-x-2">
                            <Checkbox id={`hobby-${hobby.toLowerCase()}`} />
                            <Label htmlFor={`hobby-${hobby.toLowerCase()}`}>{hobby}</Label>
                          </div>
                        ),
                      )}
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <Label>Esportes</Label>
                    <div className="grid grid-cols-2 gap-2">
                      {["Futebol", "Vôlei", "Basquete", "Natação", "Corrida", "Tênis", "Surf", "Ciclismo"].map(
                        (esporte) => (
                          <div key={esporte} className="flex items-center space-x-2">
                            <Checkbox id={`esporte-${esporte.toLowerCase()}`} />
                            <Label htmlFor={`esporte-${esporte.toLowerCase()}`}>{esporte}</Label>
                          </div>
                        ),
                      )}
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <Label>Preferências musicais</Label>
                    <div className="grid grid-cols-2 gap-2">
                      {["Rock", "Pop", "Forró", "Eletrônica", "Sertanejo", "MPB", "Rap", "Clássica"].map((musica) => (
                        <div key={musica} className="flex items-center space-x-2">
                          <Checkbox id={`musica-${musica.toLowerCase()}`} />
                          <Label htmlFor={`musica-${musica.toLowerCase()}`}>{musica}</Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <Label>Estilo de saída preferido</Label>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        "Bares",
                        "Festas",
                        "Eventos culturais",
                        "Cafés",
                        "Shows",
                        "Cinema",
                        "Restaurantes",
                        "Praia",
                      ].map((saida) => (
                        <div key={saida} className="flex items-center space-x-2">
                          <Checkbox id={`saida-${saida.toLowerCase().replace(" ", "-")}`} />
                          <Label htmlFor={`saida-${saida.toLowerCase().replace(" ", "-")}`}>{saida}</Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <Label>Interesses acadêmicos</Label>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        "Pesquisa",
                        "Iniciação científica",
                        "Intercâmbio",
                        "Monitoria",
                        "Extensão",
                        "Empresa júnior",
                        "Congressos",
                        "Publicações",
                      ].map((academico) => (
                        <div key={academico} className="flex items-center space-x-2">
                          <Checkbox id={`academico-${academico.toLowerCase().replace(" ", "-")}`} />
                          <Label htmlFor={`academico-${academico.toLowerCase().replace(" ", "-")}`}>{academico}</Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <Label>Interesses profissionais</Label>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        "Carreira corporativa",
                        "Startups",
                        "Concursos",
                        "Empreendedorismo",
                        "Consultoria",
                        "Docência",
                        "Pesquisa",
                        "Terceiro setor",
                      ].map((profissional) => (
                        <div key={profissional} className="flex items-center space-x-2">
                          <Checkbox id={`profissional-${profissional.toLowerCase().replace(" ", "-")}`} />
                          <Label htmlFor={`profissional-${profissional.toLowerCase().replace(" ", "-")}`}>
                            {profissional}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Voltar</Button>
            <Button asChild className="bg-unifor-blue hover:bg-unifor-lightblue">
              <Link href="/dashboard">Concluir</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
