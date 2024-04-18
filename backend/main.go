package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

type album struct {
	ID     string  `json:"id"`
	Title  string  `json:"title"`
	Artist string  `json:"artist"`
	Price  float64 `json:"price"`
}

type Post struct {
	Type string `json:"type"`
	Data string `json:"data"`
}

type Project struct {
	ID          string `json:"id"`
	Title       string `json:"title"`
	Description string `json:"description"`
	Image       string `json:"image"`
	Content     []Post `json:"content"`
	Date        string `json:"date"`
}

var projects = []Project{
	{ID: "1", Title: "Portfolio Website", Description: "My portfolio website serves as an efficient display of my technical expertise in full-stack web development. It's designed to showcase not only my past projects but also provide a platform for sharing my current technological explorations. This site is an authentic representation of my work, offering a comprehensive overview of my skills and proficiency. The primary goal behind this digital portfolio is to highlight my abilities as a developer. It serves as a catalyst for exploring new technologies and techniques, continuously pushing me to learn and grow. I've incorporated various advanced frontend features, including responsive design and dynamic JavaScript applications, ensuring a seamless user experience across devices. Backend is currently still in development. Through this platform, I aim to connect with fellow enthusiasts and potential collaborators, inviting them to witness my journey and share their insights. It's an open invitation to explore the exciting realm of web development and foster collaborative relationships. ", Image: "https://www.liblogo.com/img-logo/max/re269r227-react-logo-react-logo-import-io.png", Content: []Post{{Type: "text", Data: "The current iteration of my portfolio website is built on a robust React front-end, coupled with a FastAPI backend working to connect with the MySQL database. This entire setup is housed on DigitalOcean's App Platorm. GitHub provides reliable version control and facilitates my CI/CD processes, streamlining development. However, I plan on future changes. I'm eyeing a migration to a more versatile Go language as a backend, which excites me as it offers a new learning experience. Along with this, I'm considering alternative CI/CD pipelines for an even smoother developmental workflow."}, {Type: "text", Data: "Now updated to use the Go language as a backend instead of test files hard coded on the frontend. The json files served their purpose to help develop and get a good start of the structure of the web page but i have been itching to get started into some Go. So far it is only a simple get service but I have plans to expand it into a whole RESTful app with authentication. This is certainly a start as i learn more about Go."}, {Type: "image", Data: "https://upload.wikimedia.org/wikipedia/commons/0/05/Go_Logo_Blue.svg"}}, Date: "2021-01-01"},
	{ID: "2", Title: "Project 2", Description: "Description 2", Image: "Image 2", Content: []Post{{Type: "text", Data: "Text 2"}}, Date: "2021-01-02"},
	{ID: "3", Title: "Project 3", Description: "Description 3", Image: "Image 3", Content: []Post{{Type: "text", Data: "Text 3"}}, Date: "2021-01-03"},
}

func main() {
	router := gin.Default()
	router.GET("/projects", getProjects)
	router.GET("/projects/:id", getProjectByID)

	router.Run("localhost:4000")
}

func getProjects(c *gin.Context) {
	c.IndentedJSON(http.StatusOK, projects)
}

func getProjectByID(c *gin.Context) {
	id := c.Param("id")
	for _, a := range projects {
		if a.ID == id {
			c.IndentedJSON(http.StatusOK, a)
			return
		}
	}
	c.IndentedJSON(http.StatusNotFound, gin.H{"message": "project not found"})
}
