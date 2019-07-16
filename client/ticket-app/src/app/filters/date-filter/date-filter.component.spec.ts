import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatInputModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { BehaviorSubject } from 'rxjs'

import { IsNullComponent } from '../is-null/is-null.component';
import { DateFilterComponent } from './date-filter.component';

describe('DateFilterComponent', () => {
    let component: DateFilterComponent;
    let fixture: ComponentFixture<DateFilterComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [IsNullComponent, DateFilterComponent],
            imports: [MatInputModule, MatDatepickerModule, MatNativeDateModule]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DateFilterComponent);
        component = fixture.componentInstance;
        component.dataMap = new Map<string, string>();
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('invoke next on queryDataSubject input when queryDataDate is called', () => {
        component.dataMap = new Map<string, string>();
        component.queryDataSubject = new BehaviorSubject<any>('');
        component.column = 'created_at'
        let mockDate = new Date('2019-07-14');
        let mockEvent: MatDatepickerInputEvent<Date> = <MatDatepickerInputEvent<Date>>{ value: mockDate };
        let queryDataSubjectSpy = spyOn(component.queryDataSubject, 'next');
        component.queryDataDate(mockEvent);
        expect(queryDataSubjectSpy).toHaveBeenCalledWith({
            value: '2019-07-14T00:00:00.000Z',
            column: 'created_at'
        });
    });
});
