
import { createBrowserRouter } from "react-router";
import Layout from "../component/Layout";
import Users from "../component/users/Users";
import { Suspense } from "react";
import Posts from "../component/posts/Posts";

const usersPromises = fetch('https://jsonplaceholder.typicode.com/users').then(res=> res.json());
const postPromises = fetch('https://jsonplaceholder.typicode.com/posts').then(res=> res.json())

const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      {
        index: true,
        element: <h3>this is Homepage page</h3>
      },
      {
        path: '/about',
        element: <h3>this is about page</h3>
      },
      {
        path: '/contact',
        element: <h3>this is contact page</h3>
      },
      {
        path: '/service',
        element: <h3>this is service page</h3>
      },
      {
        path: '/users',
        element: <Suspense fallback={<span>loading....</span>}>
          <Users usersPromises={usersPromises}></Users>
        </Suspense>
      },
      {
        path: '/posts',
        element: <Suspense fallback= { <span>loading...</span>}>
          <Posts postPromises = {postPromises}></Posts>
        </Suspense>
      }
    ]
  }
])
export default router