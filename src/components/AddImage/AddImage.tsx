import {img} from "../MainPage/MainPage";
import "../MainPage/MainPage.css"


export const AddImage = (props: any) => {
    const PhotoRemove = (e: any) => {
        const deleteButton = e.target.parentNode
        deleteButton.remove(deleteButton)
    }
    return (
            <div className="NotRealPhotosContainer">
                <span className="photosCloseIcon" onClick={PhotoRemove}>x</span>
                <img className="Photos" src={props.image} alt=""></img>
            </div>
)
}

