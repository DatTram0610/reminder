
import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";

import { postNote } from "../actions";

class PostForm extends Component {

    renderField(field) {
        return (
            <div className="form-group"> 
                <label>{field.label}</label>
                <input 
                    className="form-control"
                    type="text"
                    {...field.input}
                />
            </div>
        );
    };

    onSubmit(values) {
       this.props.postNote(values);
    }

    render() {

        const { handleSubmit } = this.props;

        return (
            <div> 
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <Field 
                        label="Title"
                        name="title"
                        component={this.renderField}
                    />
                    <Field 
                        label="Content"
                        name="content"
                        component={this.renderField}
                    />   
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    };
};

export default reduxForm({
    form: "PostNewNote"
})(
    connect(null, { postNote })(PostForm)
);
