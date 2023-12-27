import './Whatsapp.css'
import whatsapp from '../../assets/whatsapp.png'
import { useState } from "react";


const Whatsapp = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  window.addEventListener('scroll', function () {
    var whatsappButton = document.getElementById('whatsapp-button');
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollPosition > 0) {
      whatsappButton.style.display = 'block';
    } else {
      // whatsappButton.style.display = 'none';
    }
  });

  return (
    <div
      id="whatsapp-button"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isHovered && <div className="help-message">Precisa de ajuda?</div>}
      <a href="https://api.whatsapp.com/send/?phone=5521972770807&text=Ol%C3%A1%2C+venho+atrav%C3%A9s+da+p%C3%A1gina+de+voc%C3%AAs+e+gostaria+de+mais+informa%C3%A7%C3%B5es%21&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
        <img src={whatsapp} alt="WhatsApp" id="whatsapp-button-image" />
      </a>
    </div>
  );
};

export default Whatsapp;