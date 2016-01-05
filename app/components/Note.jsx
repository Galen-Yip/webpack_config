import React from 'react';

export default class Note extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            editing: false
        };
    }

    renderEdit = () => {
        return <input type="text"
            autoFocus={true}
            placeholder={this.props.task}
            onBlur={this.finishEdit}
            onKeyPress={this.checkEnter} />
    }

    renderNote = () => {
        return (
            <div onClick={this.edit}>
                <span className="task">{this.props.task}</span>
                <button className="delete-note" onClick={this.props.onDelete}>x</button>
            </div>
        )
    }

    edit = () => {
        this.setState({
            editing: true
        })
    }

    checkEnter = (e) => {
        if(e.key === "Enter") {
            this.finishEdit(e)
        }
    }

    finishEdit = (e) => {

        // 主要的逻辑在这里，通知App，自己设置了新的prop
        if(this.props.onEdit) {
            this.props.onEdit(e.target.value)
        }


        this.setState({
            editing: false
        })
    }

    render() {
        if(this.state.editing) {
            return this.renderEdit()
        }

        return this.renderNote()
    }
}















