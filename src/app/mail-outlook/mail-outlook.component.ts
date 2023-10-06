import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { ServService } from '../serv.service';

@Component({
  selector: 'app-mail-outlook',
  templateUrl: './mail-outlook.component.html',
  styleUrls: ['./mail-outlook.component.css']
})
export class MailOutlookComponent {
  contacts: any[] = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Alice Johnson' },
    { id: 4, name: 'Bob Williams' },
    { id: 5, name: 'Eva Brown' }
  ];
  
  searchText: string = '';
  newContact: string = '';
  filteredContacts: any[] = [];
  selectedContacts: any[] = [];

  filterContacts() {
    this.filteredContacts = this.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  addContact(contact: any) {
    if (!this.selectedContacts.includes(contact)) {
      this.selectedContacts.push(contact);
    }
  }


}