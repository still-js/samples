import { ViewComponent } from "../../@still/component/super/ViewComponent.js";

export class HomeComponent extends ViewComponent {

    isPublic = true;
    template = `
        <div>
    Home component
        </div>
    `;

    constructor() {
        super();
    }

}