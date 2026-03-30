import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Button } from '../shared/components/button/button';
import { EllipsisVertical,LucideAngularModule,SearchIcon} from 'lucide-angular';
import { Search } from '../shared/components/search/search';
import { Filter } from '../shared/components/filter/filter';

@Component({
  selector: 'app-groups',
  imports: [CommonModule,LucideAngularModule,Button,Search,Filter],
  templateUrl: './groups.html',
  styleUrl: './groups.css',
})
export class Groups {
  selectedMemberId: number | null = null;
  members = [
  { id: 1, name: 'Chit A', leader: 'Ramu', phone: '9876543210', amount: '10000',auctionDate : '2026-03-30', status: 'paid' },
    { id: 2, name: 'Chit B', leader: 'Sita', phone: '9876543211', amount: '30000', auctionDate : '2026-03-30', status: 'pending' },
    { id: 3, name: 'Chit C', leader: 'Gita', phone: '9876543212', amount: '10000', auctionDate : '2026-03-30', status: 'paid' },
    { id: 4, name: 'Chit D', leader: 'Mita', phone: '9876543213', amount: '10000', auctionDate : '2026-03-30', status: 'pending' },
    { id: 5, name: 'Chit E', leader: 'Ravi', phone: '9876543210', amount: '10000', auctionDate : '2026-03-30', status: 'paid' },
    { id: 6, name: 'Chit F', leader: 'Ramu', phone: '9876543211', amount: '50000', auctionDate : '2026-03-30', status: 'pending' },
    { id: 7, name: 'Chit G', leader: 'Keerthi', phone: '9876543212', amount: '10000', auctionDate : '2026-03-30', status: 'paid' },
    { id: 8, name: 'Chit H', leader: 'Mijun', phone: '9876543213', amount: '20000',auctionDate : '2026-03-30', status: 'pending' },
  ];
  readonly EllipsisVertical = EllipsisVertical;
  readonly Search = Search;
  onEdit(member: any) {
    console.log('Edit:', member);
  }

  onDelete(member: any) {
    console.log('Delete:', member);
  }
  onAddUser() {
    console.log('Add User');
  }
  showAction(member: any,i:number) {
    this.selectedMemberId = this.selectedMemberId === i ? null : i;
    console.log('Action:', member);
  }
}
