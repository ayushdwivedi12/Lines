
## Setup

1. **Clone the repository**
    ```bash
    git clone https://github.com/ayushdwivedi12/Blogify-v1.git
    cd Blogify-v1
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

---

## License

MIT © Ayush Dwivedi
