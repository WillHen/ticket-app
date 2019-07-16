import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { BehaviorSubject } from 'rxjs';
import {
	MatDatepickerInputEvent,
	MatDatepicker
} from '@angular/material/datepicker';

import { Columns } from '../constants/columns';

@Component({
	selector: 'app-table',
	templateUrl: './table.component.html',
	styleUrls: ['./table.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent implements OnInit {
	@Input('table-data') tableData: MatTableDataSource<any[]>;
	@Input('displayed-columns') displayedColumns: string[];
	@Input('data-type') dataType: any;
	@Input('query-data-subject') queryDataSubject: BehaviorSubject<any>;
	@Input('current-property-type') currentPropertyType: any;
	@Input('data-map') dataMap: Map<string, string>;
	
	constructor() {}

	ngOnInit() {}

	queryByBoolean(value) {
		let input = '';

		console.log(value)
	}
}
