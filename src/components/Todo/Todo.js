import React, { PureComponent } from 'react';
import Card from '../Card';
import './Todo.css';
import withLocalstorage from '../../HOCs/withLocalstorage';

class Todo extends PureComponent {
  state = {
    inputValue: ''
  };

  getId() {
    const { savedData } = this.props;
    const biggest = savedData.reduce((acc, el) => Math.max(acc, el.id), 0);
    return biggest + 1;
  }

  handleChange = event => {
    this.setState({
      inputValue: event.target.value
    })
  };

  createNewRecordByEnter = event => {
    if(event.key === 'Enter'){
      this.createNewRecord()
    }
  };

  toggleRecordComplete = event => {
    const { savedData, saveData } = this.props;
    const id = event.target.dataset.todoId;
    const newData = savedData;        
    const ndx = newData.findIndex(item => item.id === +id);

    newData[ndx].isComplete = !newData[ndx].isComplete;
    saveData(newData);
  };

  createNewRecord = () => {
    const { inputValue } = this.state;
    const { savedData, saveData } = this.props;

    if (inputValue !== '') {
      const id = this.getId();
      const data = [{
        id: id,
        text: inputValue,
        isComplete: false
      }, ...savedData];

      saveData(data);

      this.setState({
        inputValue: ''
      });
    }
  };

  render() {
    const { savedData } = this.props;

    return (
      <Card title="Список дел">
        <div className="todo t-todo-list">
          {this.renderEmptyRecord()}
          {savedData.map(item => this.renderRecord(item))}
        </div>
      </Card>
    );
  }

  renderEmptyRecord() {
    const {inputValue} = this.state;

    return (
      <div className="todo-item todo-item-new">
        <input
          className="todo-input t-input"
          placeholder="Введите задачу"
          onChange={this.handleChange}
          onKeyPress={this.createNewRecordByEnter}
          value={inputValue}
        />
        <span className="plus t-plus" onClick={this.createNewRecord}>+</span>
      </div>
    );
  }

  renderRecord = record => {
    const { id, text, isComplete } = record;

    return (
      <div className="todo-item t-todo" key={id}>
        <p className="todo-item__text">{text}</p>
        <span
          className="todo-item__flag t-todo-complete-flag"
          data-todo-id={id}
          onClick={this.toggleRecordComplete}
        >
          {isComplete ? '[x]' : '[ ]'}
        </span>
      </div>
    );
  };
}

export default withLocalstorage('todo-app', [])(Todo);
