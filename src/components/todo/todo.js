import React, { useEffect, useState } from 'react';
import useForm from '../../hooks/form.js';

import { v4 as uuid } from 'uuid';
import { useSettingsContext } from '../context/Settings'
import Pagination from "../Pagination/Pagination";
import './todo.scss';

const ToDo = () => {

  const { currentPage,
    setCurrentPage,
    postsPerPage, showComplete, setShowComplete } = useSettingsContext();
  const [defaultValues] = useState({
    difficulty: 3,
  });

  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const [listOfCompleted, setListOfCompleted] = useState([]);
  const { handleChange, handleSubmit } = useForm(addItem, defaultValues);

  function addItem(item) {
    item.id = uuid();
    item.complete = false;
    console.log(item);
    setList([...list, item]);
  }

  function deleteItem(id) {
    const items = list.filter(item => item.id !== id);
    setList(items);
  }

  function deleteListItem(id) {
    const items = listOfCompleted.filter(item => item.id !== id);
    setListOfCompleted(items);
  }

  function toggleComplete(id) {
    const items = list.map(item => {
      if (item.id === id) {
        item.complete = !item.complete;
      }
      if (item.complete === true) {
        setListOfCompleted([...listOfCompleted, item])
        console.log('list Of Completed :>> ', listOfCompleted);
      }
      return item;
    });

    setList(items);
  }
  function toggleCompleteList(id) {
    const items = listOfCompleted.map(item => {
      if (item.id === id) {
        item.complete = !item.complete;
      }
      if (item.complete === false) {
        item = listOfCompleted.filter(item => item.id !== id)
      }
      return item;
    });

    setListOfCompleted(items);
  }

  const handleShow = () => {
    setShowComplete(!showComplete)
  }

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = list.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  useEffect(() => {
    let incompleteCount = list.filter(item => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
  }, [list, incomplete]);

  return (
    <>
      <header data-testid='header'>
        <h1>{incomplete} tasks pending</h1>
      </header>

      <form onSubmit={handleSubmit}>

        <h2 className='text-head'>Add Task</h2>

        <label>
          <span>Task</span>
          <input data-testid='input' onChange={handleChange} name="text" type="text" placeholder="Task Details" />
        </label>

        <label>
          <span>Assigned To</span>
          <input onChange={handleChange} name="assignee" type="text" placeholder=" Name" />
        </label>

        <label>
          <span>Difficulty</span>
          <input onChange={handleChange} defaultValue={defaultValues.difficulty} type="range" min={1} max={5} name="difficulty" />
        </label>

        <label>
          <button  data-testid='button' type="submit">Add Item</button>
        </label>
      </form>
      <button className='show' onClick={handleShow}>{!showComplete ? 'Completed Tasks' : 'Pending Tasks'}</button>
      {
        !showComplete ?
          currentPosts.map(item => {
            return (
              <div className='list-continuer'>
                {
                  !item.complete ? <div key={item.id} className='items'>
                    <div className='btn-list'>
                      <button onClick={() => deleteItem(item.id)}>x</button>
                    </div>
                    <p className='p-text'>
                      {item.text}
                      <div className='p-holder'>
                        <p className='p-assigned'><small>Assigned to: {item.assignee}</small></p>
                        <p className='p-difficulty'><small>Difficulty: {item.difficulty}</small></p>
                      </div>
                    </p>
                    <div className='checkbox'>
                      <input type="checkbox" onClick={() => toggleComplete(item.id)} />
                      <label htmlFor="item">Complete</label>
                    </div>
                    <hr />
                  </div>
                    : <p className='p-complete'>Task Completed...</p>
                }
              </div>
            )
          })
          : <div>
            {
              !listOfCompleted.complete ? listOfCompleted.map(item => {
                return (
                  <div key={item.id} className='items-complete'>
                    <div className='btn-list-complete'>
                      <button onClick={() => deleteListItem(item.id)}>x</button>
                    </div>
                    <p className='p-text-complete'>
                      {item.text}
                      <div className='p-holder-complete'>
                        <p className='p-assigned-complete'><small>Assigned to: {item.assignee}</small></p>
                        <p className='p-difficulty-complete'><small>Difficulty: {item.difficulty}</small></p>
                      </div>
                    </p>
                    <div className='checkbox-complete'>
                      <label htmlFor="item" onClick={() => toggleCompleteList(item.id)}>Completed</label>
                    </div>
                    <hr />
                  </div>
                )
              })
                : 'No Task Completed...'
            }
          </div>
      }
      <div className='page'>
        <Pagination postsPerPage={postsPerPage}
          totalPosts={list.length}
          paginate={paginate} />
      </div>
    </>
  );
};

export default ToDo;