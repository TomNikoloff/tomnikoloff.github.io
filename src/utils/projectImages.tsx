// Images
import ReactWeatherApp from '../assets/ReactWeatherApp.png';

import CRM1 from '../assets/CRM-1.png';
import CRM2 from '../assets/CRM-2.png';
import CRM3 from '../assets/CRM-3.png';

import KataFlow from '../assets/KataFlow.png';
import KataFlow2 from '../assets/KataFlow-2.png';
import KataFlow3 from '../assets/KataFlow-3.png';
import KataFlow4 from '../assets/KataFlow-4.png';

import NorfolkKnights from '../assets/NorfolkKnights.png';
import FinancialCalculators from '../assets/FinancialCalculators.png';

const ProjectImage = (image: any) => {

    let Image;

    switch (image.image){

        case 'ReactWeatherApp.png':
            Image = ReactWeatherApp;
            break;

        case 'CRM-1.png':
            Image = CRM1;
            break;

        case 'CRM-2.png':
            Image = CRM2;
            break;

        case 'CRM-3.png':
            Image = CRM3;
            break;

        case 'KataFlow.png':
            Image = KataFlow;
            break;

        case 'KataFlow-2.png':
            Image = KataFlow2;
            break;

        case 'KataFlow-3.png':
            Image = KataFlow3;
            break;

        case 'KataFlow-4.png':
            Image = KataFlow4;
            break;

        case 'NorfolkKnights.png':
            Image = NorfolkKnights;
            break;

        case 'FinancialCalculators.png':
            Image = FinancialCalculators;
            break;

    }

    return <img src={Image} />;
};

export default ProjectImage;