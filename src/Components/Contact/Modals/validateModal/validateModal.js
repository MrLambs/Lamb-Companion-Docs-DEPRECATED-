import React from 'react';

const validateModal = ({ modals, setModals }) => {
    if (!validateModal) {
        return null;
    }

    const closeValidateModal = (e) => {
        e.preventDefault()
        setModals({ ...modals, validateModal: false })
    };

    return (
        <div className="modal-body">
            <div className="row">
                    <div className="card blue lighten-2">
                        <div className="card-content white-text">
                            <span className="card-title"><strong>Requirements Not Met!</strong></span>
                            <p>Please make sure you've entered all the necessary fields before pressing submit. Thank you!</p>
                        </div>
                        <div className="card-action">
                            <button className="btn waves-effect waves-light icon_prefix" type="submit" name="action" onClick={closeValidateModal}>
                            <i className="material-icons prefix btn-icons">clear</i>
                                Close
                            </button>
                        </div>
                    </div>
            </div>
        </div>
    );
}

export default validateModal;