import React from 'react';
import axios from 'axios';
import { FaEnvelope, FaPaperPlane, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useReducer } from 'react';
import isEmail from 'validator/lib/isEmail';
import {
  Alert,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  InputGroup,
  InputGroupText,
  Label,
  Button,
} from 'reactstrap';
import styles from '../Signup/Signup.module.css';

function Verify() {
  const submitHandler = (e) => {
    e.preventDefault();

    dispatchToast({
      color: 'primary',
      message: 'Please wait while your request is being processed.',
    });

    if (!email.valid) {
      dispatchToast({
        color: 'danger',
        message: 'Please fill out all the fields correctly',
      });
      return;
    }

    axios
      .post('https://api.spardha.co.in/auth/verify/', {
        email: email.value,
      })
      .then((res) => {
        dispatchToast({
          color: 'success',
          message: res.data.success,
        });
        return;
      })
      .catch(({ response }) => {
        dispatchToast({
          color: 'danger',
          message: response.data[Object.keys(response.data)[0]].toString(),
        });
      });
  };

  const emailReducer = (state, value) => {
    let warning = '';
    if (value === '') warning = 'This field is required.';
    else if (!isEmail(value)) warning = 'Please enter a valid email address.';
    return { value, warning, valid: warning === '' && value !== '' };
  };

  const toastReducer = (state, action) => {
    return { color: action.color, message: action.message };
  };

  const [email, dispatchEmail] = useReducer(emailReducer, {
    value: '',
    warning: '',
    valid: false,
  });

  const [toast, dispatchToast] = useReducer(toastReducer, {
    color: 'primary',
    message: '',
  });

  return (
    <>
      <h3 className={`${styles.heading}`}> VERIFY EMAIL </h3>
      <hr />

      <Alert
        color="success"
        style={{
          fontSize: '14px',
          fontFamily: 'Helvetica Neue,Helvetica,Arial,sans-serif',
        }}
        className="py-2"
      >
        Click{' '}
        <Link to="/register/signup" style={{ textDecoration: 'none' }}>
          here{' '}
        </Link>{' '}
        to <strong>sign up</strong>
        <br />
        Click{' '}
        <Link to="/register/login" className="text-decoration-none">
          here{` `}
        </Link>
        to <strong>login</strong>
      </Alert>

      <Alert
        color="primary"
        className="py-2"
        style={{
          fontSize: '14px',
          fontFamily: 'Helvetica Neue,Helvetica,Arial,sans-serif',
        }}
      >
        Enter your email address to get activation link.
      </Alert>

      <div class="col-sm-12 text-end">
        <span
          style={{
            color: 'red',
            fontSize: '14px',
            fontFamily: 'Helvetica Neue,Helvetica,Arial,sans-serif',
          }}
        >
          *&nbsp;Mandatory
        </span>
      </div>

      <Form className={`${styles['form-horizontal']}`}>
        <div
          className="col-sm-12 justify-content-center fw-bold d-flex flex-column"
          style={{ marginTop: '12px' }}
        >
          <div className={`${styles.panel}`}>
            <div className={`${styles['panel-heading']}`}>
              <h4
                className={`${styles['panel-title']} text-center`}
                style={{ color: '#59ba00' }}
              >
                <FaUser /> Login Details
              </h4>
            </div>

            <FormGroup className={`${styles['form-group']}`}>
              <div className="col-sm-12">
                <FormGroup className={`${styles['form-group']}`}>
                  <Label for="email" className={`${styles.label}`}>
                    Email Address:&nbsp;
                    <span style={{ color: 'red' }}>*</span>
                  </Label>
                  <InputGroup className={`${styles['input-group']}`}>
                    <InputGroupText
                      className={`${styles['form-text']} ${
                        email.valid && ' text-success border-success'
                      } ${
                        email.warning !== '' && ' text-danger border-danger'
                      }`}
                    >
                      <FaEnvelope></FaEnvelope>
                    </InputGroupText>
                    <Input
                      name="email"
                      id="email"
                      type="email"
                      placeholder="Enter Your Email Address"
                      value={email.value}
                      valid={email.warning === '' && email.value !== ''}
                      invalid={email.warning !== ''}
                      onChange={(e) => {
                        dispatchEmail(e.target.value);
                      }}
                      bsSize="sm"
                      className={`${styles['form-control']}`}
                      required
                    ></Input>
                  </InputGroup>
                  {email.warning !== '' && (
                    <FormFeedback
                      className="text-danger d-block fw-bold"
                      style={{ fontSize: '12px' }}
                    >
                      {email.warning}
                    </FormFeedback>
                  )}
                </FormGroup>
              </div>
            </FormGroup>
          </div>

          {toast.message !== '' && (
            <Alert
              color={toast.color}
              style={{
                fontSize: '15px',
                fontFamily: 'Helvetica Neue,Helvetica,Arial,sans-serif',
              }}
              className="my-1 py-2"
            >
              {toast.message}
            </Alert>
          )}

          <Button
            color="success"
            className={`${styles['btn-block']}`}
            onClick={submitHandler}
          >
            <FaPaperPlane color="white" className="me-1"></FaPaperPlane>
            SUBMIT
          </Button>
        </div>
      </Form>
    </>
  );
}

export default Verify;
