import React, { useState } from "react";

const FormInput = ({ formData, formDataName, inputValue, onInputChange, onAddItem, onEditItem, onDeleteItem }) => {
  const [editIndex, setEditIndex] = useState(-1); 

  const handleEdit = (index) => {
    setEditIndex(index); 
    onInputChange(formData[index]); 
  };

  const handleUpdate = () => {
    if (inputValue.trim()) {
      if (editIndex !== -1) {
        onEditItem(editIndex, inputValue); 
      } else {
        onAddItem(inputValue); 
      }
      onInputChange(''); 
      setEditIndex(-1); 
    }
  };

  const handleDelete = (index) => {
    onDeleteItem(index); 
    setEditIndex(-1); 
  };

  return (
    <>
      {formData.length > 0 && (
        <ul className="flex flex-col items-center gap-3 m-3">
          {formData.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              {index + 1}&#41; {item}
              <button type="button" className="button !bg-green-600 hover:!bg-green-800" onClick={() => handleEdit(index)}>Edit</button>
              <button type="button" className="button !bg-red-600 hover:!bg-red-800" onClick={() => handleDelete(index)}>Delete</button>
            </li>
          ))}
        </ul>
      )}

      <div className="flex justify-center gap-2">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => onInputChange(e.target.value)}
          placeholder={formDataName}
          className="w-[60vw]"
        />
        <button
          className="button"
          type="button"
          onClick={handleUpdate}
        >
          {editIndex === -1 ? 'Add' : 'Update'} 
        </button>
      </div>
    </>
  );
};

export default FormInput;
