import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MainNav } from "@/components/main-nav"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Briefcase, GraduationCap, Mail, MapPin, Network, UserPlus } from "lucide-react"
import { Progress } from "@/components/ui/progress"

export default function PerfilUsuarioPage() {
  return (
    <div className="min-h-screen bg-muted/40">
      <MainNav />

      <div className="container py-6">
        <Card className="border-0 shadow-md overflow-hidden">
          {/* Banner e foto de perfil */}
          <div className="h-40 bg-gradient-to-r from-unifor-blue to-unifor-purple relative">
            <div className="absolute -bottom-16 left-8">
              <Avatar className="h-32 w-32 border-4 border-background">
                <AvatarImage src="/placeholder.svg?height=128&width=128" alt="@usuario" />
                <AvatarFallback>RL</AvatarFallback>
              </Avatar>
            </div>
            <div className="absolute bottom-4 right-4 flex space-x-2">
              <Button variant="outline" className="bg-background/80 backdrop-blur-sm">
                <Mail className="h-4 w-4 mr-2" />
                Enviar mensagem
              </Button>
              <Button className="bg-unifor-blue hover:bg-unifor-lightblue">
                <UserPlus className="h-4 w-4 mr-2" />
                Conectar
              </Button>
            </div>
          </div>

          {/* Informações básicas */}
          <div className="pt-20 px-8 pb-6">
            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-2xl font-bold">Rafael Lima</h1>
                <p className="text-muted-foreground">Estudante de Engenharia da Computação</p>
                <div className="flex items-center mt-2 space-x-4">
                  <div className="flex items-center">
                    <GraduationCap className="h-4 w-4 mr-1 text-muted-foreground" />
                    <span className="text-sm">Unifor • 7º Semestre</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1 text-muted-foreground" />
                    <span className="text-sm">Fortaleza, CE</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-center mb-2">
                  <span className="text-lg font-bold text-unifor-purple">78%</span>
                  <p className="text-xs text-muted-foreground">Afinidade</p>
                </div>
                <Progress value={78} className="w-16 h-2" />
              </div>
            </div>
          </div>

          {/* Abas de conteúdo */}
          <Tabs defaultValue="sobre" className="px-8 pb-8">
            <TabsList className="w-full max-w-md grid grid-cols-4">
              <TabsTrigger value="sobre">Sobre</TabsTrigger>
              <TabsTrigger value="interesses">Interesses</TabsTrigger>
              <TabsTrigger value="conexoes">Conexões</TabsTrigger>
              <TabsTrigger value="atividades">Atividades</TabsTrigger>
            </TabsList>

            <TabsContent value="sobre" className="mt-6 space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-2">Sobre mim</h3>
                <p className="text-sm text-muted-foreground">
                  Estudante de Engenharia da Computação apaixonado por desenvolvimento web e inteligência artificial.
                  Busco oportunidades para aplicar meus conhecimentos em projetos inovadores e colaborativos.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Experiência acadêmica</h3>
                <div className="space-y-4">
                  <div className="flex">
                    <div className="mr-4">
                      <Briefcase className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium">Monitor de Programação Web</h4>
                      <p className="text-xs text-muted-foreground">Unifor • 2024 - Atual</p>
                      <p className="text-sm mt-1">
                        Auxílio aos alunos em atividades práticas e teóricas da disciplina de Programação Web.
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="mr-4">
                      <Briefcase className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium">Bolsista de Iniciação Científica</h4>
                      <p className="text-xs text-muted-foreground">Unifor • 2023 - 2024</p>
                      <p className="text-sm mt-1">
                        Pesquisa na área de Inteligência Artificial aplicada à análise de dados.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Formação</h3>
                <div className="flex">
                  <div className="mr-4">
                    <GraduationCap className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium">Engenharia da Computação</h4>
                    <p className="text-xs text-muted-foreground">Universidade de Fortaleza • 2021 - 2025</p>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="interesses" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-sm">Interesses acadêmicos</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Inteligência Artificial",
                        "Desenvolvimento Web",
                        "Ciência de Dados",
                        "Pesquisa",
                        "Iniciação Científica",
                        "Intercâmbio",
                      ].map((interesse) => (
                        <Badge key={interesse} variant="secondary">
                          {interesse}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-sm">Interesses profissionais</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {["Startups", "Desenvolvimento de Software", "Consultoria", "Empreendedorismo", "Inovação"].map(
                        (interesse) => (
                          <Badge key={interesse} variant="secondary">
                            {interesse}
                          </Badge>
                        ),
                      )}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-sm">Hobbies</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {["Música", "Fotografia", "Viagens", "Leitura", "Cinema", "Jogos"].map((hobby) => (
                        <Badge key={hobby} variant="secondary">
                          {hobby}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-sm">Esportes</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {["Futebol", "Natação", "Corrida", "Ciclismo"].map((esporte) => (
                        <Badge key={esporte} variant="secondary">
                          {esporte}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="conexoes" className="mt-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium">Conexões em comum</h3>
                <Button variant="outline" size="sm">
                  Ver todas
                </Button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { name: "Ana Silva", curso: "Engenharia da Computação", mutual: 8 },
                  { name: "Pedro Costa", curso: "Ciência da Computação", mutual: 5 },
                  { name: "Carla Mendes", curso: "Design Digital", mutual: 3 },
                ].map((pessoa) => (
                  <Card key={pessoa.name} className="flex items-center p-4 space-x-4">
                    <Avatar>
                      <AvatarImage src="/placeholder.svg?height=40&width=40" alt={pessoa.name} />
                      <AvatarFallback>{pessoa.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-sm">{pessoa.name}</p>
                      <p className="text-xs text-muted-foreground">{pessoa.curso}</p>
                      <p className="text-xs text-muted-foreground">{pessoa.mutual} conexões em comum</p>
                    </div>
                  </Card>
                ))}
              </div>

              <div className="mt-6">
                <Card className="border-dashed">
                  <CardContent className="flex flex-col items-center justify-center p-6">
                    <Network className="h-10 w-10 text-muted-foreground mb-2" />
                    <CardTitle className="text-sm mb-2">Visualização de Grafos</CardTitle>
                    <CardDescription className="text-center mb-4">
                      Explore a rede de conexões e descubra novos contatos com interesses similares
                    </CardDescription>
                    <Button variant="outline">Visualizar grafo de conexões</Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="atividades" className="mt-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium">Atividades recentes</h3>
                <Button variant="outline" size="sm">
                  Filtrar
                </Button>
              </div>

              <div className="space-y-4">
                {[
                  {
                    type: "post",
                    content: "Compartilhou um artigo sobre Inteligência Artificial",
                    time: "2 dias atrás",
                  },
                  {
                    type: "evento",
                    content: "Confirmou presença no evento Feira de Estágios 2025.1",
                    time: "1 semana atrás",
                  },
                  { type: "conexao", content: "Conectou-se com Maria Rodrigues", time: "2 semanas atrás" },
                  { type: "grupo", content: "Entrou no grupo Programação Web Avançada", time: "1 mês atrás" },
                ].map((atividade, index) => (
                  <Card key={index}>
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src="/placeholder.svg?height=32&width=32" alt="@usuario" />
                          <AvatarFallback>RL</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm">{atividade.content}</p>
                          <p className="text-xs text-muted-foreground">{atividade.time}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </div>
  )
}
