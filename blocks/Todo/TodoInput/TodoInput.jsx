import React, { useRef } from "react";

function TodoInput({ setTodo, todo }) {
	const inputRef = useRef(null);

	async function handleSubmit() {
		createTodo(inputRef.current.value);

		async function createTodo(todoTitle) {
			console.log(todoTitle);
			var myHeaders = new Headers();
			myHeaders.append("Content-Type", "application/json");

			var raw = JSON.stringify({
				todoTitle: todoTitle,
			});

			var requestOptions = {
				method: "POST",
				headers: myHeaders,
				body: raw,
				redirect: "follow",
			};

			const resTodo = await fetch(
				"http://localhost:3000/api/v1/todo",
				requestOptions
			);

			const data = await resTodo.json();
			setTodo([...todo, data.data]);
		}

		inputRef.current.value = "";
	}
	return (
		<div className="">
			<div className="container">
				<input
					onKeyDown={(e) => {
						if (e.key === "Enter") {
							handleSubmit();
						}
					}}
					ref={inputRef}
					type="text"
					placeholder="Create a new todo..."
					className="w-full py-3 px-6 rounded-sm"
				/>
			</div>
		</div>
	);
}

export default TodoInput;
