// Images
import ReactWeatherApp from '../assets/ReactWeatherApp.png';

import CRM1 from '../assets/CRM-1.png';
import CRM2 from '../assets/CRM-2.png';
import CRM3 from '../assets/CRM-3.png';

// new CRM overview & analytics images
import CRMAdviserOverview from '../assets/New_CRM_Examples/CRM-Adviser_Overview.png';
import CRMAnalytics from '../assets/New_CRM_Examples/CRM-Analytics.png';
import CRMCaseCreation from '../assets/New_CRM_Examples/CRM-Case_Creation.png';
import CRMCaseOverview from '../assets/New_CRM_Examples/CRM-Case_Overview.png';
import CRMFactfind1 from '../assets/New_CRM_Examples/CRM-Factfind_1.png';
import CRMFactfind2 from '../assets/New_CRM_Examples/CRM-Factfind_2.png';
import CRMFactfind3 from '../assets/New_CRM_Examples/CRM-Factfind_3.png';
import CRMSearch from '../assets/New_CRM_Examples/CRM-Search.png';
import CRMTransactions from '../assets/New_CRM_Examples/CRM-Transactions.png';

import KataFlow from '../assets/KataFlow.png';
import KataFlow2 from '../assets/KataFlow-2.png';
import KataFlow3 from '../assets/KataFlow-3.png';
import KataFlow4 from '../assets/KataFlow-4.png';

import Charwin1 from '../assets/Charw.in-1.png';
import Charwin2 from '../assets/Charw.in-2.png';
import Charwin3 from '../assets/Charw.in-3.png';

import NorfolkKnights from '../assets/NorfolkKnights.png';
import FinancialCalculators from '../assets/FinancialCalculators.png';

const ProjectImage = (image: any) => {

    let Image;

    switch (image.image){

        case 'ReactWeatherApp.png':
            Image = ReactWeatherApp;
            break;

        // new CRM files
        case 'CRM-Adviser_Overview.png':
            Image = CRMAdviserOverview;
            break;

        case 'CRM-Analytics.png':
            Image = CRMAnalytics;
            break;

        case 'CRM-Case_Creation.png':
            Image = CRMCaseCreation;
            break;

        case 'CRM-Case_Overview.png':
            Image = CRMCaseOverview;
            break;

        case 'CRM-Factfind_1.png':
            Image = CRMFactfind1;
            break;

        case 'CRM-Factfind_2.png':
            Image = CRMFactfind2;
            break;

        case 'CRM-Factfind_3.png':
            Image = CRMFactfind3;
            break;

        case 'CRM-Search.png':
            Image = CRMSearch;
            break;

        case 'CRM-Transactions.png':
            Image = CRMTransactions;
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

        case 'Charw.in-1.png':
            Image = Charwin1;
            break;

        case 'Charw.in-2.png':
            Image = Charwin2;
            break;

        case 'Charw.in-3.png':
            Image = Charwin3;
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