import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  tasks: { title: string, completed: boolean, editing: boolean }[] = [];

  addTask(taskInput: HTMLInputElement) {
    if (taskInput.value) {
      this.tasks.push({ title: taskInput.value, completed: false,editing: false });
      taskInput.value = ''; // Resetta il valore dell'input
    }
  }

  deleteTask(taskTitle: string) {
    const index = this.tasks.findIndex(task => task.title === taskTitle);
    if (index >= 0) {
      this.tasks.splice(index, 1);
    }
  }
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.tasks, event.previousIndex, event.currentIndex);
  }
  toggleTaskCompletion(index: number) {
    this.tasks[index].completed = !this.tasks[index].completed;
  }
  // editTask(index: number, taskTitle: string) {
  //   const editedTitle = prompt('Modifica Attività:', taskTitle);
  //   if (editedTitle !== null && editedTitle.trim() !== '') {
  //     this.tasks[index].title = editedTitle;
  //   }
  // }
  editTask(index: number) {
    this.tasks.forEach((task, i) => {
      task.editing = i === index;
    });
  }

  saveTask(index: number, taskInput: HTMLInputElement) {
    if (taskInput.value.trim()) {
      this.tasks[index].title = taskInput.value.trim();
      this.tasks[index].editing = false;
    }
  }
  
}

