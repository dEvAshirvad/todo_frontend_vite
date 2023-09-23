import React, { useRef, useState } from "react";

function TodoComponent({ todoTitle, todo, setTodo, todoList, index }) {
	const [checked, setChecked] = useState(false);
	// console.log(checked);
	async function handleUpdate() {
		var myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/json");

		var raw = JSON.stringify({
			_id: todo._id,
			todoTitle: todo.todoTitle,
			checked: !todo.checked,
		});
		console.log(!todo.checked);
		console.log(!todo.checked);

		var requestOptions = {
			method: "PUT",
			headers: myHeaders,
			body: raw,
			redirect: "follow",
		};

		const updateTodo = await fetch(
			"http://localhost:3000/api/v1/todo",
			requestOptions
		);
		const response = await updateTodo.json();
		const arr = todoList.filter((e) => e._id !== todo._id);
		const newArr = [...arr.slice(0, index), response.data, ...arr.slice(index)];
		console.log(newArr);
		setTodo(newArr);
	}
	return (
		<li className="w-full py-3 px-6 flex border rounded-sm bg-white gap-3">
			<input
				type="checkbox"
				checked={todo.checked}
				onChange={() => handleUpdate()}
			/>
			<h2 className={todo.checked ? "line-through" : ""}>{todoTitle}</h2>
		</li>
	);
}

export default TodoComponent;
