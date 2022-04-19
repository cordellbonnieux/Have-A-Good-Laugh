import React from 'react';
import Section from './Section';

export default function Contact() {
  const content = (
    <form action="https://formsubmit.co/thoughtdecayrecords@gmail.com" method="POST">
      <input type="text" name="name" value="your name"></input>
    </form>
  )
  return (
    <Section dark={false} title={"Contact"} content={content}/>
  );
}
