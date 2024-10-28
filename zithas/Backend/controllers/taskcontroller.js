import Tasks from "../models/tasks.js";
import validateObjectId from "../utility/validation.js";

export const getTasks = async (req, res) => {
    try {
        const tasks = await Tasks.find({ user: req.user.id });
        return res.status(200).json({ tasks, status: true, msg: "Tasks retrieved successfully" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ status: false, msg: "Internal server error" });
    }
};

export const getTask = async (req, res) => {
    try {
        if (!validateObjectId(req.params.taskId)) {
            return res.status(400).json({ status: false, msg: "Invalid task ID" });
        }
        const task = await Tasks.findOne({ user: req.user._id, _id: req.params.taskId });
        if (!task) {
            return res.status(404).json({ status: false, msg: "Task not found" });
        }
        return res.status(200).json({ task, status: true, msg: "Task retrieved successfully" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ status: false, msg: "Internal server error" });
    }
};

export const createTask = async (req, res) => {
    try {
        const { description } = req.body;
        if (!description) {
            return res.status(400).json({ status: false, msg: "Description is required" });
        }
        const task = await Tasks.create({ user: req.user.id, description });
        return res.status(201).json({ task, status: true, msg: "Task created successfully" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ status: false, msg: "Internal server error" });
    }
};
