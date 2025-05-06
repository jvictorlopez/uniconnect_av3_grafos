import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-blue-100">
      <div className="container max-w-md px-4">
        <Card className="border-0 shadow-lg">
          <CardHeader className="flex flex-col items-center space-y-2 pb-2">
            <Image src="/logo.png" alt="UniConnect Logo" width={120} height={120} className="mb-2" />
            <CardTitle className="text-3xl font-bold text-unifor-blue">UniConnect</CardTitle>
            <CardDescription className="text-center">
              O LinkedIn da Unifor - Conecte-se com outros alunos baseado em interesses e afinidades
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 pt-4">
            <Button asChild className="w-full bg-unifor-blue hover:bg-unifor-lightblue">
              <Link href="/login">Entrar com e-mail institucional Unifor</Link>
            </Button>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">Ou</span>
              </div>
            </div>
            <Button asChild variant="outline" className="w-full">
              <Link href="/cadastro">Cadastro manual</Link>
            </Button>
          </CardContent>
          <CardFooter className="flex flex-col space-y-2 pt-0">
            <p className="text-xs text-center text-muted-foreground">
              Ao continuar, você concorda com os Termos de Serviço e Política de Privacidade do UniConnect.
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
