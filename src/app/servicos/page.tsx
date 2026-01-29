
'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { FaWhatsapp } from 'react-icons/fa';
import { Instagram, Menu, Layers, Wrench, Shield, Library, Compass, Gem, Landmark, ClipboardList, ShieldCheck, BarChart2, Scaling, Crown, Rocket, Mic, Copyright, FileText, Signal, Database } from 'lucide-react';
import { Logo } from '@/components/logo';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

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

const managementDetails = {
  title: "Gerenciamento de projetos",
  titleLines: ["Gerenciamento de", "projetos"],
  image: "/bg1.png",
  imageHint: "guitars studio",
  subtitles: [
    { text: "A Estrutura (O Alicerce)", icon: Layers },
    { text: "A Operação (A Execução)", icon: Wrench },
    { text: "A Segurança (A Proteção)", icon: Shield },
  ],
  items: [
    { icon: Landmark, title: 'Engenharia e Gestão Orçamentária', description: 'Viabilizamos uma gestão financeira precisa com total visibilidade dos custos operacionais. Implementamos rotinas de conciliação e dashboards dinâmicos para o controle em tempo real, contribuindo para a alocação de recursos inteligente e pautada na transparência que o seu projeto exige.' },
    { icon: ClipboardList, title: 'Planejamento e Cronograma Estratégico', description: 'Desenvolvemos cronogramas fundamentados em técnicas de gestão para traduzir a visão em itinerários executáveis. Focamos na identificação de atividades-chave e na eliminação de gargalos, visando o cumprimento dos prazos e a fluidez necessária em cada etapa da jornada produtiva.' },
    { icon: ShieldCheck, title: 'Inteligência em Riscos e Contingência', description: 'Mapeamos proativamente potenciais obstáculos para promover a resiliência de toda a operação. Estruturamos planos de ação e gerenciamento de crises que protegem a execução, assegurando que o projeto esteja preparado para responder com agilidade a variações de cenário, preservando a sua trajetória.' },
    { icon: BarChart2, title: 'Visão Integrada e BI', description: 'Centralizamos a comunicação e o progresso em plataformas unificadas para eliminar ruídos informacionais. Utilizamos  soluções de Business Intelligence (BI) para transformar informações complexas em clareza estratégica, otimizando tomadas de decisão e antecipando soluções para desafios futuros.' },
    { icon: Scaling, title: 'Escalabilidade de Metodologia', description: 'Aplicamos uma engenharia operacional dinâmica que se adapta à complexidade e ao volume de cada demanda. Nossa estrutura robusta suporta a sazonalidade do seu portfólio, mantendo a estabilidade e a eficiência técnica independentemente da escala ou do tamanho do desafio.' },
    { icon: Crown, title: 'Governança e Melhoria Contínua', description: 'Refinamos processos continuamente para consolidar uma linguagem operacional única. Através de um guia de melhores práticas, criamos uma sinergia que se fortalece a cada novo projeto, onde o aprendizado acumulado eleva o padrão de eficiência e garante que a maturidade da sua operação cresça a cada entrega.' }
  ]
};

const labelDetails = {
  title: "Selo, Editora & Produtora",
  titleLines: ["Selo, Editora", "& Produtora"],
  image: "/bg2.png",
  imageHint: "music production gear",
  subtitles: [
    { text: "O Ecossistema (A Fundação)", icon: Library },
    { text: "A Estratégia (O Caminho)", icon: Compass },
    { text: "A Proteção (O Valor)", icon: Gem },
  ],
  items: [
    { icon: Rocket, title: 'Gestão Estratégica de Carreira', description: 'Articulamos o planejamento e a concepção da sua próxima etapa artística através de itinerários claros e seguros. Aplicamos metodologias de cooperação estratégica para integrar cada fase da sua jornada, estabelecendo um alicerce sólido para decisões que visam um crescimento sustentável.' },
    { icon: Mic, title: 'Produção Criativa e A&R', description: 'Oferecemos suporte especializado em A&R e produção musical para traduzir sua visão com excelência técnica. Refinamos o seu repertório e buscamos o equilíbrio entre a sua essência criativa e as dinâmicas do mercado, unindo a força da sua identidade aos seus objetivos de alcance.' },
    { icon: Copyright, title: 'Administração e Proteção de IP', description: 'Zelamos pela sua propriedade intelectual através do registro e da catalogação rigorosa de suas obras. Estruturamos juridicamente seu catálogo para proteger o seu legado, garantindo que sua obra esteja devidamente organizada e pronta para uma gestão de valor eficiente.' },
    { icon: FileText, title: 'Editoração e Licenciamento', description: 'Fomentamos o potencial comercial da sua obra através do licenciamento para mídias como cinema, séries, publicidade e games. Prospectamos ativamente oportunidades em mercados de alto valor agregado, visando converter seu catálogo em novas e constantes fontes de receita.' },
    { icon: Signal, title: 'Distribuição e Monetização Digital', description: 'Viabilizamos sua presença nas plataformas globais com rigor técnico e metadados precisos. Otimizamos os processos de cadastro para permitir uma arrecadação de royalties íntegra e transparente, assegurando que o fluxo financeiro reflita com fidelidade o consumo do seu trabalho.' },
    { icon: Database, title: 'Inteligência de Dados e Transparência', description: 'Transformamos dados de performance em clareza estratégica para o seu negócio. Integramos informações das plataformas para que você acompanhe sua monetização e entenda o comportamento do seu público, traduzindo números complexos em insumos reais para suas próximas decisões.' }
  ]
};

