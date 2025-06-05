import { ViewComponent } from "../../@still/component/super/ViewComponent.js";
import { State } from "../../@still/component/type/ComponentType.js";
import { Child1 } from "../components/child/Child1.js";

export class HomeComponent extends ViewComponent {

    isPublic = true;

    /** @type { State<String> } */
    personName = 'Nakassony';
    /** @type { State<Number> } */
    counter = 0;

    parentData = {
        name: 'Nakassony', surname: 'Bernardo'
    };

    /** 
     * @Proxy 
     * @type { Child1 } */
    child1proxy;

    template = `
        <div>@personName</div>
        <div (click)="counterIncrement()">Click count: @counter</div>
        <st-element 
        showContent="true"
            component="Child1" 
            proxy="child1proxy"
            contentForChild="Some value"
            ></st-element>
    `;

    stAfterInit(){

        this.counter.onChange(newValue => {
            console.log(`THE NEW COUNTER VALUE IS: `, newValue);
        });

        this.child1proxy.on('load', () => {
            this.child1proxy.childCounter.onChange(newChildValu => {
                console.log(`NEW VALUES FROM CHILD COUNTER IS: `, newChildValu);
            });
        });

    }

    counterIncrement(){
        this.counter = this.counter.value + 1;
        this.personName = 'New name';
    }

}