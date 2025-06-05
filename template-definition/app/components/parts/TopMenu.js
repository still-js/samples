import { ViewComponent } from "../../../@still/component/super/ViewComponent.js";

export class TopMenu extends ViewComponent {

	isPublic = true;

	/** @Prop */
	firstMenu;

	/** @Prop */
	showMenu;

	template = `
		<div (showIf)="self.showMenu">
			<a href="#" (click)="goto('HomeComponent')">@firstMenu</a>
			|
			<a href="#" (click)="goto('Component1')">Component1</a>
						|
			<a href="#" (click)="goto('Component2')">Second component</a>
		</div>
	`;
}