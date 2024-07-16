import { useEffect, useState } from "react";
import axios from 'axios';

export const useGetRequest = (apiUrl) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (apiUrl) {
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
      }
      else {
        setLoading(false);
      }
    };

    fetchData();
  }, [apiUrl]);

  return { data, loading };
} 

export const usePostRequest = () => {
  const postRecipe = async (formData) => {
    try {
      const baseUrl = import.meta.env.VITE_API_BASE_URL;
      const response = await axios.post(`${baseUrl}/api/manage-recipe`, formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.status === 201) {
        return { success: true, message: 'Recipe added successfully.' };
      } 
    } catch (error) {
      return { success: false, message: 'Missing inputs or an error occurred. Please try again.' };
    }
  };

  return { postRecipe };
};

export const usePutRequest = () => {
  const putRecipe = async (formData) => {
    try {
      const baseUrl = import.meta.env.VITE_API_BASE_URL;
      const response = await axios.put(`${baseUrl}/api/manage-recipe/${formData.id}`, formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.status === 200) {
        return { success: true, message: 'Recipe updated successfully.' };
      } 
    } catch (error) {
      return { success: false, message: 'Missing inputs or an error occurred. Please try again.' };
    }
  };

  return { putRecipe };
};

export const useDeleteRequest = () => {
  const deleteRecipe = async (passkey, id) => {
    try {
      const baseUrl = import.meta.env.VITE_API_BASE_URL;
      const response = await axios.delete(`${baseUrl}/api/manage-recipe/${id}`, {
        headers: {
          'Content-Type': 'application/json'
        },
        data: { passkey }
      });

      if (response.status === 204) {
        return { success: true, message: 'Recipe deleted successfully.' };
      } else {
        return { success: false, message: 'An error occurred. Please try again.' };
      }
    } catch (error) {
      return { success: false, message: 'An error occurred. Please try again.' };
    }
  };

  return { deleteRecipe };
};
