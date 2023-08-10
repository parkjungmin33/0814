import React from 'react';

class TodoItem extends React.Component {
  state = {
    isEditing: false,
    editText: ''
  };

  //편집 모드
  startEditing = () => {
    this.setState({ isEditing: true, editText: this.props.todo.text });
  };

  //편집 취소할 때
  cancelEditing = () => {
    this.setState({ isEditing: false, editText: '' });
  };

  handleEditChange = e => {
    this.setState({ editText: e.target.value });
  };

  //수정 내용을 저장
  handleEditSave = () => {
    const { index, editTodo } = this.props;
    const { editText } = this.state;

    if (editText.trim() !== '') {
      editTodo(index, editText);
      this.setState({ isEditing: false, editText: '' });  //편집 모드 종료
    }
  };

  render() {
    const { todo, index, toggleTodoCompletion, deleteTodo } = this.props;
    const { isEditing, editText } = this.state;

    return (
      <li>
        <input
          type="checkbox" //할 일 완료 체크박스
          checked={todo.completed}
          onChange={() => toggleTodoCompletion(index)}
        />

        {isEditing ? ( //편집 중일 때 입력하는 부분 보여주기 
          <input
            type="text"
            value={editText}
            onChange={this.handleEditChange}
            onBlur={this.handleEditSave}
            autoFocus
          />
        ) : (
          <span
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
            onClick={this.startEditing}  //텍스트를 클릭해서 편집
          >
            {todo.text}
          </span>
        )}

        <button onClick={() => deleteTodo(index)}>삭제</button>
      </li>
    );
  }
}

export default TodoItem;