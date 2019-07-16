import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

	/**
	 * This is a pipe we use to parse offset from the data string
	 * so we may display it in a user friendly way.
	 * @param {value} the current value through the pipe
	 * @param {args} additional arguments we may wish to pass.
	 */
  transform(value: any, ...args: any[]): any {
  	if (value) {
  		let dateString = value.substring(0, value.length - 7);
  		return dateString;
  	} else {
  		return value;
  	}
  }

}
