import { ViewComponent } from "../../../@still/component/super/ViewComponent.js";
import { Router } from "../../../@still/routing/router.js";
import { PersonForm } from "./PersonForm.js";

export class PersonList extends ViewComponent {

	isPublic = true;
	template = `
	<div>
		Person Lit component navigation
		<a href="#" (click)="goto('HomeComponent', null, true)">Home Page</a>
		|
		<a href="#" (click)="takeMeToFOrm()">Person Form</a>
	</div>
	`;

	stAfterInit(){
		const data = Router.data(this);
		console.log('Data from personform is: ',data);
		
	}

	takeMeToFOrm(){

		Router.goto(PersonForm, {
			data: {
				name: 'Hiself', age: 10
			}
		});

	}
}