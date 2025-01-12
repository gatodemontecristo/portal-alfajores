import { useEffect, useState } from 'react';
import { imageUrls } from '../../utils';

export const useLoadImages = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const preloadImages = (imageUrls: string[]): Promise<void[]> => {
    return Promise.all(
      imageUrls.map(
        (url) =>
          new Promise<void>((resolve, reject) => {
            const img = new Image();
            img.src = url;
            img.onload = () => resolve();
            img.onerror = () => reject();
          }),
      ),
    );
  };
  useEffect(() => {
    const loadImages = async () => {
      try {
        await preloadImages(imageUrls);
        setImagesLoaded(true);
      } catch (error) {
        console.error('Error loading images:', error);
      }
    };

    loadImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imageUrls]);
  return {
    imagesLoaded,
  };
};
