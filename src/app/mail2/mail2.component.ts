import { Component } from '@angular/core';
import { ServService } from '../serv.service';

@Component({
  selector: 'app-mail2',
  templateUrl: './mail2.component.html',
  styleUrls: ['./mail2.component.css']
})
export class Mail2Component {
  public MastercontactList: any[] = [];
  public fromInput: any[] = [];
  public fromInputTo: any[] = [];
  public fromInputcc: any[] = [];
  public selectedFromFrom: string = '';
  public selectedFromTo: string = '';
  public selectedFromcc: string = '';
  public showContactDropdownFrom: boolean = false;
  public showContactDropdownTo: boolean = false;
  public showContactDropdowncc: boolean = false;
  public searchQuery: string = ''; // Add searchQuery property

  public selectedContactsFrom: any[] = [];
  public selectedContactsTo: any[] = [];
  public selectedContactsCC: any[] = [];

  constructor(private api: ServService) {
    this.fetchContactList();
  }

  fetchContactList() {
    this.MastercontactList = this.api.getContactlist();
    this.fromInput = [...this.MastercontactList];
    this.fromInputTo = [...this.MastercontactList];
    this.fromInputcc = [...this.MastercontactList];
  }

  showContactList(field: string) {
    if (field === 'from') {
      this.showContactDropdownFrom = true;
      this.showContactDropdownTo = false;
      this.showContactDropdowncc = false;
    } else if (field === 'to') {
      this.showContactDropdownTo = true;
      this.showContactDropdownFrom = false;
      this.showContactDropdowncc = false;
    } else if (field === 'cc') {
      this.showContactDropdowncc = true;
      this.showContactDropdownFrom = false;
      this.showContactDropdownTo = false;
    }
  }

  performSearch() {
    this.fromInput = this.MastercontactList.filter(contact =>
      contact.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
    this.fromInputTo = [...this.fromInput];
    this.fromInputcc = [...this.fromInput];
    this.hideAllContactDropdowns();
  }
  

  selectContact(contact: any, field: string) {
    if (field === 'from' && !this.selectedContactsFrom.includes(contact)) {
      this.selectedContactsFrom.push(contact);
      this.selectedFromFrom = this.selectedContactsFrom.map(c => c.name).join(', ');
    } else if (field === 'to' && !this.selectedContactsTo.includes(contact)) {
      this.selectedContactsTo.push(contact);
      this.selectedFromTo = this.selectedContactsTo.map(c => c.name).join(', ');
    } else if (field === 'cc' && !this.selectedContactsCC.includes(contact)) {
      this.selectedContactsCC.push(contact);
      this.selectedFromcc = this.selectedContactsCC.map(c => c.name).join(', ');
    }

    this.fromInputTo = this.fromInputTo.filter(c => c.name !== contact.name);
    this.fromInputcc = this.fromInputcc.filter(c => c.name !== contact.name);
    this.fromInput = this.fromInput.filter(c => c.name !== contact.name);

    this.hideAllContactDropdowns();
  }

  hideAllContactDropdowns() {
    this.showContactDropdownFrom = false;
    this.showContactDropdownTo = false;
    this.showContactDropdowncc = false;
  }

  // Implement the search functionality
  onSearch(query: string, field: string) {
    if (field === 'from') {
      this.fromInput = this.MastercontactList.filter(contact =>
        contact.name.toLowerCase().includes(query.toLowerCase())
      );
    } else if (field === 'to') {
      this.fromInputTo = this.MastercontactList.filter(contact =>
        contact.name.toLowerCase().includes(query.toLowerCase())
      );
    } else if (field === 'cc') {
      this.fromInputcc = this.MastercontactList.filter(contact =>
        contact.name.toLowerCase().includes(query.toLowerCase())
      );
    }
  }
}
