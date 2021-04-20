import React from 'react';
import '../../App.css';

import axios from 'axios'

import { Container, Form, Col, Button, InputGroup } from 'react-bootstrap';

export default class SignUp extends React.Component {
    state = {
        countries: []
    }

    componentDidMount() {
        axios.get(`https://restcountries.eu/rest/v2/all`)
            .then(res => {
                const countries = res.data;
                this.setState({ countries });
            })
    }
    render() {
        return (
            <>
                <Container className='form__container'>
                    <h4>Create new account</h4>
                    {this.state.countries.map(country =>
                        <Form>
                            <Form.Label>Title</Form.Label>
                            {['checkbox'].map((type) => (
                                <div key={`inline-${type}`} className="mb-3 yellow__checkbox">
                                    <Form.Check inline label="Mrs" name="title" type={type} id={`inline-${type}-1`} />
                                    <Form.Check inline label="Ms" name="title" type={type} id={`inline-${type}-2`} />
                                    <Form.Check inline label="Mdm" name="title" type={type} id={`inline-${type}-3`} />
                                    <Form.Check inline label="Mr" name="title" type={type} id={`inline-${type}-4`} />
                                    <Form.Check inline label="Dr" name="title" type={type} id={`inline-${type}-5`} />
                                </div>
                            ))}

                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridLastName">
                                    <Form.Label>Last Name<span>*</span></Form.Label>
                                    <Form.Control placeholder="Last Name" required />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridFirstName">
                                    <Form.Label>FirstName<span>*</span></Form.Label>
                                    <Form.Control placeholder="First Name" required />
                                </Form.Group>
                            </Form.Row>

                            <Form.Label>Mobile Phone Number<span>*</span></Form.Label>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridMobileArea">
                                    <Form.Control as="select" defaultValue="Select Country...">
                                        <option key={country.id} value={country.name}><img src={country.flag} alt='country flag' />{country.name}</option>
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridMobileNumber">
                                    <InputGroup className="mb-2">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text>+{country.callingCodes}</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control id="mobilePhoneNumber" placeholder="Mobile Phone Number" />
                                    </InputGroup>
                                </Form.Group>
                            </Form.Row>

                            <Form.Label><h4>Address</h4></Form.Label>

                            <Form.Group controlId="formGridAddress1">
                                <Form.Label>Address</Form.Label>
                                <Form.Control placeholder="Address" />
                            </Form.Group>

                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridCountry">
                                    <Form.Label>Country/Location<span>*</span></Form.Label>
                                    <Form.Control as="select" defaultValue="Choose...">
                                        <option>Choose...</option>
                                        <option>...</option>
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridDistrict">
                                    <Form.Label>District/Province<span>*</span></Form.Label>
                                    <Form.Control placeholder="District" />
                                </Form.Group>
                            </Form.Row>

                            <Form.Label><h4>Contacts</h4></Form.Label>

                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Email<span>*</span></Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridDate">
                                    <Form.Label>Date of Birth<span>*</span></Form.Label>
                                    <Form.Control placeholder="DD" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridMonth">
                                    <Form.Label>Month<span>*</span></Form.Label>
                                    <Form.Control placeholder="MM" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridYear">
                                    <Form.Label>Year<span>*</span></Form.Label>
                                    <Form.Control placeholder="YYY" />
                                </Form.Group>
                            </Form.Row>

                            <Form.Group>
                                <h4>Standard Privacy Note</h4>
                                <p><i>I warrant that the above information is true and correct. I understand that failure to answe all questions listed in this application form may prevent L'OCCTIANE from processing my application; and L'OCCITANE may refuse to accept this application in the right of my individual circumstance.<br /><br />

                        I understand that the information collected will be used and retained by L'OCCITANE for the purpose of (i) my application of membership program of L'OCCITANE (ii) providing member-exclusive services; and (iii) the daily management operation and maintenance of membership account at L'OCCITANE.<br /><br />

                        I understand that it is necessary for me to provide L'OCCITANE with data in connection with the privilege. Failure to provide such data may result in L'OCCITANE stores or official website. <br /><br />

                        L'OCCITANE reserves the right to change any of the terms and conditions without prior notice. Changes will be posted on signage placed at L'OCCITANE stores or official website.<br /><br />

                        I understand that L'OCCITANE may use my personal information for the purpose of providing or promoting services/products made available by L'OCCITANE. To choose whether to receive any promotional information sent by L'OCCITANE. please tick the box below.<br /><br />

                        I want to receive information or communication from L'OOCCITANE.</i></p>
                            </Form.Group>

                            <Form.Row>
                                <Form.Group as={Col} controlId='formGridSMS'>
                                    <Form.Check
                                        type="switch"
                                        id="custom-switch1"
                                        label="SMS and Mobile Call"
                                    />
                                </Form.Group>

                                <Form.Group as={Col} controlId='formGridEmailing'>
                                    <Form.Check
                                        type="switch"
                                        id="custom-switch2"
                                        label="Emailing"
                                    />
                                </Form.Group>

                                <Form.Group as={Col} controlId='Mailing'>
                                    <Form.Check
                                        type="switch"
                                        id="custom-switch3"
                                        label="Mailing"
                                    />
                                </Form.Group>
                            </Form.Row>

                            <Form.Group id="formGridCheckbox">
                                <Form.Check type="checkbox" label="I have read and understood the above terms and conditions and hereby agree have submitted this application form." />
                            </Form.Group>

                            <Button className='submit__form float-right' variant="primary" type="submit">Create Customer</Button>
                        </Form>
                    )}
                </Container>
            </>
        )
    }
}