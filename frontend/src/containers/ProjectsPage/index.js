import React from "react";
import ProjectPost from "../../components/Project/ProjectPost";

const ProjectsPage = () => {
  const test_data = {
    title_text: "Test Title",
    title_image: "https://via.placeholder.com/150",
    opening: "This is a test opening",
    body: [
      {
        sub_head: "Sub Head 1",
        content: "This is a test content",
        images: [
          "https://via.placeholder.com/150",
          "https://via.placeholder.com/150",
        ],
      },
      {
        sub_head: "Sub Head 2",
        content: "This is a test content",
        images: [
          "https://via.placeholder.com/150",
          "https://via.placeholder.com/150",
        ],
      },
    ],
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-4">Projects Page</h1>
      <ProjectPost {...test_data} />
    </div>
  );
};

export default ProjectsPage;
