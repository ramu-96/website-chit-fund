import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Button } from '../shared/components/button/button';
import { EllipsisVertical,LucideAngularModule,SearchIcon} from 'lucide-angular';
import { Search } from '../shared/components/search/search';
import { Filter } from '../shared/components/filter/filter';

@Component({
  selector: 'app-members',
  imports: [CommonModule,LucideAngularModule,Button,Search,Filter],
  templateUrl: './members.html',
  styleUrl: './members.css',
})
export class Members {
  selectedMemberId: number | null = null;
  members = [
    { id: 1, name: 'Ramu', phone: '9876543210', group: 'Chit A', status: 'paid' },
    { id: 2, name: 'Sita', phone: '9876543211', group: 'Chit A', status: 'pending' },
    { id: 3, name: 'Gita', phone: '9876543212', group: 'Chit B', status: 'paid' },
    { id: 4, name: 'Mita', phone: '9876543213', group: 'Chit B', status: 'pending' },
    { id: 5, name: 'Ravi', phone: '9876543210', group: 'Chit A', status: 'paid' },
    { id: 6, name: 'Ramu', phone: '9876543211', group: 'Chit A', status: 'pending' },
    { id: 7, name: 'Keerthi', phone: '9876543212', group: 'Chit B', status: 'paid' },
    { id: 8, name: 'Mijun', phone: '9876543213', group: 'Chit B', status: 'pending' },
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
