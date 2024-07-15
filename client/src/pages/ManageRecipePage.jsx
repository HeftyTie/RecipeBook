import { CiCircleRemove } from "react-icons/ci";
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useState } from "react";
import { useFormData } from '@hooks/useFormData'
import { useImageUpload } from '@hooks/useImageUpload'
import { useRedirectIfEmpty } from '@hooks/useRedirectIfEmpty';
import { useAPI } from '@hooks/useGetAPI';

import FormInput from '@components/FormInput';

const AddRecipe = () => {
  const navigate = useNavigate();

  const [equipmentInput, handleEquipment] = useState('');
  const [ingredientInput, handleIngredient] = useState('');
  const [stepInput, handleStep] = useState('');

  const { id } = useParams();
  const { data: recipeData, loading } = useAPI(`manage-recipe/${id}`, 'GET');

  const { formData, setFormData, addItem, editItem, deleteItem, handleChange } = useFormData(recipeData);
  const { handleDrop, handleImageUpload, handleRemoveImage } = useImageUpload(setFormData);

  if (id) {
    useRedirectIfEmpty(recipeData);
  }

  if (loading) {
    return <p className="loading">Loading...</p>;
  }

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    
    let method;
    if (id){
      method = 'PUT'
    } else{
      method = 'POST'
    }

    const requestOptions = {
      method: method,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    };

    try {
      const response = await fetch('/api/manage-recipe', requestOptions);
      if (response.ok) {
        navigate(`/recipe/${id}`)
      } else {
        alert(`Invalid Passkey`);
      }
    } catch (error) {
      alert('An error occurred. Please try again.');
    }
  };
  

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center gap-3 form-input-container">
      <div className="flex justify-center w-11/12 p-5" id="imageContainer" onDrop={handleDrop} onDragOver={(e) => e.preventDefault()}>
        <input type="file" name="image" accept="image/*" onChange={handleImageUpload} id="imageUploadInput" hidden />
        {formData.image ? (
          <div className="relative">
            <CiCircleRemove className="absolute text-red-600 cursor-pointer top-1 right-1" onClick={handleRemoveImage} size={50} />
            <img src={formData.image} alt="Uploaded Image" className="object-cover rounded-md aspect-square" width={300} height={300} />
          </div>
        ) : (
          <label htmlFor="imageUploadInput" className="button">
            Choose Image
          </label>
        )}
      </div>

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