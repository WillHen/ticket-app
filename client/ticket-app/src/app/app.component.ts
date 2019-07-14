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
	public dataMap: Map<string, string> = new Map();

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

		this.querySubject
			.pipe(takeUntil(this.destroy$))
			.subscribe((val: any) => {
				this.dataMap.set(val.column, val.value);
				this.queryData(val);
			});
	}

	queryData(value: string = ''): void {
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

	changeTable(dataType: any, columns: string[]): void {
		this.dataMap.clear();
		this.dataType = dataType;
		this.currentTableProperties = of(columns);
		this.displayedColumns = columns;
		this.queryData();
	}

	ngOnDestroy() {
		this.destroy$.next(true);
	}
}
