import Image from 'next/image';
import Link from 'next/link';

type SiteLogoProps = {
  size?: 'sm' | 'md' | 'lg';
  priority?: boolean;
};

const widths = { sm: 132, md: 168, lg: 220 } as const;

export default function SiteLogo({ size = 'md', priority = false }: SiteLogoProps) {
  const width = widths[size];

  return (
    <Link href="/" className="site-logo" aria-label="Faithfeast home">
      <Image
        src="/images/faithfeast-wordmark.png"
        alt="Faithfeast"
        width={width}
        height={Math.round((width * 350) / 1080)}
        priority={priority}
      />
    </Link>
  );
}
