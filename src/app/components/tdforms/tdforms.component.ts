import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tdforms',
  templateUrl: './tdforms.component.html',
  styleUrls: ['./tdforms.component.scss'],
})
export class TdFormComponent implements OnInit {
  userForm = {
    defUserName: '',
    email: '',
    genere: '',
    question: '',
  };
  generi = [
    {
      label: 'uomo',
      value: 'uomo',
    },
    {
      label: 'donna',
      value: 'donna',
    },
  ];
  risposta = '';
  user: any = {
    username: '',
    email: '',
    secret: '',
    risposta: '',
    genere: '',
  };
  userGroup: any;
  constructor() {}
  @ViewChild('form', { static: true }) form!: NgForm;
  ngOnInit(): void {
    this.form.statusChanges?.subscribe((status) => {
      console.log('stato del form', status);
    });
  }
  generaUser() {
    this.form.form.patchValue({
      userInfo: {
        email: 'pippo@pippo.com',
        username: 'pippo',
      },
    });
  }
  sumbit() {
    console.log('Form Inviato', this.userForm);
    this.user.username = this.form.value.userInfo.username;
    this.user.email = this.form.value.userInfo.email;
    this.user.secret = this.form.value.userInfo.secret;
    this.user.risposta = this.form.value.userInfo.risposta;
    this.user.genere = this.form.value.userInfo.genere;
  }
}
