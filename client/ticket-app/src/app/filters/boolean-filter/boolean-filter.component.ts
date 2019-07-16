import { Component, OnInit, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
	selector: 'app-boolean-filter',
	templateUrl: './boolean-filter.component.html',
	styleUrls: ['./boolean-filter.component.scss']
})
export class BooleanFilterComponent implements OnInit {
	@Input('query-data-subject') queryDataSubject: BehaviorSubject<any>;
	@Input('data-map') dataMap: Map<string, string>;
	@Input() column: string;

	constructor() {}

	ngOnInit() {}

	queryByBoolean(value: boolean) {
		this.queryDataSubject.next({value: value, column: this.column});
	}
}
