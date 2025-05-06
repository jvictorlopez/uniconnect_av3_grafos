import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { MainNav } from "@/components/main-nav"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarDays, GraduationCap, MapPin, Network, Plus, Users } from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-muted/40">
      <MainNav />

      <div className="container grid grid-cols-1 md:grid-cols-12 gap-6 py-6">
        {/* Coluna da esquerda - Perfil */}
        <div className="md:col-span-3 space-y-6">
          <Card>
            <CardHeader className="relative p-0">
              <div className="h-24 bg-gradient-to-r from-unifor-blue to-unifor-purple rounded-t-lg" />
              <div className="absolute top-16 left-1/2 transform -translate-x-1/2">
                <Avatar className="h-16 w-16 border-4 border-background">
                  <AvatarImage src="/placeholder.svg?height=64&width=64" alt="@usuario" />
                  <AvatarFallback>MR</AvatarFallback>
                </Avatar>
              </div>
            </CardHeader>
            <CardContent className="pt-10 text-center">
              <h3 className="font-semibold text-lg">Maria Rodrigues</h3>
              <p className="text-sm text-muted-foreground">Engenharia da Computação</p>
              <div className="flex justify-center mt-2">
                <Badge variant="outline" className="text-xs">
                  5º Semestre
                </Badge>
              </div>

              <div className="mt-4 pt-4 border-t">
                <div className="flex justify-between text-sm">
                  <div>
                    <p className="font-medium">Conexões</p>
                    <p className="text-muted-foreground">45</p>
                  </div>
                  <div>
                    <p className="font-medium">Visualizações</p>
                    <p className="text-muted-foreground">128</p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Ver perfil completo
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium">Grupos</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                { name: "Engenharia da Computação 2022.1", members: 87 },
                { name: "Programação Web Avançada", members: 32 },
                { name: "Estágios em TI - Fortaleza", members: 156 },
              ].map((grupo) => (
                <div key={grupo.name} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{grupo.name}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">{grupo.members} membros</span>
                </div>
              ))}
              <Button variant="ghost" size="sm" className="w-full mt-2">
                <Plus className="h-4 w-4 mr-2" />
                Descobrir mais grupos
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Coluna central - Feed */}
        <div className="md:col-span-6 space-y-6">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Feed de Atividades</CardTitle>
              <CardDescription>Novidades da sua rede e da Unifor</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Tabs defaultValue="todos">
                <TabsList className="grid grid-cols-4 mb-4">
                  <TabsTrigger value="todos">Todos</TabsTrigger>
                  <TabsTrigger value="conexoes">Conexões</TabsTrigger>
                  <TabsTrigger value="eventos">Eventos</TabsTrigger>
                  <TabsTrigger value="oportunidades">Oportunidades</TabsTrigger>
                </TabsList>

                <TabsContent value="todos" className="space-y-4">
                  {/* Post de evento */}
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex items-center space-x-2">
                        <Avatar>
                          <AvatarImage src="/placeholder.svg?height=40&width=40" alt="@unifor" />
                          <AvatarFallback>UF</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium text-sm">Unifor</p>
                          <p className="text-xs text-muted-foreground">Evento institucional • 2h atrás</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm mb-3">
                        🎓 <strong>Feira de Estágios 2025.1</strong> - Conectando talentos e empresas! Não perca a
                        oportunidade de conhecer as principais empresas do mercado.
                      </p>
                      <div className="rounded-md border p-3 bg-muted/50">
                        <div className="flex items-center space-x-2 mb-2">
                          <CalendarDays className="h-4 w-4 text-muted-foreground" />
                          <span className="text-xs">15 e 16 de Maio, 2025 • 9h às 18h</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4 text-muted-foreground" />
                          <span className="text-xs">Centro de Convivência - Campus da Unifor</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between pt-0">
                      <Button variant="outline" size="sm">
                        Tenho interesse
                      </Button>
                      <Button variant="ghost" size="sm">
                        Compartilhar
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* Post de conexão */}
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex items-center space-x-2">
                        <Avatar>
                          <AvatarImage src="/placeholder.svg?height=40&width=40" alt="@joao" />
                          <AvatarFallback>JP</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium text-sm">João Pedro</p>
                          <p className="text-xs text-muted-foreground">Engenharia Civil • 5h atrás</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm mb-3">
                        Acabei de ser aprovado para o programa de intercâmbio na Universidade de Lisboa! 🇵🇹✈️ Alguém aqui
                        já participou e pode compartilhar dicas?
                      </p>
                    </CardContent>
                    <CardFooter className="flex justify-between pt-0">
                      <Button variant="outline" size="sm">
                        Curtir
                      </Button>
                      <Button variant="outline" size="sm">
                        Comentar
                      </Button>
                      <Button variant="ghost" size="sm">
                        Compartilhar
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* Post de oportunidade */}
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex items-center space-x-2">
                        <Avatar>
                          <AvatarImage src="/placeholder.svg?height=40&width=40" alt="@empresa" />
                          <AvatarFallback>TC</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium text-sm">TechCorp</p>
                          <p className="text-xs text-muted-foreground">Empresa Parceira • 1d atrás</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm mb-3">
                        <strong>Estágio em Desenvolvimento Web</strong> - Estamos com vagas abertas para estudantes de
                        Engenharia da Computação, Sistemas de Informação e áreas afins.
                      </p>
                      <div className="rounded-md border p-3 bg-muted/50">
                        <p className="text-xs mb-2">
                          <strong>Requisitos:</strong> Conhecimentos em HTML, CSS, JavaScript e React.
                        </p>
                        <p className="text-xs mb-2">
                          <strong>Benefícios:</strong> Bolsa de R$ 1.200,00, vale-refeição, vale-transporte.
                        </p>
                        <p className="text-xs">
                          <strong>Local:</strong> Fortaleza - CE (Híbrido)
                        </p>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between pt-0">
                      <Button variant="outline" size="sm">
                        Ver detalhes
                      </Button>
                      <Button className="bg-unifor-blue hover:bg-unifor-lightblue" size="sm">
                        Candidatar-se
                      </Button>
                    </CardFooter>
                  </Card>
                </TabsContent>

                <TabsContent value="conexoes">
                  <Card className="border-dashed border-2 flex flex-col items-center justify-center p-6">
                    <Users className="h-10 w-10 text-muted-foreground mb-2" />
                    <p className="text-center text-sm text-muted-foreground mb-4">
                      Aqui aparecerão as atualizações das suas conexões
                    </p>
                    <Button asChild variant="outline">
                      <Link href="/rede">Encontrar conexões</Link>
                    </Button>
                  </Card>
                </TabsContent>

                <TabsContent value="eventos">
                  <Card className="border-dashed border-2 flex flex-col items-center justify-center p-6">
                    <CalendarDays className="h-10 w-10 text-muted-foreground mb-2" />
                    <p className="text-center text-sm text-muted-foreground mb-4">
                      Aqui aparecerão os eventos da Unifor e da sua rede
                    </p>
                    <Button variant="outline">Ver calendário de eventos</Button>
                  </Card>
                </TabsContent>

                <TabsContent value="oportunidades">
                  <Card className="border-dashed border-2 flex flex-col items-center justify-center p-6">
                    <GraduationCap className="h-10 w-10 text-muted-foreground mb-2" />
                    <p className="text-center text-sm text-muted-foreground mb-4">
                      Aqui aparecerão oportunidades de estágio e emprego
                    </p>
                    <Button variant="outline">Explorar oportunidades</Button>
                  </Card>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        {/* Coluna da direita - Sugestões */}
        <div className="md:col-span-3 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium">Sugestões de conexões</CardTitle>
              <CardDescription className="text-xs">Baseado nos seus interesses e curso</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { name: "Ana Silva", curso: "Engenharia da Computação", afinidade: 85 },
                { name: "Pedro Costa", curso: "Ciência da Computação", afinidade: 78 },
                { name: "Carla Mendes", curso: "Design Digital", afinidade: 72 },
              ].map((pessoa) => (
                <div key={pessoa.name} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" alt={pessoa.name} />
                      <AvatarFallback>{pessoa.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">{pessoa.name}</p>
                      <p className="text-xs text-muted-foreground">{pessoa.curso}</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {pessoa.afinidade}%
                  </Badge>
                </div>
              ))}
              <Button variant="ghost" size="sm" className="w-full mt-2">
                <Plus className="h-4 w-4 mr-2" />
                Ver mais sugestões
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium">Explorar por interesses</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {[
                  "Programação",
                  "Design",
                  "Empreendedorismo",
                  "Pesquisa",
                  "Esportes",
                  "Música",
                  "Viagens",
                  "Fotografia",
                ].map((interesse) => (
                  <Badge key={interesse} variant="secondary" className="cursor-pointer">
                    {interesse}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium">Visualização de Grafos</CardTitle>
              <CardDescription className="text-xs">Explore sua rede de conexões</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center p-6 border-2 border-dashed rounded-md">
              <Network className="h-10 w-10 text-muted-foreground mb-2" />
              <p className="text-center text-xs text-muted-foreground mb-4">
                Recomendações e visualizações interativas por afinidade em breve
              </p>
              <Button variant="outline" size="sm">
                Saiba mais
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
