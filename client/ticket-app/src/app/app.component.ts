import {
	Component,
	OnInit,
	OnDestroy,
	ElementRef,
	ViewChild
} from '@angular/core';
import { Observable, of, BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MatTableDataSource } from '@angular/material/table';

import { TableSelect } from './tableSelect/tableSelect.component';

import { TableDataService } from './tableService/table-data.service';
import { Columns } from './constants/columns';
import { DataTypes } from './constants/dataTypes';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
	constructor(public _tableDataService: TableDataService) {}

	public tables: string[] = ['users', 'tickets', 'organizations'];
	public tableChangeSubject = new BehaviorSubject<string>('');
	public currentTableProperties: Observable<string[]> = of(['']);
	public querySubject: BehaviorSubject<string> = new BehaviorSubject<string>(
		''
	);

	public tableData: MatTableDataSource<any[]> = new MatTableDataSource<any[]>(
		[]
	);
	private destroy$ = new Subject<boolean>();
	public displayedColumns: string[] = [];
	public dataType: any = {};
	public currentPropertyType: any = {};

	/*
	 * This property is our data map, we use it to keep track track of current filters
	 * applied to the table.
	 */
	public dataMap: Map<string, string> = new Map();

	/**
	 * This is fired when our component initializes.
	 * Set up our subscription to check when the table changes
	 * and when the user triggers a search on the data.
	 */
	ngOnInit() {
		this.tableChangeSubject.subscribe(val => {
			if (val === 'users') {
				this.changeTable(DataTypes.Users, Columns.User);
			}

			if (val === 'tickets') {
				this.changeTable(DataTypes.Tickets, Columns.Ticket);
			}

			if (val === 'organizations') {
				this.changeTable(DataTypes.Organizations, Columns.Organization);
			}
		});


		/*
		 * This subscription listens for input from the user on the table filter,
		 * it sets the column and it's applied filer on the data map, and then calls the query data function.
		 */
		this.querySubject
			.pipe(takeUntil(this.destroy$))
			.subscribe((dataSearchInput: any) => {
				this.dataMap.set(dataSearchInput.column, dataSearchInput.value);
				this.dataMap = new Map(this.dataMap);
				this.queryData();
			});
	}

	/**
	 * Check the users current table, fetch the data and set the data on
	 * the table.
	 */
	queryData(): void {
		if (this.tableChangeSubject.getValue() === 'users') {
			this._tableDataService
				.getUsers(this.dataMap)
				.pipe(takeUntil(this.destroy$))
				.subscribe((val: any[]) => {
					this.tableData = new MatTableDataSource<any[]>(val);
				});
		}
		if (this.tableChangeSubject.getValue() === 'tickets') {
			this._tableDataService
				.getTickets(this.dataMap)
				.pipe(takeUntil(this.destroy$))
				.subscribe(val => {
					this.tableData = new MatTableDataSource<any[]>(val);
				});
		}

		if (this.tableChangeSubject.getValue() === 'organizations') {
			this._tableDataService
				.getOrganizations(this.dataMap)
				.pipe(takeUntil(this.destroy$))
				.subscribe(val => {
					this.tableData = new MatTableDataSource<any[]>(val);
				});
		}
	}

	/**
	 * Check the users current table, fetch the data and set the data on
	 * the table.
	 * @param {dataType} the current data type model
	 * @param {columns} the new columns we need to display when the table changes
	 */
	changeTable(dataType: any, columns: string[]): void {
		this.dataMap.clear();
		this.dataType = dataType;
		this.currentTableProperties = of(columns);
		this.displayedColumns = columns;
		this.queryData();
	}

	/**
	 * Destroy description to prevent memory leaks
	 */

	ngOnDestroy() {
		this.destroy$.next(true);
	}
}
