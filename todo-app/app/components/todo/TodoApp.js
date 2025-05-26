import { ViewComponent } from "../../../@still/component/super/ViewComponent.js";
import { TaskList } from "./TaskList.js";

export class TodoApp extends ViewComponent {

	isPublic = true;

	name;
	author;

	/**
	 * @Proxy
	 * @type { TaskList }
	 */
	tListProxy;

	addTaskToChild(){
		this.tListProxy.addTask(this.name.value, this.author.value);
	}
}