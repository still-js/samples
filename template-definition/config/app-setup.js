import { StillAppMixin } from "../@still/component/super/AppMixin.js";
import { Components, SpotValue } from "../@still/setup/components.js";
import { AlternateMenu } from "../app/components/parts/AlternateMenu.js";
import { HomeComponent } from "../app/home/HomeComponent.js";
import { AppTemplate } from "./app-template.js";

export class StillAppSetup extends StillAppMixin(Components) {

    constructor() {
        super();
        this.setHomeComponent(HomeComponent);

        //this.topPartSpot = new SpotValue(AlternateMenu, { firstAlternateProp: 'Some valuu from App' });

    }

    async init() {
        return await AppTemplate.newApp();
    }

}
