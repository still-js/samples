import { ViewComponent } from "../../../@still/component/super/ViewComponent.js";

export class AlternateMenu extends ViewComponent {

	isPublic = true;

	/** @Prop */
	firstAlternateProp;

	template = `
		<h1 class="still-fresh-generated-cmp">
			@firstAlternateProp AlternateMenu  auto generated content
		</h1>
	`;
}