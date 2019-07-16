import {
	Component,
	OnInit,
	Input,
	ChangeDetectionStrategy,
	ViewChild,
	ElementRef
} from '@angular/core';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { MatSelect } from '@angular/material/select';
import { MatDatepickerInputEvent, MatDatepicker } from '@angular/material/datepicker';

@Component({
	selector: 'app-table-select',
	templateUrl: './tableSelect.component.html',
	styleUrls: ['./tableSelect.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableSelect implements OnInit {
	@ViewChild('filterInput', { static: false }) filterInput: ElementRef;
	@ViewChild('filterSelect', { static: false }) filterSelect: MatSelect;
	@ViewChild('filterDateInput', { static: false }) filteDateInput: ElementRef;

	@Input('tables') tables: Observable<any>[];
	@Input('table-change-subject') tableChangeSubject: BehaviorSubject<string>;
	@Input('current-table-properties') currentTableProperties: Observable<string[]>;

	constructor() {}

	ngOnInit() {}
	/**
	 * Updates the tableChangeSubject behavior subject with the new table the user has selected.
	 * @param {event} the event object from the select.
	 */
	setTable(event: any): void {
		this.tableChangeSubject.next(event.value);
	}

}
