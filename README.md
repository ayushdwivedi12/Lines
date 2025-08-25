# Lines v1

A full-stack blogging platform built with **Express**, **MongoDB**, **EJS**, and **Cloudinary** for image uploads.  
Share your thoughts, explore community blogs, and manage your posts with a clean UI.

---

## Features

- Create, view, update, and delete blog posts
- Upload and display cover images (Cloudinary)
- Explore all blogs and search by title
- User authentication (sign up/sign in)
- Responsive EJS templates
- RESTful Express backend with MongoDB

---

## Setup

1. **Clone the repository**
    ```bash
    git clone https://github.com/ayushdwivedi12/Blogify-v1.git
    cd Lines-v1
    ```

2. **Install dependencies**
    ```bash
    npm install --legacy-peer-deps
    ```

3. **Create a `.env` file**  
   Copy the contents from `.env.example` and fill in your own credentials:
    ```env
    PORT=8080
    MONGO_URL=your_mongodb_connection_string
    CLOUDINARY_CLOUD_NAME=your_cloud_name
    CLOUDINARY_API_KEY=your_api_key
    CLOUDINARY_API_SECRET=your_api_secret
    SECRET=your_session_secret
    ```

4. **Start the application**
    ```bash
    npm start
    ```

App runs on `http://localhost:8080`

---

## Folder Structure

```
Lines-v1/
├── controllers/      # Express controllers
├── models/           # Mongoose models
├── routes/           # Express routes
├── middlewares/      # Custom middlewares (auth, upload, etc.)
├── views/            # EJS templates
│   ├── partials/
│   ├── bloglist.ejs
│   ├── home.ejs
│   ├── signup.ejs
│   └── ...
├── public/           # Static assets (CSS, images)
├── .env              # Environment variables
├── .env.example      # Example environment file
├── app.js            # Main Express app
├── package.json
└── README.md
```

---

## API Endpoints

- `GET /` — Home page
- `GET /blog/explore` — Explore all blogs
- `GET /blog/:id` — View a single blog post
- `POST /blog/add-blog` — Create a new blog post
- `POST /user/signup` — User registration
- `POST /user/signin` — User login

---

## Technologies Used

- **Backend:** Express, MongoDB, Mongoose, dotenv, cors, Cloudinary
- **Frontend:** EJS templates, Bootstrap, custom CSS
- **Image Uploads:** Cloudinary

---

## License

MIT © Ayush Dwivedi

---

## Contributing

Pull requests are welcome! For major changes, please open an issue first.

---

## Issues

If you encounter any problems, please open an [issue](https://github.com/ayushdwivedi12/Blogify-v1/issues).

---

## Author

[ayushdwivedi12](https://github.com/ayushdwivedi12)
