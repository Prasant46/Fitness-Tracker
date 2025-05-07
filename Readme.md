# FitnessTracker App

A full-stack MERN application for tracking workouts and monitoring fitness progress.

## Live Demo

- Live Link: [https://fitness-tracker-frontend-5q02.onrender.com](https://fitness-tracker-frontend-5q02.onrender.com/)


## Features

- **User Authentication**: Secure signup/login functionality with JWT tokens
- **Workout Tracking**: Add and monitor daily workouts with details like sets, reps, weight
- **Dashboard Analytics**: Visual representation of workout data using charts
- **Progress Monitoring**: Track calories burned and workout patterns
- **Responsive Design**: Mobile-friendly interface built with Material-UI

## Tech Stack

### Frontend
- React.js
- Redux Toolkit for state management  
- Material-UI components
- Styled Components
- Chart.js for data visualization
- Axios for API requests

### Backend
- Node.js & Express.js
- MongoDB with Mongoose
- JWT Authentication
- RESTful API architecture

## Getting Started

### Prerequisites
- Node.js
- MongoDB
- Git

### Installation

1. Clone the repository
```bash
git clone https://github.com/prasant46/Fitness-Tracker.git
```

2. Install Frontend Dependencies
```bash
cd frontend
npm install
```

3. Install Backend Dependencies
```bash
cd ../server
npm install
```

4. Configure Environment Variables
Create .env file in server directory:
```env
MONGODB_URL=your_mongodb_uri
JWT=your_jwt_secret
```

5. Run the Application
```bash
# Run frontend (in frontend directory)
npm run dev

# Run backend (in server directory)
node index.js
```

## API Endpoints

- `POST /api/user/signup`: Register new user
- `POST /api/user/signin`: User login
- `GET /api/user/dashboard`: Get user dashboard data
- `GET /api/user/workout`: Get user workouts
- `POST /api/user/workout`: Add new workout

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Author

Prasanta Debnath
- GitHub: [GitHubProfile](https://github.com/prasant46)
