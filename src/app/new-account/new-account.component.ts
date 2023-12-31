import { Component, EventEmitter, Output } from '@angular/core';
import { loggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
})
export class NewAccountComponent {


  constructor(private loggingService: loggingService,
              private accountService: AccountsService) {
                this.accountService.statusUpdated.subscribe(
                  (status: string) => alert('New Status:' + status)
                );
  }
  
  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName, accountStatus);
    
  }
}
