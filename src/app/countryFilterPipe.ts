import { Pipe, PipeTransform } from '@angular/core

@Pipe({
	name: 'countryFilter'
})

export class CountryFilterPipe implements PipeTransform {

	transform(value: any, args: string): any {
		let filter = args[0].toLocaleLowerCase();
       	return filter ? value.filter(country=> country.name.toLocaleLowerCase().indexOf(filter) != -1) : value;
	}
}