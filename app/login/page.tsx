import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image from "next/image"
import Link from "next/link"

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-blue-100">
      <div className="container max-w-md px-4">
        <Card className="border-0 shadow-lg">
          <CardHeader className="flex flex-col items-center space-y-2">
            <Link href="/">
              <Image src="/logo.png" alt="UniConnect Logo" width={80} height={80} className="mb-2" />
            </Link>
            <CardTitle className="text-2xl font-bold text-unifor-blue">Entrar no UniConnect</CardTitle>
            <CardDescription>Entre com seu e-mail institucional da Unifor</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">E-mail institucional</Label>
              <Input id="email" type="email" placeholder="seu.nome@edu.unifor.br" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Senha</Label>
                <Link href="/esqueci-senha" className="text-xs text-unifor-blue hover:underline">
                  Esqueceu a senha?
                </Link>
              </div>
              <Input id="password" type="password" />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Button asChild className="w-full bg-unifor-blue hover:bg-unifor-lightblue">
              <Link href="/perfil/criar">Entrar</Link>
            </Button>
            <div className="text-center text-sm">
              Não tem uma conta?{" "}
              <Link href="/cadastro" className="text-unifor-blue hover:underline">
                Cadastre-se
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
