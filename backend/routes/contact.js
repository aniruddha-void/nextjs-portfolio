import express from "express";
import Message from "../models/Message.js";

const router = express.Router();

router.post("/send", async (req, res) => {
  const { email, subject, message } = req.body;

  if (!email || !subject || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const newMessage = new Message({ email, subject, message });
    await newMessage.save();
    res.status(200).json({ success: true, message: "Message saved!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to save message" });
  }
});

export default router;
