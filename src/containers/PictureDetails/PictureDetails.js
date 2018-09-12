import React, { Component } from 'react';
import { connect } from 'react-redux';
import {deletePicture, fetchPicture} from "../../store/effects";
import './PictureDetails.css';
import Moment from "react-moment";
import Load from "../../hoc/Load/Load";
import Toolbar from "../../components/Toolbar/Toolbar";
import CreatePictureButton from "../../components/CreatePictureButton/CreatePictureButton";
import RedirectIf from "../../hoc/RedirectIf/RedirectIf";
import ZoomingImage from "./ZoomingImage/ZoomingImage";

export class PictureDetails extends Component {
    componentDidMount() {
        if (!this.props.picture.id) {
            this.props.loadPicture(this.props.match.params.id);
        }
    }

    render() {
        const { picture, loading, deletePicture, history, match, pictureSaved } = this.props;
        return (
            <RedirectIf shouldRedirect={pictureSaved} to="/pictures">
                <div className="picture-details">
                    <Load loading={loading}>
                        <CreatePictureButton />
                        <h2>{picture.title}</h2>
                        <div className="picture-wrapper">
                            <ZoomingImage url={picture.url} title={picture.title} />
                        </div>
                        <div className="created-at">
                            <Moment fromNow>{picture.createdAt}</Moment>
                        </div>
                        <Toolbar
                            onEdit={() => history.push(`${match.url}/update`)}
                            onDelete={() => deletePicture(picture.id)}
                            onGoBack={() => history.push('/pictures')}
                        />
                    </Load>
                </div>
            </RedirectIf>
        );
    }
}

const mapStateToProps = ({ pictures, pictureSaved, loading }, props) => ({
    picture: pictures.find(picture => picture.id === props.match.params.id) || {},
    pictureSaved
});

const mapDispatchToProps = dispatch => ({
    loadPicture: (id) => dispatch(fetchPicture(id)),
    deletePicture: (id) => dispatch(deletePicture(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PictureDetails);