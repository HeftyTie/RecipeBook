import { useEffect, useState } from "react";
import axios from 'axios';

export const useGetRequest = (apiUrl) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const baseUrl = import.meta.env.VITE_API_BASE_URL;
        const response = await axios.get(`${baseUrl}/${apiUrl}`);
        const { data, status } = response;

        if (status === 200) {
          setData(data); 
        } 
      } catch (error) {

      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [apiUrl]);

  return { data, loading };
} 

export const useDeleteRequest = () => {
  const deleteRecipe = async (passkey) => {
    try {
      const formData = { passkey }; 
      const response = await axios.delete(`/api/manage-recipe`, {
        headers: {
          'Content-Type': 'application/json'
        },
        data: formData
      });

      if (response.status === 200) {
          alert('Recipe deleted successfully.');
      } else {
          alert('Invalid Passkey');
      }
    } catch (error) {
        alert('An error occurred. Please try again.');
    }
  };

  return { deleteRecipe };
};