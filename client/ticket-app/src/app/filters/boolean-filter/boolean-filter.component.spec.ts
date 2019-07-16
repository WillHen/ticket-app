import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BehaviorSubject } from 'rxjs';

import { BooleanFilterComponent } from './boolean-filter.component';

describe('BooleanFilterComponent', () => {
    let component: BooleanFilterComponent;
    let fixture: ComponentFixture<BooleanFilterComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [BooleanFilterComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BooleanFilterComponent);
        component = fixture.componentInstance;
        component.queryDataSubject = new BehaviorSubject<any>('');
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('invoke next on queryDataSubject input when queryByBoolean is called', () => {
        component.column = 'is_member';
        let mockValue = true;
        let queryDataSubjectSpy = spyOn(component.queryDataSubject, 'next');
        component.queryByBoolean(mockValue);
        expect(queryDataSubjectSpy).toHaveBeenCalledWith({
            column: 'is_member',
            value: true
        });
    });
});
