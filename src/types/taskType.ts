export type TaskName = string;

// Созданная задача имеет название и статус готовности
export type Task = {
    name: string;
    isDone: boolean
}

export type Tasks = Task[];