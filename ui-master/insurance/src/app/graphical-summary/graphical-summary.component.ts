import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chart } from "chart.js";
import { GetInsuranceService } from '../services/get-insurance.service';

@Component({
  selector: 'app-graphical-summary',
  templateUrl: './graphical-summary.component.html',
  styleUrls: ['./graphical-summary.component.scss']
})
export class GraphicalSummaryComponent implements OnInit {

  policyDate: any;
  dateLabel: any;
  policyData: any;
  Premium:any;

  constructor(
    private router: Router,
    private getInsuranceService: GetInsuranceService
    ) { }

  ngOnInit(): void {
    this.fetchInsuranceDetails();
    this.showChart()
  }


  fetchInsuranceDetails() {
    this.getInsuranceService.getInsuranceDetails().subscribe(data => {
      console.log(data);
      this.policyData = data;
      this.policyDate = this.policyData.Date_of_Purchase;
      this.Premium = this.policyData.Premium;
    },
    err =>{
      console.log(err);
    })
  }

  showChart() {
    var ctx = (<any>document.getElementById('policy')).getContext('2d');
       var chart = new Chart(ctx, {
         type: 'bar',
         data: {
         labels: ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sept', 'oct', 'nov', 'dec'],
         datasets: [{
               label: "Policy Chart",
               backgroundColor: [
                //  'rgba(255, 99, 132, 0.2)',
                //  'rgba(54, 162, 235, 0.2)',
               ],
               borderColor: [
                //  'rgba(255,99,132,1)',
                //  'rgba(54, 162, 235, 1)',
               ],
               data: [958,1272,2150,
                2123,
                1110,
                1571,
                1030,
                1732,
                2175,
                1725,
                1805,
                1552
                ],
               borderWidth: 1
         }],

        },
        options: {
         plugins: {
          legend: {
            display: true,
            labels: {
                color: 'rgb(255, 99, 132)'
            }
        }
       },
       responsive: true,
       scales: {
        xAxes: [{
          ticks: {
            min: 0,
          },
          scaleLabel: {
            display: true,
            labelString: 'Date'
          }
        }],
        yAxes: [{
          ticks: {
            min: 0,
          },
          scaleLabel: {
            display: true,
            labelString: 'Premium'
          }
        },
      ]
      },

       }

     });
   }

}
