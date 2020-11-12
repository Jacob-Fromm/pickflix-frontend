import React from 'react';
import Modal from 'react-modal';
import "./Profile.css"

class LikedMovies extends React.Component {
    state = {
        modal: ""
    }

    openModal = () => {
        this.setState({
            modal: true
        })
    }
    
    closeModal = () => {
        this.setState({
            modal: false
        })
    }

    deleteHandler = () => {
        fetch(`http://localhost:4000/wizards/${this.props.movieObj.id}`, {
            method: "DELETE",
        })
        .then(resp => resp.json())
        .then((data) => {
            this.props.deleteLikedMovie(this.props.movieObj.id)
        })
    }

    render() {
    let {poster, title, genre} = this.props.movieObj.movie
    return (
    <div className="flexthis" >
        <li>
            <div 
            style={{ backgroundImage: `url(${poster})` }}
            className="pickedcard" >
            </div>
            <div className="button center">
                <button className="likedmoviebutton" onClick={this.openModal} >More Info</button>
                <Modal
                    isOpen={this.state.modal}
                    onRequestClose={this.closeModal}
                    contentLabel="Example Modal"
                    className="Modal"
                    overlayClassName="Overlay"
                >
                    <div className="modalcarddivider"/>
                    <div 
                    style={{ backgroundImage: `url(${poster})` }}
                    className="modalcard" >
                    </div>
                </Modal>
                <div className="divider"/>
                <button className="likedmoviebutton" onClick={this.deleteHandler}>Delete Movie</button>
            </div>
        </li>
    </div>
    )}

};

export default LikedMovies;