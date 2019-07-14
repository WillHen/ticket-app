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

	queryData(event: any, column: string) {
		this.queryDataSubject.next({
			value: event.target.value,
			column: column
		});
	}

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
