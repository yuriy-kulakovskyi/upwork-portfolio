import React from 'react'

// big text component import
import BigText from '../../BigText/BigText';

// layers icon
import { MdLayers } from "react-icons/md";

// cogs icon
import { FaCogs } from "react-icons/fa";

// code slash icon
import { IoCodeSlashSharp } from "react-icons/io5";

// styles import
import './styles/Services.css';

// services array
const services = [
  {
    icon: <MdLayers />,
    items: [
      'UI/UX design',
      'Responsive design',
      'Web app design'
    ]
  },

  {
    icon: <FaCogs />,
    items: [
      'Frontend development',
      'Backend development',
      'Database design'
    ]
  },

  {
    icon: <IoCodeSlashSharp />,
    items: [
      'HTML/CSS',
      'Prototyping',
      'Code refactoring'
    ]
  }
]

const Services = () => {
  return (
    <section className="services">
      {/* big text component use */}
      <BigText paragraph='what i do' title="my services" />

      {/* render services */}
      <div className="services__container">
        {services.map((service, index) => (
          <div key={index} className="services__item">
            <div className="services__icon">
              {service.icon}
            </div>
            <ul className="services__list">
              {service.items.map((item, index) => (
                <li key={index} className="services__list-item">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

    </section>
  )
}

export default Services