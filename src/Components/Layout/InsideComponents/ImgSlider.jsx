import Carousel from 'react-bootstrap/Carousel';

function ImgSlider() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.wondershare.com/recoverit/article/2020/03/windows-10-black-screen-after-login-1.jpg"
          alt="First slide"
          style={{height: '400px', width: '100%'}}
        />
        <Carousel.Caption>
          <h3>Imagem do Slide 1#</h3>
          <p>descrição do slide 1#</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.wondershare.com/recoverit/article/2020/03/windows-10-black-screen-after-login-1.jpg"
          alt="Second slide"
          style={{height: '400px', width: '100%'}}
        />

        <Carousel.Caption>
          <h3>Imagem do slide 2#</h3>
          <p>Descrição do slide 2#</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.wondershare.com/recoverit/article/2020/03/windows-10-black-screen-after-login-1.jpg"
          alt="Third slide"
          style={{height: '400px', width: '100%'}}
        />

        <Carousel.Caption>
          <h3>Imagem do slide 3#</h3>
          <p>
            Descrição do slide 3#
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ImgSlider;