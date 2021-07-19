import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchCustomer'
})

export class SearchCustomerPipe implements PipeTransform {


  transform(clientdetail: any, filterTerm: string): any {

    if(!clientdetail || !filterTerm){
      return clientdetail;
    }
    return clientdetail.filter(
      (data: { Policy_id: string; Customer_id: string; Premium: string; Customer_Gender: string; }) => data.Policy_id.toLocaleLowerCase()
      .includes(filterTerm.toLocaleLowerCase())
      || data.Customer_id.toLocaleLowerCase()
      .includes(filterTerm.toLocaleLowerCase())
      || data.Premium.toLocaleLowerCase()
      .includes(filterTerm.toLocaleLowerCase())
      || data.Customer_Gender.toLocaleLowerCase()
      .includes(filterTerm.toLocaleLowerCase()))
  }

}
