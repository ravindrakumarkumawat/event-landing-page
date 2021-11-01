import React from 'react'
import RowLayout from '../Layout/RowLayout'

const Tour = () => {
  return (
    <RowLayout>
    <div className="w3-black" id="tour">
    <div className="w3-container w3-content w3-padding-64" style={{ maxWidth:"800px"}}>
      <h2 className="w3-wide w3-center">TOUR DATES</h2>
      <p className="w3-opacity w3-center"><i>Remember to book your tickets!</i></p><br />

      <ul className="w3-ul w3-border w3-white w3-text-grey">
        <li className="w3-padding">September <span className="w3-tag w3-red w3-margin-left">Sold out</span></li>
        <li className="w3-padding">October <span className="w3-tag w3-red w3-margin-left">Sold out</span></li>
        <li className="w3-padding">November <span className="w3-badge w3-right w3-margin-right">3</span></li>
      </ul>

      <div className="w3-row-padding w3-padding-32" style={{margin:"0 -16px"}}>
        <div className="w3-third w3-margin-bottom">
          <img src="/w3images/newyork.jpg" alt="New York" style={{width:"100%"}} className="w3-hover-opacity" />
          <div className="w3-container w3-white">
            <p><b>New York</b></p>
            <p className="w3-opacity">Fri 27 Nov 2016</p>
            <p>Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
            <button className="w3-button w3-black w3-margin-bottom" onclick="document.getElementById('ticketModal').style.display='block'">Buy Tickets</button>
          </div>
        </div>
        <div className="w3-third w3-margin-bottom">
          <img src="/w3images/paris.jpg" alt="Paris" style={{width:"100%"}} className="w3-hover-opacity" />
          <div className="w3-container w3-white">
            <p><b>Paris</b></p>
            <p className="w3-opacity">Sat 28 Nov 2016</p>
            <p>Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
            <button className="w3-button w3-black w3-margin-bottom" onclick="document.getElementById('ticketModal').style.display='block'">Buy Tickets</button>
          </div>
        </div>
        <div className="w3-third w3-margin-bottom">
          <img src="/w3images/sanfran.jpg" alt="San Francisco" style={{width:"100%"}} className="w3-hover-opacity" />
          <div className="w3-container w3-white">
            <p><b>San Francisco</b></p>
            <p className="w3-opacity">Sun 29 Nov 2016</p>
            <p>Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
            <button className="w3-button w3-black w3-margin-bottom" onclick="document.getElementById('ticketModal').style.display='block'">Buy Tickets</button>
          </div>
        </div>
      </div>
    </div>
  </div>

    <div id="ticketModal" className="w3-modal">
    <div className="w3-modal-content w3-animate-top w3-card-4">
      <header className="w3-container w3-teal w3-center w3-padding-32"> 
        <span onClick={() => document.getElementById('ticketModal').style.display='none'}
       className="w3-button w3-teal w3-xlarge w3-display-topright">×</span>
        <h2 className="w3-wide"><i className="fa fa-suitcase w3-margin-right"></i>Tickets</h2>
      </header>
      <div className="w3-container">
        <p><label><i className="fa fa-shopping-cart"></i> Tickets, $15 per person</label></p>
        <input className="w3-input w3-border" type="text" placeholder="How many?" />
        <p><label><i className="fa fa-user"></i> Send To</label></p>
        <input className="w3-input w3-border" type="text" placeholder="Enter email" />
        <button className="w3-button w3-block w3-teal w3-padding-16 w3-section w3-right">PAY <i className="fa fa-check"></i></button>
        <button className="w3-button w3-red w3-section" onclick="document.getElementById('ticketModal').style.display='none'">Close <i className="fa fa-remove"></i></button>
        <p className="w3-right">Need <a href="#" className="w3-text-blue">help?</a></p>
      </div>
    </div>
    </div>
      
    </RowLayout>
  )
}

export default Tour
