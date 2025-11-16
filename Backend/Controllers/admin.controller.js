const Classroom = require("../Models/classroom.model");
const Admin = require("../Models/admin.model");

const createClassroom = async (req, res) => {
    try {
        const { roomName, capacity, type, equipment, availabilitySchedule } = req.body;

        const classroom = await Classroom.create({
            roomName,
            capacity,
            type,
            equipment,
            availabilitySchedule,
        });

        res.status(200).json({
            status: "success", data: classroom
        });
    }
    catch (error) {
        res.status(500).json({ message: "Failed to create the classroom", error: error.message });
    }
}

const getClassrooms = async (req, res) => {
    try {
        const classrooms = await Classroom.find();

        res.status(200).json({
            status: "success", results: classrooms.length, data: classrooms
        });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const updateClassroom = async (req, res) => {
    try {
        const classroom = await Classroom.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });

        if (!classroom) {
            return res.status(404).json({ status: "fail", message: "classroom not found" })
        }

        res.status(200).json({ status: "success", data: classroom })
    }
    catch (error) {
        res.status(500).json({ status: "error", message: error.message })
    }
}

const deleteClassroom = async (req, res) => {
    try {

        const deleted = await Classroom.findByIdAndDelete(req.params.id);

        if (!deleted) {
            return res.status(404).json({ status: "fail", message: "Classroom not found"});
        }

        const classrooms = await Classroom.find(); 

        res.status(200).json({ status: "success", data: classrooms })
    }
    catch (error) {
        res.status(500).json({ status: "error", message: error.message })
    }
}

module.exports = {
    createClassroom, getClassrooms, updateClassroom, deleteClassroom
}