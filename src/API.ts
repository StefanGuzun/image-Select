
export const getImage = async () => {
    return await fetch("http://localhost:3000/api/v1/image")
        .then((response) => response.blob())
        .then((imgURL) => URL.createObjectURL(imgURL))
        .catch((err) => err);
}

export const postImages = async (response: any) => { 
    await axios.post("http://localhost:8000/images", response); 
}

export const getReason = async () => {
    return await fetch("http://localhost:8000/reasons")
        .then((reason) => reason.json())
        .catch(err => console.log(err))
        }
