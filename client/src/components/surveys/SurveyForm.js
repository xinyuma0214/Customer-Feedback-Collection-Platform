import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';
import _ from 'lodash';
import {Link} from 'react-router-dom';
import validateEmails from '../../utils/validateEmails';

const FIELDS = [
  {label:'Survey Title', name:'title' },
  {label:'Survey Line', name:'subject'},
  {label:"Email Body", name:"body"},
  {label:"Recipent List", name:"emails"}
];

class SurveyForm extends Component {
  renderFields(){
    // return (
    //   <div>
    //     <Field label="Survey Title" type="text" name="title" component={SurveyField} />
    //     <Field label="Survey Line" type="text" name="subject" component={SurveyField} />
    //     <Field label="Email Body" type="text" name="body" component={SurveyField} />
    //     <Field label="Recipent List" type="text" name="emails" component={SurveyField} />
    //   </div>
    // );
    return _.map(FIELDS,({label, name}) => {
      return (
        <Field key={name} component={SurveyField} type="text" label={label} name={name} />
      );
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
          {this.renderFields()}
          <Link to="/surveys" className="red btn-flat white-text">
            Cancel
          </Link>

          <button type="submit" className="teal btn-flat right white-text">
            Next
            <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    );
  }
}

function validate(values){
  const errors = {};

  // if(!values.title){
  //   errors.title = 'You must provide a title!';
  // }
  // if(!values.subject){
  //   errors.subject = 'You must provide a subject!';
  // }
  // if(!values.body){
  //   errors.body = 'You must provide a body!';
  // }
  // if(!values.emails){
  //   errors.emails = 'You must provide a email!';
  // }

  errors.emails = validateEmails(values.emails || '')

  _.each(FIELDS,({ name })=>{
    if(!values[name]){
      errors[name] = 'You must provide a value';
    }

  });

  return errors;
}
export default reduxForm({
  //property
  validate,
  form: 'SurveyForm'
})(SurveyForm);
