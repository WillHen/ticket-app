import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DateFormatPipe } from '../dateFormatPipe/date-format.pipe';
import { MomentModule } from 'ngx-moment';
import { BehaviorSubject } from 'rxjs';

import {
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule
} from '@angular/material';
import {
    MatDatepickerInputEvent
} from '@angular/material/datepicker';

import { TableComponent } from './table.component';

describe('TableComponent', () => {
    let component: TableComponent;
    let fixture: ComponentFixture<TableComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DateFormatPipe, TableComponent],
            imports: [
                MatInputModule,
                MatSelectModule,
                MatTableModule,
                MatDatepickerModule,
                MatNativeDateModule,
                MatFormFieldModule,
                MomentModule
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TableComponent);
        component = fixture.componentInstance;
        component.queryDataSubject = new BehaviorSubject<any>('');
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('invoke next on queryDataSubject input when queryData is called', () => {
        let mockEvent = {target: {value: 101}};
        let queryDataSubjectSpy = spyOn(component.queryDataSubject, 'next');
        component.queryData(mockEvent, '_id');
        expect(queryDataSubjectSpy).toHaveBeenCalledWith({value: mockEvent.target.value, column: '_id'})
    });

    it('invoke next on queryDataSubject input when queryDataDate is called', () => {
        let mockDate = new Date('2019-07-14');
        let mockEvent: MatDatepickerInputEvent<Date>  = (<MatDatepickerInputEvent<Date>>{value: mockDate});
        let queryDataSubjectSpy = spyOn(component.queryDataSubject, 'next');
        component.queryDataDate('created_at', mockEvent );
        expect(queryDataSubjectSpy).toHaveBeenCalledWith({value: "2019-07-14T00:00:00.000Z", column: 'created_at'})
    });
});
