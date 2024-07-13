import Logo from "../../assets/images/logo/logo2.png"
function Footer() {
  return (
    <footer className="aximo-footer-section dark-bg">
      <div className="container">
        <div className="aximo-footer-bottom">
          <div className="row">
            <div className="col-lg-6">
              <div className="aximo-footer-logo">
                <a href="">
                  <img className="footer-logo" src={Logo} alt="logo" />
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="aximo-copywright one">
                <p> &copy; Copyright 2024, All Rights Reserved by Hengerdiss</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
