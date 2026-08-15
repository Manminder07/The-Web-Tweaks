import React from 'react'

export default function Marquee() {
  const phrases = [
    { text: 'Design', style: 'serif' },
    { text: '✦', style: 'gold' },
    { text: 'Development', style: 'mono' },
    { text: '·', style: 'dim' },
    { text: 'Motion', style: 'serif' },
    { text: '✦', style: 'ember' },
    { text: 'Brand Systems', style: 'mono' },
    { text: '·', style: 'dim' },
    { text: 'Craft', style: 'serif' },
    { text: '✦', style: 'gold' },
    { text: 'Slow Made', style: 'mono' },
    { text: '·', style: 'dim' },
  ]

  // Duplicate for seamless infinite loop
  const list = [...phrases, ...phrases, ...phrases, ...phrases]

  return (
    <div
      style={{
        width: '100%',
        backgroundColor: 'var(--bg2)',
        borderTop: '1px solid var(--line)',
        borderBottom: '1px solid var(--line)',
        padding: '1.25rem 0',
        overflow: 'hidden',
        position: 'relative',
        zIndex: 2,
      }}
      aria-label="Studio capabilities marquee"
    >
      <div class="marquee-track">
        {list.map((item, i) => (
          <span
            key={i}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              marginRight: '2rem',
              whiteSpace: 'nowrap',
              fontFamily:
                item.style === 'serif'
                  ? 'var(--font-editorial)'
                  : item.style === 'mono'
                  ? 'var(--font-mono)'
                  : 'var(--font-body)',
              fontStyle: item.style === 'serif' ? 'italic' : 'normal',
              fontSize: 'clamp(1.125rem, 2.5vw, 1.625rem)',
              color:
                item.style === 'ember'
                  ? 'var(--ember)'
                  : item.style === 'gold'
                  ? 'var(--gold)'
                  : item.style === 'dim'
                  ? 'var(--dim)'
                  : 'var(--ink)',
            }}
          >
            {item.text}
          </span>
        ))}
      </div>

      <style>{`
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marqueeScroll 28s linear infinite;
        }

        .marquee-track:hover {
          animation-play-state: paused;
        }

        @keyframes marqueeScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @media (prefers-reduced-motion: reduce) {
          .marquee-track {
            animation: none;
            width: 100%;
            justify-content: space-around;
            flex-wrap: wrap;
          }
        }
      `}</style>
    </div>
  )
}
