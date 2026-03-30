import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-payments',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './payments.html',
  styleUrl: './payments.css',
})
export class Payments {

  // 🔷 Group Summary
  groups = [
    { name: 'Chit A', total: 100000, collected: 80000, pending: 20000 },
    { name: 'Chit B', total: 50000, collected: 30000, pending: 20000 },
    { name: 'Chit C', total: 75000, collected: 50000, pending: 25000 },
  ];

  // 🔷 Member Payments
  payments = [
    { name: 'Ramu', group: 'Chit A', amount: 5000, status: 'paid' },
    { name: 'Sita', group: 'Chit A', amount: 5000, status: 'pending' },
    { name: 'Gita', group: 'Chit B', amount: 3000, status: 'paid' },
    { name: 'Ravi', group: 'Chit C', amount: 4000, status: 'pending' },
  ];

  // 🔷 Members list (for payout dropdown)
  members = [
    { name: 'Ramu' },
    { name: 'Sita' },
    { name: 'Gita' },
    { name: 'Ravi' },
  ];

  // 🔷 Transactions
  transactions = [
    { name: 'Ramu', group: 'Chit A', amount: 5000 },
    { name: 'Gita', group: 'Chit B', amount: 3000 },
    { name: 'Ravi', group: 'Chit C', amount: 4000 },
  ];

  // 🔷 Action
  sendPayment() {
    console.log('Payment Sent');
  }
}