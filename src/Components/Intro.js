import { ArrowRightCircle } from 'react-feather';
import '../Assets/css/main.css';

function Intro() {
  return (
    <div className="pl-20 intro">
      <p className="text-whitey text-2xl font-bold pb-5">Software Engineer |</p>
      <p className="text-whitey pb-3">Hello!! Nice To Meet You!</p>
      <p className="text-greyish pb-3">
        I am looking for opportunities where I can make impacts with my tech acquired skills and also, rooms for
        improvements and advancements.
      </p>
      <ul className="text-greyish">
        <li className="flex pb-2 ">
          <ArrowRightCircle className="mr-2" />
          Creative
        </li>
        <li className="flex pb-2 ">
          <ArrowRightCircle className="mr-2" />
          Innovative
        </li>
        <li className="flex pb-2 ">
          <ArrowRightCircle className="mr-2" />
          Team player
        </li>
        <li className="flex pb-2 ">
          <ArrowRightCircle className="mr-2" />
          Adaptive
        </li>
        <li className="flex  ">
          <ArrowRightCircle className="mr-2" />
          Fast learner
        </li>
      </ul>
      <div className="mt-10 p-4 bg-pinky text-bluey w-40 rounded-full cursor-pointer contact-me">
        <p>Contact me &rarr;</p>
      </div>
    </div>
  );
}

export default Intro;
