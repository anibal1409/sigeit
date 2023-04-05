import {
  Component,
  EventEmitter,
  Inject,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { StateService } from '../../state';
import { UserVM } from '../model';
import { UsersService } from '../users.service';

@Component({
  selector: 'tecnops-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
})
export class ViewComponent implements OnInit, OnDestroy {
  @Output()
  closed = new EventEmitter();
  id?: number;
  submitDisabled = true;
  sub$ = new Subscription();
  userView: UserVM = {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    status: false,
    role: '',
  };

  loading = false;

  constructor(
    private usersService: UsersService,
    @Inject(MAT_DIALOG_DATA) public data: UserVM,
    private stateService: StateService
  ) {}

  ngOnInit(): void {
    this.sub$.add(
      this.usersService.getLoading$().subscribe((loading) => {
        this.stateService.setLoading(loading);
      })
    );
    if (this.data.id) {
      this.id = this.data.id;
      this.sub$.add(
        this.usersService
          .find$({ id: this.id })
          .subscribe((user: UserVM | null) => {
            if (user) {
              user.role = user.role
                .replace(/([A-Z])/g, ' $1')
                .replace(/^./, function (str) {
                  return str.toUpperCase();
                });
              this.userView = user;
            }
          })
      );
    }
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }

  clickClosed(): void {
    this.closed.emit();
  }
}
