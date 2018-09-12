import React, { Component } from 'react';
import Input from "../../../components/UI/Input/Input";
import RedirectIf from "../../../hoc/RedirectIf/RedirectIf";
import './PictureForm.css';

class PictureForm extends Component {
    constructor(props) {
        super(props);
        const { title, url } = props;
        this.state = { title, url };
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
        if (this.props.onNewPicture) {
            return this.props.onNewPicture({ title, url });
        }
        this.props.onUpdatePicture({ id: this.props.id, title, url });
    };

    render() {
        return (
            <RedirectIf shouldRedirect={this.props.pictureSaved} to="/pictures">
                <div className="picture-form">
                    <h2>Picture</h2>
                    <Input label="Title" id="title" value={this.state.title} placeholder="Picture title..."
                           onChange={this.onChangeTitle}
                    />
                    <Input label="URL" id="url" value={this.state.url} placeholder="Picture URL..."
                           onChange={this.onChangeUrl}
                    />
                    <button className="btn" onClick={this.onSubmit}>SUBMIT</button>
                </div>
            </RedirectIf>
        );
    }
}

export default PictureForm;