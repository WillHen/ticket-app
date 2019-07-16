import {
	Component,
	OnInit,
	Input,
	ChangeDetectionStrategy,
	ViewChild,
	ElementRef
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
	selector: 'app-input-filter',
	templateUrl: './input-filter.component.html',
	styleUrls: ['./input-filter.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputFilterComponent implements OnInit {
	@Input('query-data-subject') queryDataSubject: BehaviorSubject<any>;
	@Input('data-map') dataMap: Map<string, string>;
	@Input('column') column: string;
	@Input('clear-filter-subject') clearFilterSubject: BehaviorSubject<string>;

	constructor() {}

	ngOnInit() {}

	/**
	 * When the user starts typing on an input in the table,
	 * fire off an event to the root component to indicate which column
	 * and which property to filter by.
	 * @param {event} the user input.
	 */
	queryData(event: any) {
		this.queryDataSubject.next({
			value: event.target.value,
			column: this.column
		});
	}
}
