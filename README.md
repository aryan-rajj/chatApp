<p align="center">
  <img alt="Chat-Application" src="https://drive.google.com/uc?export=view&id=1zErFJRQjIuCKZsra3h_G6IzzR2seFzwt" height="250px">
</p>

# Chat-Application

### An application made with ❤️ by:
- **[Aryan Raj](https://github.com/ak79036)**
- **Adm No.**: 22JE0182  
- **Department**: Electronics and communication  & Engineering
- **Institute**: IIT (ISM) Dhanbad  
- **Organization**: Ayna

<h2 align="center">Important Links</h2>

- **[Website Link](https://chat-application-aditiya.vercel.app)**
---

## Table of Contents
- **[About Chat-Application](#about-chat-application)**
- **[Application Features](#application-features)**
- **[Important Points](#important-points)**
- **[Building from Source & Deploying](#building-from-source--deploying)**
- **[End Credits](#end-credits)**

---

## About Chat-Application

This Chat Application is an **Ayna**.

It is a modern real-time chatting application built with a powerful tech stack, including **Next.js**, **Convex**, **Clerk**, **ShadCN**, and **LiveKit**. The platform provides seamless real-time chat, audio/video calls, and friend management functionality.

- **Next.js** - Provides a robust and scalable frontend with server-side rendering for optimal performance and seamless navigation.
- **Real-Time Chatting with Convex** - Ensures instant message delivery with database synchronization for all users.
- **Audio & Video Calls via LiveKit** - Enables high-quality, low-latency connections for voice and video calls.
- **Authentication with Clerk** - Manages secure user authentication and session handling.
- **Friends Management** - Real-time friends management, allowing users to add/remove friends and sync their contact list.

---

## Application Features

1. **Built with Next.js**  
   - Fast, responsive, and scalable frontend with server-side rendering (SSR) for optimized performance.

2. **Real-Time Messaging**  
   - Real-time single and group chat capabilities powered by **Convex** for instant message delivery and synchronization.

3. **Audio and Video Calls**  
   - Integrated **audio and video call** features provided by **LiveKit**, enabling high-quality calls from the chat interface.

4. **Secure User Authentication**  
   - **Clerk** handles secure login and sign-up processes, ensuring a personalized user experience.

5. **Friends Management**  
   - Users can **add** and **remove friends** in real-time, with updates managed by **Convex**.

6. **Beautiful and Accessible UI**  
   - A stylish, responsive UI built using **ShadCN** components for a smooth user experience.

7. **API-Driven Architecture**  
   - Robust API connections for seamless interaction between the chat, calls, and friends management functionalities.

---

## Important Points

<h2 align="center">System Design Diagrams:</h2>

<p align="center">
  <img alt="System Design 1" src="https://drive.google.com/uc?export=view&id=1tlwmPvJpgRAsUw6Ktrl_-6HdVAaieNAn" height="250px">
  <img alt="System Design 3" src="https://drive.google.com/uc?export=view&id=1SzpNwcwxSnyyENiwqspoI11pvaC-cn-A" height="250px">
</p>

For proper documentation, please refer to the presentation [here](https://drive.google.com/file/d/1ucovUTp1L8dsihDBzjQsdaEw1C1QizcQ/view?usp=sharing).

**Note:**  
To access the audio/video call feature, both users should tap the Video/Audio button to connect.

---
## Building from Source & Deploy to Hosting Platform

#### Prerequisites:
* Laptop/Desktop with internet access.

#### Steps:

1. **Clone the Repository**:
   - Clone the project from the GitHub repository:
     ```bash
     git clone https://github.com/your-repo/chatting-app.git
     ```

2. **Install Dependencies**:
   - Navigate to the project directory and install the required packages:
     ```bash
     npm install
     ```

3. **Set up Environment Variables**:
   - Create a `.env` file in the root directory and set up the following environment variables:
     - **Convex** API key
     - **LiveKit** API key
     - **Clerk** API key
     - Example:
     ```bash
     NEXT_PUBLIC_CONVEX_API_KEY=your-convex-api-key
     NEXT_PUBLIC_LIVEKIT_API_KEY=your-livekit-api-key
     NEXT_PUBLIC_CLERK_API_KEY=your-clerk-api-key
     ```

4. **Run the Application**:
   - Start the development server using:
     ```bash
     npm run dev
     ```

5. **Access the Application**:
   - Open your browser and go to [http://localhost:3000](http://localhost:3000) to access the app.

#### For Production:

1. **Build the Application**:
   - To create an optimized build for production, run:
     ```bash
     npm run build
     ```

2. **Run the Production Server**:
   - Start the server for the production environment:
     ```bash
     npm run start
     ```

3. **Building from Source & Deploy to Hosting Platform**:
   - You can deploy the application to a platform like **Vercel**, **Netlify**, or any other Node.js hosting service. For **Vercel**, follow these steps:
     - Sign up for an account at [Vercel](https://vercel.com/).
     - Connect your GitHub repository.
     - Set environment variables in the Vercel dashboard.
     - Deploy your application with a single click.

Now you have successfully deployed your real-time chatting application!
+





## End-Credits
You can find the Project Proposal here please do check it out [here](https://drive.google.com/file/d/1ucovUTp1L8dsihDBzjQsdaEw1C1QizcQ/view?usp=sharing).
We hope you have fun using this application ❤️