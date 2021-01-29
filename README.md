# Simple Todo List

##AC:

The user can:

1. read a list of tasks.
2. add a task using the mouse or keyboard.
3. mark any task as completed, using the mouse or keyboard.
4. delete any task, using the mouse or keyboard.
5. edit any task, using the mouse or keyboard.
6. view a specific subset of tasks: All tasks, only the active task, or only the completed tasks.

data: todo[]
[
{},
{},
{}
]

type Category {
work: string,
selfCare: string,
appointments: string,
home: string
}

type Todo {
title: string,
id: string,
complete: boolean,
category: Category
priority: "black" | "yellow" | "red
deadline: Date()
}

const todo1: {
id: "9hgb46",
title: "Learn React",
complete: false,
category: "work"
relevance: "black"
deadline: "03-02-2021"
}
