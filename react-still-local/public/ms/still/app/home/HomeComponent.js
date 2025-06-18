import { ViewComponent } from "../../@still/component/super/ViewComponent.js";
import { State } from "../../@still/component/type/ComponentType.js";
import { Router } from "../../@still/routing/router.js";

export class HomeComponent extends ViewComponent {

    isPublic = true;

    prop1;

    /** @Prop */
    showcontent = true;

    /** @Prop */
    notifyreact = true;
    
    stateVar1 = 'Check if react can see it';

    stAfterInit(){

        const dados = Router.data(this);
        if(dados){
            console.log(`DATA SENT WAS: `, dados);
        }else console.log(`NO DATA SENT`);

        setTimeout(() => {
            this.stateVar1.onChange(val => {
                if(this.notifyreact){
                    console.log(`ITSELF NOTIFICATION`);
                }
            });
        });

    }
    
    hide(){
        this.showcontent = !this.showcontent;
    }

}