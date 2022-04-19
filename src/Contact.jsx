import React from 'react';
import Section from './Section';

export default function Contact() {
  const content = (
    <form action="https://formsubmit.co/68f6a08c49448df769a04e2527f0af1e" method="POST">
      <div>
        <label for="name">Name</label>
        <input type="text" name="name" id="name"></input>
      </div>
      <div>
        <label for="email">Email</label>
        <input type="email" name="email" id="email"></input>
      </div>
      <div className="left">
        <label for="message">What's on your mind?</label>
        <textarea id="message" name="message">
        </textarea>
      </div>
      <div>
        <input type="submit" value="Send"></input>
      </div>
    </form>
  )
  return (
    <Section dark={false} title={"Contact"} content={content}/>
  );
}
