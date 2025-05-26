import { ViewComponent } from "../../../@still/component/super/ViewComponent.js";

export class TaskList extends ViewComponent {

	isPublic = true;

	taskList = [
		{ 
			taskName: 'First Task',
			taskAuthor: 'User 1'
		},
		{ 
			taskName: 'Another Task',
			taskAuthor: 'User 3',
		}
	]

	template = `
	
		<button (click)="addTask()">Add Task</button>
		<table border="1">
			<tbody (forEach)="taskList">
				<tr each="item">
					<td>{item.taskName}</td>
					<td>{item.taskAuthor}</td>
				</tr>
			</tbody>
		</table>
	`;

	addTask(taskName = 'New Task', taskAuthor = 'User 9'){
		/** @type { Array } */
		const list = this.taskList.value;

		list.push({ 
			taskName,
			taskAuthor
		});

		this.taskList = list;
		
	}

}