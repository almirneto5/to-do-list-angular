import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { Task } from '../../../type';

@Component({
  selector: 'app-task-list',
  imports: [MatChipsModule],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList {
  @Input() tasks: Task[] = [];
  @Output() taskToggled = new EventEmitter<Task>();

  toggleTaskCompletion(task: Task) {
    console.log(`Emitindo evento para alternar tarefa: "${task.name}"`);
    this.taskToggled.emit(task);
  }
}
