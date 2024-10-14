import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div class={styles.homeContainer}>
      <h2>Project Description: Todo App</h2>
      <h2>Instructions:</h2>
      <ul class = {styles.instructionsList}>
        <li><strong>Add New Todo:</strong> Enter your task in the input field and click the "Add" button.</li>
        <li><strong>Mark as Completed:</strong> Click the checkbox next to a todo to mark it as completed.</li>
        <li><strong>Delete Todo:</strong> Click the "Delete" button next to the todo you wish to remove.</li>
        <li><strong>Sort Todos:</strong> Use the "Sort by title" and "Sort by date" buttons to organize your tasks.</li>
      </ul>

      <p>View all tasks in one place:</p>
          <Link to="/" class = {styles.featureLink}>Here's to future wins!</Link>

      {/* <p class={styles.inspiration}>“Success is the sum of small efforts, repeated day in and day out.”</p>*/}
    </div> 
  );
};  


export default Home;