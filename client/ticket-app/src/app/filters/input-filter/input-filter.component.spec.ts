import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BehaviorSubject } from 'rxjs';

import { InputFilterComponent } from './input-filter.component';

describe('InputFilterComponent', () => {
    let component: InputFilterComponent;
    let fixture: ComponentFixture<InputFilterComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [InputFilterComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(InputFilterComponent);
        component = fixture.componentInstance;
        component.queryDataSubject = new BehaviorSubject<any>('');
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('invoke next on queryDataSubject input when queryData is called', () => {
        let mockEvent = { target: { value: 101 } };
        component.column = '_id';
        let queryDataSubjectSpy = spyOn(component.queryDataSubject, 'next');
        component.queryData(mockEvent);
        expect(queryDataSubjectSpy).toHaveBeenCalledWith({
            value: mockEvent.target.value,
            column: '_id'
        });
    });
});
