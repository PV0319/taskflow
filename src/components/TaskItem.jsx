function TaskItem({task}){
    return (
        <li style={{textDecoration:task.done?"line-through":"none"}}>{task.text}</li>
    )
}
export default TaskItem;