# 📝 ResolveNow: Online Complaint Registration & Management System

## 📌 Introduction
ResolveNow is an online complaint registration and management platform that simplifies the process of filing, tracking, and resolving complaints. It provides a centralized system where users, agents, and administrators can interact seamlessly. Instead of relying on traditional, paper-based, or unorganized complaint handling, ResolveNow ensures transparency, faster resolution, and higher customer satisfaction.  

---

## 🚀 Key Features
- ✅ **User Registration & Authentication** – Secure signup/login for users  
- 📝 **Complaint Submission** – File complaints with details, documents, and images  
- 📊 **Real-time Tracking** – Track complaint status in the dashboard  
- 💬 **Agent Interaction** – Direct communication with assigned agents  
- 🛠 **Admin Dashboard** – Assign, monitor, and manage complaints  
- 🔔 **Notifications** – Email/SMS alerts for complaint updates  
- 🔒 **Data Security** – Encrypted user data and secure role-based access  

---

## 📖 Description
ResolveNow digitizes the complaint lifecycle. Users can register complaints, agents can interact in real-time, and admins can oversee the process. The platform ensures scalability, security, and reliability while handling multiple complaints simultaneously.  

---

## 🎯 Scenario Example
**Case: John’s Complaint Journey**  
1. John registers on ResolveNow and submits a defective product complaint.  
2. The system assigns his case to Sarah (an agent).  
3. John tracks updates in real-time and chats with Sarah.  
4. Sarah investigates, updates the system, and John is notified.  
5. The issue is resolved with a refund/replacement.  
6. John gives positive feedback, and the admin monitors the overall process.  

---

## 🏗 Technical Architecture
- **Frontend:** React.js, Bootstrap, Material UI  
- **Backend:** Node.js with Express.js  
- **Database:** MongoDB (Cloud)  
- **Communication:** REST APIs (Axios), Socket.IO for real-time updates  
- **Security:** JWT authentication, password hashing, role-based access  
- **Notifications:** Email/SMS integration  

---

## 💻 Frontend Technologies
- React.js for UI  
- Bootstrap & Material UI for styling  
- Axios for API calls  

---

## ⚙️ Backend Framework
- Express.js for RESTful APIs  
- Middleware for validation & authentication  
- Complaint routing logic  

---

## 🗄 Database & Authentication
- MongoDB for scalable storage  
- JWT for authentication  
- Bcrypt for password encryption  
- Role-based access control (User, Agent, Admin)  

---

## 🛡 Security Features
- Password encryption  
- JWT-based authentication  
- HTTPS secure communication  
- Role-based access  

---

## 🔔 Notifications & Updates
- Email confirmation on complaint submission  
- Real-time dashboard updates  
- SMS/email alerts when status changes  

---

## 📊 ER Diagram (Conceptual)
- **User** (UserID, Name, Email, Password, Contact)  
- **Complaint** (ComplaintID, Title, Description, Status, AssignedAgent, UserID)  
- **Agent** (AgentID, Name, Email, AssignedComplaints)  
- **Admin** (AdminID, Name, Email, Role)  

**Relations:**  
- User **submits** Complaints  
- Agent **handles** Complaints  
- Admin **manages** Agents & Complaints  

---

## ⚡ Pre-requisites
- Node.js & npm installed  
- MongoDB Cloud account  
- React.js setup  
- Git for version control  

---

## 🔧 Setup & Installation
```bash
# Clone repo
git clone https://github.com/thanuja200/Resolve-now.git

# Navigate to backend
cd backend
npm install
npm start

# Navigate to frontend
cd frontend
npm install
npm run dev
```

---

## 📂 Project Structure
```
ResolveNow/
│── backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── server.js
│── frontend/
│   ├── src/
│   ├── components/
│   ├── pages/
│   ├── App.js
│── database/
│── package.json
│── README.md
```

---

## 🔄 Application Flow
- **User:** Register → Login → Submit complaint → Track status → Get resolution  
- **Agent:** View assigned complaints → Interact with users → Update status  
- **Admin:** Monitor complaints → Assign to agents → Ensure compliance  

---

## 📅 Milestones
1. **Setup:** Project environment setup  
2. **Backend:** APIs, authentication, complaint routing  
3. **Database:** MongoDB models for users, complaints, agents  
4. **Frontend:** React UI with API integration  
5. **Testing:** End-to-end testing of complaint lifecycle  

---

## 📸 Screens (Expected)
- Landing Page (features overview)  
- Login / Registration Page  
- User Dashboard (submit & track complaints)  
- Admin Dashboard (assign & monitor complaints)  
- Agent Panel (view & update assigned complaints)  

---

## ✅ Conclusion
ResolveNow ensures efficient, transparent, and secure complaint management. By integrating modern technologies like React, Express, and MongoDB, it improves customer trust and organizational efficiency.  

---

