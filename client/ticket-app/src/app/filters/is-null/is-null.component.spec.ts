import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BehaviorSubject } from 'rxjs';

import { IsNullComponent } from './is-null.component';

describe('IsNullComponent', () => {
    let component: IsNullComponent;
    let fixture: ComponentFixture<IsNullComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [IsNullComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(IsNullComponent);
        component = fixture.componentInstance;
        component.dataMap = new Map<string, string>();
        component.queryDataSubject = new BehaviorSubject<any>('');
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('invoke next on queryDataSubject input when queryByisNull is called', () => {
        component.column = 'name';
        let mockValue = '@isNull@';
        let queryDataSubjectSpy = spyOn(component.queryDataSubject, 'next');
        component.queryByisNull(mockValue);
        expect(queryDataSubjectSpy).toHaveBeenCalledWith({
            column: 'name',
            value: '@isNull@'
        });
    });
});
