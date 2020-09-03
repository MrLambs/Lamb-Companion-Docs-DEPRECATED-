import React from 'react';

const formSentModal = ({ formSentModal, closeFormSentModal }) => {
    if (!formSentModal) {
        return null;
    }

    return (
        <div className="modal-body">
            <div className="row">
                    <div className="card blue lighten-2">
                        <div className="card-content white-text">
                            <span className="card-title"><strong>Thank You for Your Feedback!</strong></span>
                            <p>We've sent your feedback straight off to our dev team. We are always looking to improve Lamb Companion and will take your thoughts into consideration for future updates!</p>
                        </div>
                        <div className="card-action">
                            <button className="btn waves-effect waves-light icon_prefix" type="submit" name="action" onClick={closeFormSentModal}>
                            <i className="material-icons prefix btn-icons">check</i>
                                Ok
                            </button>
                        </div>
                    </div>
            </div>
        </div>
    );
}

export default formSentModal;