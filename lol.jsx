/*

This code imports the necessary dependencies for creating routes in a React application. 
It imports React from the 'react' package, as well as BrowserRouter, Routes, and Route from the 'react-router-dom' package.



This code defines a functional component called App using an arrow function. 
This component represents the root component of your application and will contain the routing logic.


/* Routes Declarations:

These <Route> components define the routes for different paths in your application. Each <Route> has two key attributes:

path: Specifies the URL path that the route should match.
element: Represents the component that should be rendered when the corresponding path is accessed.


Routes and components used are give below

/signup - Renders the SignUp component-This route is responsible for the user signup functionality.

/login - Renders the Login component.This route handles the user login functionality.

/home - Renders the Home component.This route represents the home page of your application.

/user/:id - Renders the UserProfile component.This dynamic route allows you to display a user's profile based on their id.

/post/:id - Renders the PostDetails component.This dynamic route is used to display the details of a specific post based on its id.

/chat - Renders the Chat component.This route represents the chat functionality of your application.

/topics - Renders the Topics component.This route displays a list of available topics.

/topics/:topic/questions - Renders the TopicQuestions component.This dynamic route allows you to show a list of questions for a specific topic.

/topics/:topic/questions/:id/solve - Renders the SolveQuestion component.This dynamic route is used to solve a particular question specified by its id within a given topic.

/leaderboard - Renders the Leaderboard component.This route displays the leaderboard of your application.

/admin - Renders the AdminPanel component.This route represents the admin panel of your application.

/newquestion - Renders the NewQuestion component.This route is responsible for creating a new question.




*/



import React from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';

// Page Components
// import SignUp from './components/SignUp';
// import Login from './components/Login';
// import Home from './components/Home';
// import UserProfile from './components/UserProfile';
// import PostDetails from './components/PostDetails';
// import Chat from './components/Chat';
// import Topics from './components/Topics';
// import TopicQuestions from './components/TopicQuestions';
// import SolveQuestion from './components/SolveQuestion';
// import Leaderboard from './components/Leaderboard';
// import AdminPanel from './components/AdminPanel';
// import NewQuestion from './components/NewQuestion';



const App = () => {
  return (
    <BrowserRouter>
     <Routes>
        <Route  path="/signup" element={SignUp} />
        <Route  path="/login" element={Login} />
        <Route  path="/home" element={Home} />
        <Route  path="/user/:id" element={UserProfile} />
        <Route  path="/post/:id" element={PostDetails} />
        <Route  path="/chat" element={Chat} />
        <Route  path="/topics" element={Topics} />
        <Route  path="/topics/:topic/questions" element={TopicQuestions} />
        <Route  path="/topics/:topic/questions/:id/solve" element={SolveQuestion} />
        <Route  path="/leaderboard" element={Leaderboard} />
        <Route  path="/admin" element={AdminPanel} />
        <Route  path="/newquestion" element={NewQuestion} />
     </Routes>
    </BrowserRouter>
  )
}

export default App;