
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
            throw new Error(`Error: create new title`);
        } else {
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
