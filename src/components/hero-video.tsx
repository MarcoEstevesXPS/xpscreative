'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

/**
 * Vídeo de fundo do hero.
 * - Arquivos leves servidos pelo próprio site (public/hero), sem faixa de áudio.
 * - Versão 640px para telas pequenas e 1280px para as demais.
 * - Retoma a reprodução sozinho se o navegador pausar ou o loop travar.
 */
export function HeroVideo({ className }: { className?: string }) {
  const ref = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    const video = ref.current;
    if (!video) return;

    // O React nem sempre aplica "muted" a tempo, e sem ele o autoplay é bloqueado.
    video.muted = true;
    video.defaultMuted = true;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    const play = () => {
      if (reduceMotion.matches || document.hidden) return;
      const attempt = video.play();
      if (attempt) attempt.catch(() => {});
    };

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
      if (reduceMotion.matches || document.hidden) return;
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
    document.addEventListener('visibilitychange', onVisibility);
    window.addEventListener('pageshow', play);

    return () => {
      window.clearInterval(watchdog);
      video.removeEventListener('ended', restart);
      document.removeEventListener('visibilitychange', onVisibility);
      window.removeEventListener('pageshow', play);
    };
  }, []);

  return (
    <video
      ref={ref}
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      poster="/hero/hero-poster.jpg"
      aria-hidden="true"
      tabIndex={-1}
      disablePictureInPicture
      className={cn('absolute z-0 w-full h-full object-cover opacity-50', className)}
    >
      <source src="/hero/hero-1280.webm" type="video/webm" media="(min-width: 768px)" />
      <source src="/hero/hero-1280.mp4" type="video/mp4" media="(min-width: 768px)" />
      <source src="/hero/hero-640.webm" type="video/webm" />
      <source src="/hero/hero-640.mp4" type="video/mp4" />
    </video>
  );
}
