const Appointment = require("../models/appointment");

const getAppointment = async (req, res) => {
  try {
    const appointment = await Appointment.findById(req.params.id);
    if (!appointment) {
      return res.send({ msg: "Appointment not found: Khong tim thay" });
    }
    res.json(appointment);
  } catch (error) {
    console.error("Error fetching appointment: Ket noi duoc roi", error);
    res.status(500).send("Internal Server Error");
  }
};

const getAllAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.json(appointments);
  } catch (error) {
    console.error("Error fetching appointments:", error);
    res.status(500).send("Internal Server Error");
  }
};

const createAppointment = async (req, res) => {
  try {
    const { date, time, serviceType, customer, dog } = req.body;

    const existingAppointment = await Appointment.findOne({
      customer,
      date,
      time,
    });
    if (existingAppointment) {
      return res
        .status(400)
        .send("You already have an appointment at this time.");
    }

    const appointment = new Appointment({
      date,
      time,
      serviceType,
      customer,
      dog,
    });

    await appointment.save();
    res.status(201).json(appointment);
  } catch (error) {
    console.error("Error creating appointment:", error);
    res.status(500).send("Internal Server Error");
  }
};

const deleteAppointment = async (req, res) => {
  try {
    const appointment = await Appointment.findByIdAndDelete(req.params.id);
    if (!appointment) {
      return res.status(404).send("Appointment not found");
    }
    res.status(200).send("Appointment deleted successfully");
  } catch (error) {
    console.error("Error deleting appointment:", error);
    res.status(500).send("Internal Server Error");
  }
};

const updateAppointment = async (req, res) => {
  try {
    const appointment = await Appointment.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!appointment) {
      return res.status(404).send("Appointment not found");
    }
    res.status(200).json(appointment);
  } catch (error) {
    console.error("Error updating appointment:", error);
    res.status(500).send("Internal Server Error");
  }
};

const getAppointmentsByCustomer = async (req, res) => {
  try {
    const appointments = await Appointment.find({
      customer: req.params.id,
    });
    if (!appointments) {
      return res.status(404).send("No appointments found for this customer");
    }
    res.status(200).json(appointments);
  } catch (error) {
    console.error("Error fetching appointments:", error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  getAppointment,
  createAppointment,
  getAllAppointments,
  deleteAppointment,
  updateAppointment,
  getAppointmentsByCustomer,
};
