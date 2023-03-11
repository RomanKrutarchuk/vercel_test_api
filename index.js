import express from "express";
const app = express();
app.get("/", (req, res) => {
  res.send("hello server");
});
app.listen(process.env.PORT || 3000);

export default {
  app,
};
