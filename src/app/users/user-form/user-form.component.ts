import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { addUser, deleteUser } from 'src/app/store/user.action';
import { User } from '..';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent {
  userName = new FormControl('');
  users$ = this.store.select('user');
  _newId = 11;

  constructor(private store: Store<AppState>) { }

  addUser(name: string): void {
    this.users$.subscribe(users => {
      this._newId = this.generateId(users);
    });

    const user = {
      id: this._newId,
      name
    };
    this.store.dispatch(addUser({ payload: user }));
  }

  deleteUser(id: number): void {
    this.store.dispatch(deleteUser({ id }));
  }

  private generateId(users: User[]): number {
    return users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 11;
  }
}
