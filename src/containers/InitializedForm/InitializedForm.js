import { connect } from 'react-redux';
import {createPicture, updatePicture} from "../../store/effects";
import PictureForm from "./PictureForm/PictureForm";

const mapStateToProps = ({ pictures, pictureSaved }, props) => {
    if (props.match.url.match(/.*new$/)) {
        return {
            title: '',
            url: '',
            pictureSaved
        };
    }
    const picture = pictures.find(picture => picture.id === props.match.params.id);
    return { ...picture, pictureSaved };
};

const mapDispatchToProps = (dispatch, props) => {
    return props.match.url.match(/.*new$/) ? {
        onNewPicture: picture => dispatch(createPicture(picture))
    } : {
        onUpdatePicture: picture => dispatch(updatePicture(picture))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PictureForm);