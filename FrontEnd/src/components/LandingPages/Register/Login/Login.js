import axios from 'axios';
import React from 'react';
import { FaAt, FaKey, FaPaperPlane, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useReducer } from 'react';
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
import isAlphanumeric from 'validator/lib/isAlphanumeric';
import isEmail from 'validator/lib/isEmail';
import styles from '../Signup/Signup.module.css';
import { useNavigate } from 'react-router';

function Login() {
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();

    dispatchToast({
      color: 'primary',
      message: 'Please wait while your request is being processed.',
    });

    if (!username.valid || !password.valid) {
      dispatchToast({
        color: 'danger',
        message: 'Please fill out all the fields correctly',
      });
      return;
    }

    axios
      .post('https://api.spardha.co.in/auth/login/', {
        username: username.value,
        password: password.value,
      })
      .then((res) => {
        localStorage.setItem('token', res.data.token);
        dispatchToast({
          color: 'success',
          message: 'Logged in Successfully! Redirecting...',
        });
        setTimeout(() => {
          navigate('/dashboard/home');
        }, 2000);
      })
      .catch(({ response }) => {
        dispatchToast({
          color: 'danger',
          message: response.data[Object.keys(response.data)[0]].toString(),
        });
      });
  };

  const usernameReducer = (state, value) => {
    let warning = '';
    if (value === '') warning = 'This field is required.';
    else if (value.includes('@')) {
      if (!isEmail(value)) warning = 'Please enter a valid email address.';
    } else {
      if (value.length < 6 || value.length > 30)
        warning = 'Username must be of length 6 - 30.';
      else if (!isAlphanumeric(value, undefined, { ignore: ' ._-' }))
        warning = 'Please use only alphabets, numbers or _, - and .';
    }
    return { value, warning, valid: warning === '' && value !== '' };
  };

  const passwordReducer = (state, value) => {
    let warning = '';
    if (value === '') warning = 'This field is required.';
    else if (value.length < 6 || value.length > 30)
      warning = 'Password must be of length 6 - 30.';
    return { value, warning, valid: warning === '' && value !== '' };
  };

  const toastReducer = (state, action) => {
    return { color: action.color, message: action.message };
  };

  const [username, dispatchUsername] = useReducer(usernameReducer, {
    value: '',
    warning: '',
    valid: false,
  });

  const [password, dispatchpassword] = useReducer(passwordReducer, {
    value: '',
    warning: '',
    valid: false,
  });

  const [toast, dispatchToast] = useReducer(toastReducer, {
    color: 'primary',
    message: '',
  });

  return (
    <div>
      <h3 className={`${styles.heading}`}> LOGIN </h3>
      <hr />

      <Alert
        color="success"
        style={{
          fontSize: '14px',
          fontFamily: 'Helvetica Neue,Helvetica,Arial,sans-serif',
        }}
        className="py-2"
      >
        <b> Account not yet created? </b>
        Click{' '}
        <Link to="/register/signup" style={{ textDecoration: 'none' }}>
          here{' '}
        </Link>{' '}
        to create one
        <br />
        <strong> Account not activated? </strong>
        Click{' '}
        <Link to="/register/verify" style={{ textDecoration: 'none' }}>
          {' '}
          here{' '}
        </Link>
        to verify your account.
        <br />
        <strong>Forgot Password? </strong>Click{' '}
        <Link to="/register/forgot" className="text-decoration-none">
          here
        </Link>
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
                  <Label for="username" className={`${styles.label}`}>
                    Username/Email:&nbsp;
                    <span style={{ color: 'red' }}>*</span>
                  </Label>
                  <InputGroup className={`${styles['input-group']}`}>
                    <InputGroupText
                      className={`${styles['form-text']} ${
                        username.valid && ' text-success border-success'
                      } ${
                        username.warning !== '' && ' text-danger border-danger'
                      }`}
                    >
                      <FaAt></FaAt>
                    </InputGroupText>
                    <Input
                      name="username"
                      id="username"
                      type="text"
                      placeholder="Enter your username or email"
                      value={username.value}
                      valid={username.warning === '' && username.value !== ''}
                      invalid={username.warning !== ''}
                      onChange={(e) => {
                        dispatchUsername(e.target.value);
                      }}
                      bsSize="sm"
                      className={`${styles['form-control']}`}
                      required
                    ></Input>
                  </InputGroup>
                  {username.warning !== '' && (
                    <FormFeedback
                      className="text-danger d-block fw-bold"
                      style={{ fontSize: '12px' }}
                    >
                      {username.warning}
                    </FormFeedback>
                  )}
                </FormGroup>
              </div>

              <div className="col-sm-12">
                <FormGroup className={`${styles['form-group']}`}>
                  <Label for="password" className={`${styles.label}`}>
                    Password:&nbsp;
                    <span style={{ color: 'red' }}>*</span>
                  </Label>
                  <InputGroup className={`${styles['input-group']}`}>
                    <InputGroupText
                      className={`${styles['form-text']} ${
                        password.valid && ' text-success border-success'
                      } ${
                        password.warning !== '' && ' text-danger border-danger'
                      }`}
                    >
                      <FaKey></FaKey>
                    </InputGroupText>
                    <Input
                      name="password"
                      id="password"
                      type="password"
                      placeholder="Enter the Password"
                      value={password.value}
                      valid={password.warning === '' && password.value !== ''}
                      invalid={password.warning !== ''}
                      onChange={(e) => {
                        dispatchpassword(e.target.value);
                      }}
                      bsSize="sm"
                      className={`${styles['form-control']}`}
                      required
                    ></Input>
                  </InputGroup>
                  {password.warning !== '' && (
                    <FormFeedback
                      className="text-danger d-block fw-bold"
                      style={{ fontSize: '12px' }}
                    >
                      {password.warning}
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
            LOGIN
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default Login;
