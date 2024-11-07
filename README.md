# Chat Application Frontend

This project is a frontend for a chat application built with React. It allows users to view conversations, search for contacts, start new chats, and exchange messages. The application utilizes dummy data from JSON files to simulate conversations and contacts.

## Features

### Core Functionalities
- **Login**: Assumes a dummy logged-in user (no actual login and authentication).
- **Left Sidebar**:
  - Displays a list of all conversations, showing each contact's name and the last message in the chat.
  - Allows users to search for conversations by contact name.
  - "Create Conversation" button to start a new conversation or access an existing one with a selected contact from the users list.
- **Right Sidebar (Chat View)**:
  - Shows messages for the currently selected conversation.
  - Allows users to send new messages in the chat.
- **Alerts and Notifications**:
  - Error and success alerts are displayed for actions like sending messages or handling connection issues, using `react-toastify` for notifications.

### Bonus Feature
- **Data Persistence**: The application utilizes Context API for state management. Conversations and messages are persisted in Context to maintain the conversation state throughout the app session.

### Tech Stack
- **React**: Component-based UI library.
- **Context API**: For global state management.
- **Material-UI** (optional): For styling components and UI consistency.
- **react-toastify**: For alert and notification management.
- **JSON Files**: For dummy data to simulate backend data.

## Project Setup

### Prerequisites
- **Node.js** (v14+)
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/chat-application-frontend.git
   cd chat-application-frontend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm start
   ```

### File Structure
- **/src**:
  - **components**: Contains React components for UI sections like Sidebar, ChatView, and Alerts.
  - **userApi**: Contains JSON files with dummy data for initial contacts and conversations.
    - `conversationsData.json`: Includes pre-configured conversations and messages.
    - `users.json`: Lists available users who can be added to the conversation list.
  - **context**: Context setup for managing global state.
  - **App.js**: Main application component, which defines and renders the layout.

## Technical Details

### Data Loading
- **Dummy Data**: The `conversationsData.json` and `users.json` files located in `/src/userApi` include pre-configured contacts and conversations.
- **Initial Load**: Data is loaded from these JSON files into Context API upon application startup.

### State Management
- **Context API**: All state for conversations, messages, and contacts is managed by Context API.
- **Persistence**: Data persistence is handled in the Context, allowing conversations to stay intact during the app session.

### Error Handling
- **Notifications**: Using `react-toastify` for alerting users about successes and errors, such as empty message sent Error or success notification on Selecting User from list and .

## Usage

1. **Viewing Conversations**:
   - Conversations are displayed in the left sidebar.
   - Click on a conversation to view its messages in the right sidebar.

2. **Searching Conversations**:
   - Use the search bar in the left sidebar to find conversations by contact name.

3. **Starting a New Conversation**:
   - Click the "Create Conversation" button to open a list of contacts from `users.json`.
   - Selecting a contact either starts a new conversation or opens the existing one.

4. **Messaging**:
   - Type a message in the input box in the right sidebar and press "Send" to add it to the chat.
   - Notifications appear for message-related feedback.

## Development and Contribution

To contribute to this project:
1. **Fork** the repository.
2. **Create a branch**: `git checkout -b feature-branch`.
3. **Make changes** and **commit**.
4. **Push to your branch**: `git push origin feature-branch`.
5. **Open a pull request** for review.
