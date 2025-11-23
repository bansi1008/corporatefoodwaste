# 🌱 Corporate Food Waste Reporting Platform

A comprehensive Next.js application designed to track, report, and visualize food waste data from UK and EU supermarkets and food retailers. This platform empowers companies to monitor their progress towards UN SDG 12.3 targets for sustainable food waste reduction.

---

## 📋 Table of Contents

- [Overview](#overview)
- [Architecture](#architecture)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Database Models](#database-models)
- [API Endpoints](#api-endpoints)
- [Frontend Components](#frontend-components)
- [State Management](#state-management)
- [Authentication & Security](#authentication--security)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Features](#features)
- [API Connection Map](#api-connection-map)

---

## 🎯 Overview

The Corporate Food Waste Reporting Platform is a full-stack web application that enables:

- **Data Tracking**: Monitor food waste metrics across UK and EU retailers
- **Visualization**: Interactive charts and statistics for data analysis
- **Admin Management**: Secure dashboard for data entry and management
- **Public Access**: View aggregated data and company commitments
- **Contact System**: Communication channel for stakeholder engagement

---

## 🏗 Architecture

### **Application Architecture**

```
┌─────────────────────────────────────────────────────────────┐
│                     Client Layer (Browser)                   │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │  Home Page   │  │  Data Page   │  │ Admin Panel  │      │
│  │  Components  │  │  Components  │  │  Components  │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
│                          │                                    │
│                   Zustand Stores                             │
│        (herocom.js, impact.js, eufig.js, yearRange.js)      │
└─────────────────────────────────────────────────────────────┘
                            │
                    HTTPS / API Calls
                            │
┌─────────────────────────────────────────────────────────────┐
│                   Next.js API Layer                          │
│  ┌──────────────────────────────────────────────────────┐   │
│  │              Middleware (Auth + Rate Limiting)       │   │
│  │  - JWT Token Verification                            │   │
│  │  - IP-based Rate Limiting (100 req/min)             │   │
│  │  - Protected Routes Management                       │   │
│  └──────────────────────────────────────────────────────┘   │
│                                                              │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐     │
│  │  UK Data     │  │  EU Data     │  │  Auth        │     │
│  │  APIs        │  │  APIs        │  │  APIs        │     │
│  └──────────────┘  └──────────────┘  └──────────────┘     │
└─────────────────────────────────────────────────────────────┘
                            │
                 Database Connection Pool
                   (Cached & Persistent)
                            │
┌─────────────────────────────────────────────────────────────┐
│                    MongoDB Database                          │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐     │
│  │  UK          │  │  EU          │  │  System      │     │
│  │  Collections │  │  Collections │  │  Collections │     │
│  │  - ukdata    │  │  - eucompany │  │  - logins    │     │
│  │  - UkCompany │  │  - eucomdata │  │  - contacts  │     │
│  │  - ukalliances│  │ - eualiance  │  │              │     │
│  │  - ukcharity │  │  - eucharity │  │              │     │
│  │  - ukdocuments│  │ - eudoc     │  │              │     │
│  └──────────────┘  └──────────────┘  └──────────────┘     │
└─────────────────────────────────────────────────────────────┘
```

### **Data Flow**

1. **Client Request** → Component makes HTTP request via fetch/axios
2. **Middleware Check** → Validates JWT token (if protected route) & rate limiting
3. **API Route Handler** → Processes request, connects to database
4. **Database Operation** → MongoDB queries via Mongoose models
5. **Response** → JSON data returned through API → State updated → UI renders

---

## 🛠 Tech Stack

### **Frontend**

- **Framework**: Next.js 15.3.2 (React 18.3.1)
- **Styling**: CSS Modules
- **State Management**: Zustand 5.0.8
- **Data Visualization**: Recharts 3.3.0
- **Icons**: React Icons 5.5.0
- **HTTP Client**: Axios 1.13.2
- **Image Rendering**: Next.js Image Component
- **Utilities**: html2canvas 1.4.1 (for screenshots)

### **Backend**

- **Runtime**: Node.js
- **Framework**: Next.js API Routes (Serverless Functions)
- **Database**: MongoDB (via Mongoose 8.19.3)
- **Authentication**: JWT (JSON Web Tokens)
  - `jsonwebtoken` 9.0.2
  - `jose` 6.1.0 (for middleware)
- **Security**: bcryptjs 3.0.3 (password hashing)
- **Environment**: dotenv 17.2.3

### **Development**

- **Compiler**: Babel React Compiler 1.0.0

---

## 📁 Project Structure

```
waste/
├── app/
│   ├── About/                      # About page
│   ├── admin/                      # Admin dashboard
│   │   ├── UKcomponent/           # UK data management forms
│   │   │   ├── UKDataForm.jsx
│   │   │   ├── UKDocumentsForm.jsx
│   │   │   ├── UKSupermarketForm.jsx
│   │   │   ├── UKAlliancesForm.jsx
│   │   │   ├── UKCharitiesForm.jsx
│   │   │   └── ContactSubmissions.jsx
│   │   ├── EUcomponent/           # EU data management forms
│   │   │   ├── EUCompanyForm.jsx
│   │   │   ├── EUDocumentsForm.jsx
│   │   │   ├── EUSupermarketForm.jsx
│   │   │   ├── EUAlliancesForm.jsx
│   │   │   └── EUCharitiesForm.jsx
│   │   └── page.jsx               # Admin dashboard main page
│   ├── api/                       # API Routes (see API section)
│   ├── ComponentHome/             # Landing page components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Features.jsx
│   │   ├── Impact.jsx
│   │   └── Footer.jsx
│   ├── components/                # Shared components
│   │   └── Loading/
│   ├── contactus/                 # Contact form page
│   ├── Data/                      # Data visualization pages
│   │   ├── DataComponent/         # UK data visualizations
│   │   │   ├── DataHero.jsx
│   │   │   ├── CompanyTargets.jsx
│   │   │   ├── DocumentsChart.jsx
│   │   │   ├── RedistributionStats.jsx
│   │   │   ├── RedistributionRadar.jsx
│   │   │   ├── FoodDonations.jsx
│   │   │   ├── Alliances.jsx
│   │   │   ├── UKstates.jsx
│   │   │   ├── DataTabs.jsx
│   │   │   └── DataDisclaimer.jsx
│   │   ├── DataComponenteu/       # EU data visualizations
│   │   │   ├── EuDataHero.jsx
│   │   │   ├── Eucompanydata.jsx
│   │   │   ├── DocumentEU.jsx
│   │   │   ├── Aliance.jsx
│   │   │   ├── Charity.jsx
│   │   │   └── EUStates.jsx
│   │   └── page.js
│   ├── Images/                    # Static images
│   ├── Login/                     # Login page
│   ├── Spider/                    # Spider chart visualization
│   ├── store/                     # Zustand state stores
│   │   ├── herocom.js
│   │   ├── impact.js
│   │   ├── eufig.js
│   │   └── yearRangeStore.js
│   ├── globals.css
│   ├── layout.js
│   └── page.js                    # Home page
├── lib/
│   └── db.js                      # Database connection utility
├── middleware.js                  # Next.js middleware (Auth + Rate Limiting)
├── Model/                         # Mongoose database models
│   ├── login.js
│   ├── contact.js
│   ├── ukdata.js
│   ├── ukcompany.js
│   ├── ukAlliances.js
│   ├── ukCharity.js
│   ├── ukdocument.js
│   ├── eucompany.js
│   ├── eucomdata.js
│   ├── eualiance.js
│   ├── eucharity.js
│   └── eudoc.js
├── public/                        # Static assets
├── next.config.mjs
├── package.json
└── jsconfig.json
```

---

## 🗄 Database Models

### **Authentication**

#### **Login Model** (`Model/login.js`)

```javascript
Collection: "logins"
Fields:
  - email: String (required, unique)
  - password: String (required, hashed with bcrypt)
```

#### **Contact Model** (`Model/contact.js`)

```javascript
Collection: "contacts"
Fields:
  - name: String (required)
  - email: String (required)
  - subject: String (required)
  - message: String (required)
  - date: Date (default: current date)
```

---

### **UK Data Models**

#### **UK Company Data** (`Model/ukdata.js`)

```javascript
Collection: "ukdata"
Fields:
  - name: String (required) - Company name
  - Target: [String] - Array of target commitments
  - Targetyear: [Number] - Array of target years
  - Metric: [String] - Array of metrics
  - Baseline: String - Baseline information
```

#### **UK Company Supermarket Data** (`Model/ukcompany.js`)

```javascript
Collection: "UkCompany"
Schema:
  - company: String (required, unique)
  - color: String (required) - For chart visualization
  - data: Array of:
    - from: Number (required) - Year start
    - to: Number (required) - Year end
    - foodHandled: Number
    - unsoldFood: Number
    - foodSurplus: Number
    - foodWaste: Number
    - foodWastePerHandled: Number
    - unsoldFoodPerHandled: Number
    - foodWasteToAnimalFeed: Number
    - humanRedistribution: Number
    - foodWasteReductionRate: Number
```

#### **UK Alliances** (`Model/ukAlliances.js`)

```javascript
Collection: "ukalliances"
Fields:
  - name: String (required)
  - companies: [String] - Array of company names
  - Url: String (optional) - Website URL
```

#### **UK Charities** (`Model/ukCharity.js`)

```javascript
Collection: "ukcharity"
Fields:
  - name: String (required)
  - companies: [String] - Array of associated companies
  - Url: String (optional)
```

#### **UK Documents** (`Model/ukdocument.js`)

```javascript
Collection: "ukdocuments"
Fields:
  - from: Number (required) - Year start
  - to: Number (required) - Year end
  - annualReport: Number (default: 0)
  - sustainability: Number (default: 0)
  - other: Number (default: 0)
```

---

### **EU Data Models**

#### **EU Company Targets** (`Model/eucompany.js`)

```javascript
Collection: "eucompany"
Fields:
  - companyName: String (required)
  - Commitment: [String] - Array of commitments
  - targetDate: [Number] - Array of target dates
  - TargetMetric: [String] - Array of target metrics
  - Standardised: [String] - Array of standardized metrics
  - fromBaseline: Number (default: 0)
  - toBaseline: Number (default: 0)
```

#### **EU Company Data** (`Model/eucomdata.js`)

```javascript
Collection: "eucomdata"
Schema:
  - company: String (required, unique)
  - color: String (required)
  - data: Array of:
    - from: Number (required)
    - to: Number (required)
    - foodHandled: Number
    - unsoldFood: Number
    - foodSurplus: Number
    - foodWaste: Number
    - foodWastePerHandled: Number
    - unsoldFoodPerHandled: Number
    - foodWasteToAnimalFeed: Number
    - humanRedistribution: Number
    - foodWasteReductionRate: Number
```

#### **EU Alliances** (`Model/eualiance.js`)

```javascript
Collection: "eualiance"
Fields:
  - name: String (required)
  - companies: [String]
  - Url: String (optional)
```

#### **EU Charities** (`Model/eucharity.js`)

```javascript
Collection: "eucharity"
Fields:
  - name: String (required)
  - companies: [String]
  - Url: String (optional)
```

#### **EU Documents** (`Model/eudoc.js`)

```javascript
Collection: "eudoc"
Fields:
  - from: Number (required)
  - to: Number (required)
  - annualReport: Number (default: 0)
  - sustainability: Number (default: 0)
  - other: Number (default: 0)
```

---

## 🔌 API Endpoints

### **Authentication APIs**

#### **1. Login**

- **Endpoint**: `POST /api/Login`
- **File**: `app/api/Login/route.js`
- **Purpose**: Authenticate users and generate JWT token
- **Request Body**:
  ```json
  {
    "email": "user@example.com",
    "password": "password123"
  }
  ```
- **Response**: Sets `wastetoken` cookie (httpOnly, 1 hour expiry)
- **Used By**: `app/Login/page.jsx`
- **Model**: `Model/login.js`

#### **2. Signup**

- **Endpoint**: `POST /api/Signup`
- **File**: `app/api/Signup/route.js`
- **Purpose**: Register new admin users
- **Request Body**:
  ```json
  {
    "email": "newuser@example.com",
    "password": "securepassword"
  }
  ```
- **Security**: Password hashed with bcrypt (salt rounds: 10)
- **Model**: `Model/login.js`

---

### **UK Data APIs**

#### **3. UK Company Targets**

- **Endpoint**:
  - `POST /api/ukdata` (Protected)
  - `GET /api/getukdata` (Public)
- **Files**:
  - `app/api/ukdata/route.js`
  - `app/api/getukdata/route.js`
- **Purpose**: Manage company reduction targets and commitments
- **Used By**:
  - Admin: `app/admin/UKcomponent/UKDataForm.jsx`
  - Display: `app/Data/DataComponent/CompanyTargets.jsx`
- **Model**: `Model/ukdata.js`

#### **4. UK Supermarket Data**

- **Endpoint**:
  - `POST /api/ukcom` (Protected)
  - `GET /api/ukcom` (Public)
- **File**: `app/api/ukcom/route.js`
- **Purpose**: Store yearly food waste metrics for UK supermarkets
- **Used By**:
  - Admin: `app/admin/UKcomponent/UKSupermarketForm.jsx`
  - Display: `app/Data/DataComponent/RedistributionStats.jsx`, `RedistributionRadar.jsx`, `FoodDonations.jsx`
- **Model**: `Model/ukcompany.js`

#### **5. UK Company Edit Operations**

- **Endpoints**:
  - `PATCH /api/editukcom/[id]` - Update company name/color
  - `DELETE /api/editukcom/[id]` - Delete company
  - `POST /api/editukcom/[id]/add-year` - Add yearly data
  - `PATCH /api/editukcom/[id]/update-year` - Update yearly data
  - `DELETE /api/editukcom/[id]/delete-year` - Delete yearly data
- **File**: `app/api/editukcom/[id]/route.js` (and subdirectories)
- **Used By**: `app/admin/UKcomponent/UKSupermarketForm.jsx`
- **Model**: `Model/ukcompany.js`

#### **6. UK Alliances**

- **Endpoint**:
  - `POST /api/ukalliances` (Protected)
  - `GET /api/ukalliances` (Public)
- **File**: `app/api/ukalliances/route.js`
- **Purpose**: Manage industry alliances and partnerships
- **Used By**:
  - Admin: `app/admin/UKcomponent/UKAlliancesForm.jsx`
  - Display: `app/Data/DataComponent/Alliances.jsx`
- **Model**: `Model/ukAlliances.js`

#### **7. UK Charities**

- **Endpoints**:
  - `POST /api/ukcharity/[id]` (Protected)
  - `GET /api/getUkcharity` (Public)
- **Files**:
  - `app/api/ukcharity/[id]/route.js`
  - `app/api/getUkcharity/route.js`
- **Purpose**: Track charity partnerships
- **Used By**:
  - Admin: `app/admin/UKcomponent/UKCharitiesForm.jsx`
  - Display: `app/Data/DataComponent/FoodDonations.jsx`
- **Model**: `Model/ukCharity.js`

#### **8. UK Documents**

- **Endpoint**:
  - `POST /api/ukdoc` (Protected)
  - `GET /api/ukdoc` (Public)
- **File**: `app/api/ukdoc/route.js`
- **Purpose**: Track document publication statistics
- **Used By**:
  - Admin: `app/admin/UKcomponent/UKDocumentsForm.jsx`
  - Display: `app/Data/DataComponent/DocumentsChart.jsx`
- **Model**: `Model/ukdocument.js`

#### **9. UK Data Figure Aggregation**

- **Endpoint**: `GET /api/ukdatafig`
- **File**: `app/api/ukdatafig/route.js`
- **Purpose**: Get aggregated UK statistics
- **Used By**: `app/Data/DataComponent/UKstates.jsx`
- **Model**: `Model/ukcompany.js` (aggregation)

---

### **EU Data APIs**

#### **10. EU Company Targets**

- **Endpoints**:
  - `POST /api/EU/eucompany` (Protected)
  - `GET /api/EU/eucompany` (Public)
- **File**: `app/api/EU/eucompany/route.js`
- **Purpose**: Manage EU company targets and commitments
- **Used By**:
  - Admin: `app/admin/EUcomponent/EUCompanyForm.jsx`
  - Display: `app/Data/DataComponenteu/Eucompanydata.jsx`
- **Model**: `Model/eucompany.js`

#### **11. EU Supermarket Data**

- **Endpoints**:
  - `POST /api/EU/eucomdata` (Protected)
  - `GET /api/EU/eucomdata` (Public)
- **File**: `app/api/EU/eucomdata/route.js`
- **Purpose**: Store EU supermarket food waste metrics
- **Used By**:
  - Admin: `app/admin/EUcomponent/EUSupermarketForm.jsx`
  - Display: Multiple EU data components
- **Model**: `Model/eucomdata.js`

#### **12. EU Company Edit Operations**

- **Endpoints**:
  - `PATCH /api/EU/editeucomdata/[id]`
  - `DELETE /api/EU/editeucomdata/[id]`
  - `POST /api/EU/editeucomdata/[id]/add-year`
  - `PATCH /api/EU/editeucomdata/[id]/update-year`
  - `DELETE /api/EU/editeucomdata/[id]/delete-year`
- **File**: `app/api/EU/editeucomdata/[id]/route.js`
- **Used By**: `app/admin/EUcomponent/EUSupermarketForm.jsx`
- **Model**: `Model/eucomdata.js`

#### **13. EU Alliances**

- **Endpoints**:
  - `POST /api/EU/eualiance` (Protected)
  - `GET /api/EU/eualiance` (Public)
- **File**: `app/api/EU/eualiance/route.js`
- **Used By**:
  - Admin: `app/admin/EUcomponent/EUAlliancesForm.jsx`
  - Display: `app/Data/DataComponenteu/Aliance.jsx`
- **Model**: `Model/eualiance.js`

#### **14. EU Charities**

- **Endpoints**:
  - `POST /api/EU/eucharity` (Protected)
  - `GET /api/EU/eucharity` (Public)
- **File**: `app/api/EU/eucharity/route.js`
- **Used By**:
  - Admin: `app/admin/EUcomponent/EUCharitiesForm.jsx`
  - Display: `app/Data/DataComponenteu/Charity.jsx`
- **Model**: `Model/eucharity.js`

#### **15. EU Documents**

- **Endpoints**:
  - `POST /api/EU/eudoc` (Protected)
  - `GET /api/EU/eudoc` (Public)
- **File**: `app/api/EU/eudoc/route.js`
- **Used By**:
  - Admin: `app/admin/EUcomponent/EUDocumentsForm.jsx`
  - Display: `app/Data/DataComponenteu/DocumentEU.jsx`
- **Model**: `Model/eudoc.js`

#### **16. EU Data Figure Aggregation**

- **Endpoint**: `GET /api/EU/eudatafig`
- **File**: `app/api/EU/eudatafig/route.js`
- **Purpose**: Get aggregated EU statistics
- **Used By**: `app/Data/DataComponenteu/EUStates.jsx`
- **Model**: `Model/eucomdata.js` (aggregation)

---

### **Analytics & Aggregation APIs**

#### **17. Total Companies Count**

- **Endpoint**: `GET /api/totalcomfig`
- **File**: `app/api/totalcomfig/route.js`
- **Purpose**: Get total count of UK and EU companies
- **Response**:
  ```json
  {
    "ukcom": 8,
    "eucom": 5
  }
  ```
- **Used By**: `app/ComponentHome/Hero.jsx`
- **State**: `app/store/herocom.js` (Zustand store)
- **Models**: `Model/ukcompany.js`, `Model/eucomdata.js`

#### **18. Total Impact Metrics**

- **Endpoint**: `GET /api/totalimpact`
- **File**: `app/api/totalimpact/route.js`
- **Purpose**: Calculate aggregate food handling and waste metrics
- **Response**:
  ```json
  {
    "totalFoodHandledInBillions": "2.45",
    "totalUnsoldFoodInBillions": "45.30",
    "totalHumanRedistributionInBillions": "12.50"
  }
  ```
- **Calculation**: Aggregates all company data using MongoDB aggregation pipeline
- **Used By**: `app/ComponentHome/Impact.jsx`
- **State**: `app/store/impact.js` (Zustand store)
- **Model**: `Model/ukcompany.js` (aggregation)

---

### **Contact & Admin APIs**

#### **19. Contact Management**

- **Endpoints**:
  - `POST /api/getcontact` - Submit contact form
  - `GET /api/getcontact` - Retrieve all submissions
- **File**: `app/api/getcontact/route.js`
- **Used By**:
  - Public: `app/contactus/page.js`
  - Admin: `app/admin/UKcomponent/ContactSubmissions.jsx`
- **Model**: `Model/contact.js`

#### **20. Delete Contact Submission**

- **Endpoint**: `DELETE /api/delcontact/[id]`
- **File**: `app/api/delcontact/[id]/route.js`
- **Used By**: `app/admin/UKcomponent/ContactSubmissions.jsx`
- **Model**: `Model/contact.js`

#### **21. Admin Data Editing APIs**

- **UK Edit Endpoints**:
  - `PATCH /api/editukdata/[id]` - Edit company targets
  - `PATCH /api/editukdoc/[id]` - Edit documents
  - `PATCH /api/editukalliances/[id]` - Edit alliances
- **EU Edit Endpoints**:
  - `PATCH /api/EU/editeucompany/[id]` - Edit EU company
  - `PATCH /api/EU/editeudoc/[id]` - Edit EU documents
  - `PATCH /api/EU/editeualiance/[id]` - Edit EU alliances
  - `PATCH /api/EU/editeucharity/[id]` - Edit EU charities

---

## 🎨 Frontend Components

### **Landing Page Components** (`app/ComponentHome/`)

1. **Navbar.jsx**

   - Navigation menu with links
   - Sticky header with smooth scrolling
   - Responsive design

2. **Hero.jsx**

   - Hero section with image background
   - Displays total company counts (UK/EU)
   - Fetches data from `/api/totalcomfig`
   - Uses `useEUFigStore` Zustand store
   - Call-to-action buttons

3. **Features.jsx**

   - Showcases platform features
   - Static content section

4. **Impact.jsx**

   - Displays aggregate impact metrics
   - Fetches data from `/api/totalimpact`
   - Uses `useImpact` Zustand store
   - Shows: Total food handled, unsold food, human redistribution
   - Real-time statistics

5. **Footer.jsx**
   - Footer with links and information

---

### **Data Visualization Components**

#### **UK Data Components** (`app/Data/DataComponent/`)

1. **DataHero.jsx** - UK data page hero section
2. **DataTabs.jsx** - Tab switcher between UK and EU data
3. **DataDisclaimer.jsx** - Data source disclaimer
4. **CompanyTargets.jsx**
   - Displays company reduction targets
   - Fetches from `/api/getukdata`
   - Table visualization
5. **DocumentsChart.jsx**
   - Document publication chart
   - Fetches from `/api/ukdoc`
   - Recharts line chart
6. **RedistributionStats.jsx**
   - Supermarket food waste statistics
   - Fetches from `/api/ukcom`
   - Multiple metric displays
7. **RedistributionRadar.jsx**
   - Radar chart for waste metrics
   - Fetches from `/api/ukcom`
   - Recharts radar chart
8. **FoodDonations.jsx**
   - Food redistribution to charities
   - Fetches from `/api/getUkcharity`
   - List visualization
9. **Alliances.jsx**
   - Industry alliance partnerships
   - Fetches from `/api/ukalliances`
   - Card layout
10. **UKstates.jsx**
    - Aggregated UK statistics
    - Fetches from `/api/ukdatafig`
    - Summary cards

#### **EU Data Components** (`app/Data/DataComponenteu/`)

1. **EuDataHero.jsx** - EU data page hero section
2. **Eucompanydata.jsx**
   - EU company targets and commitments
   - Fetches from `/api/EU/eucompany`
3. **DocumentEU.jsx**
   - EU document statistics
   - Fetches from `/api/EU/eudoc`
4. **Aliance.jsx**
   - EU alliances
   - Fetches from `/api/EU/eualiance`
5. **Charity.jsx**
   - EU charities
   - Fetches from `/api/EU/eucharity`
6. **EUStates.jsx**
   - Aggregated EU statistics
   - Fetches from `/api/EU/eudatafig`

---

### **Admin Dashboard Components** (`app/admin/`)

#### **UK Management Forms** (`app/admin/UKcomponent/`)

1. **UKDataForm.jsx**

   - Manage UK company targets
   - POST to `/api/ukdata`
   - GET from `/api/getukdata`
   - PATCH to `/api/editukdata/[id]`

2. **UKSupermarketForm.jsx**

   - Manage UK supermarket yearly data
   - POST to `/api/ukcom`
   - GET from `/api/ukcom`
   - PATCH to `/api/editukcom/[id]`
   - Add/Update/Delete yearly data via sub-routes

3. **UKDocumentsForm.jsx**

   - Manage document statistics
   - POST to `/api/ukdoc`
   - GET from `/api/ukdoc`
   - PATCH to `/api/editukdoc/[id]`

4. **UKAlliancesForm.jsx**

   - Manage alliances
   - POST to `/api/ukalliances`
   - GET from `/api/ukalliances`
   - PATCH to `/api/editukalliances/[id]`

5. **UKCharitiesForm.jsx**

   - Manage charities
   - POST to `/api/ukcharity/[id]`
   - GET from `/api/getUkcharity`

6. **ContactSubmissions.jsx**
   - View and manage contact form submissions
   - GET from `/api/getcontact`
   - DELETE via `/api/delcontact/[id]`

#### **EU Management Forms** (`app/admin/EUcomponent/`)

1. **EUCompanyForm.jsx**

   - Manage EU company data
   - POST to `/api/EU/eucompany`
   - GET from `/api/EU/eucompany`
   - PATCH to `/api/EU/editeucompany/[id]`

2. **EUSupermarketForm.jsx**

   - Manage EU supermarket data
   - POST to `/api/EU/eucomdata`
   - GET from `/api/EU/eucomdata`
   - Edit operations via `/api/EU/editeucomdata/[id]/*`

3. **EUDocumentsForm.jsx**

   - Manage EU documents
   - POST to `/api/EU/eudoc`
   - GET from `/api/EU/eudoc`
   - PATCH to `/api/EU/editeudoc/[id]`

4. **EUAlliancesForm.jsx**

   - Manage EU alliances
   - POST to `/api/EU/eualiance`
   - GET from `/api/EU/eualiance`
   - PATCH to `/api/EU/editeualiance/[id]`

5. **EUCharitiesForm.jsx**
   - Manage EU charities
   - POST to `/api/EU/eucharity`
   - GET from `/api/EU/eucharity`
   - PATCH to `/api/EU/editeucharity/[id]`

---

## 🔄 State Management

### **Zustand Stores** (`app/store/`)

#### **1. herocom.js**

```javascript
Purpose: Store total company counts
State:
  - eucom: Number (EU company count)
  - ukcom: Number (UK company count)
  - loading: Boolean
  - error: String | null
Actions:
  - fetchTotalCompanies() - Fetches from /api/totalcomfig
Used By: app/ComponentHome/Hero.jsx
```

#### **2. impact.js**

```javascript
Purpose: Store aggregate impact metrics
State:
  - totalFoodHandledInBillions: Number
  - totalUnsoldFoodInBillions: Number
  - totalHumanRedistributionInBillions: Number
  - loading: Boolean
  - error: String | null
Actions:
  - fetchTotalimpact() - Fetches from /api/totalimpact
Used By: app/ComponentHome/Impact.jsx
```

#### **3. eufig.js**

```javascript
Purpose: Store EU-specific figures
Used By: EU data components
```

#### **4. yearRangeStore.js**

```javascript
Purpose: Store year range filters for data visualization
Used By: Data filtering components
```

---

## 🔐 Authentication & Security

### **Middleware** (`middleware.js`)

#### **Features**:

1. **JWT Authentication**

   - Uses `jose` library for JWT verification
   - Verifies token from `wastetoken` cookie
   - Secret key from `JWT_SECRET` environment variable

2. **Protected Routes**:

   ```javascript
   - /api/admin
   - /api/ukdata
   - /api/editukdata/:path
   - /api/editukdoc/:path
   - /api/ukdoc
   ```

3. **Rate Limiting**

   - **Limit**: 100 requests per minute per IP
   - **Tracking**: In-memory IP request map
   - **Response**: 429 status code when exceeded
   - **Window**: 60 seconds (1 minute)

4. **Request Filtering**

   - GET requests to `/api/*` bypass authentication (public data)
   - POST/PATCH/DELETE requests require authentication

5. **Error Handling**
   - 401 Unauthorized: Missing or invalid token
   - 429 Too Many Requests: Rate limit exceeded

### **Password Security**

- **Hashing**: bcryptjs with 10 salt rounds
- **Storage**: Only hashed passwords stored in database
- **Comparison**: bcrypt.compare() for login verification

### **Token Management**

- **Generation**: JWT signed with `JWT_SECRET`
- **Expiry**: 1 hour
- **Storage**: httpOnly cookie (XSS protection)
- **SameSite**: lax (CSRF protection)
- **Secure**: true in production

---

## 🚀 Getting Started

### **Prerequisites**

- Node.js (v18+ recommended)
- MongoDB database (local or MongoDB Atlas)
- npm or yarn package manager

### **Installation**

1. **Clone the repository**

   ```bash
   cd waste
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the `waste` directory:

   ```env
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/database
   JWT_SECRET=your-super-secret-jwt-key-here
   NODE_ENV=development
   ```

4. **Run the development server**

   ```bash
   npm run dev
   ```

5. **Open in browser**
   Navigate to `http://localhost:3000`

### **Build for Production**

```bash
npm run build
npm start
```

---

## 🔧 Environment Variables

Create a `.env.local` file with the following variables:

```env
# MongoDB Connection
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<database>?retryWrites=true&w=majority

# JWT Secret (use a long random string)
JWT_SECRET=your-secure-random-jwt-secret-key-minimum-32-characters

# Node Environment
NODE_ENV=development  # or 'production'
```

### **Important Notes**:

- Never commit `.env.local` to version control
- Use strong, unique JWT_SECRET in production
- Ensure MongoDB URI includes proper credentials and network access
- SSL is enabled by default for MongoDB connections

---

## ✨ Features

### **Public Features**

- ✅ View aggregated food waste statistics
- ✅ Browse UK and EU company commitments
- ✅ Interactive data visualizations (charts, radar, tables)
- ✅ Submit contact form inquiries
- ✅ Responsive design for all devices
- ✅ Real-time data updates

### **Admin Features** (Authentication Required)

- 🔒 Secure login with JWT authentication
- 🔒 Manage UK company data (targets, supermarkets, documents)
- 🔒 Manage EU company data (targets, supermarkets, documents)
- 🔒 Add/Edit/Delete company yearly data
- 🔒 Manage alliances and charity partnerships
- 🔒 View and manage contact form submissions
- 🔒 Rate-limited API access for security

### **Technical Features**

- ⚡ Server-side rendering with Next.js
- ⚡ Optimized database connection pooling
- ⚡ Client-side state management with Zustand
- ⚡ CSS Modules for scoped styling
- ⚡ Image optimization with Next.js Image component
- ⚡ API rate limiting and JWT middleware
- ⚡ MongoDB aggregation for analytics

---

## 📊 API Connection Map

### **Component → API → Model Flow**

```
HOME PAGE FLOW
===============
Hero.jsx
  → /api/totalcomfig
  → ukcompany.js + eucomdata.js (count)
  → herocom.js (Zustand)

Impact.jsx
  → /api/totalimpact
  → ukcompany.js (aggregation)
  → impact.js (Zustand)

---

UK DATA PAGE FLOW
=================
CompanyTargets.jsx
  → /api/getukdata
  → ukdata.js

DocumentsChart.jsx
  → /api/ukdoc (GET)
  → ukdocument.js

RedistributionStats.jsx
  → /api/ukcom (GET)
  → ukcompany.js

RedistributionRadar.jsx
  → /api/ukcom (GET)
  → ukcompany.js

FoodDonations.jsx
  → /api/getUkcharity (GET)
  → ukCharity.js

Alliances.jsx
  → /api/ukalliances (GET)
  → ukAlliances.js

UKstates.jsx
  → /api/ukdatafig
  → ukcompany.js (aggregation)

---

EU DATA PAGE FLOW
=================
Eucompanydata.jsx
  → /api/EU/eucompany (GET)
  → eucompany.js

DocumentEU.jsx
  → /api/EU/eudoc (GET)
  → eudoc.js

Aliance.jsx
  → /api/EU/eualiance (GET)
  → eualiance.js

Charity.jsx
  → /api/EU/eucharity (GET)
  → eucharity.js

EUStates.jsx
  → /api/EU/eudatafig
  → eucomdata.js (aggregation)

---

ADMIN PANEL FLOW (UK)
=====================
UKDataForm.jsx
  → POST /api/ukdata [Protected]
  → GET /api/getukdata
  → PATCH /api/editukdata/[id] [Protected]
  → ukdata.js

UKSupermarketForm.jsx
  → POST /api/ukcom [Protected]
  → GET /api/ukcom
  → PATCH /api/editukcom/[id] [Protected]
  → POST /api/editukcom/[id]/add-year [Protected]
  → PATCH /api/editukcom/[id]/update-year [Protected]
  → DELETE /api/editukcom/[id]/delete-year [Protected]
  → ukcompany.js

UKDocumentsForm.jsx
  → POST /api/ukdoc [Protected]
  → GET /api/ukdoc
  → PATCH /api/editukdoc/[id] [Protected]
  → ukdocument.js

UKAlliancesForm.jsx
  → POST /api/ukalliances [Protected]
  → GET /api/ukalliances
  → PATCH /api/editukalliances/[id] [Protected]
  → ukAlliances.js

UKCharitiesForm.jsx
  → POST /api/ukcharity/[id] [Protected]
  → GET /api/getUkcharity
  → ukCharity.js

ContactSubmissions.jsx
  → GET /api/getcontact
  → DELETE /api/delcontact/[id] [Protected]
  → contact.js

---

ADMIN PANEL FLOW (EU)
=====================
EUCompanyForm.jsx
  → POST /api/EU/eucompany [Protected]
  → GET /api/EU/eucompany
  → PATCH /api/EU/editeucompany/[id] [Protected]
  → eucompany.js

EUSupermarketForm.jsx
  → POST /api/EU/eucomdata [Protected]
  → GET /api/EU/eucomdata
  → PATCH /api/EU/editeucomdata/[id] [Protected]
  → POST /api/EU/editeucomdata/[id]/add-year [Protected]
  → PATCH /api/EU/editeucomdata/[id]/update-year [Protected]
  → DELETE /api/EU/editeucomdata/[id]/delete-year [Protected]
  → eucomdata.js

EUDocumentsForm.jsx
  → POST /api/EU/eudoc [Protected]
  → GET /api/EU/eudoc
  → PATCH /api/EU/editeudoc/[id] [Protected]
  → eudoc.js

EUAlliancesForm.jsx
  → POST /api/EU/eualiance [Protected]
  → GET /api/EU/eualiance
  → PATCH /api/EU/editeualiance/[id] [Protected]
  → eualiance.js

EUCharitiesForm.jsx
  → POST /api/EU/eucharity [Protected]
  → GET /api/EU/eucharity
  → PATCH /api/EU/editeucharity/[id] [Protected]
  → eucharity.js

---

AUTHENTICATION FLOW
===================
Login/page.jsx
  → POST /api/Login
  → login.js
  → Sets wastetoken cookie (JWT)
  → Redirects to /admin

/admin/* (any admin page)
  → middleware.js intercepts
  → Verifies JWT token from cookie
  → Rate limiting check
  → Allows/Denies access

---

CONTACT FORM FLOW
=================
contactus/page.js
  → POST /api/getcontact
  → contact.js
  → Stores submission in DB

ContactSubmissions.jsx (Admin)
  → GET /api/getcontact
  → DELETE /api/delcontact/[id]
  → contact.js
```

---

## 📚 Database Connection

The application uses a **cached connection pooling** strategy via `lib/db.js`:

```javascript
Flow:
1. Check if connection exists in global cache
2. If exists, return cached connection
3. If not, create new connection with SSL
4. Cache connection globally for reuse
5. All API routes use connectToDatabase() before queries

Benefits:
- Prevents connection exhaustion in serverless environment
- Reduces connection overhead
- Handles connection failures gracefully
- Supports MongoDB Atlas with SSL
```

---

## 🔄 Request Lifecycle

### **Authenticated Request Example**:

```
1. User clicks button in Admin panel
   └─> UKDataForm.jsx

2. Component makes POST request
   └─> axios.post('/api/ukdata', formData)

3. Request hits Next.js middleware
   └─> middleware.js
       ├─> Extract 'wastetoken' cookie
       ├─> Verify JWT with jose library
       ├─> Check rate limit (100/min per IP)
       └─> If valid, continue; else 401/429

4. Request reaches API route
   └─> app/api/ukdata/route.js
       ├─> Call connectToDatabase()
       ├─> Access cached MongoDB connection
       ├─> Execute Mongoose query
       └─> Return JSON response

5. Response returns to component
   └─> Update UI state
   └─> Show success/error message
```

### **Public Request Example**:

```
1. User visits Data page
   └─> CompanyTargets.jsx

2. Component fetches data on mount
   └─> useEffect(() => fetch('/api/getukdata'))

3. Middleware checks request
   └─> GET request to /api/* → ALLOWED (no auth needed)

4. API route handles request
   └─> app/api/getukdata/route.js
       ├─> Connect to database
       ├─> Query ukdata collection
       └─> Return public data

5. Component renders data
   └─> Display in table/chart
```

---

## 🧪 API Testing

### **Public Endpoints** (No Authentication Required)

```bash
# Get UK company targets
curl http://localhost:3000/api/getukdata

# Get total companies
curl http://localhost:3000/api/totalcomfig

# Get total impact
curl http://localhost:3000/api/totalimpact

# Get UK supermarket data
curl http://localhost:3000/api/ukcom
```

### **Protected Endpoints** (Requires Authentication)

```bash
# Login first to get cookie
curl -X POST http://localhost:3000/api/Login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@example.com","password":"password"}' \
  -c cookies.txt

# Use cookie for authenticated requests
curl -X POST http://localhost:3000/api/ukdata \
  -H "Content-Type: application/json" \
  -b cookies.txt \
  -d '{"name":"Tesco","Target":["50% reduction"],"Targetyear":[2030]}'
```

---

## 📝 Notes

### **Architecture Decisions**:

- **Next.js API Routes**: Serverless functions for scalability
- **MongoDB**: Flexible schema for varied data structures
- **Zustand**: Lightweight state management (< 1KB)
- **CSS Modules**: Scoped styles prevent conflicts
- **JWT httpOnly cookies**: Secure authentication without localStorage

### **Performance Optimizations**:

- Database connection caching reduces latency
- Next.js Image optimization for faster loading
- API response caching potential (not implemented)
- Aggregate queries reduce database round trips

### **Security Considerations**:

- Passwords hashed with bcrypt (never stored plain)
- JWT tokens in httpOnly cookies (XSS protection)
- Rate limiting prevents abuse
- Middleware protects sensitive routes
- Environment variables for secrets

### **Scalability**:

- Serverless architecture supports horizontal scaling
- MongoDB Atlas handles database scaling
- Stateless API design enables load balancing
- Can add Redis for session storage if needed

---

## 📧 Contact

For questions or support regarding this platform, use the contact form at `/contactus`.

---

## 📄 License

This project is proprietary software for corporate food waste tracking and reporting.

---

## 🎯 UN SDG 12.3 Alignment

This platform directly supports **UN Sustainable Development Goal 12.3**:

> _"By 2030, halve per capita global food waste at the retail and consumer levels and reduce food losses along production and supply chains, including post-harvest losses."_

By providing transparency, tracking, and accountability tools, this platform helps companies measure progress toward this critical sustainability target.

---

**Built with ❤️ for a sustainable future**
