# Gemini AI Chatbot

A professional-grade chatbot application built with Next.js and Python, powered by Google's Gemini AI.

## Project Structure
```
.
├── frontend/           # Next.js frontend application
└── backend/           # Python FastAPI backend
```

## Features
- Real-time chat interface
- Integration with Google Gemini AI
- Responsive design
- Professional UI/UX
- TypeScript support
- REST API backend

## Setup Instructions

### Frontend Setup
1. Navigate to the frontend directory:
```bash
cd frontend
npm install
npm run dev
```

### Backend Setup
1. Navigate to the backend directory:
```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: .\venv\Scripts\activate
pip install -r requirements.txt
python main.py
```

### Environment Variables
Create `.env` files in both frontend and backend directories with the following variables:

Frontend (.env.local):
```
NEXT_PUBLIC_API_URL=http://localhost:8000
```

Backend (.env):
```
GEMINI_API_KEY=your_gemini_api_key
```

## Development
- Frontend runs on: http://localhost:3000
- Backend runs on: http://localhost:8000

## Technologies Used
- Next.js 15
- React
- TypeScript
- Tailwind CSS
- Python
- FastAPI
- Google Gemini AI

## License
MIT 