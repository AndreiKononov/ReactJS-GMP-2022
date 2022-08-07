import { useState } from 'react';
import Image from 'next/image';

export const NextImageCustom = ({ alt, ...props }) => {
  const [src, setSrc] = useState(props.src);
  const isUnoptimized = process.env.NODE_ENV === 'development';

  return (
    <>
      <Image
        unoptimized={isUnoptimized}
        {...props}
        alt={alt}
        src={src}
        placeholder="blur"
        blurDataURL="/img/img-placeholder.png"
        onError={() => setSrc('/img/img-placeholder.png')}
      />
    </>
  );
};
