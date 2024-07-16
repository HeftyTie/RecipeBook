import { useState } from 'react';

export const useFormData = (initialData) => {
  const [formData, setFormData] = useState(initialData || {
    author: '',
    passkey: '',
    header: '',
    prep_time: '',
    cook_time: '',
    total_time: '',
    servings: '',
    equipment: [],
    ingredients: [],
    recipe: []
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
    let parsedValue = value;
  
    const integerFields = ['prep_time', 'cook_time', 'total_time', 'servings'];
  
    if (integerFields.includes(name)) {
      parsedValue = parseInt(value, 10);
      if (isNaN(parsedValue)) {
        parsedValue = value;
      }
    }
  
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: parsedValue,
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
