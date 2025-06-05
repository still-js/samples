import { ViewComponent } from "../../@still/component/super/ViewComponent.js";
import { DummyController } from "../controller/DummyController.js";

export class AnotherComponent extends ViewComponent {

	isPublic = true;

	/** 
	 * @Controller
	 * @Path controller/
	 * @type { DummyController }
	 * */
	mainController;

	anyData;

	template = `
		<h1 class="still-fresh-generated-cmp">
			AnotherComponent  auto generated content @anyData
		</h1>
		<div onclick="controller.controllerMethod1()">Call from controller</div>
	`;

	setAddAnyData(htmlContent){
		this.anyData = this.parseEvents(htmlContent);
	}

	callParentImpl(){
		console.log(`THIS IS THE RECIEVER IMPLEMENTATION`);
		
	}
}