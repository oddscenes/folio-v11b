import React from 'react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';

const photosPartOne = [
  { src: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/d0006e49078421.58aacc59a4c05.jpg', width: 3, height: 3 },
  { src: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/5382b649078421.58aace116eb49.jpg', width: 3, height: 3 },
];

class ProjectFourLightOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentImage: 0 };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }

  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    });
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }

  render() {
    return (
      <div>
        <Gallery photos={photosPartOne} onClick={this.openLightbox} />
        <Lightbox
          images={photosPartOne}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
        />
      </div>
    );
  }
}

export default ProjectFourLightOne;
