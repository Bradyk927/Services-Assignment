import { EventEmitter, Injectable } from "@angular/core";
import { loggingService } from "./logging.service";


@Injectable({
    providedIn: 'root'
})

export class AccountsService {
    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
      ];
      statusUpdated = new EventEmitter<string>();
      
      constructor(private loggingService: loggingService) {}
      addAccount(name: string, status: string){
        this.accounts.push({name: name, status: status});
        this.loggingService.logStatusChange(status)
      }

      updateAccount(id: number, status: string){
        this.accounts[id].status=status;
        this.loggingService.logStatusChange(status) 
      }
      onAccountAdded(newAccount: {name: string, status: string}) {
        
      }
    
      onStatusChanged(updateInfo: {id: number, newStatus: string}) {
      }
    }
