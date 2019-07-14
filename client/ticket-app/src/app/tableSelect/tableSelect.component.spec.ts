import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule
} from '@angular/material';

import { BehaviorSubject } from 'rxjs';

import { TableSelect } from './tableSelect.component';

describe('TableSelect', () => {
    let component: TableSelect;
    let fixture: ComponentFixture<TableSelect>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TableSelect],
            imports: [
                MatInputModule,
                MatSelectModule,
                MatTableModule,
                MatDatepickerModule,
                MatNativeDateModule,
                MatFormFieldModule
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TableSelect);
        component = fixture.componentInstance;
        component.tableChangeSubject = new BehaviorSubject<string>('');
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('Invoke next on input tableChangeSubject when setTable is called', () => {
        expect(component).toBeTruthy();
        let behaviourSubjectSpy = spyOn(component.tableChangeSubject, 'next');
        let mockEvent = {value: 'users'}
        component.setTable(mockEvent);
        expect(behaviourSubjectSpy).toHaveBeenCalledWith('users');
    });
});
