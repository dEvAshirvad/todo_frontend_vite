import React, { useEffect, useState } from "react";
import TodoInput from "./TodoInput/TodoInput";
import TodoList from "./TodoList/TodoList";

function TodoBlock() {
	const [todo, setTodo] = useState([]);
	console.log(todo);
	useEffect(() => {
		async function getTodo() {
			try {
				var requestOptions = {
					method: "GET",
					redirect: "follow",
				};

				const todolist = await fetch(
					"http://localhost:3000/api/v1/todo",
					requestOptions
				);
				const resTodoList = await todolist.json();
				console.log(resTodoList);
				setTodo(resTodoList.data);
				return resTodoList;
			} catch (error) {
				return error.message;
			}
		}

		getTodo();
	}, []);

	return (
		<div className="relative -top-36">
			<TodoInput setTodo={setTodo} todo={todo} />
			<TodoList todo={todo} setTodo={setTodo} />
		</div>
	);
}

export default TodoBlock;
