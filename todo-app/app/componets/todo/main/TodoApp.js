import { ViewComponent } from "../../../../@still/component/super/ViewComponent.js";
import { TaskList } from "../task/TaskList.js";

export class TodoApp extends ViewComponent {

	isPublic = true;

	taskAuthor;
	taskTitle;
	taskCounter = 0;

	/**
	 * @Proxy
	 * @type { TaskList } */
	tListProxy;

	addTaskToList(){
		this.tListProxy.addTask(this.taskTitle.value, this.taskAuthor.value);
		this.taskAuthor = '';
		this.taskTitle = '';
	}

	removeTaskFromList(id){
		const list = this.tListProxy.taskList.value;
		this.tListProxy.taskList = list.filter(el => el.id != id);
		this.taskCounter = this.taskCounter.value - 1;
	}

}