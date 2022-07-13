import axios from 'axios'
import React from 'react'

export default function server() {
axios.get("http://localhost:3000/api/v1/image")
.then(res => res.data)
}






// axios
//       .get
//       .then(res => {