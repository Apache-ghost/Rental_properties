import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './index.css';
const testimonials = [
  {
    image: './public/images/profile.jpg',
    name: 'Guegouo M. Guiddel',
    text: 'I love this app, it is so user-friendly.'
  },
  {
    image: './public/images/profile.jpg',
    name: 'John Doe',
    text: 'This app has made my life so much easier.'
  },
  {
    image: './public/images/profile.jpg',
    name: 'Jane Smith',
    text: 'The best app Ive ever used!'
  },


{
image: './public/images/profile2.jpg',
name: 'Jane Smith',
text: 'I love using this app every day!'
},
{
image: './public/images/profile3.jpg',
name: 'Michael Johnson',
text: 'This is the best app Ive ever used!'
},
{
image: './public/images/profile4.jpg',
name: 'Emily Brown',
text: 'This app has completely transformed my workflow.'
},
{
    image: './public/images/profile5.jpg',
    name: 'David Lee',
    text: 'I cannot imagine going back to the old way of doing things.'
    },
    {
    image: './public/images/profile6.jpg',
    name: 'Sarah Kim',
    text: 'This app has been a game-changer for my business.'
    }
];

function Testimonial() {
    return (
      <div className="card-container">
        <h2 className="comment">Hear what peoples said about us!</h2>
        {testimonials.map((testimonial, index) => (
          <div className="card" key={index}>
            <img src={`/images/${testimonial.image}`} className="card-image" alt="" />
            <h2 className="card-title">{testimonial.name}</h2>
            <div className="rating">
              {[...Array(5)].map((_, i) => (
                <FontAwesomeIcon
                  key={i}
                  icon={faStar}
                  className={i < 4 ? 'active' : ''}
                />
              ))}
            </div>
            <p className="card-text">{testimonial.text}</p>
          </div>
        ))}
      </div>
    );
  }

export default Testimonial;