import React from 'react';
import { check } from 'react-feather';

function Intro() {
  return (
    <div className="pl-20 intro">
      <p className="text-whitey text-2xl font-bold">Software Engineer |</p>
      <p>Hello!! Nice To Meet You!</p>
      <p>
        I am looking for opportunities where I can make impacts with my tech acquired skills and also, rooms for
        improvements and advancements.
      </p>
      <ul>
        <check>Creative</check>
        <li>Innovative</li>
        <li>Team player</li>
        <li>Adaptive</li>
        <li>Fast learner</li>
      </ul>
    </div>
  );
}

export default Intro;
