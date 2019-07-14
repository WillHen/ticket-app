import { TestBed } from '@angular/core/testing';
import { HttpClientModule, HttpParams } from '@angular/common/http';
import {
	HttpClientTestingModule,
	HttpTestingController
} from '@angular/common/http/testing';

import { TableDataService } from './table-data.service';

describe('TableDataService', () => {
	let injector: TestBed;
	let httpMock: HttpTestingController;
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientModule, HttpClientTestingModule]
		});
		httpMock = TestBed.get(HttpTestingController);
	});

	it('should be created', () => {
		const service: TableDataService = TestBed.get(TableDataService);
		expect(service).toBeTruthy();
	});

	it('should be created http params from a dataMap', () => {
		const service: TableDataService = TestBed.get(TableDataService);

		let mockMap = new Map<string, string>();
		mockMap.set('name', 'John Smith');

		let dummyParams: HttpParams = new HttpParams().set(
			'name',
			'John Smith'
		);
		let returnParams = service.buildQueryParams(mockMap);

		expect(returnParams.toString()).toEqual(dummyParams.toString());
	});

	it('should call the users end point with correct params', () => {
		const dummyUsers = [{ name: 'John Smith' }, { name: 'Doe Smith' }];

		const service: TableDataService = TestBed.get(TableDataService);
		let mockMap = new Map<string, string>();

		mockMap.set('name', 'John Smith');
		service.getUsers(mockMap).subscribe(val => console.log(val));
		const req = httpMock.expectOne(
			`${service._baseUrl}/users?name=John%20Smith`
		);
		expect(req.request.method).toBe('GET');
		req.flush(dummyUsers);
	});

	it('should call the organizations end point with correct params', () => {
		const dummyOrgs = [{ name: 'Nutra' }, { name: 'Zendesk' }];

		const service: TableDataService = TestBed.get(TableDataService);
		let mockMap = new Map<string, string>();

		mockMap.set('name', 'Nutra');
		service.getOrganizations(mockMap).subscribe(val => console.log(val));
		const req = httpMock.expectOne(
			`${service._baseUrl}/organizations?name=Nutra`
		);
		expect(req.request.method).toBe('GET');
		req.flush(dummyOrgs);
	});

	it('should call the tickets end point with correct params', () => {
		const dummyTickets = [{ incident: 'Pending' }, { incident: 'Complete' }];

		const service: TableDataService = TestBed.get(TableDataService);
		let mockMap = new Map<string, string>();

		mockMap.set('incident', 'Pending');
		service.getTickets(mockMap).subscribe(val => console.log(val));
		const req = httpMock.expectOne(
			`${service._baseUrl}/tickets?incident=Pending`
		);
		expect(req.request.method).toBe('GET');
		req.flush(dummyTickets);
	});
});
