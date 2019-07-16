import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {
	MatInputModule,
	MatSelectModule,
	MatTableModule,
	MatDatepickerModule,
	MatNativeDateModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MomentModule } from 'ngx-moment';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { TableSelect } from './tableSelect/tableSelect.component';
import { DateFormatPipe } from './dateFormatPipe/date-format.pipe';
import { DateFilterComponent } from './filters/date-filter/date-filter.component';
import { IsNullComponent } from './filters/is-null/is-null.component';
import { InputFilterComponent } from './filters/input-filter/input-filter.component';

@NgModule({
	declarations: [
		AppComponent,
		TableComponent,
		TableSelect,
		DateFormatPipe,
		DateFilterComponent,
		IsNullComponent,
		InputFilterComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		BrowserAnimationsModule,
		MatInputModule,
		MatSelectModule,
		MatTableModule,
		MomentModule,
		MatDatepickerModule,
		MatNativeDateModule,
		FormsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
