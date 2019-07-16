import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
	selector: 'app-is-null',
	templateUrl: './is-null.component.html',
	styleUrls: ['./is-null.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class IsNullComponent implements OnInit {
	@Input('data-map') dataMap: Map<string, string>;
	@Input('query-data-subject') queryDataSubject: BehaviorSubject<any>;
	@Input('column') column: string;

	constructor() {}

	ngOnInit() {}


    /**
	 * When the user is filtering with a column and they wish to filter by if 
	 * the column has no value.
	 * @param {value} a string to indicate the user is filtering by isNull
	 */
	queryByisNull(value: string) {
		let input = '';

		if (this.dataMap.get(this.column) !== '@isNull@') {
			input = '@isNull@'
		}
		this.queryDataSubject.next({
			value: input,
			column: this.column
		});
	}
}
