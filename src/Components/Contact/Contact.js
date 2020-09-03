import React, { useState } from 'react';
import { init, sendForm } from 'emailjs-com';
import './Contact.css'

import ValidateModal from './Modals/validateModal/validateModal';
import FormSentModal from './Modals/formSentModal/formSentModal'

const Contact = () => {
    //we want emailjs to init immediately, recognizing the correct user in order to slip emails.
    init('user_ze3siosLAJg2PS4owlwLm');


    // ***STATE***


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


    // ***MODAL FUNCTIONALITY***


    //Let's write a function to trigger when we should show a validateModal.
    const showValidateModal = () => {
        setModals({ ...modals, validateModal: true })
    };
    //And of course, one to close it.
    const closeValidateModal = (e) => {
        e.preventDefault()
        setModals({ ...modals, validateModal: false })
    };
    //Repeat the process for the formSentModal
    const showFormSentModal = () => {
        setModals({ ...modals, formSentModal: true })
    };
    const closeFormSentModal = (e) => {
        e.preventDefault()
        setModals({ ...modals, formSentModal: false })
    }


    // ***FORM SUBMISSION FUNCTIONALITY***


    //we need an onClick handler for adjusting state and using emailjs to send the form values to valid email w/o server init 
    async function onFormSubmit(e) {
        //let's grab those checkboxes and store them into variables!
        let supportInput = document.getElementById('support');
        let suggestionInput = document.getElementById('suggestion');
        //We need a guard clause triggering validateModal if form is not filled in entirety.
        e.preventDefault();
        if (!form.firstName || !form.lastName || !form.email || !form.message || 
            (!supportInput.checked && !suggestionInput.checked)) {
            return showValidateModal()
        }
        //Assuming someone fills out the form and pushes submit, we need a function to clear the form back to blanks.
        const clearForm = () => {
            setForm({
                firstName: '',
                lastName: '',
                email: '',
                message: ''
            })
            supportInput.checked = false;
            suggestionInput.checked = false;
        };
        //Now that we've done that, let's make sure to set our 'sending' state property to true. This will allow us to conditionally render the loader wheel.
        setForm({ ...form, sending: true })
        //And finally, let's send off our form to the specific email using emailjs.
        const serviceID = 'default_service';
        const templateID = 'contact_form';

        await sendForm(serviceID, templateID, 'form')
            .then(() => {
                //Form sending
                setForm({ ...form, sending: true });
                //Form sent
                showFormSentModal();
                clearForm();
            }, (err) => {
                alert(JSON.stringify(err));
            });
    }

    return (
        <div className="blue-grey darken-1 height-adjust">
            <div className="middle">
                <div className="statement white-text">
                    <h1>Thank You!</h1>
                    <div className="summary">
                        <p>Lamb Companion was created as a means to bring people together through gaming and ease-of-access to information. We encourage you to fill out the form below and recommend your ideas for new commands or support requests. After clicking submit, your suggestions will be emailed straight to our dev team! Your feedback will be used to make improvements moving forward.</p>
                    </div>
                </div>
                {/* Form will begin within contact-card */}
                <div className="contact-card">
                    <div>
                        <div className="">
                            <div className="white-text"></div>
                            {/* Row #1 */}
                            <div className="row">
                                {/* Form begins here and likely will need to move to its own component in the future */}
                                <form className='col s12' id='form'>
                                    {/* input for user first name */}
                                    <div className="row">
                                        <div className="input-field col s6">
                                            <i className="material-icons prefix">account_circle</i>
                                            <input id="icon_prefix user_fname" type="text" className="validate field" name='user_fname' value={form.firstName} onChange={e => setForm({ ...form, firstName: e.target.value })} />
                                            <label htmlFor="icon_prefix user_fname">First Name</label>
                                        </div>
                                        {/* input for user last name */}
                                        <div className="input-field col s6">
                                            <i className="material-icons prefix">account_circle</i>
                                            <input id="icon_prefix user_lname" type="text" className="validate field" name='user_lname' value={form.lastName} onChange={e => setForm({ ...form, lastName: e.target.value })} />
                                            <label htmlFor="icon_prefix user_lname">Last Name</label>
                                        </div>
                                    </div>

                                    {/* input for user email, support/suggestion checkboxes && Row #2 */}
                                    <div className="row">
                                        <div className="input-field col s6">
                                            <i className="material-icons prefix">email</i>
                                            <input id="icon_email user_email" type="email" className="validate field" name='user_email' value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                                            <label htmlFor="icon_email user_email">Email</label>
                                        </div>

                                        <div className="input-field col s2">
                                            <label>
                                                <input id="support" name="support_request" type="checkbox" unchecked="true" />
                                                <span>Support Request</span>
                                            </label>
                                        </div>
                                        <div className="input-field col s4">
                                            <label>
                                                <input id="suggestion" name="command_suggestion" type="checkbox" unchecked="true" />
                                                <span>Command Suggestion</span>
                                            </label>
                                        </div>
                                    </div>

                                    {/* input for user message && Row #3 */}
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <i className="material-icons prefix">mode_edit</i>
                                            <textarea id="icon_prefix2 message" className="materialize-textarea field" name='message' value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}></textarea>
                                            <label htmlFor="icon_prefix2 message">Message</label>
                                        </div>
                                    </div>

                                    {/* And finally the form submission button && Row #4*/}
                                    <div className="button-row">
                                        {/* I want a ternary operator to distinguish between whether or not the 'sending' load wheel will show or the 'submit' button will show. */}
                                        {form.sending && !modals.validateModal ?
                                            <div className="preloader-wrapper active loader loading-wheel">
                                                <div className="spinner-layer spinner-blue-only">
                                                    <div className="circle-clipper left">
                                                        <div className="circle"></div>
                                                    </div><div className="gap-patch">
                                                        <div className="circle"></div>
                                                    </div><div className="circle-clipper right">
                                                        <div className="circle"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            :
                                            <button className="btn waves-effect waves-light" type="submit" name="action" id='btn' onClick={onFormSubmit}>Submit
                                            <i className="material-icons right">send</i>
                                            </button>
                                        }
                                        {/* I also want a ternary operating our modals based on state properties previously listed. We want to conditionally render these if requirements are not met or if the form is successfully sent. */}
                                        {modals.validateModal ?
                                            <div className="modals z-depth-5">
                                                <ValidateModal validateModal={modals.validateModal} closeValidateModal={closeValidateModal} />
                                            </div>
                                            : modals.formSentModal ?
                                                <div className="modals z-depth-5">
                                                    <FormSentModal formSentModal={modals.formSentModal} closeFormSentModal={closeFormSentModal} />
                                                </div>
                                                :
                                                <div>
                                                </div>
                                        }
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;