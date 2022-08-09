import { Component, OnInit } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-dialog-add-user, datepicker-actions-example',
  templateUrl: './dialog-add-user.component.html',
})
export class DialogAddUserComponent implements OnInit {

  user: User = new User();
  birthDate!: Date;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(DialogAddUserComponent);
  }

  saveUser() {
    this.user.birthDate = this.birthDate.getTime();
    console.log('current user is', this.user)
  }

}
