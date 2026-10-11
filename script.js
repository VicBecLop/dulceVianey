// Los detalles decorativos flotan suavemente y se desactivan si la persona
// prefiere reducir el movimiento en su dispositivo.
document.addEventListener('DOMContentLoaded', () => {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const decorations = document.querySelectorAll('.sparkle');

  if (reducedMotion || decorations.length === 0) return;

  decorations.forEach((decoration, index) => {
    decoration.animate(
      [
        { transform: 'translateY(0) rotate(-8deg)' },
        { transform: `translateY(${index % 2 ? -9 : 9}px) rotate(8deg)` },
        { transform: 'translateY(0) rotate(-8deg)' }
      ],
      { duration: 3200 + index * 450, iterations: Infinity, easing: 'ease-in-out' }
    );
  });
});
