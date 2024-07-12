function Button({ buttonIcon, event, isHidden }) {
    const Icon = buttonIcon; 
  
    return (
      <button
        className={`hidden h-10 my-auto ${isHidden ? 'md:hidden' : 'md:flex'}`}
        onClick={event}
      >
        <Icon size={30} />
      </button>
    );
  }

export default Button;