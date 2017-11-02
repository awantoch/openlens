import React, {Component} from 'react'

class MarkerModal extends Component {

    constructor(props) {
        super()
    }

    render(){
        return(
            <div id="MarkerModal" className="modal">
                <div className="modal-content">
                    <h4>Modal Header</h4>
                    <p>A bunch of text</p>
                </div>
                <div className="modal-footer">
                    <a className="modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
                </div>
            </div>
        )
    }
    componentDidMount(){
        $('#MarkerModal').modal();
    }
}

export default MarkerModal;
