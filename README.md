Blogify v1

A full-stack Blog Web Application where users can create, read, and share blogs with images.  
Built using Node.js, Express, MongoDB, Mongoose, and EJS templating engine.

Live Link: https://blogify-0h6c.onrender.com

Preview
Screenshots coming soon...

Features
- Create rich blog posts with title, body, and cover image
- Image upload handled with Multer
- Blogs list on homepage with user and date
- Detailed view of each blog post
- User session support (Ready for auth integration)
- Clean folder structure with Express routing and controllers

Tech Stack
Backend: Node.js, Express.js  
Database: MongoDB Atlas, Mongoose  
View Engine: EJS  
Styling: Bootstrap, CSS  
File Upload: Multer  
Deployment: Render

Folder Structure
Blogify-v1/
├── models/              # Mongoose schemas
├── routes/              # Express routes
├── controllers/         # Controller logic
├── views/               # EJS templates
├── uploads/             # Uploaded images
├── public/              # Static assets
├── app.js               # Main app file
└── .env.example         # Environment variable example

Getting Started Locally

1. Clone the repository
git clone https://github.com/ayushdwivedi12/Blogify-v1.git
cd Blogify-v1

2. Install dependencies
npm install --legacy-peer-deps


3. Create .env file
PORT=8080  
MONGO_URL=your_mongodb_connection_string  
SECRET=your_session_secret

4. Run the app
npm start  
Visit: http://localhost:8080

Live Project
Hosted on Render:  
https://blogify-0h6c.onrender.com

Author
Ayush Dwivedi 

License
This project is licensed under the MIT License.

Bonus
Feel free to fork, clone, or star this repo if you found it helpful.
