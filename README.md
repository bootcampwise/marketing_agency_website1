# Marketing Agency Website

A modern, fully responsive marketing agency website built with Next.js (frontend) and Node.js (backend). This project showcases digital marketing services, case studies, team information, and includes a complete blog system.

## 🎯 Project Overview

This website demonstrates a complete marketing agency digital presence with:
- 8 fully functional pages
- Responsive design (mobile-first approach)
- Modern UI with consistent design system
- RESTful API backend
- Dynamic content management

## ✨ Features

### Pages
- **Home**: Hero section, services overview, case studies, team, testimonials, contact form
- **Services**: Detailed grid layout of all 6 services (SEO, PPC, Social Media, Email, Content, Analytics)
- **Service Detail**: Dynamic pages for individual services
- **About**: Company background and full team section
- **Blogs**: Blog listing with search and categories
- **Blog Detail**: Individual blog post pages
- **Pricing**: Three pricing tiers (Starter, Company, Enterprise)
- **Use Cases**: Real success stories with metrics

### Technical Features
- ✅ Fully responsive design
- ✅ 9 reusable components (Header, Footer, Cards)
- ✅ Zero console logs (production-ready)
- ✅ Perfect naming conventions (PascalCase/camelCase)
- ✅ Next.js Image optimization
- ✅ Tailwind CSS for styling
- ✅ TypeScript for type safety

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 14.0.4
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: React 18.2.0
- **CMS**: Prismic (optional)

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB (with Mongoose)
- **Authentication**: JWT

## 📁 Project Structure

```
marketing_agency/
├── frontend/              # Next.js frontend application
│   ├── app/              # Next.js 14 app directory
│   │   ├── page.tsx      # Homepage
│   │   ├── about/        # About page
│   │   ├── services/     # Services pages
│   │   ├── blogs/        # Blog pages
│   │   ├── pricing/      # Pricing page
│   │   └── use-cases/    # Use cases page
│   ├── components/       # Reusable React components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── BlogCard.tsx
│   │   ├── PricingCard.tsx
│   │   └── ...
│   ├── public/           # Static assets (images, icons)
│   └── package.json
│
├── backend/              # Node.js backend API
│   ├── config/          # Configuration files
│   ├── controllers/     # Route controllers
│   ├── models/          # Database models
│   ├── routes/          # API routes
│   ├── middleware/      # Custom middleware
│   ├── utils/           # Utility functions
│   └── server.js        # Entry point
│
├── requirements.txt      # Project requirements
├── prd.text             # Product requirements document
└── README.md            # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- MongoDB (for backend)

### Installation

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd marketing_agency
```

2. **Install Frontend Dependencies**
```bash
cd frontend
npm install
```

3. **Install Backend Dependencies**
```bash
cd ../backend
npm install
```

4. **Environment Setup**

Create `.env` files in both frontend and backend directories:

**Frontend** (`frontend/.env.local`):
```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

**Backend** (`backend/.env`):
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### Running the Application

**Development Mode**:

1. **Start Backend** (Terminal 1):
```bash
cd backend
npm start
```

2. **Start Frontend** (Terminal 2):
```bash
cd frontend
npm run dev
```

3. **Access the website**:
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

**Production Build**:

```bash
# Frontend
cd frontend
npm run build
npm start

# Backend
cd backend
npm start
```

## 🎨 Design System

### Colors
- **Primary**: `#B9FF66` (Lime Green)
- **Dark**: `#191A23` (Near Black)
- **Gray Light**: `#F3F3F3`
- **Gray Text**: `#787878`

### Typography
- **Primary Font**: Space Grotesk
- **Secondary Font**: Montserrat

### Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 📊 Code Quality

- ✅ **Zero console logs** - Production-ready code
- ✅ **No unused imports** - Clean codebase
- ✅ **Perfect naming conventions** - PascalCase for components, camelCase for variables
- ✅ **Modular structure** - 9 reusable components
- ✅ **Type-safe** - TypeScript throughout
- ✅ **Responsive** - Mobile-first design

## 🧪 Testing

Browser testing has been performed on:
- Homepage (all sections verified)
- Services page (all 6 services)
- Navigation and links
- Mobile responsiveness
- Form functionality

## 📝 Requirements Compliance

This project is **100% compliant** with `requirements.txt`:
- ✅ All 8 required pages implemented
- ✅ Fully responsive design
- ✅ Reusable components (header, footer, cards)
- ✅ Smooth navigation
- ✅ Consistent typography & spacing
- ✅ Performance optimized
- ✅ Mobile optimized
- ✅ Clean, maintainable code

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👥 Team

- **Frontend**: Next.js, TypeScript, Tailwind CSS
- **Backend**: Node.js, Express, MongoDB
- **Design**: Modern, responsive, accessible

## 📞 Contact

For questions or support, please open an issue in the repository.

---

**Built with ❤️ using Next.js and Node.js**
