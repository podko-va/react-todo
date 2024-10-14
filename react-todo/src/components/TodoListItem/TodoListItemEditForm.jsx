
import PropTypes from  "prop-types";
import style from "./TodoListItem.module.css";

const ItemEditForm = ( {todo, newTitle, setNewTitle, updateData, setEditing } ) => {
    
    const editItem = (event) => {
        const editedTitle = event.target.value.trimStart();
        setNewTitle(editedTitle);
    };

    const handleEditItem = (event) => {
        event.preventDefault();
        if (!newTitle) {
            alert('Todo title cannot be empty');
        } else {
            if (newTitle.trim() === '') {
                alert('Todo title cannot be empty');
                return;
              }
            if (newTitle.length > 100) {
                alert('Todo title cannot exceed 100 characters');
                return;
            }
            if (newTitle.length < 3) {
              alert('The Todo title must be longer');
              return;
            }
            setEditing(true);
            updateData(newTitle, todo.id);
        }
    };

    return (
        <form className={style.editForm} onSubmit={handleEditItem}>
          <input
            className={style.inputField}
            value={newTitle}
            onChange={editItem}
            placeholder="Edit title"
          />
          <button className={style.saveButton} type="submit">Save</button>
        </form>
      );
}

export default ItemEditForm;

ItemEditForm.propTypes = {
    todo: PropTypes.object,
    newTitle: PropTypes.string,
    setNewTitle: PropTypes.func,
    updateData: PropTypes.func,
    setEditing: PropTypes.func,
}
