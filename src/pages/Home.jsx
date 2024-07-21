import React from 'react'
import { Link } from 'react-router-dom'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import house_img from '../assets/images/img-3.jpg'
import about_img from '../assets/images/img-9.jpg'
import './home.css'

const Home = () => {
  return (
    <div className='Home'>
      <section className="hero">
        <div className="hero-content">
          <h3>"Construction is not just about structures; it’s about building dreams."</h3>
          {/* <hr /> */}
          <div className="line"></div>
          <p>Build it with Us!</p>
        </div>
      </section>
      <section className='query'>
        <div>
          <p>Are you looking for Construction and Industrial Experts?</p>
          <Link>Contact Us</Link>
        </div>
      </section>
      <section className='about'>
        <h3>What we do?</h3>
        <div className="info">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam ipsum, odit cumque assumenda explicabo recusandae, dolorum quas illum error quia maiores quaerat beatae facilis excepturi. Beatae mollitia reiciendis perferendis molestias?
            In hic laudantium maxime facere! Dolor aperiam quam expedita corporis, officiis praesentium consequuntur, commodi nihil beatae quas libero molestiae quos aliquam esse sunt natus sapiente distinctio vel! Rem, ab id.
            Amet perspiciatis, ipsam facere eos debitis optio doloribus, dolore expedita minima non quod dicta atque explicabo tempora esse nemo iure nobis culpa labore dolorum nostrum excepturi distinctio incidunt. Inventore, deleniti.
          </p>
          <img src={about_img} alt="" />
        </div>
      </section>
      <section className='our_services'>
        <h3>Our Services</h3>
        <div className="service_grid1">
          <div className="grid-1">
            <h4>New Construction</h4>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae placeat maxime blanditiis officia neque harum aliquam! Ducimus, doloribus neque. Omnis quaerat repellendus nisi doloribus vel accusamus ea rem hic odit!</p>
          </div>

          <div className="grid-2">
            <h4>New Construction</h4>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae placeat maxime blanditiis officia neque harum aliquam! Ducimus, doloribus neque. Omnis quaerat repellendus nisi doloribus vel accusamus ea rem hic odit!</p>
          </div>

          <div className="grid-3">
            <h4>New Construction</h4>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae placeat maxime blanditiis officia neque harum aliquam! Ducimus, doloribus neque. Omnis quaerat repellendus nisi doloribus vel accusamus ea rem hic odit!</p>
          </div>
        </div>

        <div className="service_grid2">
          <div className="grid-1">
            <h4>New Construction</h4>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae placeat maxime blanditiis officia neque harum aliquam! Ducimus, doloribus neque. Omnis quaerat repellendus nisi doloribus vel accusamus ea rem hic odit!</p>
          </div>

          <div className="grid-2">
            <h4>New Construction</h4>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae placeat maxime blanditiis officia neque harum aliquam! Ducimus, doloribus neque. Omnis quaerat repellendus nisi doloribus vel accusamus ea rem hic odit!</p>
          </div>

          <div className="grid-3">
            <h4>New Construction</h4>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae placeat maxime blanditiis officia neque harum aliquam! Ducimus, doloribus neque. Omnis quaerat repellendus nisi doloribus vel accusamus ea rem hic odit!</p>
          </div>
        </div>
        <Link>Learn More<KeyboardArrowRightIcon /></Link>
      </section>
      <section className="expertise">
        <div className="experience_cards">
          <div className="card">
            <h1>85+</h1>
            <p>Happy clients</p>
          </div>
          <div className="card">
            <h1>85+</h1>
            <p>Happy clients</p>
          </div>
          <div className="card">
            <h1>85+</h1>
            <p>Happy clients</p>
          </div>
          <div className="card">
            <h1>85+</h1>
            <p>Happy clients</p>
          </div>
          <div className="card">
            <h1>85+</h1>
            <p>Happy clients</p>
          </div>
        </div>
        <div className="experience">
          <h1>31 Years of Experience</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic labore quibusdam delectus eum magnam dolores minus rerum cupiditate fugiat nobis officia laboriosam libero, recusandae reiciendis ut obcaecati eaque illo at!</p>
          <button><Link>Contact Us</Link></button>
        </div>
      </section>
    </div>
  )
}

export default Home;
