import { Component, OnInit } from '@angular/core';
import { PassDataService } from '../services/pass-data.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { stringify } from '@angular/compiler/src/util';


@Component({
  selector: 'app-details-container',
  templateUrl: './details-container.component.html',
  styleUrls: ['./details-container.component.scss']
})
export class DetailsContainerComponent implements OnInit {

  clientDetails: any;
  myForm: any;

  constructor(private passDataService: PassDataService,
    private fb: FormBuilder) {
      this.createForm();
  }

  createForm() {
    this.myForm = this.fb.group({
      policy: '',
      dateOfPurchase: '',
      customerId: '',
      fuel:'',
      vehicleSegment:'',
      premium: ['', Validators.max(100000)],
      bodilyInjuryLiability:'',
      personalInjury:'',
      propertyDamageLibility:'',
      collision:'',
      comprehensive:'',
      customerGender:'',
      incomeGrp:'',
      customerRegion:'',
      maritalStatus:''
    });
  }

  // on submitting form
  onSubmit(form: FormGroup) {

  }

  ngOnInit(): void {
    this.passDataService.currentMessage.subscribe((data) => {
      this.clientDetails = data;
      // console.log(data)
      this.setDefaults(data);
  });

  }

  // setting values to form fields
  setDefaults(data: any) {
    this.myForm.patchValue({
       policy: this.clientDetails.Policy_id,
       dateOfPurchase: this.clientDetails.Date_of_Purchase,
       customerId: this.clientDetails.Customer_id,
       fuel: this.clientDetails.Fuel,
       vehicleSegment: this.clientDetails.VEHICLE_SEGMENT,
       premium: this.clientDetails.Premium,
       bodilyInjuryLiability: this.clientDetails.bodily_injury_liability,
      personalInjury: this.clientDetails.personal_injury_protection,
      propertyDamageLibility: this.clientDetails.property_damage_liability,
      collision: this.clientDetails.collision,
      comprehensive: this.clientDetails.comprehensive,
      customerGender: this.clientDetails.Customer_Gender,
      incomeGrp: this.clientDetails.Customer_Income_group,
      customerRegion: this.clientDetails.Customer_Region,
      maritalStatus: this.clientDetails.Customer_Marital_status,
      });


  }
}
