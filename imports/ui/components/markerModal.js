import React, {Component} from 'react'

class Modal extends Component {

    close(e) {
        e.preventDefault();

        if (this.props.onClose) {
            this.props.onClose()
        }
    }

    render() {
        if (this.props.isOpen === false) {
            return null;
        } else {
            return (
                <div id="MarkerModal" className="modal">
                    <div className="modal-content">
                        {this.props.children}
                    </div>
                    <div className="modal-footer">
                        <a onClick={e => this.close(e)} className="modal-action modal-close waves-effect waves-green btn-flat">Close</a>
                    </div>
                </div>
            )
        }
    }

    componentDidUpdate(){
        $('#MarkerModal').modal();
    }
}

export default Modal;
