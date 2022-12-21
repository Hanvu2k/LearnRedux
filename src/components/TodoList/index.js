import React, { useState } from 'react';
import { Col, Row, Input, Button, Select, Tag } from 'antd';
import Todo from '../Todo';
import { useDispatch, useSelector } from "react-redux"
import { v4 as uuidv4 } from 'uuid'
import { todosRemainingSelector } from '../../redux/selectors';
import todoSlice from './todoSlice'

export default function TodoList() {
  const [todoName, setTodoName] = useState('')
  const [priority, setPriority] = useState('Medium')

  const dispatch = useDispatch()
  const todoList = useSelector(todosRemainingSelector)

  const handleAddJob = () => {
    dispatch(todoSlice.actions.addTodoAction({
      id: uuidv4,
      name: todoName,
      priority: priority,
      completed: false,
    }))

    setTodoName('')
    setPriority('Medium')
  }

  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {todoList && todoList.map((item) => {
          return (
            <React.Fragment key={item.id}>
              <Todo id={item.id} name={item.name} prioriry={item.priority} completed={item.completed} />
            </React.Fragment>
          )
        })}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input value={todoName} onChange={(event) => setTodoName(event.target.value)} />
          <Select defaultValue="Medium" value={priority} onChange={(value) => setPriority(value)}>
            <Select.Option value='High' label='High'>
              <Tag color='red'>High</Tag>
            </Select.Option>
            <Select.Option value='Medium' label='Medium'>
              <Tag color='blue'>Medium</Tag>
            </Select.Option>
            <Select.Option value='Low' label='Low'>
              <Tag color='gray'>Low</Tag>
            </Select.Option>
          </Select>
          <Button type='primary' onClick={handleAddJob}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
