import { ViewComponent } from "../../@still/component/super/ViewComponent.js";

export class HomeComponent extends ViewComponent {

    isPublic = true;

    studentDs = [
        { id: 1, name: 'Mario', class: 'Math' },
        { id: 2, name: 'Ana', class: 'Biology' },
        { id: 3, name: 'Micheal', class: 'Math' },
        { id: 4, name: 'Kate', class: 'English' },
        { id: 5, name: 'New Kate', class: 'POrtuguese' },
    ];

    selectedSudent;

    template = `
        <div>
            this is selected student @selectedSudent
            <span (forEach)="studentDs">
                <div each="item">
                    {item.id} - {item.name}
                </div>
            </span>
        </div>

        <form>
            <select (forEach)="studentDs" (value)="selectedSudent">
                <option each="item" value="{item.id}">{item.name}</option>
            </select>
        </form>

        <span (forEach)="studentDs">
            <st-element component="StudentList" each="item"></st-element>
        </span>
    `;

    constructor() {
        super();
    }

}