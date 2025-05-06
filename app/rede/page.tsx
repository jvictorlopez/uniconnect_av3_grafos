import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { MainNav } from "@/components/main-nav"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Filter, Network, Search, UserPlus, Users } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function RedePage() {
  return (
    <div className="min-h-screen bg-muted/40">
      <MainNav />

      <div className="container py-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <div>
            <h1 className="text-2xl font-bold">Minha Rede</h1>
            <p className="text-muted-foreground">Explore conexões e encontre pessoas com interesses similares</p>
          </div>

          <div className="flex items-center space-x-2">
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Filtrar
            </Button>
            <Button className="bg-unifor-blue hover:bg-unifor-lightblue">
              <UserPlus className="h-4 w-4 mr-2" />
              Adicionar conexões
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Coluna da esquerda - Filtros */}
          <div className="md:col-span-3 space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-medium">Filtrar por</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Curso</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Todos os cursos" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="todos">Todos os cursos</SelectItem>
                      <SelectItem value="eng-computacao">Engenharia da Computação</SelectItem>
                      <SelectItem value="direito">Direito</SelectItem>
                      <SelectItem value="psicologia">Psicologia</SelectItem>
                      <SelectItem value="medicina">Medicina</SelectItem>
                      <SelectItem value="administracao">Administração</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Semestre</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Todos os semestres" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="todos">Todos os semestres</SelectItem>
                      <SelectItem value="1-2">1º e 2º semestres</SelectItem>
                      <SelectItem value="3-4">3º e 4º semestres</SelectItem>
                      <SelectItem value="5-6">5º e 6º semestres</SelectItem>
                      <SelectItem value="7-8">7º e 8º semestres</SelectItem>
                      <SelectItem value="9-10">9º e 10º semestres</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Interesses</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Todos os interesses" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="todos">Todos os interesses</SelectItem>
                      <SelectItem value="programacao">Programação</SelectItem>
                      <SelectItem value="pesquisa">Pesquisa</SelectItem>
                      <SelectItem value="esportes">Esportes</SelectItem>
                      <SelectItem value="musica">Música</SelectItem>
                      <SelectItem value="empreendedorismo">Empreendedorismo</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Afinidade mínima</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Qualquer afinidade" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="qualquer">Qualquer afinidade</SelectItem>
                      <SelectItem value="50">Acima de 50%</SelectItem>
                      <SelectItem value="60">Acima de 60%</SelectItem>
                      <SelectItem value="70">Acima de 70%</SelectItem>
                      <SelectItem value="80">Acima de 80%</SelectItem>
                      <SelectItem value="90">Acima de 90%</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button className="w-full">Aplicar filtros</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-medium">Visualização de Grafos</CardTitle>
                <CardDescription className="text-xs">Explore sua rede de forma visual</CardDescription>
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

          {/* Coluna principal - Sugestões de conexões */}
          <div className="md:col-span-9">
            <Card>
              <CardHeader>
                <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
                  <CardTitle>Sugestões de conexões</CardTitle>
                  <div className="relative w-full md:w-64">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Pesquisar pessoas..." className="pl-8" />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="sugestoes">
                  <TabsList className="grid w-full grid-cols-3 mb-6">
                    <TabsTrigger value="sugestoes">Sugestões</TabsTrigger>
                    <TabsTrigger value="afinidades">Por afinidade</TabsTrigger>
                    <TabsTrigger value="curso">Por curso</TabsTrigger>
                  </TabsList>

                  <TabsContent value="sugestoes" className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {[
                        {
                          name: "Ana Silva",
                          curso: "Engenharia da Computação",
                          afinidade: 85,
                          interesses: ["Programação", "IA", "Música"],
                        },
                        {
                          name: "Pedro Costa",
                          curso: "Ciência da Computação",
                          afinidade: 78,
                          interesses: ["Desenvolvimento Web", "Jogos", "Esportes"],
                        },
                        {
                          name: "Carla Mendes",
                          curso: "Design Digital",
                          afinidade: 72,
                          interesses: ["UI/UX", "Fotografia", "Arte"],
                        },
                        {
                          name: "Lucas Oliveira",
                          curso: "Engenharia Civil",
                          afinidade: 68,
                          interesses: ["Estruturas", "Viagens", "Esportes"],
                        },
                        {
                          name: "Juliana Santos",
                          curso: "Psicologia",
                          afinidade: 65,
                          interesses: ["Pesquisa", "Leitura", "Cinema"],
                        },
                        {
                          name: "Rafael Lima",
                          curso: "Engenharia da Computação",
                          afinidade: 78,
                          interesses: ["IA", "Pesquisa", "Música"],
                        },
                      ].map((pessoa) => (
                        <Card key={pessoa.name} className="overflow-hidden">
                          <CardHeader className="pb-2">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-3">
                                <Avatar>
                                  <AvatarImage src="/placeholder.svg?height=40&width=40" alt={pessoa.name} />
                                  <AvatarFallback>{pessoa.name.charAt(0)}</AvatarFallback>
                                </Avatar>
                                <div>
                                  <CardTitle className="text-sm">{pessoa.name}</CardTitle>
                                  <CardDescription className="text-xs">{pessoa.curso}</CardDescription>
                                </div>
                              </div>
                              <Badge variant="outline" className="text-xs">
                                {pessoa.afinidade}%
                              </Badge>
                            </div>
                          </CardHeader>
                          <CardContent className="pb-2">
                            <div className="flex flex-wrap gap-1 mb-2">
                              {pessoa.interesses.map((interesse) => (
                                <Badge key={interesse} variant="secondary" className="text-xs">
                                  {interesse}
                                </Badge>
                              ))}
                            </div>
                          </CardContent>
                          <CardFooter className="flex justify-between pt-0">
                            <Button variant="ghost" size="sm">
                              Ver perfil
                            </Button>
                            <Button size="sm" className="bg-unifor-blue hover:bg-unifor-lightblue">
                              <UserPlus className="h-3 w-3 mr-1" />
                              Conectar
                            </Button>
                          </CardFooter>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="afinidades">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {[
                        {
                          name: "Rafael Lima",
                          curso: "Engenharia da Computação",
                          afinidade: 92,
                          interesses: ["IA", "Pesquisa", "Música"],
                        },
                        {
                          name: "Mariana Costa",
                          curso: "Engenharia da Computação",
                          afinidade: 88,
                          interesses: ["Programação", "Jogos", "Cinema"],
                        },
                        {
                          name: "Ana Silva",
                          curso: "Engenharia da Computação",
                          afinidade: 85,
                          interesses: ["Programação", "IA", "Música"],
                        },
                      ].map((pessoa) => (
                        <Card key={pessoa.name} className="overflow-hidden">
                          <CardHeader className="pb-2">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-3">
                                <Avatar>
                                  <AvatarImage src="/placeholder.svg?height=40&width=40" alt={pessoa.name} />
                                  <AvatarFallback>{pessoa.name.charAt(0)}</AvatarFallback>
                                </Avatar>
                                <div>
                                  <CardTitle className="text-sm">{pessoa.name}</CardTitle>
                                  <CardDescription className="text-xs">{pessoa.curso}</CardDescription>
                                </div>
                              </div>
                              <Badge className="text-xs bg-unifor-purple hover:bg-unifor-purple/90">
                                {pessoa.afinidade}%
                              </Badge>
                            </div>
                          </CardHeader>
                          <CardContent className="pb-2">
                            <div className="flex flex-wrap gap-1 mb-2">
                              {pessoa.interesses.map((interesse) => (
                                <Badge key={interesse} variant="secondary" className="text-xs">
                                  {interesse}
                                </Badge>
                              ))}
                            </div>
                          </CardContent>
                          <CardFooter className="flex justify-between pt-0">
                            <Button variant="ghost" size="sm">
                              Ver perfil
                            </Button>
                            <Button size="sm" className="bg-unifor-blue hover:bg-unifor-lightblue">
                              <UserPlus className="h-3 w-3 mr-1" />
                              Conectar
                            </Button>
                          </CardFooter>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="curso">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-medium mb-3 flex items-center">
                          <Users className="h-5 w-5 mr-2 text-muted-foreground" />
                          Engenharia da Computação
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                          {[
                            { name: "Ana Silva", semestre: "5º semestre", afinidade: 85 },
                            { name: "Rafael Lima", semestre: "7º semestre", afinidade: 78 },
                            { name: "Mariana Costa", semestre: "3º semestre", afinidade: 72 },
                          ].map((pessoa) => (
                            <Card key={pessoa.name} className="overflow-hidden">
                              <CardHeader className="pb-2">
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center space-x-3">
                                    <Avatar>
                                      <AvatarImage src="/placeholder.svg?height=40&width=40" alt={pessoa.name} />
                                      <AvatarFallback>{pessoa.name.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                    <div>
                                      <CardTitle className="text-sm">{pessoa.name}</CardTitle>
                                      <CardDescription className="text-xs">{pessoa.semestre}</CardDescription>
                                    </div>
                                  </div>
                                  <Badge variant="outline" className="text-xs">
                                    {pessoa.afinidade}%
                                  </Badge>
                                </div>
                              </CardHeader>
                              <CardFooter className="flex justify-between pt-2">
                                <Button variant="ghost" size="sm">
                                  Ver perfil
                                </Button>
                                <Button size="sm" className="bg-unifor-blue hover:bg-unifor-lightblue">
                                  <UserPlus className="h-3 w-3 mr-1" />
                                  Conectar
                                </Button>
                              </CardFooter>
                            </Card>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-medium mb-3 flex items-center">
                          <Users className="h-5 w-5 mr-2 text-muted-foreground" />
                          Psicologia
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                          {[
                            { name: "Juliana Santos", semestre: "6º semestre", afinidade: 65 },
                            { name: "Bruno Almeida", semestre: "8º semestre", afinidade: 58 },
                          ].map((pessoa) => (
                            <Card key={pessoa.name} className="overflow-hidden">
                              <CardHeader className="pb-2">
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center space-x-3">
                                    <Avatar>
                                      <AvatarImage src="/placeholder.svg?height=40&width=40" alt={pessoa.name} />
                                      <AvatarFallback>{pessoa.name.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                    <div>
                                      <CardTitle className="text-sm">{pessoa.name}</CardTitle>
                                      <CardDescription className="text-xs">{pessoa.semestre}</CardDescription>
                                    </div>
                                  </div>
                                  <Badge variant="outline" className="text-xs">
                                    {pessoa.afinidade}%
                                  </Badge>
                                </div>
                              </CardHeader>
                              <CardFooter className="flex justify-between pt-2">
                                <Button variant="ghost" size="sm">
                                  Ver perfil
                                </Button>
                                <Button size="sm" className="bg-unifor-blue hover:bg-unifor-lightblue">
                                  <UserPlus className="h-3 w-3 mr-1" />
                                  Conectar
                                </Button>
                              </CardFooter>
                            </Card>
                          ))}
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
