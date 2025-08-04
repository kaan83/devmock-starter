# DevMock 🚀
*Mock APIs Made Simple*

A modern, developer-friendly tool for creating and managing mock API endpoints. Perfect for frontend development, testing, and API prototyping.

## ✨ Features

### 🎯 **Professional Landing Page**
- Modern, responsive design with smooth animations
- Hero section showcasing DevMock's value proposition
- Feature cards highlighting key capabilities
- Built-in waitlist functionality for user validation

### ⚡ **Backend API**
- **FastAPI** powered REST API
- **Waitlist Management**: Email collection with validation
- **SQLite Database**: Automatic table creation and management
- **Request Logging**: Track API usage and analytics
- **Mock Endpoints**: Create custom API responses (coming soon)

### 🎨 **Frontend Experience**
- **React 18** with modern hooks
- **Framer Motion** animations throughout
- **Tailwind CSS** for responsive design
- **React Hook Form** for validated form handling
- **Smooth scrolling** navigation

### 📊 **Marketing Validation**
- Ready-to-publish content for Dev.to and Reddit
- Engagement strategy with success metrics
- Interest validation framework

---

## 🚀 Quick Start

### Prerequisites
- Python 3.8+
- Node.js 16+
- npm or yarn

### Backend Setup

1. **Navigate to backend directory:**
```bash
cd backend
```

2. **Install Python dependencies:**
```bash
pip install -r requirements.txt
```

3. **Start the backend server:**
```bash
python main.py
```

**Backend will be available at:** `http://127.0.0.1:8000`
- API Documentation: `http://127.0.0.1:8000/docs`
- Waitlist endpoint: `POST /waitlist/`

### Frontend Setup

1. **Navigate to frontend directory:**
```bash
cd devmock-frontend
```

2. **Install npm dependencies:**
```bash
npm install
```

3. **Start the development server:**
```bash
npm run dev
```

**Frontend will be available at:** `http://localhost:5173`

---

## 🏗️ Tech Stack

### Backend
- **FastAPI** - Modern Python web framework
- **SQLAlchemy** - Database ORM
- **SQLite** - Lightweight database
- **Pydantic** - Data validation with email support
- **Uvicorn** - ASGI server

### Frontend
- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Hook Form** - Form validation

---

## 📁 Project Structure

```
devmock_starter/
├── backend/
│   ├── api/routes.py          # API endpoints
│   ├── models/                # Database models
│   │   ├── waitlist.py        # Waitlist model
│   │   └── mock_endpoint.py   # Mock endpoint model
│   ├── schemas/               # Pydantic schemas
│   ├── services/              # Business logic
│   ├── main.py               # FastAPI application
│   └── requirements.txt      # Python dependencies
├── devmock-frontend/
│   ├── src/
│   │   ├── components/       # React components
│   │   │   ├── Hero.jsx      # Landing page hero
│   │   │   ├── Features.jsx  # Feature showcase
│   │   │   ├── WaitlistForm.jsx # Email collection
│   │   │   └── Footer.jsx    # Site footer
│   │   ├── App.jsx          # Main application
│   │   └── main.jsx         # React entry point
│   └── package.json         # Node dependencies
└── marketing/               # Content for validation
    ├── devto-post.md       # Dev.to blog post
    ├── reddit-webdev-post.md
    ├── reddit-sideproject-post.md
    └── engagement-strategy.md
```

---

## 🎯 Available Endpoints

### Waitlist API
```http
POST /waitlist/
Content-Type: application/json

{
  "email": "developer@example.com"
}
```

**Response:**
```json
{
  "id": 1,
  "email": "developer@example.com",
  "created_at": "2025-01-08T10:30:00Z",
  "is_notified": false
}
```

### Mock Endpoints (Existing)
- `GET /mocks/` - List mock endpoints
- `POST /mocks/` - Create mock endpoint
- `GET|POST|PUT|DELETE /{path}` - Dynamic mock responses

---

## 🌟 What's New

### Recent Updates
- ✅ Professional landing page with animations
- ✅ Waitlist functionality with email validation
- ✅ Modern UI components with Framer Motion
- ✅ Marketing content for interest validation
- ✅ Database integration for user management

### Coming Soon
- 🔧 Visual mock endpoint creation interface
- 📊 Enhanced request analytics dashboard
- 🐳 Docker deployment setup
- 👥 Team collaboration features
- 📱 Mobile-optimized interface

---

## 📈 Marketing & Validation

Ready-to-use content for validating market interest:

- **Dev.to Post**: Technical deep-dive with code examples
- **Reddit Posts**: Community-specific content for r/webdev and r/SideProject
- **Engagement Strategy**: Metrics tracking and success criteria
- **Landing Page**: Professional presentation with waitlist capture

**Validation Goals:**
- 100+ waitlist signups in 2 weeks
- Community feedback on feature priorities
- Market validation for business model

---

## 🔧 Development

### Running Both Servers
```bash
# Terminal 1 - Backend
cd backend && python main.py

# Terminal 2 - Frontend  
cd devmock-frontend && npm run dev
```

### Building for Production
```bash
# Frontend build
cd devmock-frontend && npm run build

# Backend is production-ready with uvicorn
cd backend && uvicorn main:app --host 0.0.0.0 --port 8000
```

---

## 🤝 Contributing

This project is in active development. Contributions welcome!

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

## 📄 License

MIT License - see LICENSE file for details.

---

## 🚀 Get Started

Ready to try DevMock? 

1. **Clone the repo**: `git clone https://github.com/kaan83/devmock-starter.git`
2. **Follow the Quick Start** guide above
3. **Visit the landing page** at `http://localhost:5173`
4. **Join the waitlist** to stay updated on new features

**Questions?** Open an issue or reach out to the development team.

---

*Built with ❤️ for developers who value simplicity and power in their API testing workflow.*