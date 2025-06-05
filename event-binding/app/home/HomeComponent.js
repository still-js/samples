import { ViewComponent } from "../../@still/component/super/ViewComponent.js";
import { Router } from "../../@still/routing/router.js";
import { AnotherComponent } from "../components/AnotherComponent.js";

export class HomeComponent extends ViewComponent {

    isPublic = true;

    /** @Proxy @type { AnotherComponent } */
    anyProxyName;

    /** @Prop */
    listenMouseMove = (event) => console.log(event.clientY);
    

    template = `
        <st-element component="AnotherComponent" proxy="anyProxyName"></st-element>
        <div class="itWorked still-worked-home-container">
            <div>
                <img 
                    class="still-fw-logo"
                    src="@still/img/logo-no-bg.png"
                />
            </div>
            <h2 class="still-fw-before-logo" (click)="addAnyData(this)">Still.js Framework</h2>
            <h1 onclick="component.myEventName(this)">It Worked with additional content</h1>
            <p class="still-home-orientation-text">
                This is the HomeComponent, go to 
                <b (click)="goto('AnotherComponent')">app/home/HomeComponent&#46;js</b> path<br>
                and do you adjustments accordingly
            </p>
        </div>
    `;

    stAfterInit(){
        document.addEventListener('mousemove', this.listenMouseMove);
    }

    stOnUnload(){
        document.removeEventListener('mousemove', this.listenMouseMove, false);
    }

    myEventName(event){
        console.log(`Now is with prefic cCOMPONETN FROM OBJECT: `, event.innerHTML);
    }

    callParentImpl(){
        console.log(`---- ANOTEHR FORM SOURCE ----`);
        
    }

    addAnyData(event){

        console.log(`THIS IS FROM DIRECTIVE FROM OBJECT: `, event.innerHTML);
        

        this.anyProxyName.setAddAnyData(`
            <a href="#" onclick="self.callParentImpl()">From parent</a> |
            <a href="#" onclick="inner.callParentImpl()">Internal Impl</a>
        `);
    }

}