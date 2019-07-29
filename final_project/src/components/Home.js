import React from 'react';
import { Link } from 'react-router-dom'

import '../assets/css/bootstrap.min.css'
import '../assets/css/style.css'

function Home() {

  return(
      <section className="banner_part">
        <div className="container">
          <div className="row align-items-center justify-content-end">
            <div className="col-lg-5">
              <div className="banner_text text-center">
                <div className="banner_text_iner">
                  <h5>a react application</h5>
                  <h1>write your <span>notes</span></h1>
                  <p>Don't forget your tasks</p>
                  <Link to="/addnote" className="btn_1">
                    let's start
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Home;
