import axios from "axios";

export const getImages = async () => {
    return await fetch("http://localhost:3000/api/v1/image")
        .then((response) => response.blob())
        .then((imgURL) => URL.createObjectURL(imgURL))
        .catch((err) => err);
}

export const getReason = async () => {
    return await fetch("http://localhost:8000/reasons")
        .then((reason) => reason.json())
        .catch(err => console.log(err))
        }

export const getReports= async () => {
    const request = axios.get("http://localhost:8000/reports")
        return await request
        .then((reason) => reason.data)
        .catch(err => console.log(err))
}

export const postReports = async (src: any) => {
    await axios.post("http://localhost:8000/reports", src);
}

export const postReason = async (reason: any) => {
    await axios.post("http://localhost:8000/reasons", reason);
}

export const deleteReports = async (id: number) => {
    await axios.delete(`http://localhost:8000/reports/${id}`);
}

