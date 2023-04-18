
import './App.css';

function App() {
  return (
    <div>
      <div className="uperr">
        <div className="rightSide">Company name</div>
          <div className="leftSide">
          <ul className='leftSideUl'>
          <a href="#" className='upperTxt'><li className='upperTxtLi'>Features</li></a>
          <a href="#" className='upperTxt'><li className='upperTxtLi'>Enterprice</li></a>
          <a href="#" className='upperTxt'><li className='upperTxtLi'>Support</li></a>
          <a href="#" className='upperTxt'><li className='upperTxtLi'>Pricing</li></a>
        </ul>
        <button className='signBtn'>Sign up</button>
          </div>
   
      </div>

      <div className="container">
        <h1 className='pricing'>Pricing</h1>
        <p className='pricingTxt'>Quickly build an effective pricing table for your potential customers with this Bootstrap example. It's built with default Bootstrap components and utilities with little customization.</p>
        <div className="pricingFlex">
          <div className="cardPricing">
            <div className="spanDivCard">
            <p className='spanCard'>Free</p>
            </div>
            
            <h1 className='priceSpan'>$0 <span className='mutedTxt'> / mo</span></h1>
            
            <ul class="list-unstyled mt-3 mb-4">
              <li className='cardLiPrice'>10 users included</li>
              <li className='cardLiPrice'>2 GB of storage</li>
              <li className='cardLiPrice'>Email support</li>
              <li className='cardLiPrice'>Help center access</li>
            </ul>
            <button className='cardBtnFirst'>Sign Up for Free</button>
          </div>
          <div className="cardPricing">
            <div className="spanDivCard">
            <p className='spanCard'>Pro</p>
            </div>
            
            <h1 className='priceSpan'>$15 <span className='mutedTxt'> / mo</span></h1>
            
            <ul class="list-unstyled mt-3 mb-4">
              <li className='cardLiPrice'>20 users included</li>
              <li className='cardLiPrice'>10 GB of storage</li>
              <li className='cardLiPrice'>Priority email support</li>
              <li className='cardLiPrice'>Help center access</li>
            </ul>
            <button className='cardBtn'>Get started</button>
          </div>
          <div className="cardPricing">
          <div className="spanDivCard">
            <p className='spanCard'>Enterprice</p>
            </div>
            <h1 className='priceSpan'>$29 <span className='mutedTxt'> / mo</span></h1>
            
            <ul class="list-unstyled mt-3 mb-4">
              <li className='cardLiPrice'>30 users included</li>
              <li className='cardLiPrice'>15 GB of storage</li>
              <li className='cardLiPrice'>Phone and email support</li>
              <li className='cardLiPrice'>Help center access</li>
            </ul>
            <button className='cardBtn'>Contact Us</button>
          </div>

        </div>
      </div>
<div className="container">
<footer>
        <div className="firstFooter footerDiv">
          <img className='footerImg' src="https://cdn-icons-png.flaticon.com/512/5968/5968672.png" alt="Error" />
          <p className='footerTxtFirst'>© 2017-2018</p>
        </div>
        <div className="secondFooter footerDiv">
          <h5 className='text'>Features</h5>
          <ul className='footerUl'>
              <li><a class="text-muted" href="#">Cool stuff</a></li>
              <li><a class="text-muted" href="#">Random feature</a></li>
              <li><a class="text-muted" href="#">Team feature</a></li>
              <li><a class="text-muted" href="#">Stuff for developers</a></li>
              <li><a class="text-muted" href="#">Another one</a></li>
              <li><a class="text-muted" href="#">Last time</a></li>
            </ul>
        </div>
        <div className="thirdFooter footerDiv">
          <h5 className='text'>Resources</h5>
          <ul className='footerUl'>
              <li><a class="text-muted" href="#">Resource</a></li>
              <li><a class="text-muted" href="#">Resource name</a></li>
              <li><a class="text-muted" href="#">Another resource</a></li>
              <li><a class="text-muted" href="#">Final resource</a></li>
            </ul>
        </div>
        <div className="fourthFooter footerDiv">
          <h5 className='text'>About</h5>
          <ul className='footerUl' >
              <li><a class="text-muted" href="#">Team</a></li>
              <li><a class="text-muted" href="#">Locations</a></li>
              <li><a class="text-muted" href="#">Privacy</a></li>
              <li><a class="text-muted" href="#">Terms</a></li>
            </ul>
        </div>
        </footer>
</div>
    </div>
  );
}

export default App;
