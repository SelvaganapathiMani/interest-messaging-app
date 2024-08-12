# Interest Messaging App

This project is a full-stack web application where users can send interest messages to each other. If an interest is accepted, both users can chat with each other in real-time. The backend is built with Django and Django Channels, and the frontend is built with React.

## Prerequisites and Dependencies

### Prerequisites

- **Python 3.x**: Make sure you have Python installed. You can download it from [python.org](https://www.python.org/).
- **Node.js and npm**: Ensure you have Node.js and npm installed. You can download them from [nodejs.org](https://nodejs.org/).
- **Redis**: This application uses Redis for handling WebSocket connections with Django Channels. Install Redis using your system's package manager.
  - On Ubuntu: `sudo apt-get install redis-server`
  - On macOS: `brew install redis`

### Dependencies

#### Backend (Django)

- Django 3.x or 4.x
- Django REST framework
- Django Channels
- Channels Redis

#### Frontend (React)

- React
- Axios
- React Router DOM

## Step-by-Step Installation and Setup Instructions

### Backend Setup (Django)

1. **Clone the repository**:

   ```bash
   git clone <repository-url>
   cd interest_messaging
   ```

2. **Create a virtual environment** and activate it:

   ```bash
   python3 -m venv venv
   source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
   ```

3. **Install the required Python packages**:

   ```bash
   pip install -r requirements.txt
   ```

4. **Apply the migrations** to set up the database:

   ```bash
   python manage.py migrate
   ```

5. **Create a superuser** (optional, for accessing the Django admin):

   ```bash
   python manage.py createsuperuser
   ```

6. **Run the Redis server** (required for WebSocket functionality):

   ```bash
   redis-server
   ```

7. **Start the Django development server**:

   ```bash
   python manage.py runserver
   ```

### Frontend Setup (React) --> link https://github.com/SelvaganapathiMani/interest-messaging-frontend

1. **Navigate to the frontend directory**:

   ```bash
   cd interest-messaging-frontend
   ```

2. **Install the required npm packages**:

   ```bash
   npm install
   ```

3. **Start the React development server**:

   ```bash
   npm start
   ```

## How to Run the Application

1. **Ensure Redis is running**:

   ```bash
   redis-server
   ```

2. **Start the Django backend server**:

   ```bash
   python manage.py runserver
   ```

3. **Start the React frontend server**:

   ```bash
   npm start
   ```

4. **Access the application**:

   Open your web browser and navigate to `http://localhost:3000/` to access the React frontend. The Django backend will be running at `http://127.0.0.1:8000/`.

## Additional Information

- **API Endpoints**: The backend API is accessible under `http://127.0.0.1:8000/api/`.
- **WebSocket Communication**: WebSocket connections are established at `ws://127.0.0.1:8000/ws/chat/<room_name>/` for real-time messaging.
- **CORS Configuration**: The backend is configured to allow requests from the frontend running on `http://localhost:3000/`.
- **Django Admin**: You can access the Django admin interface at `http://127.0.0.1:8000/admin/` using the superuser credentials you created.

### Troubleshooting

- **WebSocket Issues**: Ensure Redis is running and the correct WebSocket URL is being used.
- **Django Server Errors**: Check the Django logs in your terminal for any errors related to migrations, database connections, or routing issues.
- **Frontend Build Issues**: If you encounter errors while running the React app, ensure all dependencies are installed and correctly configured.

### Future Enhancements

- **User Profiles**: Implement user profiles to provide more information and personalization.
- **Enhanced Chat Features**: Add features like message notifications, typing indicators, and file sharing.
- **Deployment**: Consider deploying the application to Heroku (for the backend) and Netlify/Vercel (for the frontend).


Thanks 