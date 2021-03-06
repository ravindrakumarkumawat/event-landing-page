import React, { useState } from 'react'
import RowLayout from '../Layout/RowLayout'
import NewYork from '../../assets/images/newyork.jpg'
import Paris from '../../assets/images/paris.jpg'
import Sanfran from '../../assets/images/sanfran.jpg'
import './Tour.css'
import NormalImg from '../common/NormalImg'
import NormalRow from '../common/NormalRow'
import NormalCol from '../common/NormalCol'
import NormalButton from '../common/NormalButton'
import NormalInput from '../common/NormalInput'

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
  const [isSelectedUser, setIsSelectedUser] = useState(false);

  const viewUser = (data) => {
    setIsSelectedUser(true)
  }

  const closeViewUser = () => {
    setIsSelectedUser(false)
  }

  const [pay, setPay] = useState({})

 
  const onChange = (e) => {
    console.log(e.target.name, e.target.value)
    setPay({
      ...pay,
      [e.target.name]:e.target.value
    })
  }

  const handlePayment = () => {
    alert(JSON.stringify(pay))
    closeViewUser()
    setPay({})
  }

  return (
    <div className="bg-black" id="tour">
    <RowLayout>
    <div className="container content padding-64 mtb-5">
      <h2 className="wide center white">TOUR DATES</h2>
      <p className="opacity center white"><i>Remember to book your tickets!</i></p><br />

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
                <div className="third margin-bottom bg-white">
                  <NormalImg src={d.imgUrl} alt={d.location} classNames={'hover-opacity'}/>
                  {/*<img src="/w3images/newyork.jpg" alt="New York" className="hover-opacity" />*/}
                  <div className="t-container">
                    <p><b>{d.location}</b></p>
                    <p className="opacity">{d.date}</p>
                    <p>{d.description}</p>
                    {/*<button className="button black margin-bottom" onclick="document.getElementById('ticketModal').style.display='block'">Buy Tickets</button>*/}
                    <NormalButton name={"Buy Tickets"} btntype={"primary"} handleAction={viewUser}/>
                  </div>
                </div>
                </NormalCol>       
              )
            }
            </NormalRow> 
        </div>



    </div>
    </RowLayout>
    <div id="ticketModal" className={`view-container ${isSelectedUser ? 'view-container-show' : 'view-container-hide'}`}>
    <div className="modal-content animate-top card-4">
      <header className="container teal center padding-32"> 
        <h2 className="wide"><i className="fa fa-suitcase margin-right"></i>Tickets</h2>
      </header>
      <div className="container">
        <p><label><i className="fa fa-shopping-cart"></i> Tickets, $15 per person</label></p>
        <NormalInput placeholder={"How many?"} value={pay.amount || ''} name={'amount'} onChange={onChange}/>
        <p><label><i className="fa fa-user"></i> Send To</label></p>
        <NormalInput placeholder={"Enter email"} value={pay.email || ''} name={"email"} onChange={onChange}/>

        <NormalButton name={"PAY"} btntype={"btn-right"} handleAction={handlePayment} />
        <NormalButton name={"Close"} btntype={"primary"} handleAction={closeViewUser} />
        <p className="right mt-2">Need <a href="#" className="text-blue">help?</a></p>
      </div>
    </div>
    </div>
          
  </div>
  )
}

export default Tour
