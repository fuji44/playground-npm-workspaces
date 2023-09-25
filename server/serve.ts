import express from "express"
import { now, printReleaseDay } from "./func"

const app = express()
const port = 3000

app.get('/', (req, res) => {
  const text = [`${printReleaseDay()}`, `${now()}`].join("<br>")
  res.send(text)
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
