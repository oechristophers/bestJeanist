import React from 'react'

export default function Map() {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.0928361456913!2d3.3742688736871753!3d6.509932393482413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8c59445441cd%3A0x86e2ff863721fb2c!2sUnivelcity!5e0!3m2!1sen!2sng!4v1708426992257!5m2!1sen!2sng"
        width="600"
        height="450"
        style={{border:0}}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        className='flex justify-center items-center w-[100%]'
      ></iframe>
    </div>
  );
}
