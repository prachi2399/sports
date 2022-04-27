import React ,{useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import sports from "./sports.json"
//import {Multiselect} from "multiselect-react-dropdown"
import {
  Alert,
  Button,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  InputGroup,
  InputGroupText,
  Label,
  Row,
} from 'reactstrap';
import styles from './Signup.module.css';
import {
  FaUser,
  FaEnvelope,
  FaAt,
  FaKey,
  FaBuilding,
  FaBriefcase,
  FaPhone,
  FaPaperPlane,
} from 'react-icons/fa';
// import sports from './sports.json';
import { useReducer } from 'react';
import isEmail from 'validator/lib/isEmail';
import isAlphanumeric from 'validator/lib/isAlphanumeric';
import isInt from 'validator/lib/isInt';
import isPhone from 'validator/lib/isMobilePhone';
import isAlpha from 'validator/lib/isAlpha';

function Signup() {
  // const sports = ["Basketball(Girls)","Basketball(Boys)","Table-tennis","Chess","Volleyball(Girls)","Volleyball(Girls)","Cricket","Futsal","Kho-kho",""]
  // const [optionSports] = useState(sports)

  const submitHandler = (e) => {
    e.preventDefault();

    dispatchToast({
      color: 'primary',
      message: 'Please wait while your request is being processed.',
    });

    
    e.preventDefault();
    if (
      !email.valid ||
      !institute.valid || 
      !password1.valid ||
      !name.valid ||
      !sport.valid ||
      !phone.valid
    ) {
      dispatchToast({
        color: 'danger',
        message: 'Please fill out all the fields correctly',
      });
      return;
    }

    axios
      .post('https://api.spardha.co.in/auth/register/', {
        email: email.value,
        password: password1.value,
        name: name.value,
        institution_name: institute.value,
        phone_no: phone.value,
        sport : sport.value
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

  

  const password1Reducer = (state, value) => {
    let warning = '';
    if (value === '') warning = 'This field is required.';
    else if (value.length < 6 || value.length > 30)
      warning = 'Password must be of length 6 - 30.';
    return { value, warning, valid: warning === '' && value !== '' };
  };

  

  const nameReducer = (state, value) => {
    let warning = '';
    if (value === '') warning = 'This field is required.';
    else if (!isAlpha(value, undefined, { ignore: ' ' }))
      warning = 'Please enter a valid name.';
    return { value, warning, valid: warning === '' && value !== '' };
  };

 
  const instituteReducer = (state, value) => {
    let warning = '';
    if (value === '') warning = 'This field is required.';
    else if (isInt(value)) warning = 'Please enter a valid Institute Name.';
    return { value, warning, valid: warning === '' && value !== '' };
  };

  const sportReducer = (state, value) => {
    let warning = '';
    if (value === '') warning = 'This field is required.';
    else if (isInt(value)) warning = 'Please enter a valid sport Name.';
    return { value, warning, valid: warning === '' && value !== '' };
  };

  const phoneReducer = (state, value) => {
    let warning = '';
    if (value === '') warning = 'This field is required.';
    else if (!isPhone(value, 'en-IN'))
      warning = 'Please enter a valid phone number.';
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

  
  const [password1, dispatchPassword1] = useReducer(password1Reducer, {
    value: '',
    warning: '',
    valid: false,
  });


  const [name, dispatchName] = useReducer(nameReducer, {
    value: '',
    warning: '',
    valid: false,
  });

  
  const [institute, dispatchInstitute] = useReducer(instituteReducer, {
    value: '',
    warning: '',
    valid: false,
  });

  const [phone, dispatchPhone] = useReducer(phoneReducer, {
    value: '',
    warning: '',
    valid: false,
  });
  const [sport, dispatchSport] = useReducer(sportReducer, {
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
      <h3 className={`${styles.heading}`}> REGISTER WITH US </h3>
      <hr />
      
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
                <FaUser /> Details
              </h4>
            </div>

            <FormGroup className={`${styles['form-group']}`}>
              <Row xs={1} md={1} xl={2}>
                <div className="col-sm-6">
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

                <div className="col-sm-6">
                  <FormGroup className={`${styles['form-group']}`}>
                    <Label for="name" className={`${styles.label}`}>
                      Name:&nbsp;
                      <span style={{ color: 'red' }}>*</span>
                    </Label>
                    <InputGroup className={`${styles['input-group']}`}>
                      <InputGroupText
                        className={`${styles['form-text']} ${
                          name.valid && ' text-success border-success'
                        } ${
                          name.warning !== '' && ' text-danger border-danger'
                        }`}
                      >
                        <FaUser></FaUser>
                      </InputGroupText>
                      <Input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Enter your Name"
                        value={name.value}
                        valid={name.warning === '' && name.value !== ''}
                        invalid={name.warning !== ''}
                        onChange={(e) => {
                          dispatchName(e.target.value);
                        }}
                        bsSize="sm"
                        className={`${styles['form-control']}`}
                        required
                      ></Input>
                    </InputGroup>
                    {name.warning !== '' && (
                      <FormFeedback
                        className="text-danger d-block fw-bold"
                        style={{ fontSize: '12px' }}
                      >
                        {name.warning}
                      </FormFeedback>
                    )}
                  </FormGroup>
                </div>
              </Row>

              <Row xs={1} md={1} xl={2}>
                <div className="col-sm-6">
                  <FormGroup className={`${styles['form-group']}`}>
                    <Label for="password1" className={`${styles.label}`}>
                      Password:&nbsp;
                      <span style={{ color: 'red' }}>*</span>
                    </Label>
                    <InputGroup className={`${styles['input-group']}`}>
                      <InputGroupText
                        className={`${styles['form-text']} ${
                          password1.valid && ' text-success border-success'
                        } ${
                          password1.warning !== '' &&
                          ' text-danger border-danger'
                        }`}
                      >
                        <FaKey></FaKey>
                      </InputGroupText>
                      <Input
                        name="password1"
                        id="password1"
                        type="password"
                        placeholder="Enter the Password"
                        value={password1.value}
                        valid={
                          password1.warning === '' && password1.value !== ''
                        }
                        invalid={password1.warning !== ''}
                        onChange={(e) => {
                          dispatchPassword1(e.target.value);
                        }}
                        bsSize="sm"
                        className={`${styles['form-control']}`}
                        required
                      ></Input>
                    </InputGroup>
                    {password1.warning !== '' && (
                      <FormFeedback
                        className="text-danger d-block fw-bold"
                        style={{ fontSize: '12px' }}
                      >
                        {password1.warning}
                      </FormFeedback>
                    )}
                  </FormGroup>
                </div>

                <div className="col-sm-6">
                  <FormGroup className={`${styles['form-group']}`}>
                    <Label for="institute" className={`${styles.label}`}>
                      Institute Name:&nbsp;
                      <span style={{ color: 'red' }}>*</span>
                    </Label>
                    <InputGroup className={`${styles['input-group']}`}>
                      <InputGroupText
                        className={`${styles['form-text']} ${
                          institute.valid && ' text-success border-success'
                        } ${
                          institute.warning !== '' && ' text-danger border-danger'
                        }`}
                      >
                        <FaUser></FaUser>
                      </InputGroupText>
                      <Input
                        type="text"
                        name="institute"
                        id="institute"
                        placeholder="Enter your Institute Name"
                        value={institute.value}
                        valid={institute.warning === '' && institute.value !== ''}
                        invalid={institute.warning !== ''}
                        onChange={(e) => {
                          dispatchInstitute(e.target.value);
                        }}
                        bsSize="sm"
                        className={`${styles['form-control']}`}
                        required
                      ></Input>
                    </InputGroup>
                    {institute.warning !== '' && (
                      <FormFeedback
                        className="text-danger d-block fw-bold"
                        style={{ fontSize: '12px' }}
                      >
                        {institute.warning}
                      </FormFeedback>
                    )}
                  </FormGroup>
                </div>

              </Row>

              

              <Row xs={1} md={1} xl={2}>
                

                <div className="col-sm-6">
                  <FormGroup className={`${styles['form-group']}`}>
                    <Label for="phone" className={`${styles.label}`}>
                      Phone Number:&nbsp;
                      <span style={{ color: 'red' }}>*</span>
                    </Label>
                    <InputGroup className={`${styles['input-group']}`}>
                      <InputGroupText
                        className={`${styles['form-text']} ${
                          phone.valid && ' text-success border-success'
                        } ${
                          phone.warning !== '' && ' text-danger border-danger'
                        }`}
                      >
                        <FaPhone></FaPhone>
                      </InputGroupText>
                      <Input
                        type="tel"
                        name="phone"
                        id="phone"
                        placeholder="Enter Your Phone No."
                        value={phone.value}
                        valid={phone.warning === '' && phone.value !== ''}
                        invalid={phone.warning !== ''}
                        onChange={(e) => {
                          dispatchPhone(e.target.value);
                        }}
                        bsSize="sm"
                        className={`${styles['form-control']}`}
                        required
                      ></Input>
                    </InputGroup>
                    {phone.warning !== '' && (
                      <FormFeedback
                        className="text-danger d-block fw-bold"
                        style={{ fontSize: '12px' }}
                      >
                        {phone.warning}
                      </FormFeedback>
                    )}
                  </FormGroup>
                </div>

                <div className="col-sm-6">
                  <FormGroup className={`${styles['form-group']}`}>
                    <Label for="sport" className={`${styles.label}`}>
                      Sport Name:&nbsp;
                      <span style={{ color: 'red' }}>*</span>
                    </Label>
                    <InputGroup className={`${styles['input-group']}`}>
                      <InputGroupText
                        className={`${styles['form-text']} ${
                          sport.valid && ' text-success border-success'
                        } ${
                          sport.warning !== '' &&
                          ' text-danger border-danger'
                        }`}
                      >
                        <FaBuilding></FaBuilding>
                      </InputGroupText>
                      <Input
                        type="text"
                        name="sport"
                        id="sport"
                        placeholder="Select your sport"
                        value={sport.value}
                        valid={
                          sport.warning === '' && sport.value !== ''
                        }
                        invalid={sport.warning !== ''}
                        onChange={(e) => {
                          dispatchSport(e.target.value);
                        }}
                        bsSize="sm"
                        list="sports"
                        className={`${styles['form-control']}`}
                        required
                        multiple
                      ></Input>
                      {/* <Multiselect 
                      options={optionSports} displayValue="Sport">

                      </Multiselect> */}
                      <datalist id="sports">
                        <option selected={true} disabled> 
                          Select your sport
                        </option>
                        {sports.map(({ id, name }) => {
                          return <option value={name} key={id}></option>;
                        })}
                      </datalist>
                    </InputGroup>
                    {sport.warning !== '' && (
                      <FormFeedback
                        className="text-danger d-block fw-bold"
                        style={{ fontSize: '12px' }}
                      >
                        {sport.warning}
                      </FormFeedback>
                    )}
                  </FormGroup>
                </div>
              </Row>
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
            Sign up
          </Button>
        </div>
      </Form>
    </>
  );
}

export default Signup;
