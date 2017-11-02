import React, {Component} from 'react'

class MarkerModal extends Component {

    constructor(props) {
        super(props)
    }

    render(){
        return(
            <div id="MarkerModal" className="modal">
                <div className="modal-content">
                    <h4>Asuh</h4>
                    <p>Dude</p>
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
