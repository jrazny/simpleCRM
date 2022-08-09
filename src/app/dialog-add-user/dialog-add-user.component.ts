import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-dialog-add-user, datepicker-actions-example',
  templateUrl: './dialog-add-user.component.html'
})

export class DialogAddUserComponent implements OnInit {

  user: User = new User();
  birthDate!: Date;

  constructor(public dialog: MatDialog, private firestore: AngularFirestore) { }

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(DialogAddUserComponent);
  }

  saveUser() {
    this.user.birthDate = this.birthDate.getTime();
    console.log('current user is', this.user)

    this.firestore
    .collection('users')
    .add(this.user.toJSON())
    .then((result: any) => {
      console.log('Adding user finished', result);
    });
  }

}
