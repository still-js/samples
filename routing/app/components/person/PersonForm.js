import { ViewComponent } from "../../../@still/component/super/ViewComponent.js";
import { Router } from "../../../@still/routing/router.js";

export class PersonForm extends ViewComponent {

	isPublic = true;

	dataToList = {
		country: 'Canada',
		city: 'VAncouver'
	}

	template = `
		<div>
			More content
			<a href="#" (click)="goto('HomeComponent')">Home Page</a>
			|
			<a href="#" (click)="goto('PersonList', self.dataToList)">Person List</a>
		</div>
	`;

	stAfterInit(){

		console.log(Router.data(this));

	}
}