import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:8000/'; // replace with your deployed backend URL

export const getPrediction = async (imageFile) => {
  const formData = new FormData();
  formData.append('image', imageFile);

  try {
    const response = await axios.post(`${BASE_URL}/diagram`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    console.error('API error:', error);
    throw error;
  }
};