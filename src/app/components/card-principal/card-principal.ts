import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { FooterActionBar } from '../footer-action-bar/footer-action-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { TaskList } from '../task-list/task-list';
import { Task } from '../../../type';

@Component({
  selector: 'app-card-principal',
  imports: [
    MatCardModule,
    MatChipsModule,
    MatProgressBarModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    FooterActionBar,
    TaskList,
  ],
  templateUrl: './card-principal.html',
  styleUrl: './card-principal.css',
})
export class CardPrincipal implements OnInit {
  @ViewChild('taskInputRef') taskInputRef!: ElementRef<HTMLInputElement>;
  @ViewChild('taskListComponent') taskListComponent!: TaskList;
  tasks: Task[] = [];
  private readonly LOCAL_STORAGE_KEY = 'todoList_tasks';

  ngOnInit() {
    this.loadTasksFromLocalStorage();
  }

  private loadTasksFromLocalStorage() {
    try {
      const savedTasks = localStorage.getItem(this.LOCAL_STORAGE_KEY);
      if (savedTasks) {
        this.tasks = JSON.parse(savedTasks);
      }
    } catch (error) {
      console.error('Erro ao carregar tarefas do Local Storage:', error);
      this.tasks = [];
    }
  }

  private saveTasksToLocalStorage() {
    try {
      localStorage.setItem(this.LOCAL_STORAGE_KEY, JSON.stringify(this.tasks));
    } catch (error) {
      console.error('Erro ao salvar tarefas no Local Storage:', error);
    }
  }

  addTask() {
    const inputValue = this.taskInputRef.nativeElement.value;

    if (!inputValue || inputValue.trim() === '') {
      alert('Por favor, digite uma tarefa antes de adicionar!');
      return;
    }

    const newTask: Task = {
      id: this.generateId(),
      name: inputValue.trim(),
      completed: false,
    };

    this.tasks.push(newTask);
    this.taskInputRef.nativeElement.value = '';

    this.saveTasksToLocalStorage();
  }

  onTaskToggled(task: Task) {
    task.completed = !task.completed;

    this.saveTasksToLocalStorage();
  }

  onClearListClicked() {
    this.tasks = []; 

    this.saveTasksToLocalStorage();
  }

  onClearCompletedClicked() {
    this.tasks = this.tasks.filter((task) => !task.completed);

    this.saveTasksToLocalStorage();
  }

  onSaveClicked() {
    this.saveTasksToLocalStorage();
    alert('Lista de tarefas salva com sucesso!');
  }

  private generateId(): string {
    return Date.now().toString() + Math.random().toString(36).substr(2, 9);
  }
}
