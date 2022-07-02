import fetch from "node-fetch";
import moment from "moment";

export const getAllData = async (req, res) => {
  try {
    res.status(200).json(final_data);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
