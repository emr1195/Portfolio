import { v4 as uuidv4 } from 'uuid';
import CreedImg from '../images/p1.png';
import CaptainImg from '../images/p2.png';
import EywImg from '../images/p3.png';
import MotoImg from '../images/p4.png';
import KndImg from '../images/p5.png';

const projects = [
  {
    id: uuidv4(),
    name: 'Captain America',
    desc: 'Discover the story of the first avenger.',
    img: CaptainImg,
  },
  {
    id: uuidv4(),
    name: 'EYW',
    desc: 'The page where you can find everything you want.',
    img: EywImg,
  },
  {
    id: uuidv4(),
    name: 'MotorCycle',
    desc: 'For people with good taste and lovers of classic motorcycles',
    img: MotoImg,
  },
  {
    id: uuidv4(),
    name: 'Kids Next Door',
    desc: 'Do you remember the kids next door ?',
    img: KndImg,
  },
  {
    id: uuidv4(),
    name: 'Assasins Creed',
    desc: 'Be part of the brotherhood.',
    img: CreedImg,
  },
];

export default projects;
