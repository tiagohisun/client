import axios from "axios";

export const sendMail = async (link) => {
  try {
    let request = await axios
      .post("/api/email", {
        name: "Malith",
        email: "tiagohisun@gmail.com",
        subject: "Someone sent you a Link.",
        msg: link,
      })
      .then((res) => {
        return res;
      });
    return request.status === 200 ? true : false;;
  } catch (err) {
    console.error(err);
  }
};