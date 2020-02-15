import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import Lightbox from "react-image-lightbox";
import "./Lightbox.css";
import './cards.css';

class LightboxPage extends React.Component {
  state = {
    photoIndex: 0,
    isOpen: false,
    images: [
      'https://scontent.fccu10-1.fna.fbcdn.net/v/t31.0-8/13055114_1757895151090167_8730972032608956518_o.jpg?_nc_cat=110&_nc_ohc=lUYKq7OpJI0AX9wAo45&_nc_ht=scontent.fccu10-1.fna&oh=2fbfc59c386a1d7ebdff56a76aeca4ae&oe=5EFEDC9B',
      'https://scontent.fccu10-1.fna.fbcdn.net/v/t1.0-9/13087386_1757894184423597_172695294762548029_n.jpg?_nc_cat=105&_nc_ohc=C36wKPRe7uAAX-7GNSx&_nc_ht=scontent.fccu10-1.fna&oh=bf0383f91e6b9ecd1a080a31be39bdca&oe=5EB6608E',
      'https://scontent.fccu10-1.fna.fbcdn.net/v/t1.0-9/13083170_1757894141090268_1414331929457924331_n.jpg?_nc_cat=108&_nc_ohc=Na4F2ly2CM0AX82tUF9&_nc_ht=scontent.fccu10-1.fna&oh=9dc7d6cf45d1f084e8cfc869158bc3a6&oe=5EBA0F6E',
      'https://scontent.fccu10-1.fna.fbcdn.net/v/t1.0-9/13100693_1757894211090261_8157281382600648602_n.jpg?_nc_cat=104&_nc_ohc=SxJ1fBWCaEgAX9jWe0v&_nc_ht=scontent.fccu10-1.fna&oh=a52eeab47ac307d0a22574547a7ac627&oe=5ED3B96A',
      'https://scontent.fccu10-1.fna.fbcdn.net/v/t31.0-8/13071858_1757895107756838_7104676457094473224_o.jpg?_nc_cat=107&_nc_ohc=ZncnnNFYIhoAX_TnPCH&_nc_ht=scontent.fccu10-1.fna&oh=2efcf16545493c114b1413115bddca49&oe=5EBB91C1',
      'https://scontent.fccu10-1.fna.fbcdn.net/v/t1.0-9/13092148_1757895247756824_9215723723368117413_n.jpg?_nc_cat=111&_nc_ohc=Yed_Nke0rqkAX8v7ExB&_nc_ht=scontent.fccu10-1.fna&oh=ae700b6900d5aa8f07673d4798a31410&oe=5ECE9496',
      'https://scontent.fccu10-1.fna.fbcdn.net/v/t31.0-8/13086811_1757895367756812_4663687141597294811_o.jpg?_nc_cat=104&_nc_ohc=cKhIGQAmCtsAX8D25BT&_nc_ht=scontent.fccu10-1.fna&oh=8b772af62547c921a69a52d76d5dd1cf&oe=5F036CBE',
      'https://scontent.fccu10-1.fna.fbcdn.net/v/t1.0-9/13087850_1757894031090279_7023197768740963472_n.jpg?_nc_cat=104&_nc_ohc=A6a6DEpVY6UAX_6FDdB&_nc_ht=scontent.fccu10-1.fna&oh=e9dfae74380c2b1a1e62cdb8ccb6f650&oe=5ED1D2FC',
      'https://scontent.fccu10-1.fna.fbcdn.net/v/t1.0-9/13087657_1757894074423608_3987973762672975742_n.jpg?_nc_cat=110&_nc_ohc=7ER7hOzu8j8AX_ef17P&_nc_ht=scontent.fccu10-1.fna&oh=3485941224edd05ad4faf8cea0326c0d&oe=5EC5A9A5',
      'https://scontent.fccu10-1.fna.fbcdn.net/v/t1.0-9/13095825_1757894101090272_6757473725163146140_n.jpg?_nc_cat=103&_nc_ohc=UVwHnmhqgD4AX_Ytg5E&_nc_ht=scontent.fccu10-1.fna&oh=d4eb83ee7507aa474709c40b8f7f3677&oe=5EBE6233',
      'https://scontent.fccu10-1.fna.fbcdn.net/v/t1.0-9/13083126_1757894297756919_4683550827863911263_n.jpg?_nc_cat=101&_nc_ohc=LxlByfgf8bUAX8O06tV&_nc_ht=scontent.fccu10-1.fna&oh=cd527d014afa4a00382868863f92e477&oe=5ECD9FAF',

    ],
    colWidth: [3, 3, 3, 3, 4, 4, 4, 3, 3, 3, 3]
  }

  renderImages = () => {
    let photoIndex = -1;
    const { images } = this.state;

    return images.map((imageSrc, index) => {
      photoIndex++;
      const privateKey = photoIndex;
      return (
          
        <MDBCol md={this.state.colWidth[index]} key={photoIndex} className="zoom">
          <figure>
            <img
              src={imageSrc}
              alt="Gallery"
              className="img-fluid z-depth-1"
              onClick={() =>
                this.setState({ photoIndex: privateKey, isOpen: true })
              }
            />
          </figure>
        </MDBCol>
      );
    })
  }

  render() {
    const { photoIndex, isOpen, images } = this.state;
    return (
      <MDBContainer className="mt-5 p-3" >
          <h2>Gallery</h2>
          <br/>
          <br/>
        <div className="mdb-lightbox p-3">
          <MDBRow>
            {this.renderImages()}
          </MDBRow>
        </div>
        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            imageTitle={photoIndex + 1 + "/" + images.length}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length
              })
            }
          />
        )}
      </MDBContainer >
    );
  }
}

export default LightboxPage;