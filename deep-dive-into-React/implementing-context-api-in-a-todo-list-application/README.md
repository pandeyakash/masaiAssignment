## Overview

The ToDo Application is a simple task management tool built using React. It allows users to create, manage, and view their tasks efficiently. The application consists of a form for inputting task details and a list to display the created tasks, utilizing the Context API for state management.

## Components

### ToDoForm

The `ToDoForm` component provides an interface for users to enter new tasks. It includes three input fields:

- **Task Title**: A brief title for the task.
- **Task Description**: A detailed description of the task.
- **Username**: The name of the user associated with the task.

#### Features

- Utilizes React's `useRef` to manage input fields efficiently.
- Integrates with the global context (`ToDoContext`) to handle adding new todos.
- Resets the input fields upon successful submission, enhancing user experience.

#### Usage

To use the `ToDoForm`, simply import it and render it within your application:

### ToDoList

The `ToDoList` component displays all the tasks created using the `ToDoForm`. It renders each task in a clean, ordered list format.

#### Features

- Uses React's `useContext` to access the list of todos from the `ToDoContext`.
- Dynamically renders the list of todos, providing a seamless viewing experience.
- Each task displays its title, description, and associated username.

## Context API

The Context API is a feature in React that allows for the sharing of state and functionalities across components without the need for prop drilling. This is especially useful in the ToDo application where multiple components require access to the same data.

### ToDoContextProvider

The `ToDoContextProvider` is the context provider for the ToDo application. It manages the global state of the todos and provides a method to add new tasks.

#### Features

- Creates a global context using `React.createContext()`.
- Maintains the state of todos using the `useState` hook.
- Provides the `addTodo` function, which takes the title, description, and username as arguments, allowing new todos to be added to the state.
