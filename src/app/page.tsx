
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { FaWhatsapp } from 'react-icons/fa';
import { Instagram, Menu, Layers, Wrench, Shield, Library, Compass, Gem } from 'lucide-react';
import { Logo } from '@/components/logo';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

function Blob() {
  return (
    <div className="relative w-[10.9375rem] h-[10.9375rem]">
      <Image src="/logosimbol.png" alt="Logosimbolo" width={250} height={250} />
    </div>
  );
}

function KPICard({ icon: Icon, title, description }: { icon: React.ElementType; title: string; description: string }) {
  return (
    <Card className="bg-card text-card-foreground shadow-lg hover:shadow-xl transition-shadow h-full border-border rounded-2xl">
      <CardHeader>
        <div className="flex items-center gap-4">
          <div className="bg-primary/20 p-3 rounded-lg">
            <Icon className="h-6 w-6 text-primary" />
          </div>
          <CardTitle className="text-base font-bold flex-1 leading-tight text-pretty">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-card-foreground/80 text-pretty">{description}</p>
      </CardContent>
    </Card>
  );
}

function ServiceCard({ title, description }: { title: string, description: string }) {
  return (
      <div className="bg-[#F8F8F8] border border-gray-200 rounded-xl p-6 shadow-[0_0_20px_rgba(0,0,0,0.05)] flex gap-4 items-center hover:shadow-md transition-shadow cursor-pointer h-full">
          <div className="flex-1">
              <h4 className="font-bold text-[#41231A] text-pretty">{title}</h4>
              <p className="text-sm text-[#41231A]/80 text-pretty">{description}</p>
          </div>
          <div className="bg-[#41231A] text-white text-xs font-bold px-3 py-1 rounded-md">
              GRÁTIS
          </div>
      </div>
  )
}


