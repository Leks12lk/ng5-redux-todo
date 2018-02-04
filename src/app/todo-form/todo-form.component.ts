import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from "../store";
import { ITodo } from "../todo";
import { Actions } from "../actions";

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
  model: ITodo = {
		id: 0,
		isCompleted: false,
		priority: "low",
		responsible: "",
		description: ""
  }
  
  constructor(private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
  }

  addTodo() {
		this.ngRedux.dispatch({type: Actions.ADD_TODO, todo: this.model})
	}

}
