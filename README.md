# Task Manager API

This repository contains the code for a Task Manager API, which allows users to perform various operations on tasks.

## Installation

To use this API, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/task-manager.git
   ```

2. Install the dependencies:

   ```bash
   cd task-manager
   npm install
   ```

3. Set up the database:

   - Create a `tasks.json` file in the root directory with the following format:

     ```json
     {
       "tasks": []
     }
     ```

4. Start the server:

   ```bash
   npm start
   ```

   The server will start running on `http://localhost:3000`.

## API Endpoints

The following endpoints are available in the Task Manager API:

### Retrieve all tasks

- Method: GET
- URL: `/tasks`

### Retrieve a single task by its ID

- Method: GET
- URL: `/tasks/:id`

### Create a new task

- Method: POST
- URL: `/tasks`
- Request Body: JSON object containing task details (`id`, `title`, `description`, `completed`)
- Sample request body - {"id":1,"title":"Title goes here","description":"Description goes here","completed":true,"priority":"low/medium/high"}

### Update an existing task by its ID

- Method: PUT
- URL: `/tasks/:id`
- Request Body: JSON object containing task details to update (`title`, `description`, `completed`)

### Delete a task by its ID

- Method: DELETE
- URL: `/tasks/:id`
