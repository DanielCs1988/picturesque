import React, { Component } from 'react';
import Input from "../../../components/UI/Input/Input";
import RedirectIf from "../../../hoc/RedirectIf/RedirectIf";
import './PictureForm.css';

class PictureForm extends Component {
    constructor(props) {
        super(props);
        const { title, url, onNewPicture } = props;
        this.state = { title, url, updating: !onNewPicture };
    }

    onChangeTitle = ({ target: { value } }) => {
        this.setState({ title: value });
    };

    onChangeUrl = ({ target: { value } }) => {
        this.setState({ url: value });
    };

    onSubmit = event => {
        event.preventDefault();
        const { title, url } = this.state;
        if (this.state.updating) {
            return this.props.onUpdatePicture({ id: this.props.id, title, url });
        }
        this.props.onNewPicture({ title, url });
    };

    render() {
        return (
            <RedirectIf shouldRedirect={this.props.pictureSaved} to="/pictures">
                <div className="picture-form">
                    <h2>{this.state.updating ? 'Edit Image' : 'New Image'}</h2>
                    <div className="column">
                        <Input label="Title" id="title" value={this.state.title} placeholder="Picture title..."
                               onChange={this.onChangeTitle}
                        />
                        <Input label="URL" id="url" value={this.state.url} placeholder="Picture URL..."
                               onChange={this.onChangeUrl}
                        />
                        <div className="column">
                            <button className="btn" onClick={this.onSubmit}>SUBMIT</button>
                        </div>
                        <div className="column">
                            <button className="btn" onClick={() => this.props.history.goBack()}>BACK</button>
                        </div>
                    </div>
                    <div className="column">
                        <img src={this.state.url} alt={this.state.title} />
                    </div>
                </div>
            </RedirectIf>
        );
    }
}

export default PictureForm;