# Youtube2.0

In this project, I developed a YouTube-like dashboard with the following features:

**Features Implemented**

- **Header**: A responsive header with navigation elements.
- **Sidebar**: A collapsible sidebar for easy navigation.
- **Homepage**: Displays popular videos with an infinite scroll feature.
- **Watch Page**: Includes a video player, comment section, and related videos section.
- **Search Functionality**: Uses debounce and Redux store to optimize search suggestions and reduce API calls.
- **Nested Comments**: Supports 2-level nested comments.
- **Shimmer UI**: Displays shimmer effects during pending network calls.
- **Live Chat**: Implements infinite scroll for live video chats, maintaining a fixed number of messages in the Redux store to avoid UI crashes.
- **Category-wise Browsing**: Allows browsing videos by categories.

**Technologies Explored**

- **React**
  - Functional Components
  - Props
  - Hooks:
    - React Hooks: `useState`, `useRef`, `useEffect`
    - Redux Hooks: `useSelector`, `useDispatch`
    - React Router DOM: `useNavigate`, `useLocation`
  - Creating Custom Hooks
  - Routing with `react-router-dom`
  - State Management

- **Other Technologies**
  - Tailwind CSS
  - Redux Store
  - YouTube API Integration

**Deployment**

- Deployed the React app on Vercel.
- Deployed the React app on AWS using AWS Amplify with CI/CD.
