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
	
	constructor() {}

	ngOnInit() {}

	/**
	 * When the user starts typing on an input in the table, 
	 * fire off an event to the root component to indicate which column
	 * and which property to filter by.
	 * @param {event} the user input
	 * @param {column} the current column they are filtering on.
	 */
	queryData(event: any, column: string) {
		this.queryDataSubject.next({
			value: event.target.value,
			column: column
		});
	}


	/**
	 * When the user is filtering with a column that has a date picker,
	 * parse the value correcrtly and send it to the root component
	 * and the column to filter on.
	 * @param {column} the current column they are filtering on.
	 * @param {event} the user input, which in this case is a date.
	 */
	queryDataDate(column: string, event: MatDatepickerInputEvent<Date>): void {
		if (event.value) {
			this.queryDataSubject.next({
				value: event.value.toISOString(),
				column: column
			});
		} else {
			this.queryDataSubject.next({ value: '', column: column });
		}
	}
}
