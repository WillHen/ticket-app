import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class TableDataService {
	public _baseUrl: String;

	constructor(private _http: HttpClient) {
		this._baseUrl = 'http://localhost:3000';
	}

	buildQueryParams(dataMap: Map<string, string> = new Map()): HttpParams {
		let dataParams = new HttpParams();
		if (dataMap) {
			dataMap.forEach((value, key) => {
				if (value) {
					dataParams = dataParams.append(key, value);	
				}
			})
			
		}
		return dataParams
	}

	getUsers(dataMap: Map<string, string> = new Map()) {
		return this._http.get(`${this._baseUrl}/users`, {
			params: this.buildQueryParams(dataMap)
		});
	}

	getTickets(dataMap: Map<string, string> = new Map()): Observable<any> {
		return this._http.get(`${this._baseUrl}/tickets`, {
			params: this.buildQueryParams(dataMap)
		});
	}

	getOrganizations(dataMap: Map<string, string> = new Map()): Observable<any> {
		return this._http.get(`${this._baseUrl}/organizations`, {
			params: this.buildQueryParams(dataMap)
		});
	}
}
