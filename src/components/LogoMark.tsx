import logoImage from '../assets/images/logo.png';

type Props = {
  size?: number;
  className?: string;
  variant?: 'default' | 'black';
};

/**
 * Only Kashmir logo component using the official brand image.
 * Features a globe with trekker silhouette and airplane.
 */
export default function LogoMark({ size = 40, className, variant = 'default' }: Props) {
  return (
    <img
      src={logoImage}
      alt="Only Kashmir Tour & Travels"
      className={className}
      style={{ 
        width: size, 
        height: size, 
        objectFit: 'contain',
        filter: variant === 'black' ? 'brightness(0)' : undefined
      }}
    />
  );
}
