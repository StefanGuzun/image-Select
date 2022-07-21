import "../MainPage/MainPage.css"
import { deleteReports } from "../../API"

export const AddImage = (props: any) => {
    const PhotoRemove = (e: any) => {
        const deleteButton = e.target.parentNode
        deleteButton.remove(deleteButton)
        deleteReports(props.id)
    }

    return (
            <div className="NotRealPhotosContainer">
                <span className="photosCloseIcon" onClick={PhotoRemove}>x</span>
                <img style={{height: "100%", width: "100%", borderRadius: "15px"}} src={props.image} alt=""></img>
            </div>
)
}
