import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Location {
  latitude: number;
  longitude: number;
}

interface ImageData {
  path: string;
  location?: Location;
}

interface ImageContextType {
  images: ImageData[];
  addImage: (imgPath: string, location?: Location) => void;
  removeImage: (imgPath: string) => void;
}

const defaultValue: ImageContextType = {
  images: [],
  addImage: () => {},
  removeImage: () => {},
};

const ImageContext = createContext<ImageContextType>(defaultValue);

export const useImages = () => useContext(ImageContext);

interface ImageProviderProps {
  children: ReactNode;
}

export const ImageProvider = (props: ImageProviderProps) => {
  const { children } = props;

  const [images, setImages] = useState<ImageData[]>([]);

  const addImage = (imgPath: string, location?: Location) => {
    console.log(`Adding image: ${imgPath}`);
    const newImageData: ImageData = { path: imgPath };
    if (location) {
      newImageData.location = location;
    }
    setImages((prevImages) => [...prevImages, newImageData]);
  };

  const removeImage = (imgPath: string) => {
    setImages((prevImages) => prevImages.filter((image) => image.path !== imgPath));
  };

  return (
    <ImageContext.Provider value={{ images, addImage, removeImage }}>
      {children}
    </ImageContext.Provider>
  );
};
