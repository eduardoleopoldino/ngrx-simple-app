import { Component, QueryList, ViewChildren } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/app.state';
import { deleteAllUsers } from 'src/app/store/user.action';
import { UserDetailComponent } from '../user-detail/user-detail.component';
import { User } from '../user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  @ViewChildren(UserDetailComponent) userCmp!: QueryList<UserDetailComponent>;
  users$!: Observable<User[]>;

  constructor(private readonly store: Store<AppState>) {
    this.users$ = this.store.select('user');
  }

  editAllUsers(): void {
    this.userCmp.forEach(cmp => cmp.isEditing = true);
  }

  deleteAllUsers(): void {
    this.store.dispatch(deleteAllUsers());
  }
}
