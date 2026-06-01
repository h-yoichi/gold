# gold

Simple browser-based task planner app.

## Run locally

This app is static HTML/CSS/JS, so you can run it with any local web server.

### Option 1: Python

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

### Option 2: VS Code Live Server

Open `index.html` with Live Server if you already use that extension.

## Features

- Add tasks
- Mark tasks as completed
- Filter by `All`, `Active`, `Completed`
- Delete tasks
- Clear all completed tasks
- Data is saved in browser `localStorage`
