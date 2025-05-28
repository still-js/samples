import { ViewComponent } from "../../../@still/component/super/ViewComponent.js";

export class Child1 extends ViewComponent {

	isPublic = true;

	childCounter = 10;

	template = `
		<div (click)="updateCounter()">
			@childCounter
		</div>
	`;

	updateCounter(){
		this.childCounter = this.childCounter.value + 1;
	}
}