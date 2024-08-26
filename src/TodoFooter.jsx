function TodoFooter({todos, onClearComplet}){
   const completedSize= todos.filter((todo) =>todo.isCompleted).length;
    return (
<div>
    <span> {completedSize}/{todos.length} Camplitid</span>
    <button onClick={onClearComplet}>clim Camplitid </button>
</div>
    )
}
export default TodoFooter;