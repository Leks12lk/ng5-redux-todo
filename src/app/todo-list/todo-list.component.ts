import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from "../store";
import { Actions } from "../actions";

@Component({
	selector: 'app-todo-list',
	templateUrl: './todo-list.component.html',
	styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
	@select() todos;

	constructor(private ngRedux: NgRedux<IAppState>) { }

	ngOnInit() {
	}	

	toggleTodo(todo) {
		this.ngRedux.dispatch({type: Actions.TOGGLE_TODO, id: todo.id})
	}

	removeTodo(todo) {
		this.ngRedux.dispatch({type: Actions.REMOVE_TODO, id: todo.id})
	}

}
