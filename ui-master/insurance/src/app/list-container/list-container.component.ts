import { Component, OnInit } from '@angular/core';
import { ClientData } from '../model/client-data';
import { GetInsuranceService } from '../services/get-insurance.service';
import { PassDataService } from '../services/pass-data.service';

@Component({
  selector: 'app-list-container',
  templateUrl: './list-container.component.html',
  styleUrls: ['./list-container.component.scss']
})
export class ListContainerComponent implements OnInit {

  clientData: any;
  filterTerm: any;

  constructor(
    private getInsuranceService: GetInsuranceService,
    private passDataService: PassDataService
    ) { }

  ngOnInit(): void {
    this.fetchInsuranceDetails();
  }

  fetchInsuranceDetails() {
    this.getInsuranceService.getInsuranceDetails().subscribe(data => {
      console.log(data);
      this.clientData = data;

    },
    err =>{
      console.log(err);
    })
  }

  clientItem(clientdetail: any) {
    this.passDataService.changeMessage(clientdetail);
  }

}
