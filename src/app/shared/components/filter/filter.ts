import { Component } from '@angular/core';
import { LucideAngularModule,ListFilterIcon} from 'lucide-angular';

@Component({
  selector: 'app-filter',
  imports: [LucideAngularModule],
  templateUrl: './filter.html',
  styleUrl: './filter.css',
})
export class Filter {
  readonly Filter = ListFilterIcon;
}
