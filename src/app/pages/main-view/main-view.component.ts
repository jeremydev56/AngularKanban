import { Component, OnInit } from '@angular/core';
// eslint-disable-next-line sort-imports
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Board } from 'src/app/models/board.model';
import { Column } from 'src/app/models/column.model';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss'],
})
export class MainViewComponent implements OnInit {
  constructor() {}

  // pour la construction du tableau, on reprend les paramètres évoqués dans le fichier board.model.ts
  board: Board = new Board('This is my new board.', [
    new Column('Ideas', [
      'Learning Flutter',
      'Create my Sports app',
      'Learning React',
      'Create my U.S. Flags app',
      'Restart again',
    ]),

    new Column('To Do', [
      'Learning VueJS',
      'Building my portfolio',
      'Create my Quiz app',
      'Restart again',
    ]),

    new Column('In Progress', [
      'Learning Angular',
      'Building a Kanban',
      'Create my Hotel WebApp',
      'Restart again',
    ]),

    new Column('Done', [
      'Learning JavaScript',
      'Create my Weather Webapp',
      "You've finally done it : CONGRATULATIONS !",
    ]),
  ]);


  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {}

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
