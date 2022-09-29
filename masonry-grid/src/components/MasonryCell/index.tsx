import {IMasonryCellProps} from "./Types"
// import {PrimitivesValidation} from "../../../../../../Validation/PrimitivesValidation"
const MasonryCell = ({src}: IMasonryCellProps) => {
// PrimitivesValidation.isImage(src)
    return(
        <img src={src} alt="cat" style={{width:'100%'}}></img>
    )
}

export {MasonryCell}
