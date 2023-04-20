import './index.css'

const TodoItem = props => {
  const {details, deleteUser} = props
  const {title, id} = details

  const onClick = () => {
    deleteUser(id)
  }

  return (
    <li>
      <div className="todoItem_container">
        <p>{title}</p>
        <button type="button" onClick={onClick}>
          Delete
        </button>
      </div>
    </li>
  )
}
export default TodoItem
