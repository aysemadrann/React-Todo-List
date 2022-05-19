import './style.scss';
import React, { Component } from 'react';
import Navbar from '../../Components/Navbar';

export default class Todo extends Component {
    state = {
        todoInput: '',
        todoList: [
            {
                id: 1,
                checked: true,
                description: 'yemek yenilecek'
            },
            {
                id: 2,
                checked: false,
                description: 'ödev yapılacak'
            },
            {
                id: 3,
                checked: false,
                description: 'spor yapılacak'
            },
            {
                id: 4,
                checked: true,
                description: 'ders çalışılacak'
            },

        ],
        todoEditedItemIndex: null,
    }

    // todoList Functions
    // Create an item
    createTodoItem = () => {
        const todoInput = this.state.todoInput;

        if (todoInput.length) {
            const todoList = [...this.state.todoList];
            let newIndex = 1;

            if (todoList.length) {
                newIndex = todoList[todoList.length - 1].id + 1;
            }
            
            const todoItem = {
                id: newIndex,
                checked: false,
                description: todoInput
            };

            todoList.push(todoItem);
            this.setState({
                todoList: todoList,
                todoInput: ''
            })
            setTimeout(() => {
                console.log(this.state.todoList);
            }, 1000);
        } else {
            alert('Fill the input')
        }
    }
    // Find an item
    findTodoItem = (todoId) => {
        const index = this.state.todoList.findIndex((item) => item.id === todoId);
        return index;
    }
    // Edit an item
    selectTodoItemAsEdited = (todoId) => {
        const index = this.findTodoItem(todoId);
        const description = this.state.todoList[index].description;

        this.setState({ todoEditedItemIndex: index, todoInput: description });
    }

    editTodoItem = () => {
        const todoList = [...this.state.todoList];
        const { todoEditedItemIndex, todoInput } = this.state;
        todoList[todoEditedItemIndex].description = todoInput;

        this.setState({ todoList: todoList });
        this.cancelEditItem();

    }

    // Cancel edit item
    cancelEditItem = () => {
        this.setState({ todoEditedItemIndex: null, todoInput: '' })
    }

    // Delete an item
    deleteTodoItem = (todoId) => {
        const todoList = this.state.todoList.filter((item) => item.id !== todoId);

        this.setState({ todoList: todoList });
    }
    // Delete all items
    clearTodoItems = () => {
        this.setState({ todoList: [] })
    }

    // Change List checked
    changeTodoItemChecked = (todoId) => {
        const todoList = [...this.state.todoList];
        const index = this.findTodoItem(todoId);
        todoList[index].checked =  !todoList[index].checked;
        this.setState({ todoList: todoList });
    }

    render() {
        const { todoInput, todoList, todoEditedItemIndex } = this.state;

        return (<div id='todo-page' className='page'>
            <Navbar />
            <div className='content'>
                <div className='todo'>
                    <div className='todo-input'>
                        <input
                            type="text"
                            className='p-input'
                            value={todoInput}
                            onChange={(e) => this.setState({ todoInput: e.target.value })} />

                        {
                            todoEditedItemIndex === null ?
                                <button
                                    onClick={this.createTodoItem}
                                    className='p-button'>Add</button>
                                :
                                <>
                                    <button className='s-button' onClick={this.editTodoItem}>Edit</button>
                                    <button className='w-button' onClick={this.cancelEditItem}>Cancel</button>
                                </>
                        }
                    </div>
                    <div className='todo-list'>
                        <button className='clear-list p-button' onClick={this.clearTodoItems}>Clear All Items</button>
                        <ul>
                            {
                                todoList.length ?
                                    todoList.map(todoItem => {
                                        return (
                                            <li style={{ backgroundColor:  todoItem.checked ? '#d4edca' : '#f3d5d5' }} key={todoItem.id}>
                                                <input
                                                    type="checkbox"
                                                    checked={todoItem.checked}
                                                    onChange={() => this.changeTodoItemChecked(todoItem.id)}
                                                    className='p-checkbox' />
                                                <span>{todoItem.description}</span>
                                                <button className='edit-button s-button' onClick={() => this.selectTodoItemAsEdited(todoItem.id)}>Edit</button>
                                                <button className='delete-button w-button' onClick={() => this.deleteTodoItem(todoItem.id)}>Delete</button>
                                            </li>
                                        )
                                    })
                                    :
                                    <span>There is no todo.</span>
                            }

                        </ul>
                    </div>
                </div>
            </div>
        </div>

        )
    }
}
