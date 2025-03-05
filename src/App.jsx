import { AppLayout } from "./AppLayout/AppLayout"
import Chatbot from "./components/Chattbot"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Home } from "./components/Home"
import { SignIn } from "./UI/SingIn"
import { Contact } from "./UI/Contact"
import { Biocontext } from "./components/Context"
import { Pages } from "./components/Pages"
import Jarvis from "./components/JarvisChatbot"

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/chatbot",
          element: <Chatbot />
        },
        {
          path: "/pages",
          element: <Pages />
        },
        {
          path: "/jarvis",
          element: <Jarvis />
        },
        {
          path: "/join-me",
          element: <SignIn />
        },
        {
          path: "/contact",
          element: <Contact />
        }
      ]
    },

  ])
  return (
    <div className="overflow-hidden">
      <Biocontext>
        <RouterProvider router={router} />
      </Biocontext>
    </div>
  )


}
export default App
