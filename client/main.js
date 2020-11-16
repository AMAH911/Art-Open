import React  from "react"
import {render} from "react-dom"
import CountDown from "./app"


render(<CountDown hours = "0" minutes = "1" seconds = "10"  />, document.getElementById("root"))