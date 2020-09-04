import React, { useState } from 'react';
import './Contact.css'

import Summary from './Summary/Summary'
import Form from './Form/Form';
import ValidateModal from './Modals/validateModal/validateModal';
import FormSentModal from './Modals/formSentModal/formSentModal';


const Contact = () => {
    // I want to 2-way bind the form values to the state in order to reset them upon submission
    // Below I will initialize one state element for each of the form inputs
    // I also want to add a boolean flag, I will call 'sending'. It will initialize as false
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
        sending: false
    });
    // I also want state elements to control my modals by true/false flags.
    const [modals, setModals] = useState({
        validateModal: false,
        formSentModal: false
    });

    return (
        <div className="blue-grey darken-1 height-adjust">
            <div className="middle">
                <Summary />
                {/* Form will begin within contact-card */}
                <div className="contact-card">
                    <div>
                        <div className="">
                            <div className="white-text"></div>
                            <Form form={form} setForm={setForm} modals={modals} setModals={setModals}/>
                            {/* I want a ternary operating our modals based on state properties previously listed. We want to conditionally render these if requirements are not met or if the form is successfully sent. */}
                            {
                                modals.validateModal ?
                                    <div className="modals z-depth-5">
                                        <ValidateModal modals={modals} setModals={setModals} />
                                    </div>
                                    : modals.formSentModal ?
                                        <div className="modals z-depth-5">
                                            <FormSentModal modals={modals} setModals={setModals}/>
                                        </div>
                                        :
                                        <div>
                                        </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;