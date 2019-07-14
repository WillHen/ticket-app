import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
  	if (value) {
  		let dateString = value.substring(0, value.length - 7);
  		return dateString;
  	} else {
  		return value;
  	}
  }

}
