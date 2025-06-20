import { Component } from '@angular/core';
import { NgMoringaTableModule } from 'ng-moringa-table';


@Component({
  selector: 'app-root',
  imports: [NgMoringaTableModule],
  templateUrl: './app.component.html',

})
export class AppComponent {
  tableData = [
    { name: 'Apple', price: 100 },
    { name: 'Orange', price: 80 },
  ];

  tableColumns = [
    { key: 'name', label: 'Fruit Name' },
    { key: 'price', label: 'Price' },
  ];
}
