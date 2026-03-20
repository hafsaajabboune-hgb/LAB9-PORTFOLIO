import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "@/core/layout/MainLayout";
import { HomePage } from "@/modules/home/HomePage";
import { ProjectsPage } from "@/modules/projects/ProjectsPage";
import { JourneyPage } from "@/modules/journey/JourneyPage";
import { CredentialsPage } from "@/modules/credentials/CredentialsPage";
import { ContactPage } from "@/modules/contact/ContactPage";

export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "projects", element: <ProjectsPage /> },
      { path: "journey", element: <JourneyPage /> },
      { path: "credentials", element: <CredentialsPage /> },
      { path: "contact", element: <ContactPage /> },
    ],
  },
]);