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
            window.open("google.navigation:q=" + this.props.loc[1]+","+this.props.loc[0] + "&mode=d" , '_system');
            this.close()
        }else{
            window.open("http://maps.google.com/?q="+ this.props.loc[1]+","+this.props.loc[0] , '_blank');
            this.close()
        }
    }

    openNewComment(){
        console.log('clicked');
        $('#newCommentBtn').hide();
        $('#submitCommentBtn').show();
        $('.new-comment').slideToggle();
    }

    submitComment(){
        $('#newCommentBtn').show();
        $('#submitCommentBtn').hide();
        $('.new-comment').slideToggle();
    }

    renderNavIcon(){
        if (this.props.loc) {
            return (
                <a onClick={this.launchNav.bind(this)}><i className="modal-action modal-close btn-flat blue lighten-2 fa fa-2x fa-location-arrow" aria-hidden="true"/></a>
            )
        }
    }

    renderCommentBtn(){
        if (this.props.comment){
            return(
                <span>
                    <a id="newCommentBtn" onClick={this.openNewComment.bind(this)}><i className="btn-flat red lighten-2 fa fa-2x fa fa-comment-o" aria-hidden="true"/></a>
                    <a id="submitCommentBtn" onClick={this.submitComment.bind(this)}><i className="btn-flat green lighten-2 fa fa-2x fa fa-comment-o inline-button" aria-hidden="true"/></a>
                    <a onClick={e => this.close(e)} className="modal-action modal-close waves-effect waves-blue btn-flat">Close</a>
                </span>
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
                        {this.renderCommentBtn()}
                        <div className="new-comment">
                            <div className="row">
                                <div className="input-field col s12">
                                    <input placeholder="Comment" id="first_name" type="text" className="validate"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }

    componentDidUpdate(){
        $('.collapsible').collapsible();
        $('#MarkerModal').modal();
    }
}

export default Modal;
