import React from 'react';
import { init, sendForm } from 'emailjs-com';



const Form = ({ form, setForm, modals, setModals }) => {
    init('user_ze3siosLAJg2PS4owlwLm');

    //let's create our showModal functions, we'll need one for each of our modals.
    const showFormSentModal = () => {
        setModals({ ...modals, formSentModal: true })
    };

    const showValidateModal = () => {
        setModals({ ...modals, validateModal: true })
    };

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
                //Form sent & show modal
                showFormSentModal();
                //Clear form
                clearForm();
            }, (err) => {
                alert(JSON.stringify(err));
            });
    }

    return (
        <div>
            {/* Row #1 */}
            < div className="row" >
                < form className='col s12' id='form' >
                    {/* input for user first name */}
                    < div className="row" >
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
                    </div >

                    {/* input for user email, support/suggestion checkboxes && Row #2 */}
                    < div className="row" >
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
                    </div >

                    {/* input for user message && Row #3 */}
                    < div className="row" >
                        <div className="input-field col s12">
                            <i className="material-icons prefix">mode_edit</i>
                            <textarea id="icon_prefix2 message" className="materialize-textarea field" name='message' value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}></textarea>
                            <label htmlFor="icon_prefix2 message">Message</label>
                        </div>
                    </div >

                    {/* And finally the form submission button && Row #4*/}
                    < div className="button-row" >
                        {/* I want a ternary operator to distinguish between whether or not the 'sending' load wheel will show or the 'submit' button will show. */}
                        {
                            form.sending && !modals.validateModal ?
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
                    </div >
                </form >
            </div >
        </div>
    );
}

export default Form;