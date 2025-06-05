import { ViewComponent } from "../../../../@still/component/super/ViewComponent.js";
import { State } from "../../../../@still/component/type/ComponentType.js";
import { TodoApp } from "../main/TodoApp.js";

export class TaskList extends ViewComponent {

	isPublic = true;
	
	/** @type { State<Array> } */
	taskList = [];

	/** @type { TodoApp } */
	$parent;


	addTask(title, author){

		const list = this.taskList.value;
		list.push({ title, author, id: list.length + 1 });
		this.taskList = list;
		this.$parent.taskCounter = this.$parent.taskCounter.value + 1;
		
	}

	removeTask(id){}

}