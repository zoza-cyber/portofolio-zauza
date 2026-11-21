import React, { useEffect, useRef, useState } from 'react';
import { AVATAR_EXPRESSIONS } from '../data/portfolioData';

interface PokeParticle {
  id: number;
  x: number;
  y: number;
  text: string;
}

export const HeroAvatar: React.FC = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const particleIdRef = useRef(0);

  const [expressionIdx, setExpressionIdx] = useState(0);
  const [animatingSpring, setAnimatingSpring] = useState(false);
  const [particles, setParticles] = useState<PokeParticle[]>([]);
  const [failedUrls, setFailedUrls] = useState<Record<string, boolean>>({});

  const currentState = AVATAR_EXPRESSIONS[expressionIdx];
  const hasImageError = failedUrls[currentState.url];

  // Preload all 4 expression images on mount for instant switching
  useEffect(() => {
    AVATAR_EXPRESSIONS.forEach((item) => {
      const preload = new Image();
      preload.referrerPolicy = 'no-referrer';
      preload.src = item.url;
    });
  }, []);

  // 3D Mousemove Perspective Gaze Tilt
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const hasFinePointer = window.matchMedia('(pointer: fine)').matches;

    if (prefersReducedMotion || !hasFinePointer) return;

    const handleMouseMove = (e: MouseEvent) => {
      const card = cardRef.current;
      if (!card) return;

      const rect = card.getBoundingClientRect();
      const cardCenterX = rect.left + rect.width / 2;
      const cardCenterY = rect.top + rect.height / 2;

      const deltaX = (e.clientX - cardCenterX) / (window.innerWidth / 2);
      const deltaY = (e.clientY - cardCenterY) / (window.innerHeight / 2);

      const rotateY = Math.max(-18, Math.min(18, deltaX * 20));
      const rotateX = Math.max(-18, Math.min(18, -deltaY * 20));

      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const handleMouseLeave = () => {
      if (cardRef.current) {
        cardRef.current.style.transform = 'rotateX(0deg) rotateY(0deg)';
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const triggerPoke = (clientX?: number, clientY?: number) => {
    const nextIdx = (expressionIdx + 1) % AVATAR_EXPRESSIONS.length;
    const nextState = AVATAR_EXPRESSIONS[nextIdx];
    setExpressionIdx(nextIdx);

    // Retrigger squash and stretch spring animation
    setAnimatingSpring(false);
    requestAnimationFrame(() => {
      setAnimatingSpring(true);
    });

    // Spawn floating particle near click or center
    const card = cardRef.current;
    if (card) {
      const rect = card.getBoundingClientRect();
      const rawX = clientX !== undefined && clientX !== 0 ? clientX - rect.left : rect.width / 2;
      const rawY = clientY !== undefined && clientY !== 0 ? clientY - rect.top : rect.height / 3;

      const clampedX = Math.max(20, Math.min(rect.width - 20, rawX));
      const clampedY = Math.max(10, Math.min(rect.height - 10, rawY));

      const id = ++particleIdRef.current;
      setParticles((prev) => [...prev, { id, x: clampedX, y: clampedY, text: nextState.reaction }]);

      window.setTimeout(() => {
        setParticles((prev) => prev.filter((p) => p.id !== id));
      }, 760);
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    triggerPoke(e.clientX, e.clientY);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      triggerPoke();
    }
  };

  return (
    <div className="relative z-20 my-auto py-4 flex flex-col items-center justify-center avatar-tilt-wrapper">
      <div
        ref={cardRef}
        role="button"
        tabIndex={0}
        aria-label={`Interactive avatar portrait — ${currentState.badge}. Click to cycle expression.`}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        onAnimationEnd={() => setAnimatingSpring(false)}
        title="Click to poke Zauza!"
        className="avatar-mesh relative cursor-pointer group focus-visible:outline-2 focus-visible:outline-electric focus-visible:outline-offset-8"
        style={{ transform: 'rotateX(0deg) rotateY(0deg)' }}
      >
        {/* Subtle Glow Halo */}
        <div className="absolute -inset-4 bg-electric/10 rounded-full blur-2xl group-hover:bg-electric/25 transition-all duration-500 pointer-events-none" />

        {/* The Floating Bust Portrait (or graceful fallback if hotlink fails) */}
        {!hasImageError ? (
          <img
            ref={imgRef}
            src={currentState.url}
            alt={currentState.alt}
            referrerPolicy="no-referrer"
            onError={() =>
              setFailedUrls((prev) => ({
                ...prev,
                [currentState.url]: true,
              }))
            }
            className={`relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 object-contain drop-shadow-[0_24px_48px_rgba(0,0,0,0.85)] select-none pointer-events-auto transform transition-transform duration-300 ${
              animatingSpring ? 'animate-squash-spring' : ''
            }`}
          />
        ) : (
          <div
            className={`relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-surface border border-line flex flex-col items-center justify-center p-6 text-center select-none ${
              animatingSpring ? 'animate-squash-spring' : ''
            }`}
          >
            <div className="w-24 h-24 border border-electric/50 bg-obsidian flex items-center justify-center font-headline text-3xl text-electric mb-4">
              ZBS
            </div>
            <span className="font-mono text-xs tracking-widestPlus uppercase text-ink">
              ZAUZA BILQIS SUMAYYA
            </span>
            <span className="font-mono text-[10px] tracking-widestPlus uppercase text-ink-muted mt-1">
              {currentState.reaction}
            </span>
          </div>
        )}

        {/* Interactive Poke Toast / Indicator */}
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 font-mono text-[10px] tracking-widestPlus uppercase bg-surface border border-line px-3 py-1 rounded-full text-ink-muted group-hover:text-electric group-hover:border-electric transition-all shadow-lg pointer-events-none flex items-center space-x-1.5 whitespace-nowrap">
          <span className="w-1.5 h-1.5 rounded-full bg-electric animate-pulse" />
          <span>{currentState.badge}</span>
        </div>

        {/* Floating Poke Particles */}
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="floating-poke-particle font-mono text-[11px] font-bold tracking-wider uppercase bg-electric text-obsidian px-2.5 py-0.5 rounded-full shadow-lg border border-white/20 select-none whitespace-nowrap"
            style={{
              left: `${particle.x}px`,
              top: `${particle.y}px`,
            }}
          >
            {particle.text}
          </div>
        ))}
      </div>
    </div>
  );
};
