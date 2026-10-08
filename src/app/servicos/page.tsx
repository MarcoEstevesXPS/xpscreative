
'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { FaWhatsapp } from 'react-icons/fa';
import { Instagram, Layers, Wrench, Shield, Library, Compass, Gem, Landmark, ClipboardList, ShieldCheck, BarChart2, Scaling, Crown, Rocket, Mic, Copyright, FileText, Signal, Database } from 'lucide-react';
import { Logo } from '@/components/logo';
import { SiteHeader } from '@/components/site-header';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

function ServiceCard({ title, description }: { title: string, description: string }) {
  return (
      <div className="bg-[#F8F8F8] border border-gray-200 rounded-xl p-6 shadow-[0_0_20px_rgba(0,0,0,0.05)] flex gap-4 items-center hover:shadow-md transition-shadow cursor-pointer h-full">
          <div className="flex-1">
              <h4 className="font-bold text-[#44293E] text-pretty">{title}</h4>
              <p className="text-sm text-[#44293E]/80 text-pretty">{description}</p>
          </div>
          <div className="bg-[#44293E] text-white text-xs font-bold px-3 py-1 rounded-md">
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
    <div className="bg-[#F7F5EE] p-[24px] md:p-[47px] animate-in fade-in duration-1000 flex flex-col gap-[24px] md:gap-[47px]">
      <SiteHeader />

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
              <h2 className="text-3xl md:text-4xl font-bold text-white uppercase text-pretty">
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
                <Button variant="outline" size="icon" className="rounded-full bg-[#F1F0EF] text-background" asChild>
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
                <DialogTitle className="text-2xl font-bold text-white text-left text-pretty">{activeService.title}</DialogTitle>
              </DialogHeader>
              <ScrollArea className="flex-1 px-6 pb-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {activeService.items.map((item, index) => (
                    <Card key={index} className="bg-background/40 text-card-foreground shadow-md border-border">
                      <CardHeader>
                        <CardTitle className="text-base font-bold text-white flex items-center gap-3">
                           <item.icon className="h-6 w-6 flex-shrink-0" />
                           <span className="text-pretty">{item.title}</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-card-foreground text-pretty">{item.description}</p>
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
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-[#44293E]">
            <h2 className="text-3xl md:text-4xl font-light text-pretty">Está perdido no próximo passo? <span className="font-bold">Comece aqui.</span></h2>
            <p className="mt-4 max-w-xl mx-auto text-lg text-[#44293E]/80 text-pretty">
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
                <p className="text-sm font-semibold tracking-wider text-[#44293E]/60 bg-gray-100/80 inline-block px-4 py-2 rounded-full text-pretty">
                    SESSÕES GRATUITAS, ZERO PRESSÃO — SÓ PRA VOCÊ AVANÇAR MAIS RÁPIDO.
                </p>
            </div>
        </div>
      </div>

      <footer className="py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-8">
                <Logo className="text-[#44293E]" />
                <div className="flex items-center gap-8 text-[#44293E]">
                    <Link href="https://www.instagram.com/xpscreative" target="_blank" rel="noopener noreferrer" className="hover:text-[#44293E]/70">
                        <Instagram className="h-5 w-5" />
                    </Link>
                </div>
                <p className="text-sm text-[#44293E]/60">
                    © {new Date().getFullYear()} xps creative
                </p>
            </div>
        </footer>
    </div>
  );
}
