import { ViewComponent } from "../../@still/component/super/ViewComponent.js";

export class StudentList extends ViewComponent {

	isPublic = true;

	id;
	name;
	class;

	template = `
		<span> Id: @id - Name: @name - is applying for @class lesso </span>
		<br>
	`;
}