import React, { useState } from 'react';
import { init, sendForm } from 'emailjs-com';
import './Contact.css'
import Modal from '../Modal/Modal';

const Contact = () => {
    //we want emailjs to init immediately, recognizing the correct user in order to slip emails.
    init('user_ze3siosLAJg2PS4owlwLm');

    // I want to 2-way bind the form values to the state in order to reset them upon submission
    // Below I will initialize one state element for each of the form inputs
    // I also want to add a boolean flag, I will call 'sending'. It will initialize as false
    const [sending, setSending] = useState(false)
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    // And finaly, I want a state element to control my showModal true/false flag.
    const [modal, setModal] = useState(false);

    //Let's write a function to trigger when we should show a modal.
    const showModal = () => {
        setModal(true);
    };

    //we need an onClick handler for adjusting state and using emailjs to send the form values to valid email w/o server init 
    async function onFormSubmit(e) {
        let supportInput = document.getElementById('support')
        let suggestionInput = document.getElementById('suggestion')

        e.preventDefault()
        if (!firstName || !lastName || !email || !message || (!supportInput.checked && !suggestionInput.checked)) {
            return showModal()
        }

        const uncheckAll = () => {
            supportInput.checked = false;
            suggestionInput.checked = false;
        };

        
        setSending(true)
        const serviceID = 'default_service';
        const templateID = 'contact_form';

        await sendForm(serviceID, templateID, 'form')
            .then(async (res) => {
                setSending(false)
                alert()
                setFirstName('');
                setLastName('');
                setEmail('');
                setMessage('');
                uncheckAll();
            }, (err) => {
                alert(JSON.stringify(err));
            });
    }

    return (
        <div className="blue-grey darken-1 height-adjust">
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
                            <form className='col s12' id='form'>
                                {/* input for user first name */}
                                <div className="row">
                                    <div className="input-field col s6">
                                        <i className="material-icons prefix">account_circle</i>
                                        <input id="icon_prefix user_fname" type="text" className="validate field" name='user_fname' value={firstName} onChange={e => setFirstName(e.target.value)} />
                                        <label htmlFor="icon_prefix user_fname">First Name</label>
                                    </div>
                                    {/* input for user last name */}
                                    <div className="input-field col s6">
                                        <i className="material-icons prefix">account_circle</i>
                                        <input id="icon_prefix user_lname" type="text" className="validate field" name='user_lname' value={lastName} onChange={e => setLastName(e.target.value)} />
                                        <label htmlFor="icon_prefix user_lname">Last Name</label>
                                    </div>
                                </div>

                                {/* input for user email && Row #2 */}
                                <div className="row">
                                    <div className="input-field col s6">
                                        <i className="material-icons prefix">email</i>
                                        <input id="icon_email user_email" type="email" className="validate field" name='user_email' value={email} onChange={e => setEmail(e.target.value)} />
                                        <label htmlFor="icon_email user_email">Email</label>
                                    </div>

                                    <div className="input-field col s2">
                                        <label>
                                            <input id="support" name="support_request" type="checkbox" unchecked="true"/>
                                            <span>Support Request</span>
                                        </label>
                                    </div>
                                    <div className="input-field col s4">
                                        <label>
                                            <input id="suggestion" name="command_suggestion" type="checkbox" unchecked="true"/>
                                            <span>Command Suggestion</span>
                                        </label>
                                    </div>
                                </div>

                                {/* input for user message && Row #3 */}
                                <div className="row">
                                    <div className="input-field col s12">
                                        <i className="material-icons prefix">mode_edit</i>
                                        <textarea id="icon_prefix2 message" className="materialize-textarea field" name='message' value={message} onChange={e => setMessage(e.target.value)}></textarea>
                                        <label htmlFor="icon_prefix2 message">Message</label>
                                    </div>
                                </div>

                                {/* And finally the form submission button && Row #4*/}
                                <div className="button-row">
                                    {/* I want a ternary operator to distinguish between whether or not the 'sending' load wheel will show or not */}
                                    {sending === true && modal === false ?
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
                                    <Modal modal={modal} setModal={setModal}/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Contact;