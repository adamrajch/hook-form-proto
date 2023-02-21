import initMiddleware from "@/config/init-middleware";
import Cors from "cors";
import { server } from "../../config";
// Initialize the cors middleware
const cors = initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  Cors({
    // Only allow requests with GET, POST and OPTIONS
    methods: ["OPTIONS"],
  })
);
export default async function handler(req, res) {
  console.log("POST /n1c");
  await cors(req, res);
  fetch(`${server}`)
    .then((response) => {
      response.json();
    })
    .then((data) => {
      console.log(JSON.stringify(data, null, 2));
      // if (!data) {
      //   res.status(400).json({ success: false });
      // } else {
      //   res.status(200).json({ success: true });
      // }
      res.status(200).json({ data: { succes: true } });
    });
}
