import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { deleteUser, editUser } from 'src/app/store/user.action';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent {
  @Input() user!: any;
  isEditing = false;

  constructor(private readonly store: Store<AppState>) { }

  save(id: number, updatedName: any) {
    this.store.dispatch(editUser({ id, updatedName }));
  }

  delete(id: number) {
    this.store.dispatch(deleteUser({ id }));
  }
}
