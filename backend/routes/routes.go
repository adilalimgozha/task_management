package routes

import (
	handlers "github.com/adilalimgozha/task_management/handlers"

	"github.com/gin-gonic/gin"
)

func SetupRoutes(r *gin.Engine) {
	r.GET("/tasks", handlers.GetTasks)
	r.POST("/tasks", handlers.CreateTask)
	r.DELETE("/tasks/:id", handlers.DeleteTask)
	r.PUT("/tasks/:id", handlers.UpdateTask)
}
