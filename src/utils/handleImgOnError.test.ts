import { handleImgOnError } from './handleImgOnError';

describe('handleImgOnError', () => {
  it('should add placeholder image and onerror = null to an image element', () => {
    const initialImg = {} as HTMLImageElement;
    const handledImg = {
      onerror: null,
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png',
    };

    handleImgOnError({ currentTarget: initialImg });

    expect(initialImg).toEqual(handledImg);
  });
});
