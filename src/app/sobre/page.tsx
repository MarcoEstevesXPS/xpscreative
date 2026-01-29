
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { FaTiktok } from 'react-icons/fa';
import { Instagram, Youtube, Menu } from 'lucide-react';
import { Logo } from '@/components/logo';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

function ServiceCard({ title, description }: { title: string, description: string }) {
    return (
        <div className="bg-[#F8F8F8] border border-gray-200 rounded-xl p-6 shadow-[0_0_20px_rgba(0,0,0,0.05)] flex gap-4 items-center hover:shadow-md transition-shadow cursor-pointer h-full">
            <div className="flex-1">
                <h4 className="font-bold text-[#41231A]">{title}</h4>
                <p className="text-sm text-[#41231A]/80">{description}</p>
            </div>
            <div className="bg-[#41231A] text-white text-xs font-bold px-3 py-1 rounded-md">
                GRÁTIS
            </div>
        </div>
    )
}

export default function SobrePage() {
  const whatsappLink = "https://wa.me/5521998099718?text=Ol%C3%A1!%20%C3%89%20um%20prazer%20ter%20voc%C3%AA%20aqui.%0A%0APara%20que%20possamos%20dar%20continuidade%20%C3%A0%20sua%20experi%C3%AAncia%2C%20por%20favor%2C%20nos%20informe%3A%0A%0ASeu%20nome%2C%0A%0AE%20qual%20das%20nossas%20frentes%20voc%C3%AA%20deseja%20seguir%20na%20sua%20jornada%20conosco%20(Gerenciamento%20de%20Projetos%20ou%20Carreira%20Fonogr%C3%A1fica).%0A%0AResponderemos%20em%20breve%2C%20mas%20sinta-se%20%C3%A0%20vontade%20para%20adiantar%20o%20assunto%20ou%20a%20necessidade%20do%20seu%20projeto!%22";

  return (
    <div className="bg-white p-[24px] md:p-[47px] animate-in fade-in duration-1000 flex flex-col gap-[24px] md:gap-[47px]">
       <header className="fixed top-[24px] md:top-[47px] left-0 right-0 z-20 w-full px-[24px] md:px-[47px]">
        <div className="relative mx-auto max-w-7xl flex items-center">
          <Logo className="text-[#41231A]" />
          <div className="flex-1 flex justify-end md:justify-center">
            <div className="flex items-center justify-between bg-[#41231A] text-white/80 rounded-full px-4 h-14 w-auto">
              <nav className="hidden md:flex items-center gap-8 text-lg pl-8">
                <Link
                  href="/"
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  <Image src="/logomenu.png" alt="Logo Menu" width={24} height={24} />
                  HOME
                </Link>
                <Link href="/servicos" className="hover:text-white transition-colors">
                  SOLUÇÕES
                </Link>
                <Link href="/sobre" className="hover:text-white transition-colors text-white font-bold">
                  SOBRE
                </Link>
              </nav>

              <div className="hidden md:flex items-center gap-6 ml-4">
                <div className="w-px h-6 bg-white/20"></div>
                <div className="flex items-center gap-6">
                  <Link href="https://www.instagram.com/xpscreative" target="_blank" rel="noopener noreferrer" className="hover:text-white">
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
                          <Link href="https://www.instagram.com/xpscreative" target="_blank" rel="noopener noreferrer" className="hover:text-white/80">
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

      <div className="relative bg-background text-foreground overflow-hidden rounded-[12px] mt-20 flex flex-col justify-center py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <Image
              src="https://picsum.photos/seed/about-hero/1920/1080"
              alt="Sobre a XPS Creative"
              fill
              objectFit="cover"
              className="opacity-20"
              data-ai-hint="office workspace"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/70 to-background" />
          <div className="relative z-10">
              <div className="text-left max-w-4xl mx-auto">
                  <h1 className="text-4xl md:text-5xl font-bold uppercase">Sobre a XPS Creative</h1>
                  <p className="mt-4 max-w-2xl text-foreground/80 text-lg">
                      Estratégia, criatividade e design para marcas que buscam o próximo nível.
                  </p>
              </div>
              <div className="max-w-4xl mx-auto mt-12">
                  <div className="text-lg text-foreground/80 space-y-4">
                    <p>
                        Na Indústria Criativa, o sucesso exige mais do que talento: demanda expertise para converter visão em sustentabilidade. Acreditamos que, no ritmo da indústria contemporânea, contar com uma gestão profissional é o que resgata o tempo e o espaço para sua obra ser verdadeiramente livre.
                    </p>
                    <p>
                        Nascemos para ser o elo entre a visão artística e a realidade do mercado. Atuamos como um ecossistema integrado que conecta estratégia e criatividade, estruturando o caminho para a viabilização de projetos enquanto você mantém o foco na essência da criação.
                    </p>
                    <p>
                        Nós impulsionamos seus projetos para o centro da economia criativa através de uma engenharia operacional dinâmica. Traduzimos sonhos em itinerários claros, zelando por cada detalhe estratégico em uma atuação conjunta, porque queremos que sua trajetória seja o mais relevante e fluida possível.
                    </p>
                    <p>
                        Fazemos isso com a consciência de que um projeto só é verdadeiramente bem-sucedido quando é íntegro e inclusivo. Por isso, nossa gestão é pautada pela transparência que gera confiança e por uma governança que protege o seu legado. Para nós, a alta performance ganha sentido quando abraça a diversidade da cadeia produtiva. E também abre portas, desenhando experiências que buscam democratizar o acesso para que a arte seja sentida por todos, sem barreiras. Ao unir o rigor técnico ao respeito humano, transformamos grandes ideias em legados vivos, plurais e perenes.
                    </p>
                   
                    
                  </div>
              </div>
          </div>
      </div>
        
        <div className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-4xl mx-auto mb-12">
                  <h2 className="text-3xl font-bold text-[#41231A]">Quem Faz Acontecer</h2>
              </div>
              <div className="flex justify-center">
                  <div className="bg-card text-card-foreground rounded-xl shadow-lg overflow-hidden w-full max-w-5xl">
                      <div className="md:flex">
                          <div className="md:w-2/5 relative">
                              <Image className="h-48 w-full object-cover md:h-full" src="/marcosesteves.png" alt="Foto de Marcos Esteves" width={400} height={500} data-ai-hint="professional headshot" />
                              <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                          </div>
                          <div className="p-6 md:w-3/5 flex flex-col justify-center space-y-6">
                              <h3 className="text-2xl font-bold text-foreground">Marco Esteves | Fundador </h3>
                              <div className="uppercase tracking-wide text-sm text-primary font-semibold">Engenharia, Arte e a Ciência da Continuidade</div>
                              <p className="text-foreground/80">
                              Trabalho há 20 anos com gerenciamento de projetos críticos, reconhecido por atuar na governança de práticas que fomentam a sinergia entre diversas disciplinas e processos como os Jogos Olímpicos e Paralímpicos Rio 2016, a Conferência das Nações Unidas (Rio+20) e diversos outros projetos ligados à infraestrutura de tecnologia.</p> 
                              <p className="text-foreground/80">Foi com essa aproximação aos eventos de grande porte, meu exercício como músico e o meu desenvolvimento na pós-graduação em Gestão Cultural e Indústria Criativa que fundei a XPS Creative para simplificar o invisível, ajudando os agentes dessa indústria a assumirem uma visão estratégica, profissionalizada e estruturada frente aos seus projetos, para enfrentar os desafios de retorno e cumprimento de processos em um mercado cada vez mais complexo e exigente.
                              </p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </div>

      <div className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-[#41231A]">
            <h2 className="text-3xl md:text-4xl font-light">Está perdido no próximo passo? <span className="font-bold">Comece aqui.</span></h2>
            <p className="mt-4 max-w-xl mx-auto text-lg">
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
                <p className="text-sm font-semibold tracking-wider text-[#41231A]/60 bg-gray-100/80 inline-block px-4 py-2 rounded-full">
                    SESSÕES GRATUITAS, ZERO PRESSÃO — SÓ PRA VOCÊ AVANÇAR MAIS RÁPIDO.
                </p>
            </div>
        </div>
      </div>

      <footer className="py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-8">
                <Logo className="text-[#41231A]" />
                <div className="flex items-center gap-8 text-[#41231A]">
                    <Link href="https://www.instagram.com/xpscreative" target="_blank" rel="noopener noreferrer" className="hover:text-[#41231A]/70">
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
