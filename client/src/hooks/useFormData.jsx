import { useState } from 'react';

export const useFormData = (initialData) => {
  const [formData, setFormData] = useState(initialData || {
    username: '',
    passkey: '',
    header: '',
    prepTime: '',
    cookTime: '',
    totalTime: '',
    servings: '',
    equipment: [],
    ingredients: [],
    steps: [],
    image: null,
  });

  const addItem = (property, value) => {
    if (value.trim()) {
      setFormData(prevFormData => ({
        ...prevFormData,
        [property]: [...prevFormData[property], value.trim()],
      }));
    }
  };

  const editItem = (property, index, value) => {
    if (value.trim()) {
      setFormData(prevFormData => {
        const updatedItems = [...prevFormData[property]];
        updatedItems[index] = value.trim();
        return {
          ...prevFormData,
          [property]: updatedItems,
        };
      });
    }
  };

  const deleteItem = (property, index) => {
    setFormData(prevFormData => ({
      ...prevFormData,
      [property]: prevFormData[property].filter((_, i) => i !== index),
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return {
    formData,
    setFormData,
    addItem,
    editItem,
    deleteItem,
    handleChange,
  };
};
