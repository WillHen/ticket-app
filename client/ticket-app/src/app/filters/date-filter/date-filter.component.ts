import { Component, OnInit, Input, ChangeDetectionStrategy, ViewChild, ElementRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {
	MatDatepickerInputEvent,
	MatDatepicker,
	MatDatepickerToggle
} from '@angular/material/datepicker';

@Component({
	selector: 'app-date-filter',
	templateUrl: './date-filter.component.html',
	styleUrls: ['./date-filter.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class DateFilterComponent implements OnInit {
	@Input('query-data-subject') queryDataSubject: BehaviorSubject<any>;
	@Input('data-map') dataMap: Map<string, string>;
	@Input() column: string;

	constructor() {}

	ngOnInit() {
	}

	/**
	 * When the user is filtering with a column that has a date picker,
	 * parse the value correcrtly and send it to the root component
	 * and the column to filter on.
	 * @param {column} the current column they are filtering on.
	 * @param {event} the user input, which in this case is a date.
	 */
	queryDataDate(event: MatDatepickerInputEvent<Date>): void {
		if (event.value) {
			this.queryDataSubject.next({
				value: event.value.toISOString(),
				column: this.column
			});
		} else {
			this.queryDataSubject.next({ value: '', column: this.column });
		}
	}
}