const services = [managementDetails, labelDetails];

export default function ServicosPage() {
  const whatsappLink = "https://wa.me/5521998099718?text=Ol%C3%A1!%20%C3%89%20um%20prazer%20ter%20voc%C3%AA%20aqui.%0A%0APara%20que%20possamos%20dar%20continuidade%20%C3%A0%20sua%20experi%C3%AAncia%2C%20por%20favor%2C%20nos%20informe%3A%0A%0ASeu%20nome%2C%0A%0AE%20qual%20das%20nossas%20frentes%20voc%C3%AA%20deseja%20seguir%20na%20sua%20jornada%20conosco%20(Gerenciamento%20de%20Projetos%20ou%20Carreira%20Fonogr%C3%A1fica).%0A%0AResponderemos%20em%20breve%2C%20mas%20sinta-se%20%C3%A0%20vontade%20para%20adiantar%20o%20assunto%20ou%20a%20necessidade%20do%20seu%20projeto!%22";

  const [activeService, setActiveService] = React.useState<(typeof services)[0] | null>(null);

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
                <Link href="/servicos" className="hover:text-white transition-colors text-white font-bold">
                  SOLUÇÕES
                </Link>
                <Link href="/sobre" className="hover:text-white transition-colors">
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
                          <Link href="mailto:contato@xpscreative.com">
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

      <div className="grid md:grid-cols-2 gap-2 mt-20">
        {services.map((service) => (
          <div
            key={service.title}
            className="relative bg-background text-foreground overflow-hidden rounded-[12px] flex items-center justify-center p-12 cursor-pointer group"
            style={{ minHeight: '80vh' }}
            onClick={() => setActiveService(service)}
          >
            <Image
              src={service.image}
              alt={service.title}
              fill
              objectFit="cover"
              className="opacity-20 group-hover:opacity-30 transition-opacity duration-300"
              data-ai-hint={service.imageHint}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
            <div className="relative z-10 text-left space-y-6 max-w-sm w-full">
              <h2 className="text-3xl md:text-4xl font-bold uppercase text-pretty">
                {service.titleLines[0]}<br/>{service.titleLines[1]}
              </h2>
              <div className="flex flex-col gap-4">
                {service.items.map((item) => (
                    <div key={item.title} className="flex items-center gap-3">
                        <item.icon className="h-4 w-4 text-primary flex-shrink-0" />
                        <p className="text-base font-medium text-foreground text-pretty leading-tight">{item.title}</p>
                    </div>
                ))}
              </div>
              <div className="flex items-center justify-start gap-4 pt-4">
                <Button asChild variant="default" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8">
                  <Link href="mailto:marco@xpscreative.com" onClick={(e) => e.stopPropagation()}>
                    contato
                  </Link>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full bg-foreground text-background" asChild>
                  <Link href={whatsappLink} target="_blank" onClick={(e) => e.stopPropagation()}>
                    <FaWhatsapp className="h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  variant="link"
                  className="text-primary hover:text-primary/90 underline p-0 h-auto"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveService(service);
                  }}
                >
                  + Detalhes
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <Dialog open={!!activeService} onOpenChange={(isOpen) => !isOpen && setActiveService(null)}>
        <DialogContent className="bg-card text-card-foreground border-border p-0 max-w-5xl rounded-lg overflow-hidden">
          {activeService && (
            <div className="flex flex-col max-h-[90vh]">
              <DialogHeader className="p-6 flex-shrink-0">
                <DialogTitle className="text-2xl font-bold text-card-foreground text-left text-pretty">{activeService.title}</DialogTitle>
              </DialogHeader>
              <ScrollArea className="flex-1 px-6 pb-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {activeService.items.map((item, index) => (
                    <Card key={index} className="bg-background/40 text-card-foreground shadow-md border-border">
                      <CardHeader>
                        <CardTitle className="text-base font-bold flex items-center gap-3">
                           <item.icon className="h-6 w-6 flex-shrink-0" />
                           <span className="text-pretty">{item.title}</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-card-foreground/80 text-pretty">{item.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </ScrollArea>
            </div>
          )}
        </DialogContent>
      </Dialog>

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
