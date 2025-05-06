import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MainNav } from "@/components/main-nav"
import { Network } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"

export default function GrafosPage() {
  return (
    <div className="min-h-screen bg-muted/40">
      <MainNav />

      <div className="container py-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <div>
            <h1 className="text-2xl font-bold">Visualização de Grafos</h1>
            <p className="text-muted-foreground">Explore sua rede de conexões e descubra novos contatos</p>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Gráficos Sociais</CardTitle>
            <CardDescription>
              Visualize suas conexões e descubra padrões de relacionamento baseados em interesses comuns
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="afinidades">
              <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-6">
                <TabsList className="w-full md:w-auto">
                  <TabsTrigger value="afinidades">Por afinidades</TabsTrigger>
                  <TabsTrigger value="curso">Por curso</TabsTrigger>
                  <TabsTrigger value="interesses">Por interesses</TabsTrigger>
                </TabsList>

                <div className="flex items-center space-x-2">
                  <div className="space-y-1">
                    <Label htmlFor="filtro" className="text-xs">
                      Filtrar por
                    </Label>
                    <Select>
                      <SelectTrigger id="filtro" className="w-[180px]">
                        <SelectValue placeholder="Todos os filtros" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="todos">Todos os filtros</SelectItem>
                        <SelectItem value="conexoes">Apenas conexões</SelectItem>
                        <SelectItem value="sugestoes">Incluir sugestões</SelectItem>
                        <SelectItem value="afinidade-alta">Afinidade alta (>70%)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <TabsContent value="afinidades" className="flex flex-col items-center justify-center">
                <div className="w-full h-[500px] border-2 border-dashed rounded-md flex flex-col items-center justify-center p-6">
                  <Network className="h-16 w-16 text-muted-foreground mb-4" />
                  <CardTitle className="text-xl mb-2">Visualização em desenvolvimento</CardTitle>
                  <CardDescription className="text-center mb-6 max-w-md">
                    A visualização interativa de grafos por afinidade está em desenvolvimento. Em breve você poderá
                    explorar sua rede de conexões de forma visual e interativa.
                  </CardDescription>
                  <div className="text-center text-sm text-muted-foreground mb-4">
                    <p>Este módulo utilizará algoritmos de grafos para:</p>
                    <ul className="list-disc list-inside mt-2">
                      <li>Identificar comunidades baseadas em interesses</li>
                      <li>Sugerir novas conexões por similaridade</li>
                      <li>Visualizar caminhos entre pessoas</li>
                      <li>Analisar centralidade e influência na rede</li>
                    </ul>
                  </div>
                  <Button variant="outline">Receber notificação quando disponível</Button>
                </div>
              </TabsContent>

              <TabsContent value="curso" className="flex flex-col items-center justify-center">
                <div className="w-full h-[500px] border-2 border-dashed rounded-md flex flex-col items-center justify-center p-6">
                  <Network className="h-16 w-16 text-muted-foreground mb-4" />
                  <CardTitle className="text-xl mb-2">Visualização por curso</CardTitle>
                  <CardDescription className="text-center mb-6 max-w-md">
                    A visualização de grafos por curso permitirá identificar conexões entre diferentes cursos e
                    descobrir pontes entre comunidades acadêmicas.
                  </CardDescription>
                  <Button variant="outline">Receber notificação quando disponível</Button>
                </div>
              </TabsContent>

              <TabsContent value="interesses" className="flex flex-col items-center justify-center">
                <div className="w-full h-[500px] border-2 border-dashed rounded-md flex flex-col items-center justify-center p-6">
                  <Network className="h-16 w-16 text-muted-foreground mb-4" />
                  <CardTitle className="text-xl mb-2">Visualização por interesses</CardTitle>
                  <CardDescription className="text-center mb-6 max-w-md">
                    A visualização por interesses mostrará como seus hobbies, preferências e objetivos se conectam com
                    os de outros alunos, facilitando encontrar pessoas com afinidades específicas.
                  </CardDescription>
                  <Button variant="outline">Receber notificação quando disponível</Button>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
