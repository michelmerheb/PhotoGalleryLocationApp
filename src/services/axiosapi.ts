import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001/photos',
});

export const fetchPhotos = async () => {
  try {
    const response = await api.get('photos');
    return response.data;
  } catch (error) {
    console.error('Error fetching photos:', error);
    throw error;
  }
};

export const addPhoto = async (photoData: any) => {
  try {
    const response = await api.post('photos', photoData);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export const deletePhoto = async (id: any) => {
  try {
    const response = await api.delete(`photos/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