export default function HomePage() {
  const whatsappLink = "https://wa.me/5521998099718?text=Ol%C3%A1!%20%C3%89%20um%20prazer%20ter%20voc%C3%AA%20aqui.%0A%0APara%20que%20possamos%20dar%20continuidade%20%C3%A0%20sua%20experi%C3%AAncia%2C%20por%20favor%2C%20nos%20informe%3A%0A%0ASeu%20nome%2C%0A%0AE%20qual%20das%20nossas%20frentes%20voc%C3%AA%20deseja%20seguir%20na%20sua%20jornada%20conosco%20(Gerenciamento%20de%20Projetos%20ou%20Carreira%20Fonogr%C3%A1fica).%0A%0AResponderemos%20em%20breve%2C%20mas%20sinta-se%20%C3%A0%20vontade%20para%20adiantar%20o%20assunto%20ou%20a%20necessidade%20do%20seu%20projeto!%22";

  return (
    <div className="bg-white p-[24px] md:p-[47px] animate-in fade-in duration-1000 flex flex-col gap-[24px] md:gap-[47px]">
      <header className="fixed top-[24px] md:top-[47px] left-0 right-0 z-20 w-full px-[24px] md:px-[47px]">
        <div className="relative mx-auto max-w-7xl flex items-center">
          <Logo className="text-[#41231A]" />
          <div className="flex-1 flex justify-end md:justify-center">
            <div className="flex items-center justify-between bg-[#41231A] text-white/80 rounded-full px-4 h-14 md:w-auto">
              <nav className="hidden md:flex items-center gap-8 text-lg pl-8">
                <Link
                  href="/"
                  className="hover:text-white transition-colors text-white font-bold flex items-center gap-2"
                >
                  <Image src="/logomenu.png" alt="Logo Menu" width={24} height={24} />
                  HOME
                </Link>
                <Link href="/servicos" className="hover:text-white transition-colors">
                  SOLUÇÕES
                </Link>
                <Link href="/sobre" className="hover:text-white transition-colors">
                  SOBRE
                </Link>
              </nav>

              <div className="hidden md:flex items-center gap-6 ml-4">
                <div className="w-px h-6 bg-white/20"></div>
                <div className="flex items-center gap-6">
                  <Link href="https://www.instagram.com/xpscreative?igsh=MXM3cm5vZnVsOHly&utm_source=qr" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                    <Instagram className="h-5 w-5" />
                  </Link>
                </div>
                <Button
                  asChild
                  variant="default"
                  size="sm"
                  className="rounded-full bg-white text-[#41231A] hover:bg-white/90 px-8"
                >
                  <Link href="mailto:marco@xpscreative.com">
                    Contato
                  </Link>
                </Button>
                <Button asChild variant="link" className="text-white hover:text-white/80 hover:no-underline">
                  <Link href="https://clientexps.lovable.app/auth" target="_blank">
                    Área do Cliente
                  </Link>
                </Button>
              </div>

              <div className="md:hidden flex items-center justify-between w-full">
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="text-white hover:bg-transparent hover:text-white/80">
                      <Menu className="h-6 w-6" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="bg-[#41231A] text-white border-none p-8">
                    <SheetHeader>
                        <SheetTitle className="sr-only">Menu</SheetTitle>
                    </SheetHeader>
                    <nav className="flex flex-col gap-8 text-2xl mt-8">
                      <Link href="/" className="hover:text-white/80 transition-colors flex items-center gap-2">
                        <Image src="/logomenu.png" alt="Logo Menu" width={24} height={24} />
                        HOME
                      </Link>
                      <Link href="/servicos" className="hover:text-white/80 transition-colors">
                        SOLUÇÕES
                      </Link>
                      <Link href="/sobre" className="hover:text-white/80 transition-colors">
                        SOBRE
                      </Link>
                      <div className="pt-8 space-y-4">
                        <Button asChild variant="link" className="text-white hover:text-white/80 hover:no-underline text-xl p-0 h-auto">
                          <Link href="https://clientexps.lovable.app/auth" target="_blank">
                            Área do Cliente
                          </Link>
                        </Button>
                        <Button
                          asChild
                          variant="default"
                          size="lg"
                          className="rounded-full bg-white text-[#41231A] hover:bg-white/90 w-full"
                        >
                          <Link href="mailto:marco@xpscreative.com">
                            Contato
                          </Link>
                        </Button>
                        <div className="flex items-center gap-6 justify-center pt-4">
                          <Link href="https://www.instagram.com/xpscreative?igsh=MXM3cm5vZnVsOHly&utm_source=qr" target="_blank" rel="noopener noreferrer" className="hover:text-white/80">
                            <Instagram className="h-6 w-6" />
                          </Link>
                        </div>
                      </div>
                    </nav>
                  </SheetContent>
                </Sheet>
                <Button asChild variant="link" className="text-white hover:text-white/80 hover:no-underline text-sm">
                  <Link href="https://clientexps.lovable.app/auth" target="_blank">
                    Área do Cliente
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="relative flex flex-col bg-background text-foreground overflow-hidden rounded-[12px] mt-20" style={{minHeight: '90vh'}}>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute z-0 w-full h-full object-cover opacity-50"
        >
          <source src="https://firebasestorage.googleapis.com/v0/b/xps-creative.firebasestorage.app/o/bg%20xps.mp4?alt=media&token=7d8b5443-6610-4884-9e7e-f40745eb393e" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-background/40 to-transparent" />

        <div className="relative flex flex-1 flex-col">
          <main className="container mx-auto flex flex-1 flex-col justify-center px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 items-center gap-12">
              <div className="space-y-8">
                <h1
                  className="text-4xl font-light tracking-tighter sm:text-5xl uppercase text-pretty"
                  style={{ lineHeight: 1.1 }}
                >
                  <span className="italic">Seus</span>{' '}
                  <span className="font-bold">projetos artísticos</span>{' '}
                  <span className="italic">no centro da</span>{' '}
                  <span className="font-bold">indústria criativa</span>
                </h1>

                <div className="max-w-md text-foreground/80 space-y-4">
                  <p className="text-pretty">
                  Criando alianças, gerando conexões. Unimos estratégia e gestão profissional para transformar talento em ativos sustentáveis, conectando criatividade e mercado com excelência técnica.
                  </p>
                </div>

                <Button
                  asChild
                  size="lg"
                  className="rounded-full bg-foreground hover:bg-foreground/80 text-background px-6 py-7 text-base font-semibold"
                >
                  <Link href="https://wa.me/5521998099718?text=Ol%C3%A1!%20%C3%89%20um%20prazer%20ter%20voc%C3%AA%20aqui.%0A%0APara%20que%20possamos%20dar%20continuidade%20%C3%A0%20sua%20experi%C3%AAncia%2C%20por%20favor%2C%20nos%20informe%3A%0A%0ASeu%20nome%2C%0A%0AE%20qual%20das%20nossas%20frentes%20voc%C3%AA%20deseja%20seguir%20na%20sua%20jornada%20conosco%20(Gerenciamento%20de%20Projetos%20ou%20Carreira%20Fonogr%C3%A1fica).%0A%0AResponderemos%20em%20breve%2C%20mas%20sinta-se%20%C3%A0%20vontade%20para%20adiantar%20o%20assunto%20ou%20a%20necessidade%20do%20seu%20projeto!%22" target="_blank">
                    <div className="flex items-center gap-3">
                      <FaWhatsapp className="!size-10" />
                      <div>
                        <p>Conecte-se agora</p>
                       
                      </div>
                    </div>
                  </Link>
                </Button>
              </div>
              <div className="hidden md:flex items-center justify-center">
                <Blob />
              </div>
            </div>
          </main>

          <footer className="container mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="py-6 text-right text-sm text-foreground/60">
              © {new Date().getFullYear()} xps creative
            </div>
          </footer>
        </div>
      </div>
      
      <div className="space-y-12 md:space-y-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
                <div className="flex-shrink-0">
                    <Logo className="text-[#41231A]" />
                </div>
                <div className="hidden md:block w-px h-10 bg-gray-300"></div>
                <h2 className="text-xl md:text-2xl font-bold text-[#41231A] max-w-md text-pretty">
                Nossas soluções
                </h2>
            </div>
        </div>

        <div className="container mx-auto max-w-6xl rounded-2xl bg-[#41231A] px-4 py-16 sm:px-6 lg:px-8">
            <h3 className="mb-12 text-center text-3xl font-light text-foreground text-pretty">
                GERENCIAMENTO DE <span className="font-bold">PROJETOS</span>
            </h3>
            <div className="grid gap-8 md:grid-cols-3">
                <KPICard 
                    icon={Layers}
                    title='1. A Estrutura (O Alicerce)'
                    description='Viabilizamos projetos através de um gerenciamento escalável, desenhado para gerir a complexidade criativa. Coordenamos parceiros e superamos entraves logísticos com precisão técnica, garantindo uma base sólida para o seu projeto.'
                />
                <KPICard 
                    icon={Wrench}
                    title='2. A Operação (A Execução)'
                    description='Traduzimos ideias em itinerários claros e planos de ação dinâmicos. Unimos a operação de campo ao rigor do backoffice em tempo real, garantindo fluidez para que você mantenha o foco total na criação.'
                />
                <KPICard 
                    icon={Shield}
                    title='3. A Segurança (A Proteção)'
                    description='Zelamos pela integridade do seu projeto com gestão de riscos e governança estratégica. Promovemos a sustentabilidade do seu patrimônio e reputação, convertendo desafios operacionais em trajetórias seguras e controladas.'
                />
            </div>
            <div className="mt-12 text-center">
                <Button asChild variant="link" className="text-lg font-bold text-foreground no-underline hover:underline hover:text-foreground/80">
                    <Link href="/servicos">SAIBA MAIS</Link>
                </Button>
            </div>
        </div>

        <div className="container mx-auto max-w-6xl rounded-2xl bg-[#41231A] px-4 py-16 sm:px-6 lg:px-8">
            <h3 className="mb-12 text-center text-3xl font-light text-foreground text-pretty">
                SELO, EDITORA & <span className="font-bold">PRODUTORA</span>
            </h3>
            <div className="grid gap-8 md:grid-cols-3">
                    <KPICard 
                    icon={Library}
                    title='1. O Ecossistema (A Fundação)'
                    description='Articulamos um ecossistema de serviços essenciais para artistas visionários, integrando soluções criativas e suporte especializado. Nossa estrutura oferece transparência operacional para que sua produção ganhe o mercado com foco absoluto na obra.'
                />
                    <KPICard 
                    icon={Compass}
                    title='2. A Estratégia (O Caminho)'
                    description='Desenhamos itinerários claros que alinham a sustentabilidade da sua carreira à sua essência criativa. Traduzimos sua visão em planejamentos executáveis, assegurando uma trajetória sólida, coerente e voltada ao longo prazo.'
                />
                    <KPICard 
                    icon={Gem}
                    title='3. A Proteção (O Valor)'
                    description='Zelamos pela gestão proativa dos seus direitos e pela curadoria do seu patrimônio autoral e fonográfico. Protegemos seu legado e otimizamos a monetização para que sua música se torne um ativo estratégico de valor.'
                />
            </div>
            <div className="mt-12 text-center">
                    <Button asChild variant="link" className="text-lg font-bold text-foreground no-underline hover:underline hover:text-foreground/80">
                    <Link href="/servicos">SAIBA MAIS</Link>
                </Button>
            </div>
        </div>

      </div>
      <div className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-[#41231A]">
            <h2 className="text-3xl md:text-4xl font-light text-pretty">Está perdido no próximo passo? <span className="font-bold">Comece aqui.</span></h2>
            <p className="mt-4 max-w-xl mx-auto text-lg text-[#41231A]/80 text-pretty">
                Clareza imediata sobre sua carreira ou projeto musical. Zero enrolação, zero compromisso.
            </p>
            <div className="mt-12 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Link href={whatsappLink} target="_blank" className="no-underline">
                <ServiceCard 
                    title="Diagnóstico Operacional"
                    description="Uma análise técnica para identificar gargalos logísticos e otimizar a governança do seu próximo projeto."
                />
              </Link>
              <Link href={whatsappLink} target="_blank" className="no-underline">
                  <ServiceCard 
                    title="Planejamento Estratégico de Carreira"
                    description="Um mapa claro para alinhar sua essência artística ao mercado, transformando sua obra em um ativo de longo prazo."
                />
              </Link>
            </div>
            <div className="mt-8">
                <p className="text-sm font-semibold tracking-wider text-[#41231A]/60 bg-gray-100/80 inline-block px-4 py-2 rounded-full text-pretty">
                    SESSÕES GRATUITAS, ZERO PRESSÃO — SÓ PRA VOCÊ AVANÇAR MAIS RÁPIDO.
                </p>
            </div>
        </div>
      </div>
        <footer className="py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-8">
                <Logo className="text-[#41231A]" />
                <div className="flex items-center gap-8 text-[#41231A]">
                    <Link href="https://www.instagram.com/xpscreative?igsh=MXM3cm5vZnVsOHly&utm_source=qr" target="_blank" rel="noopener noreferrer" className="hover:text-[#41231A]/70">
                        <Instagram className="h-5 w-5" />
                    </Link>
                </div>
                <p className="text-sm text-[#41231A]/60">
                    © {new Date().getFullYear()} xps creative
                </p>
            </div>
        </footer>
    </div>
  );
}
