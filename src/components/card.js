import React from 'react';
import "./card.css";

function Card(props) {
  return props.data.map((card, i) => {
    return <div className="col-lg-4" key={i}>
      <div className="card mb-5 mb-lg-0">
        <div className="card-body">
          <h5 className="card-title text-muted text-uppercase text-center">{card.plan}</h5>
          <h6 className="card-price text-center">${card.cost}<span class="period">/month</span></h6>
          <hr />
          <ul className="fa-ul">
            <li className={card.usersCount.fontWeight}><span className="fa-li"><i className="fas fa-check"></i></span>{card.usersCount.user}</li>
            <li><span className="fa-li"><i className="fas fa-check"></i></span>{card.storage}</li>
            <li><span className="fa-li"><i className="fas fa-check"></i></span>{card.projects}</li>
            <li><span className="fa-li"><i className="fas fa-check"></i></span>{card.access}</li>

            <li className={card.projectsNumbers.text}><span className="fa-li"><i className={card.projectsNumbers.icon}></i></span>
              {card.projectsNumbers.privateProjects}
            </li>

            <li className={card.phone.text}><span className="fa-li"><i className={card.phone.icon}></i></span>
              {card.phone.phoneSupport}
            </li>
            <li className={card.domain.text}><span className="fa-li"><i className={card.domain.icon}></i></span>
            {card.domain.subDomain}
            </li>
            <li className={card.monthlyReports.text}><span class="fa-li"><i className={card.monthlyReports.icon}></i></span>
            {card.monthlyReports.report}
              </li>
          </ul>
          <div class="d-grid">
              <a href="/" class="btn btn-primary text-uppercase">Button</a>
            </div>
        </div>
      </div>
    </div>
  })
}
export default Card;