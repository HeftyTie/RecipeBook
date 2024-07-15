export const useImageUpload = (setFormData) => {
  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      setFormData(prevFormData => ({
        ...prevFormData,
        image: URL.createObjectURL(file),
      }));
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setFormData(prevFormData => ({
        ...prevFormData,
        image: URL.createObjectURL(file),
      }));
    }
  };

  const handleRemoveImage = () => {
    setFormData(prevFormData => ({
      ...prevFormData,
      image: null,
    }));
    const input = document.getElementById('imageUploadInput');
    if (input) {
      input.value = '';
    }
  };

  return {
    handleDrop,
    handleImageUpload,
    handleRemoveImage,
  };
};