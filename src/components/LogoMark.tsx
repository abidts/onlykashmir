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
    <img
      src={logoImage}
      alt="Only Kashmir Tour & Travels"
      className={className}
      style={{
        width: size,
        height: size,
        objectFit: 'contain',
        filter: getFilter(),
        animation: animate ? 'seasonal-colors 16s ease-in-out infinite' : undefined,
      }}
    />
  );
}
