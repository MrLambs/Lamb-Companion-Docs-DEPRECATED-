import React from 'react';
import './validateModal.css'

const Modal = ({ modal, setModal }) => {
    if (!modal) {
        return null;
    }

    const closeModal = (e) => {
        e.preventDefault()
        setModal(false)
    }

    return (
        <div className="modal-body">
            <div className="row">
                    <div className="card blue lighten-2">
                        <div className="card-content white-text">
                            <span className="card-title"><strong>Requirements Not Met!</strong></span>
                            <p>Please make sure you've entered all the necessary fields before pressing submit. Thank you!</p>
                        </div>
                        <div className="card-action">
                            <button className="btn waves-effect waves-light icon_prefix" type="submit" name="action" onClick={closeModal}>Close
                                <i className="material-icons prefix">close</i>
                            </button>
                        </div>
                    </div>
            </div>
        </div>
    );
}

export default Modal;