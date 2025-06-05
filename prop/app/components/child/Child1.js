import { ViewComponent } from "../../../@still/component/super/ViewComponent.js";

export class Child1 extends ViewComponent {

	isPublic = true;

	childCounter = 10;

	/** @Prop */
	contentForChild = 'Property value to child';

	/** @Prop */ showContent = false;

	template = `
		<div (click)="updateCounter()">
			@childCounter
		</div>
		<div (showIf)="self.showContent">
			@contentForChild
		</div>
	`;

	updateCounter(){
		this.childCounter = this.childCounter.value + 1;
		this.contentForChild = 'New value';
		this.showContent = !this.showContent;
	}
}