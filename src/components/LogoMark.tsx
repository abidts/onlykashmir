import logoImage from '../assets/logo.png';

type Props = {
  size?: number;
  className?: string;
  variant?: 'default' | 'black' | 'white';
  animate?: boolean;
};

/**
 * Only Kashmir logo component using the official brand image.
 * Features a globe with trekker silhouette and airplane.
 * Supports seasonal color animations when animate=true.
 */
export default function LogoMark({ size = 40, className, variant = 'default', animate = false }: Props) {
  const getFilter = () => {
    if (variant === 'black') return 'brightness(0)';
    if (variant === 'white') return 'brightness(0) invert(1)';
    return undefined;
  };

  return (
    <span
      className={className}
      style={{
        position: 'relative',
        display: 'block',
        flexShrink: 0,
        width: size,
        height: size * (46 / 60),
        overflow: 'hidden',
      }}
    >
      <img
        src={logoImage}
        alt="Only Kashmir Tour & Travels"
        style={{
          position: 'absolute',
          left: -size / 3,
          top: -(size * 23 / 60),
          width: size * (5 / 3),
          height: size * (5 / 3),
          maxWidth: 'none',
          objectFit: 'fill',
          filter: getFilter(),
          animation: animate ? 'seasonal-colors 16s ease-in-out infinite' : undefined,
        }}
      />
    </span>
  );
}
