import { Component, EventEmitter, Input, Output } from '@angular/core';

import { loggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  constructor(private loggingService: loggingService,
              private accountService: AccountsService) {

  }

  onSetTo(status: string) {
    this.accountService.updateAccount(this.id, status)
    this.accountService.statusUpdated.emit(status);
     }
}
