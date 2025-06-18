export class StudentComponent extends ViewComponent {

	isPublic = true;

	name;

	/** @Prop */
	showcontent = true;

	showHideContent(){
		this.showcontent = !this.showcontent;
	}

}