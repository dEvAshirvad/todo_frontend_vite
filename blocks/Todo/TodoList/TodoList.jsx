import React from "react";
import TodoComponent from "./TodoComponent";

function TodoList({ todo, setTodo }) {
	return (
		<section className="mt-8">
			<div className="container">
				<ul className="">
					{todo.map((e, i) => (
						<TodoComponent
							key={i}
							todoTitle={e.todoTitle}
							todo={e}
							todoList={todo}
							setTodo={setTodo}
							index={i}
						/>
					))}
				</ul>
			</div>
		</section>
	);
}

export default TodoList;
