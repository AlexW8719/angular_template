import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {IProfile} from './interfaces/client/profile.interface';
import {AccountService} from './services/api/client/account.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'angular_template';
  users!: IProfile[];
  constructor(private profileService: AccountService,) {
  }

  ngOnInit() {
    this.getAccounts();
  }

  private getAccounts(): void {
    this.profileService.getAllProfiles().subscribe({
      next: result => {
        console.log(result);
      },
      error: err => {
        console.error(err)}
    })
  }
}
