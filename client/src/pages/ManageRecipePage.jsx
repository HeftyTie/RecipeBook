import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import FormInput from "@components/FormInput"
import { useFormData } from '@hooks/useFormData';
import { useGetRequest, usePostRequest, usePutRequest } from '@hooks/requests';

function ManageRecipe(){
  const { id } = useParams();
  const { data, loading } = useGetRequest( `api/recipe/${id}`);

  const navigate  = useNavigate();

  const { formData, setFormData, addItem, editItem, deleteItem, handleChange } = useFormData();

  const [buttonText, setButtonText] = useState("Add");
  const [equipmentInput, setEquipmentInput] = useState('');
  const [ingredientInput, setIngredientInput] = useState('');
  const [stepInput, setStepInput] = useState('');
  
  useEffect(() => {
    if (id && data) {
      setFormData({
        author: data.author || '',
        passkey: '',
        header: data.header || '',
        prep_time: data.prep_time || '',
        cook_time: data.cook_time || '',
        total_time: data.total_time || '',
        servings: data.servings || '',
        equipment: data.equipment || [],
        ingredients: data.ingredients || [],
        recipe: data.recipe || []
      });
      setButtonText("Update");
    } 
  }, [data]);

  useEffect(() => {
    if (!loading && !data && id) {
      navigate("/not-found");
    }
  }, [loading, data, id]);

  const { postRecipe } =  usePostRequest();
  const { putRecipe } = usePutRequest();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    let response;
    if (id) {
      response = await putRecipe({ ...formData, id });
    } else {
      response = await postRecipe(formData);
    }
    if (response.success) {
      alert(response.message);
      navigate('/');
    } else {
      alert(response.message);
    }
  };

  const equipmentHandlers = {
    formData: formData.equipment || [],
    addItem: (item) => addItem('equipment', item),
    editItem: (index, item) => editItem('equipment', index, item),
    deleteItem: (index) => deleteItem('equipment', index)
  };

  const ingredientHandlers = {
    formData: formData.ingredients || [],
    addItem: (item) => addItem('ingredients', item),
    editItem: (index, item) => editItem('ingredients', index, item),
    deleteItem: (index) => deleteItem('ingredients', index)
  };

  const recipeHandlers = {
    formData: formData.recipe || [],
    addItem: (item) => addItem('recipe', item),
    editItem: (index, item) => editItem('recipe', index, item),
    deleteItem: (index) => deleteItem('recipe', index)
  };
  
  if (loading) {
    return <p className="loading">Loading...</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center gap-3 form-input-container">
      <input type="text" name="header" value={formData.header} onChange={handleChange} placeholder="Recipe Name" />
      <div className="flex flex-wrap justify-center gap-2">
        <input type="text" name="author" value={formData.author} onChange={handleChange} placeholder="Username" />
        <input type="text" name="passkey" value={formData.passkey} onChange={handleChange} placeholder="Passkey" />
      </div>
      
      <div className="flex flex-wrap justify-center gap-2 my-10">
        <input className="w-5/12 md:w-1/4" type="number" name="prep_time" value={formData.prep_time} onChange={handleChange} placeholder="Prep Time (mins)" />          
        <input className="w-5/12 md:w-1/4" type="number" name="cook_time" value={formData.cook_time} onChange={handleChange} placeholder="Cook Time (mins)" />  
        <input className="w-5/12 md:w-1/4" type="number" name="total_time" value={formData.total_time} onChange={handleChange} placeholder="Total Time (mins)" />  
        <input className="w-5/12 md:w-1/4" type="number" name="servings" value={formData.servings} onChange={handleChange} placeholder="Servings" />
      </div>

      <FormInput formDataName="Equipment" handlers={equipmentHandlers} />
      <FormInput formDataName="Ingredients" handlers={ingredientHandlers} />
      <FormInput formDataName="Steps" handlers={recipeHandlers} />

      <div className="flex gap-3 mt-5">
        <button type="submit" className="button !bg-green-600 hover:!bg-green-800">
          {buttonText}
        </button>
        <Link to="/" className="button !bg-red-600 hover:!bg-red-800">
          Cancel
        </Link>
      </div>
    </form>
  );
}

export default ManageRecipe;