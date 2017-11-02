import React, {Component} from 'react'

class MarkerModal extends Component {

    constructor(props) {
        super(props)
        this.info = Session.get('modalInfo') || {title: '', body: ''}
    }

    render(){
        return(
            <div id="MarkerModal" className="modal">
                <div className="modal-content">
                    <h4>{this.info.title}</h4>
                    <p>{this.info.body}</p>
                </div>
                <div className="modal-footer">
                    <a className="modal-action modal-close waves-effect waves-green btn-flat">Close</a>
                </div>
            </div>
        )
    }
    componentDidMount(){
        $('#MarkerModal').modal();
    }
}

export default MarkerModal;
