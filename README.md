# What I have done in this project?

Implemented a youtube like dashboard contains
- Header
- Sidebar
- Homepage consists of popular videos (with Infinite Scroll Feature)
- Watchpage consists of video player, comment section and related videos section
- Search functionality using debounce and redux store to reduce search suggestion API calls
- 2-level nesting comments
- Show Shimmer UI when there're pending network calls
- Infinite scroll live chat feature implemented for live videos. Will store a fixed number of message at max at a time in redux store to avoid UI crash.
- Categorywise video browsing

# Explored about React

- Functional Component
- Props
- Hooks
    - React Hooks: `useState`, `useRef`, `useEffect`
    - Redux Hooks: `useSelector`, `useDispatch`
- Creating Custom Hooks
- Routing (`react-router-dom`)
- State Management

# Explored apart from React

- Tailwind CSS
- Redux Store
- Youtube API Integration

# Explored regarding Cloud

- How to deploy a react app in Vercel
- How to deploy a react app in AWS
    - Using AWS Amplify with CI/CD

<hr>

# TODO

- Show related videos in watch page
- Make video player responsive for big screen
- Write detail about JsonP. And challenges faced around this topic
- Only store last 50 search suggestion. And remove the old entry if it exceeds 50