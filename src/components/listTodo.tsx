import React, { FC } from "react";
import styled from "@emotion/styled";
import { TrashIcon } from "@heroicons/react/24/outline";

interface Task {
  id: string;
  text: string;
  completed: boolean;
}

interface ListTodoProps {
  todo: Task[];
  toggleTaskCompletion: (taskId: string) => void;
  deleteTask: (taskId: string) => void; 
}

const ListItem = styled.li({
  display: "flex",
  alignItems: "center",
  padding: "10px",
  listStyle: "none",
  border: "1px solid #c0c0c0",
  textAlign: "left",
  justifyContent: "space-between"
});

const Checkbox = styled.input({
    marginRight: "10px",
    width: "20px",
    height: "20px",
    appearance: "none",          /* Removes default styling */
    border: "2px solid #B0B0B0",    /* White border */
    backgroundColor: "#fff",     /* Black background */
    borderRadius: "3px",         /* Rounded corners if desired */
    cursor: "pointer",
    
    /* Checked state styles */
    "&:checked": {
      backgroundColor: "#fff",   /* White background for checked state */
      borderColor: "#B0B0B0",
      backgroundImage: "url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22black%22 stroke-width=%222%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22 class=%22feather feather-check%22%3E%3Cpolyline points=%2220 6 9 17 4 12%22/%3E%3C/svg%3E')", /* SVG checkmark */
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "contain",
    },
});

const ListContainer = styled.ul({
    display: "flex",
    flexFlow: "column wrap",
    justifyContent: "space-evenly",
    gap: "10px",
    width: "100%",
    padding: "0px",
    marginTop: "50px"
});


export const ListTodo: FC<ListTodoProps> = ({ todo, toggleTaskCompletion, deleteTask }) => {
  return (
    <ListContainer>
      {todo.map((task) => (
        <ListItem key={task.id} className="task">
          <div style={{ display: "flex" }}>
            <Checkbox
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTaskCompletion(task.id)}
            />
            <span>{task.text}</span>
          </div>
          <TrashIcon 
            style={{ 
              width: '24px', 
              height: '24px', 
              cursor: 'pointer', 
              fill: '#FFF'}} 
              className="trash-icon"
              onClick={() => deleteTask(task.id) }
          />
        </ListItem>
      ))}
    </ListContainer>
  );
};
