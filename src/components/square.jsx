export const Square = ({ children, isSelected, updateBoard, index }) => {
    const className = `square ${isSelected ? 'is-selected' : ''}`;
    const handleClick = () => {
      updateBoard(index);
    };
  
    return (
      <div onClick={handleClick} className={className}>
        {children} {/* Asegúrate de que los niños (children) están aquí */}
      </div>
    );
  };