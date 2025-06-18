import { ViewComponent } from "../../../@still/component/super/ViewComponent.js";
import { State } from "../../../@still/component/type/ComponentType.js";
import { Router } from "../../../@still/routing/router.js";

export class NovoComponent extends ViewComponent {

	/** @Prop */
	dados = { nome: 'Nakassony' };

	/** @type { State<String> } */
	nomes;

	isPublic = true;
	template = `
		<h1 class="still-fresh-generated-cmp">
			NovoComponent  auto generated content @nomes
			<form>
				<input (value)="nomes">
			</form>
		</h1>
		<button (click)="toHome()">
		Go to home
		</button>		
		<button (click)="goto('HomeComponent', self.dados)">
		Go to home 2
		</button>
	`;

	stOnRender(){
		console.log(`IT WILL LOAD`);
		
	}

	stAfterInit(){

		console.log(`COMPONENT LOADED`);
		

		this.nomes.onChange(value => {
			this.dados.nome = value;
			console.log(`Nov valor: `, value);
			
		});
	}

	toHome(){
		Router.goto('HomeComponent', { evt: { containerId: this.loneCntrId }, data: 'New data' })
	}

}