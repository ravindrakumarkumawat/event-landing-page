import React from 'react'
import RowLayout from '../Layout/RowLayout'
import './Tour.css'

const Tour = () => {
  return (
    <RowLayout>
    <div className="black" id="tour">
    <div className="container content padding-64">
      <h2 className="wide center">TOUR DATES</h2>
      <p className="opacity center"><i>Remember to book your tickets!</i></p><br />

      <ul className="ul border bg-white text-grey">
        <li className="padding">September <span className="tag bg-red margin-left">Sold out</span></li>
        <li className="padding">October <span className="tag bg-red margin-left">Sold out</span></li>
        <li className="padding">November <span className="badge right margin-right">3</span></li>
      </ul>

      <div className="row-padding padding-32">
        <div className="third margin-bottom">
          <img src="/w3images/newyork.jpg" alt="New York" className="hover-opacity" />
          <div className="container white">
            <p><b>New York</b></p>
            <p className="opacity">Fri 27 Nov 2016</p>
            <p>Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
            <button className="button black margin-bottom" onclick="document.getElementById('ticketModal').style.display='block'">Buy Tickets</button>
          </div>
        </div>
        <div className="third margin-bottom">
          <img src="/w3images/paris.jpg" alt="Paris" className="hover-opacity" />
          <div className="container white">
            <p><b>Paris</b></p>
            <p className="opacity">Sat 28 Nov 2016</p>
            <p>Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
            <button className="button black margin-bottom" onclick="document.getElementById('ticketModal').style.display='block'">Buy Tickets</button>
          </div>
        </div>
        <div className="third margin-bottom">
          <img src="/w3images/sanfran.jpg" alt="San Francisco" className="hover-opacity" />
          <div className="container white">
            <p><b>San Francisco</b></p>
            <p className="opacity">Sun 29 Nov 2016</p>
            <p>Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
            <button className="button black margin-bottom" onclick="document.getElementById('ticketModal').style.display='block'">Buy Tickets</button>
          </div>
        </div>
      </div>
    </div>
  </div>

    <div id="ticketModal" className="modal">
    <div className="modal-content animate-top card-4">
      <header className="container teal center padding-32"> 
        <span onClick={() => document.getElementById('ticketModal').style.display='none'}
       className="button teal xlarge display-topright">×</span>
        <h2 className="wide"><i className="fa fa-suitcase margin-right"></i>Tickets</h2>
      </header>
      <div className="container">
        <p><label><i className="fa fa-shopping-cart"></i> Tickets, $15 per person</label></p>
        <input className="input border" type="text" placeholder="How many?" />
        <p><label><i className="fa fa-user"></i> Send To</label></p>
        <input className="input border" type="text" placeholder="Enter email" />
        <button className="button block teal padding-16 section right">PAY <i className="fa fa-check"></i></button>
        <button className="button red section" onclick="document.getElementById('ticketModal').style.display='none'">Close <i className="fa fa-remove"></i></button>
        <p className="right">Need <a href="#" className="text-blue">help?</a></p>
      </div>
    </div>
    </div>
      
    </RowLayout>
  )
}

export default Tour
