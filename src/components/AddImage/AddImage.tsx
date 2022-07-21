import "../MainPage/MainPage.css"
// import { deleteReports } from "../../API"
import { deleteImage } from "../MainPage/MainPage"

export const AddImage = (props: any) => {
    const PhotoRemove = (e: any) => {
        const deleteButton = e.target.parentNode
        deleteButton.remove(deleteButton)
        deleteImage(deleteButton)
    }
    return (
            <div className="NotRealPhotosContainer">
                <span className="photosCloseIcon" onClick={PhotoRemove}>x</span>
                <img className="Photos" src={props.image} alt=""></img>
            </div>
)
}
