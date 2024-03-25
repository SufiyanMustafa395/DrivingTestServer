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

module.exports = { getAppointment };
