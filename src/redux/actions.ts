const initialState = {
    reason: "dada",
    fake: "jkh"

}

export const realNotReal = (state = initialState, action: { type: any; }) => {
    switch (action.type) {
        case "REAL": 
        return {...state}
        // {
        //     const realImg = () => {
        //         window.location.reload()
        //     }
        //     return realImg
        // }
        
    }
}
