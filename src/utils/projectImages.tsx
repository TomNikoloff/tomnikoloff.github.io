// Images
import ReactWeatherApp from '../assets/ReactWeatherApp.png';
import CRM from '../assets/CRM.png';
import KataFlow from '../assets/KataFlow.png';
import NorfolkKnights from '../assets/NorfolkKnights.png';
import FinancialCalculators from '../assets/FinancialCalculators.png';

const ProjectImage = (image: any) => {

    let Image;

    switch (image.image){

        case 'ReactWeatherApp.png':
        Image = ReactWeatherApp;
        break;

        case 'CRM.png':
        Image = CRM;
        break;

        case 'KataFlow.png':
        Image = KataFlow;
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