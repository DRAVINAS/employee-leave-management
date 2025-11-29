# Employee Leave Management

This repo contains a backend (Node/Express/Mongoose) and a frontend (React) for an Employee Leave Management system.

---

## Prerequisites

- Node.js (v16+ recommended)
- npm (comes with Node)
- MongoDB (local) or a MongoDB Atlas connection string
- (Optional) Git

---

## Project structure (important files)

- `backend/` — Express API
  - `src/app.js` — main server entry
  - `.env` — environment variables (not checked in)
- `frontend/` — React app
  - `public/` and `src/`
- `screenshots/` — place screenshots here and they'll display in this README

---

## Environment (backend)

Create a `.env` file inside the `backend` folder with at least the following values:

```
MONGO_URI=mongodb://localhost:27017/employee_leave_management
PORT=5000
JWT_SECRET=your_jwt_secret_key_here
```

If using MongoDB Atlas, replace `MONGO_URI` with your Atlas connection string.

---

## Run (development)

Open two terminals (one for backend, one for frontend). Use PowerShell on Windows as shown below.

Backend (start API):

```powershell
cd .\backend
npm install
# ensure MongoDB is running (or use Atlas)
npm run dev
```

You should see output similar to:

- `Server running on port 5000`
- `MongoDB connected`

Frontend (start React):

```powershell
cd .\frontend
npm install
npm start
```

The frontend will open in your browser (usually http://localhost:3000). If your `frontend/package.json` uses `vite`, run `npm run dev` instead of `npm start`.

---

## Build (production)

To build the frontend for production (if using `react-scripts`):

```powershell
cd .\frontend
npm run build
```

To run the backend in production, ensure `PORT` and `MONGO_URI` are set and run:

```powershell
cd .\backend
npm start
```

---

## Screenshots

Place your screenshots in the `screenshots/` folder. Example filenames used here:

- `screenshots/backend-running.png` — backend terminal showing `Server running on port 5000` and `MongoDB connected`
- `screenshots/frontend-running.png` — browser screenshot of the running frontend

To embed them in this README (they will appear when images exist):

![Backend running](./screenshots/backend-running.png)

![Frontend running](./screenshots/frontend-running.png)

How to capture screenshots on Windows:

- Press `Windows + Shift + S` to open the Snipping Tool, select the area, then paste or save the image to `screenshots/`.
- Or open PowerShell and run `Start-Process ms-screenclip:` then save the image.






