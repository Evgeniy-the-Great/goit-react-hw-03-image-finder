import React, { Component } from 'react';
import Modal from '../Modal/Modal';

class ImageGalleryItem extends Component {
  state = {
    showModal: false,
    largeImage: '',
  };

  toggleModal = e => {
    this.setState(prev => ({
      showModal: !prev.showModal,
      largeImage: e.target.id || '',
    }));
  };

  render() {
    return (
      <>
        {this.props.pictures.map(picture => (
          <li className="ImageGalleryItem" key={picture.id}>
            <img
              src={picture.webformatURL}
              alt=""
              className="ImageGalleryItem-image"
              onClick={this.toggleModal}
              id={picture.largeImageURL}
            />
          </li>
        ))}
        {this.state.showModal && (
          <Modal onClose={this.toggleModal} picture={this.state.largeImage} />
        )}
      </>
    );
  }
}

export default ImageGalleryItem;
