import React from 'react';
import Title from './Title';
import ServiceItem from './ServiceItem';
import { services } from '../data';

function Services() {
  return (
    <section className='section services' id='services'>
      <Title prefix='our' sufix='services' />
      <div className='section-center services-center'>
        {services.map((service) => {
          return <ServiceItem key={service.id} {...service} />;
        })}
      </div>
    </section>
  );
}

export default Services;
