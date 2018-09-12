import React, { Component } from 'react';
import { connect } from 'react-redux';
import {createPicture, fetchPictures} from "../../store/effects";
import {resetFormSaved} from "../../store/actions";
import Picture from "../../components/Picture/Picture";
import './Pictures.css';
import CreatePictureButton from "../../components/CreatePictureButton/CreatePictureButton";

export class Pictures extends Component {
    componentDidMount() {
        this.props.resetFormSaved();
        if (this.props.pictures.length < 2) {
            this.props.fetchPictures();
        }
    }

    render() {
        return (
            <React.Fragment>
                <CreatePictureButton />
                <div className="pictures">{
                    this.props.pictures.map(picture => (
                        <Picture key={picture.id} {...picture} />
                    ))
                }</div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = ({ pictures }) => ({ pictures });

const mapDispatchToProps = dispatch => ({
    fetchPictures: () => dispatch(fetchPictures()),
    resetFormSaved: () => dispatch(resetFormSaved())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Pictures);