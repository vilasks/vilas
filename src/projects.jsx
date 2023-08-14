import WCScreenGrab from './assets/WC.png';
import BhavCopyScreen from './assets/BhavCopy.png';

import ReactLogo from './assets/react.png';
import NodeJsLogo from './assets/nodejs.png';
import ExpressLogo from './assets/express.png';
import AngularLogo from "./assets/angular.svg";
import mongodbLogo from './assets/mongodb.png';

export const WhispheringChamber = {
    title: 'Whisphering Chamber',
    desc: 'A web application that serves articles on daily affairs of 26 Countries in 6 different categories.',
    tech: [ReactLogo,NodeJsLogo,ExpressLogo],
    image: WCScreenGrab,
    link: 'https://news-react.onrender.com'
}

export const BhavCopy = {
    title: 'Bhav Copy',
    desc: 'Application that scrapes everyday NSE archive data and displays that data in interactive UI using charts. Allows User to create price alerts and subscribe to everyday market activity newsletter. ',
    tech: [AngularLogo,NodeJsLogo,mongodbLogo,ExpressLogo],
    image: BhavCopyScreen,
    link: 'https://bahv-copy.vercel.app'
}