import { TestBed, async, inject } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule
} from '@angular/material';
import { Observable, of } from 'rxjs';

import { Columns } from './constants/columns';
import { DataTypes } from './constants/dataTypes';
import { TableDataService } from './tableService/table-data.service';

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                MatInputModule,
                MatSelectModule,
                MatTableModule,
                MatDatepickerModule,
                MatNativeDateModule,
                HttpClientModule
            ],
            declarations: [AppComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            providers: [TableDataService]
        }).compileComponents();
    }));

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    });

    it('should call change table when it recieves a value from tableChangeSubject subscription', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;

        app.ngOnInit();

        let tableChangeSpy = spyOn(app, 'changeTable');
        app.tableChangeSubject.next('users');

        expect(tableChangeSpy).toHaveBeenCalledWith(
            DataTypes.Users,
            Columns.User
        );
    });

    it('shiuld set data on the dataMap property when it recieves a value from querySubject subscription', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;

        app.ngOnInit();

        let mockData = { column: 'name', value: 'John Smith' };
        app.querySubject.next(mockData);

        expect(app.dataMap.get('name')).toEqual('John Smith');
    });

    it('should call get users when queryData subject recieves a value and the current table to set to users', ()  => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;

        app.tableChangeSubject.next('users');

        let tableDataServiceGetUsersSpy = spyOn(
            app._tableDataService,
            'getUsers'
        ).and.returnValue(of(''))

        app.queryData('test');
    });
});
