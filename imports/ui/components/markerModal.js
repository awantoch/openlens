import React, {Component} from 'react'

class Modal extends Component {

    constructor(props) {
        super(props);
        this.close = this.close.bind(this)
    }

    close() {
        if (this.props.onClose) {
            this.props.onClose()
        }
    }

    launchNav(){
        let ua = navigator.userAgent.toLowerCase();
        let isAndroid = ua.indexOf("android") > -1;
        if(isAndroid) {
            alert("Android Gps");
            window.open("google.navigation:q=" + this.props.loc[1]+","+this.props.loc[0] + "&mode=d" , '_system');
            this.close()
        }else{
            this.close()
        }
    }

    renderNavIcon(){
        if (this.props.loc) {
            return (
                <a onClick={this.launchNav.bind(this)} href={"geo:"+this.props.loc[1]+","+this.props.loc[0]}><i className="modal-action modal-close btn-flat blue lighten-2 fa fa-2x fa-location-arrow" aria-hidden="true"/></a>
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
