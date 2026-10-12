'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

/**
 * Vídeo de fundo do hero.
 *
 * - Arquivos leves servidos pelo próprio site (public/hero), sem faixa de áudio.
 * - Versão 640px para telas pequenas e 1280px para as demais.
 * - O <video> sai pronto no HTML do servidor, com muted/autoplay/playsinline
 *   como atributos. O React não escreve "muted" no HTML, e sem ele o Safari
 *   do iPhone/iPad recusa o autoplay.
 * - Se o aparelho bloquear o autoplay (ex.: Modo de Pouca Energia no iOS),
 *   o vídeo começa no primeiro toque, clique ou tecla na página, e o botão
 *   de play nativo fica escondido (o pôster aparece no lugar).
 * - Retoma a reprodução sozinho se o navegador pausar ou o loop travar.
 */
const VIDEO_HTML = `
<video
  class="hero-video absolute z-0 w-full h-full object-cover opacity-50 pointer-events-none"
  autoplay
  muted
  loop
  playsinline
  webkit-playsinline
  preload="auto"
  poster="/hero/hero-poster.jpg"
  aria-hidden="true"
  tabindex="-1"
  disablepictureinpicture
  disableremoteplayback
>
  <source src="/hero/hero-1280.webm" type="video/webm" media="(min-width: 768px)" />
  <source src="/hero/hero-1280.mp4" type="video/mp4" media="(min-width: 768px)" />
  <source src="/hero/hero-640.webm" type="video/webm" />
  <source src="/hero/hero-640.mp4" type="video/mp4" />
</video>`;

export function HeroVideo({ className }: { className?: string }) {
  const wrapperRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const video = wrapperRef.current?.querySelector('video');
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let blocked = false;

    const gestureEvents = ['touchend', 'click', 'keydown'] as const;
    const removeGestureListeners = () => {
      gestureEvents.forEach((e) => document.removeEventListener(e, onGesture, true));
    };
    const onGesture = () => {
      blocked = false;
      removeGestureListeners();
      play();
    };
    const waitForGesture = () => {
      if (blocked) return;
      blocked = true;
      gestureEvents.forEach((e) =>
        document.addEventListener(e, onGesture, { capture: true, passive: true })
      );
    };

    function play() {
      if (reduceMotion.matches || document.hidden || blocked || !video) return;
      const attempt = video.play();
      if (attempt) {
        attempt.catch((err: DOMException) => {
          // Autoplay bloqueado pelo aparelho: espera a primeira interação.
          if (err && err.name === 'NotAllowedError') waitForGesture();
        });
      }
    }

    const restart = () => {
      video.currentTime = 0;
      play();
    };

    const onVisibility = () => {
      if (!document.hidden) play();
    };

    // Vigia: se o vídeo estiver pausado ou parado no mesmo ponto, retoma.
    let lastTime = -1;
    let stuckTicks = 0;
    const watchdog = window.setInterval(() => {
      if (reduceMotion.matches || document.hidden || blocked) return;
      if (video.ended) {
        restart();
      } else if (video.paused) {
        play();
      } else if (video.currentTime === lastTime) {
        stuckTicks += 1;
        if (stuckTicks >= 3) {
          stuckTicks = 0;
          restart();
        }
      } else {
        stuckTicks = 0;
      }
      lastTime = video.currentTime;
    }, 2000);

    if (reduceMotion.matches) {
      video.pause();
    } else {
      play();
    }

    video.addEventListener('ended', restart);
    video.addEventListener('canplay', play);
    document.addEventListener('visibilitychange', onVisibility);
    window.addEventListener('pageshow', play);

    return () => {
      window.clearInterval(watchdog);
      removeGestureListeners();
      video.removeEventListener('ended', restart);
      video.removeEventListener('canplay', play);
      document.removeEventListener('visibilitychange', onVisibility);
      window.removeEventListener('pageshow', play);
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      aria-hidden="true"
      className={cn('absolute inset-0 z-0 overflow-hidden', className)}
      // HTML estático e fixo (sem dados do usuário): garante os atributos no HTML inicial.
      dangerouslySetInnerHTML={{ __html: VIDEO_HTML }}
      suppressHydrationWarning
    />
  );
}
