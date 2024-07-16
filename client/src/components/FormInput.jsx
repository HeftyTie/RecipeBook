import React, { useState } from "react";

const FormInput = ({ formDataName, handlers }) => {
  const [inputValue, setInputValue] = useState('');
  const [editIndex, setEditIndex] = useState(-1);

  const { formData, addItem, editItem, deleteItem } = handlers;

  const handleEdit = (index) => {
    setEditIndex(index);
    setInputValue(formData[index]);
  };

  const handleUpdate = () => {
    if (inputValue.trim()) {
      if (editIndex !== -1) {
        editItem(editIndex, inputValue);
      } else {
        addItem(inputValue);
      }
      setInputValue('');
      setEditIndex(-1);
    }
  };

  const handleDelete = (index) => {
    deleteItem(index);
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
          onChange={(e) => setInputValue(e.target.value)}
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
