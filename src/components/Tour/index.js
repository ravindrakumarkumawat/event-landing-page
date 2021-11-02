import React from 'react'
import RowLayout from '../Layout/RowLayout'
import NewYork from '../../assets/images/newyork.jpg'
import Paris from '../../assets/images/paris.jpg'
import Sanfran from '../../assets/images/sanfran.jpg'
import './Tour.css'
import NormalImg from '../common/NormalImg'
import NormalRow from '../common/NormalRow'
import NormalCol from '../common/NormalCol'
import NormalButton from '../common/NormalButton'

const eventsPlace = [
  { id: 1,
    imgUrl: NewYork,
    location: 'New York',
    date: 'Fri 27 Nov 2016',
    description: 'Praesent tincidunt sed tellus ut rutrum sed vitae justo.',
  },
  { 
    id: 2,
    imgUrl: Paris,
    location: 'Paris',
    date: 'Sat 28 Nov 2016',
    description: 'Praesent tincidunt sed tellus ut rutrum sed vitae justo.',
  },
  {
    id: 3,
    imgUrl: Sanfran,
    location: 'San Francisco',
    date: 'Sun 29 Nov 2016',
    description: 'Praesent tincidunt sed tellus ut rutrum sed vitae justo.',
  }
]

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
        <NormalRow classNames={"justifyBetween"}>      
            {
              eventsPlace.map((d) =>    
                <NormalCol span={7}>              
                <div className="third margin-bottom">
                  <NormalImg src={d.imgUrl} alt={d.location} classNames={'hover-opacity'}/>
                  {/*<img src="/w3images/newyork.jpg" alt="New York" className="hover-opacity" />*/}
                  <div className="container white">
                    <p><b>{d.location}</b></p>
                    <p className="opacity">{d.date}</p>
                    <p>{d.description}</p>
                    {/*<button className="button black margin-bottom" onclick="document.getElementById('ticketModal').style.display='block'">Buy Tickets</button>*/}
                    <NormalButton name={"Buy Tickets"} btntype={"primary"}/>
                  </div>
                </div>
                </NormalCol>       
              )
            }
            </NormalRow> 
        </div>



    </div>
  </div>
    {/*
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
          */}
    </RowLayout>
  )
}

export default Tour
