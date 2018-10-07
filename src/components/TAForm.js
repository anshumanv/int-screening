
import React from 'react';

import { Form, Input, Icon, Button, Radio } from 'antd';
import * as firebase from 'firebase';
import "../App.css";

const FormItem = Form.Item;

let uuid = 0;
class DynamicFieldSet extends React.Component {

	 state = {
    	value: 1,
    	count:0,
  	}
  remove = (k) => {
    const { form } = this.props;
    // can use data-binding to get
    const keys = form.getFieldValue('keys');
    // We need at least one passenger
    if (keys.length === 1) {
      return;
    }

    // can use data-binding to set
    form.setFieldsValue({
      keys: keys.filter(key => key !== k),
    });
  }

  add = () => {
    const { form } = this.props;
    // can use data-binding to get
    const keys = form.getFieldValue('keys');
    const nextKeys = keys.concat(uuid);
    uuid++;
    // can use data-binding to set
    // important! notify form to detect changes
    form.setFieldsValue({
      keys: nextKeys,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
    	var Question = new Object();
      Question.question = document.querySelector('.question').value;
        Question.domain = document.querySelector('.domain').value;
        Question.weoght = document.querySelector('.weight').value
      	Question.optionA = document.querySelector('.optionA').value;
      	Question.optionB = document.querySelector('.optionB').value;
      	Question.optionC = document.querySelector('.optionC').value;
      	Question.optionD = document.querySelector('.optionD').value;
      	Question.correct = document.querySelector('.correct').value;
      	Question.tags = document.querySelector('.tags').value;

      	//Question{} needs to be send to Firebase

      console.log(Question)
      const newTAQ = firebase.database().ref().child('TAQ').push().key;
      let updates = {}
      updates['/TAQ/' + Question.domain + '/' + newTAQ] = Question;
      firebase.database().ref().update(updates);

      document.querySelector('.question').value='';
      document.querySelector('.domain').value='';
	    document.querySelector('.optionA').value='';
	    document.querySelector('.optionB').value='';
	    document.querySelector('.optionC').value='';
	    document.querySelector('.optionD').value='';
	    document.querySelector('.correct').value='';
	    document.querySelector('.tags').value='';

    });

  }

  render() {
    const { getFieldDecorator, getFieldValue, getFieldsValue } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 4 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 20 },
      },
      
    };
    const formItemLayoutWithOutLabel = {
      wrapperCol: {
        xs: { span: 24, offset: 0 },
        sm: { span: 20, offset: 4 },
      },
    };
    getFieldDecorator('keys', { initialValue: [] });
    const keys = getFieldValue('keys');
    const formItems = keys.map((k, index) => {
      return (
        <FormItem
          {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
          label={index === 0 ? 'Question' : ''}
          required={false}
          key={k}
        >
          {getFieldDecorator(`names[${k}]`, {
            validateTrigger: ['onChange', 'onBlur'],
            rules: [{
              required: true,
              whitespace: true,
              message: "Please write the question or delete this field.",
            }],
          })(
          <div>
            <Input className={'domain'} placeholder="Enter Domain" style={{ width: '60%', marginRight: 8 }} />
            <Input className={'question'} placeholder="Enter Question" style={{ width: '60%', marginRight: 8 }} /> 
            <Input className="optionA" placeholder="Enter Option A" style={{ width: '60%', marginRight: 8 }} /> 
            <Input className="optionB" placeholder="Enter Option B" style={{ width: '60%', marginRight: 8 }} /> 
            <Input className="optionC" placeholder="Enter Option C" style={{ width: '60%', marginRight: 8 }} /> 
            <Input className="optionD" placeholder="Enter Option D" style={{ width: '60%', marginRight: 8 }} />
            <Input className="correct" placeholder="Correct Option" style= {{ width: '60%', marginRight: 8 }} />
            <Input className="tags" placeholder="Enter tags" style={{width: '60%', marginRight: 8}} />
          </div>
          )}
          {keys.length > 1 ? (
            <Icon
              className="dynamic-delete-button"
              type="minus-circle-o"
              disabled={keys.length === 1}
              onClick={() => this.remove(k)}
            />
          ) : null}
        </FormItem>
      );
    });
    return (
    <div>
    	<h3>Technical Aspect Checking Form</h3>
      <Form onSubmit={this.handleSubmit}>
        
        <div>
        <Input className={'domain'} placeholder="Enter Domain" style={{ width: '60%', marginRight: 8, marginBottom: 8 }} />
            <Input className={'question'} placeholder="Enter Question" style={{ width: '60%', marginRight: 8, marginBottom: 8 }} /> 
            <Input className="optionA" placeholder="Enter Option A" style={{ width: '60%', marginRight: 8, marginBottom: 8 }} /> 
            <Input className="optionB" placeholder="Enter Option B" style={{ width: '60%', marginRight: 8, marginBottom: 8 }} /> 
            <Input className="optionC" placeholder="Enter Option C" style={{ width: '60%', marginRight: 8, marginBottom: 8 }} /> 
            <Input className="optionD" placeholder="Enter Option D" style={{ width: '60%', marginRight: 8, marginBottom: 8 }} />
            <Input className="correct" placeholder="Correct Option eg - 'a'" style= {{ width: '60%', marginRight: 8, marginBottom: 8 }} />
            <Input className="weight" placeholder="Question Weight" style= {{ width: '60%', marginRight: 8, marginBottom: 8 }} />
            <Input className="tags" placeholder="Enter tags" style={{width: '60%', marginRight: 8}} />
            </div>
        <FormItem {...formItemLayoutWithOutLabel}>
          <Button type="primary" htmlType="submit">Submit</Button>
        </FormItem>
      </Form>
     </div>
    );
  }
}

const WrappedDynamicFieldSet = Form.create()(DynamicFieldSet);
export default WrappedDynamicFieldSet;