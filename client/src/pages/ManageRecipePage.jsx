import { Link, useParams } from 'react-router-dom';
import { useState } from "react";
import { useFormData } from '@hooks/useFormData'
import { useRedirectIfEmpty } from '@hooks/useRedirectIfEmpty';

import { useGetRequest } from '@hooks/requests';
import FormInput from '@components/FormInput';

const AddRecipe = () => {
  const { id } = useParams();
  const { data: recipe, loading } = useGetRequest(`api/recipe/${id}`);

  useRedirectIfEmpty(recipe, loading);

  const [equipmentInput, handleEquipment] = useState('');
  const [ingredientInput, handleIngredient] = useState('');
  const [stepInput, handleStep] = useState('');

  const { formData, setFormData, addItem, editItem, deleteItem, handleChange } = useFormData(recipe);
  
  const handleSubmit = async (e) => {
    e.preventDefault(); 
  };

  if (loading) {
    return <p className="loading">Loading...</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center gap-3 form-input-container">
      <input className="w-10/12" type="text" name="header" value={formData.header} onChange={handleChange} placeholder="Recipe Name" />

      <div className="flex flex-wrap justify-center gap-2">
        <input className="w-5/12" type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Username" />
        <input className="w-5/12" type="text" name="passkey" value={formData.passkey} onChange={handleChange} placeholder="Passkey" />
      </div>

      <div className="flex flex-wrap justify-center gap-2 my-10">
        <input className="w-5/12 md:w-1/4" type="number" name="prepTime" value={formData.prepTime} onChange={handleChange} placeholder="Prep Time (mins)" />
        <input className="w-5/12 md:w-1/4" type="number" name="cookTime" value={formData.cookTime} onChange={handleChange} placeholder="Cook Time (mins)" />
        <input className="w-5/12 md:w-1/4" type="number" name="totalTime" value={formData.totalTime} onChange={handleChange} placeholder="Total Time (mins)" />
        <input className="w-5/12 md:w-1/4" type="text" name="servings" value={formData.servings} onChange={handleChange} placeholder="Servings (mins)" />
      </div>

      <FormInput
        formData={formData.equipment}
        formDataName="Equipment"
        inputValue={equipmentInput}
        onInputChange={handleEquipment}
        onAddItem={(value) => addItem('equipment', value)}
        onEditItem={(index, value) => editItem('equipment', index, value)}
        onDeleteItem={(index) => deleteItem('equipment', index)}
      />

      <FormInput
        formData={formData.ingredients}
        formDataName="Ingredient"
        inputValue={ingredientInput}
        onInputChange={handleIngredient}
        onAddItem={(value) => addItem('ingredients', value)}
        onEditItem={(index, value) => editItem('ingredients', index, value)}
        onDeleteItem={(index) => deleteItem('ingredients', index)}
      />

      <FormInput
        formData={formData.steps}
        formDataName="Step"
        inputValue={stepInput}
        onInputChange={handleStep}
        onAddItem={(value) => addItem('steps', value)}
        onEditItem={(index, value) => editItem('steps', index, value)}
        onDeleteItem={(index) => deleteItem('steps', index)}
      />

      <div className="flex gap-3 mt-5">
        <button type="submit" className="button !bg-green-600 hover:!bg-green-800">
          Save
        </button>
        <Link to="/" className="button !bg-red-600 hover:!bg-red-800">
          Cancel
        </Link>
      </div>
    </form>
  );
};

export default AddRecipe;