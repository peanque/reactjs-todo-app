import React, { useState, ChangeEvent, FormEvent } from "react";
import styled from "@emotion/styled";

interface AddTodoProps {
    addTask: (Text: string) => void
}

const Button = styled.button({
    padding: "8px 10px",
    backgroundColor: "blue",
    color: "white",
    border: "none",
    cursor: "pointer"
});

const Input = styled.input({
    width: "100%",
    padding: "25px",
    fontSize: "21px",
    border: "1px solid #C0C0C0",
    borderRadius: "16px",
    color: "GrayText"
});

const FormContainer = styled.div({
    display: "flex",
    columnGap: "20px",
    width: "100%",
    marginTop: "20px"
});

export const AddTodo: React.FC<AddTodoProps> = ({ addTask }) => {
    const [input, setInput] = useState('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value)
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (input.trim()) {
            addTask(input.trim());
            setInput('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <FormContainer>
                <Input 
                    type="text" 
                    value={input}
                    onChange={handleChange}
                    placeholder='Add a new task'
                />
                <Button type="submit">Add Task</Button>
            </FormContainer>
        </form>
    );
}; 