import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DateFormatPipe } from '../dateFormatPipe/date-format.pipe';
import { DateFilterComponent } from '../filters/date-filter/date-filter.component';
import { IsNullComponent } from '../filters/is-null/is-null.component';
import { InputFilterComponent } from '../filters/input-filter/input-filter.component';
import { BooleanFilterComponent } from '../filters/boolean-filter/boolean-filter.component';

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
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

import { TableComponent } from './table.component';

describe('TableComponent', () => {
    let component: TableComponent;
    let fixture: ComponentFixture<TableComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                DateFormatPipe,
                DateFilterComponent,
                IsNullComponent,
                InputFilterComponent,
                TableComponent,
                BooleanFilterComponent
            ],
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
        component.dataMap = new Map<string, string>();
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
