import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import Chart from 'chart.js/auto';


@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  groupChart: any;
   // Members
  totalMembers = 50;
  unpaidMembers = 10;
  bestUsers = 5;
  draftMembers = 3;

  // Chits
  totalChits = 8;
  pendingChits = 2;
  draftChits = 1;
  finishedChits = 5;
  totalIncome = 80000;
  pendingAmount = 20000;
  rootStyles = getComputedStyle(document.documentElement);
  // Dropdown groups
  chitGroups = [
    { id: 1, name: 'Chit A' },
    { id: 2, name: 'Chit B' }
  ];

  // Group monthly data
  groupData: any = {
    1: {
      months: ['Jan', 'Feb', 'Mar'],
      paid: [10000, 12000, 15000],
      pending: [2000, 3000, 1000]
    },
    2: {
      months: ['Jan', 'Feb', 'Mar'],
      paid: [8000, 9000, 11000],
      pending: [4000, 2000, 3000]
    }
  };
  ngOnInit() {
    this.createChart();
     this.createGroupChart(1); // default group
  }


  createChart() {
    new Chart("paymentChart", {
      type: 'doughnut',
      data: {
        labels: ['Received', 'Pending'],
        datasets: [{
          data: [this.totalIncome, this.pendingAmount],
          backgroundColor: [
        this.rootStyles.getPropertyValue('--primary'),
        this.rootStyles.getPropertyValue('--danger')
      ]
        }]
      },
      options: {  
        responsive: false
      }
    });
  }
    // ✅ Chart 2
  createGroupChart(groupId: number) {

    const data = this.groupData[groupId];

    // destroy old chart
    if (this.groupChart) {
      this.groupChart.destroy();
    }

    this.groupChart = new Chart("groupChart", {
      type: 'bar',
      data: {
        labels: data.months,
        datasets: [
          {
            label: 'Paid',
            data: data.paid,
            backgroundColor: this.rootStyles.getPropertyValue('--primary')
          },
          {
            label: 'Pending',
            data: data.pending,
            backgroundColor: this.rootStyles.getPropertyValue('--danger')
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    });
  }

  // Dropdown change
  onGroupChange(event: any) {
    const groupId = +event.target.value;
    this.createGroupChart(groupId);
  }
}
