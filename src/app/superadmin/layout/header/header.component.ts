import { Component, OnInit, Input, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public noficationshow: boolean = false;
  public notificationLead: any;

  showClassName:boolean = true


  @Input() headerMainTitle: string | undefined;

  constructor() {

  }

  ngOnInit(): void {
    this.notificationLead = [
      {
        notificationIcon: 'fa fa-bell bg-active-color', notificationListTitle: 'Steve Smith', notificationListsubTitle: 'Today at 04:48 PM', notificationListDescription: 'E-25485 has assigned to the Employee Mark Buzz.'
      },
      {
        notificationIcon: 'fa fa-bell bg-inactive-color', notificationListTitle: 'Robert De Niro', notificationListsubTitle: 'Today at 04:48 PM', notificationListDescription: 'E-25485 has assigned to the Employee Mark Buzz.'
      },
      {
        notificationIcon: 'fa fa-bell bg-inactive-color', notificationListTitle: 'Johnny Depp', notificationListsubTitle: 'Today at 04:48 PM', notificationListDescription: 'E-25485 has assigned to the Employee Mark Buzz.'
      },
      {
        notificationIcon: 'fa fa-bell bg-inactive-color', notificationListTitle: 'Russell Crowe', notificationListsubTitle: 'Today at 04:48 PM', notificationListDescription: 'E-25485 has assigned to the Employee Mark Buzz.'
      },
      {
        notificationIcon: 'fa fa-bell bg-active-color', notificationListTitle: 'Steve Smith', notificationListsubTitle: 'Today at 04:48 PM', notificationListDescription: 'E-25485 has assigned to the Employee Mark Buzz.'
      },
      {
        notificationIcon: 'fa fa-bell bg-inactive-color', notificationListTitle: 'Robert De Niro', notificationListsubTitle: 'Today at 04:48 PM', notificationListDescription: 'E-25485 has assigned to the Employee Mark Buzz.'
      },
      {
        notificationIcon: 'fa fa-bell bg-inactive-color', notificationListTitle: 'Johnny Depp', notificationListsubTitle: 'Today at 04:48 PM', notificationListDescription: 'E-25485 has assigned to the Employee Mark Buzz.'
      },
      {
        notificationIcon: 'fa fa-bell bg-inactive-color', notificationListTitle: 'Russell Crowe', notificationListsubTitle: 'Today at 04:48 PM', notificationListDescription: 'E-25485 has assigned to the Employee Mark Buzz.'
      }

    ]
  }

  bellButton() {
    this.noficationshow = !this.noficationshow
  }
  closeButton() {
    this.noficationshow = false;
  }


}
