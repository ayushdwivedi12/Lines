# Blogify v1  
**A full-stack blog app with Cloudinary image uploads**  
🔗 Live: [https://blogify-0h6c.onrender.com](https://blogify-0h6c.onrender.com)  

## Features  
- Create rich blog posts with title, body and cover images  
- Secure image uploads using Multer + Cloudinary  
- Homepage blog listing with author info  
- Detailed post viewing experience  
- User session management  

## Tech Stack  
- **Backend**: Node.js, Express  
- **Database**: MongoDB, Mongoose  
- **Frontend**: EJS, Bootstrap  
- **Image Storage**: Multer + Cloudinary  
- **Hosting**: Render  

## Folder Structure  

Blogify-v1/
├── models/ # Mongoose data models
├── controllers/ # Business logic
├── routes/ # Express routes
├── views/ # EJS templates
├── public/ # Static assets (CSS/JS)
├── uploads/ # Temporary image storage
├── app.js # Main application file
└── .env.example # Environment template

## Setup  
1. Clone the repository:  
git clone https://github.com/ayushdwivedi12/Blogify-v1.git
cd Blogify-v1

2. Install dependencies
npm install --legacy-peer-deps

4. Create .env file: 
PORT=8080
MONGO_URL=your_mongodb_connection_string
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
SECRET=your_session_secret

5. Start the application:
npm start

License
MIT © Ayush Dwivedi


