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

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { TableSelect } from './tableSelect/tableSelect.component';
import { DateFormatPipe } from './dateFormatPipe/date-format.pipe';


@NgModule({
	declarations: [AppComponent, TableComponent, TableSelect, DateFormatPipe],
	imports: [
		BrowserModule,
		HttpClientModule,
		BrowserAnimationsModule,
		MatInputModule,
		MatSelectModule,
		MatTableModule,
		MomentModule,
		MatDatepickerModule,
		MatNativeDateModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
