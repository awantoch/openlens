import React, {Component} from 'react'

class Modal extends Component {

    close(e) {
        e.preventDefault();

        if (this.props.onClose) {
            this.props.onClose()
        }
    }

    renderNavIcon(){
        if (this.props.loc) {
            return (
                <a href={"https://www.google.com/maps/?q="+this.props.loc[1]+","+this.props.loc[0]}><i className="btn-flat blue lighten-2 fa fa-2x fa-location-arrow" aria-hidden="true"></i></a>
            )
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
                        {this.renderNavIcon()}
                        <a onClick={e => this.close(e)} className="modal-action modal-close waves-effect waves-blue btn-flat">Close</a>
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
