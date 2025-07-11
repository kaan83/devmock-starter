# DevMock Starter

This repository contains the backend and frontend for DevMock, a mock API tool for developers and testers.

---

## Backend

### Tech stack
- FastAPI
- Uvicorn
- SQLite (via SQLAlchemy)

### Setup and Run

1. Navigate to the project root (`devmock-starter`):

```bash
cd devmock-starter

    Install Python dependencies (preferably in a virtual environment):

pip install -r requirements.txt

    Start the backend server:

python run_backend.py

The backend server will be available at:
http://127.0.0.1:8000
Frontend
Tech stack

    React 18

    Vite

Setup and Run

    From the project root (devmock-starter), navigate to the frontend folder:

cd frontend

    Install npm dependencies:

npm install

    Start the frontend development server:

npm run dev

The frontend server will be available at:
http://localhost:5173
Notes

    Make sure backend is running before you start using the frontend, as frontend depends on backend API.

    To stop either server, use CTRL+C in the terminal.

    If you face issues, try clearing node_modules and reinstalling frontend dependencies.

    Backend uses FastAPI lifespan event for startup DB initialization.

    For development, both frontend and backend support hot reload.

Troubleshooting

    Backend ModuleNotFoundError:
    Run commands from the root directory and make sure your PYTHONPATH includes backend if needed.

    Frontend empty page or errors:
    Check console for errors, reinstall dependencies, or delete node_modules and run npm install again.