import React from 'react';

const Modal = ({ modal, setModal }) => {
    if (!modal) {
        return null;
    }

    const onClose = (e) => {
        e.preventDefault()
        setModal(false)
    }

    return (
        <div className="modal-body">
            <div className="row">
                <div className="col s12 m6">
                    <div className="card blue-grey darken-1">
                        <div className="card-content white-text">
                            <span className="card-title">Requirements not met!</span>
                            <p>Please make sure you've entered all the necessary fields before pressing submit. Thank you!</p>
                        </div>
                        <div className="card-action">
                            <button className="btn waves-effect waves-light icon_prefix" type="submit" name="action" onClick={onClose}>Close
                                <i className="material-icons prefix">close</i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>


        </div>



    );
}

export default Modal;