
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { FaTiktok } from 'react-icons/fa';
import { Instagram, Youtube, Menu, Twitter } from 'lucide-react';
import { Logo } from '@/components/logo';
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

const artists = [
    { id: 1, name: 'Leo Valente', description: 'Leo Valente mescla MPB e jazz em uma sonoridade única. Suas letras poéticas exploram o cotidiano e as relações humanas com arranjos sofisticados que cativam o público a cada nota. Uma jornada musical que transcende gêneros. Cada show é uma experiência inesquecível e imersiva.', image: 'https://picsum.photos/seed/artist1/600/800', socials: { instagram: '#', twitter: '#' } },
    { id: 2, name: 'Clara Sol', description: 'Clara Sol é a nova voz do pop brasileiro, com batidas eletrônicas contagiantes e um estilo autêntico. Aborda empoderamento e liberdade em shows vibrantes, inspirando uma nova geração de fãs. Sua energia no palco é contagiante e suas músicas são hinos de uma juventude que busca se expressar.', image: 'https://picsum.photos/seed/artist2/600/800', socials: { instagram: '#', twitter: '#' } },
    { id: 3, name: 'Banda Prisma', description: 'Banda Prisma traz um rock alternativo com guitarras distorcidas e uma energia crua no palco. Suas performances são intensas e as letras questionam a sociedade com uma visão crítica e necessária. O som pesado e a mensagem forte fazem da banda um expoente do novo rock nacional.', image: 'https://picsum.photos/seed/artist3/600/800', socials: { instagram: '#', twitter: '#' } },
    { id: 4, name: 'Mariana Lua', description: 'Mariana Lua canta a alma do sertanejo com um toque moderno e romântico. Sua voz potente emociona ao contar histórias de amor, perda e superação com honestidade e paixão. Uma artista que renova a tradição sertaneja com sentimento e verdade em cada canção que interpreta.', image: 'https://picsum.photos/seed/artist4/600/800', socials: { instagram: '#', twitter: '#' } },
    { id: 5, name: 'Coletivo Rima', description: 'Coletivo Rima une diferentes estilos de rap com rimas afiadas e batidas inovadoras. Suas letras abordam a realidade das periferias com uma mensagem de resistência, esperança e transformação social. Um som que ecoa as vozes da rua com poesia e força, inspirando a comunidade.', image: 'https://picsum.photos/seed/artist5/600/800', socials: { instagram: '#', twitter: '#' } },
];

function ArtistCard({ artist }: { artist: typeof artists[0] }) {
    return (
        <div className="relative w-full h-[90vh]">
            <Image
                src={artist.image}
                alt={`Foto de ${artist.name}`}
                fill
                objectFit="cover"
                className="opacity-20"
                data-ai-hint="artist portrait"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-start text-left">
                <div className="relative z-10 p-8 md:p-12 space-y-6 max-w-md">
                    <h2 className="text-4xl font-bold uppercase text-pretty">{artist.name}</h2>
                    <p className="text-foreground/80 line-clamp-4 text-pretty">{artist.description}</p>
                    <div className="flex items-center gap-4 text-foreground">
                        <Button asChild variant="ghost" size="icon" className="hover:bg-transparent">
                            <Link href={artist.socials.instagram} className="hover:text-foreground/70 transition-colors">
                                <Instagram className="h-5 w-5" />
                            </Link>
                        </Button>
                        <Button asChild variant="ghost" size="icon" className="hover:bg-transparent">
                            <Link href={artist.socials.twitter} className="hover:text-foreground/70 transition-colors">
                                <Twitter className="h-5 w-5" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function CasesPage() {
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
                    contato
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
                            contato
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

      <div className="relative bg-background text-foreground overflow-hidden rounded-[12px] mt-20" style={{minHeight: '90vh'}}>
          <Carousel>
              <CarouselContent className="-ml-0">
                  {artists.map((artist, index) => (
                      <CarouselItem key={index} className="pl-0 basis-full md:basis-1/2 lg:basis-1/3">
                          <ArtistCard artist={artist} />
                      </CarouselItem>
                  ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-8 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 border-none text-white" />
              <CarouselNext className="absolute right-8 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 border-none text-white" />
          </Carousel>
      </div>
      <div className="relative mt-8 flex flex-col items-center gap-2 text-sm uppercase text-black">
          <span>Scroll</span>
          <div className="w-px h-8 bg-black"></div>
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
