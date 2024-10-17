package models

type Task struct {
	ID          uint   `gorm:"primaryKey"`
	Title       string `json:"title"`
	Description string `json:"description"`
	Status      string `json:"status"`
}
