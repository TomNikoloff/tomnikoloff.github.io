// src/components/ProjectImage.tsx
import React from 'react';

// Import both WebP and PNG versions side-by-side.
import ReactWeatherAppPng from '../assets/images/projects/react-weather-app.png';
import ReactWeatherAppWebp from '../assets/images/projects/react-weather-app.webp';

import CRMAdviserOverviewPng from '../assets/images/projects/crm-adviser-overview.png';
import CRMAnalyticsPng        from '../assets/images/projects/crm-analytics.png';
import CRMCaseCreationPng     from '../assets/images/projects/crm-case-creation.png';
import CRMCaseOverviewPng     from '../assets/images/projects/crm-case-overview.png';
import CRMFactfind1Png        from '../assets/images/projects/crm-factfind.png';
import CRMFactfind2Png        from '../assets/images/projects/crm-factfind-2.png';
import CRMFactfind3Png        from '../assets/images/projects/crm-factfind-3.png';
import CRMSearchPng           from '../assets/images/projects/crm-search.png';
import CRMTransactionsPng     from '../assets/images/projects/crm-transactions.png';

import KataFlowPng   from '../assets/images/projects/kataflow.png';
import KataFlow2Png  from '../assets/images/projects/kataflow-2.png';
import KataFlow4Png  from '../assets/images/projects/kataflow-4.png';

import Charwin1Png   from '../assets/images/projects/charw.in-1.png';
import Charwin2Png   from '../assets/images/projects/charw.in-2.png';

import NorfolkKnightsPng from '../assets/images/projects/norfolk-knights.png';
import NorfolkKnightsWebp from '../assets/images/projects/norfolk-knights.webp';

export type ImageKey =
	| 'ReactWeatherApp'
	| 'CRM-Adviser_Overview'
	| 'CRM-Analytics'
	| 'CRM-Case_Creation'
	| 'CRM-Case_Overview'
	| 'CRM-Factfind_1'
	| 'CRM-Factfind_2'
	| 'CRM-Factfind_3'
	| 'CRM-Search'
	| 'CRM-Transactions'
	| 'KataFlow'
	| 'KataFlow-2'
	| 'KataFlow-4'
	| 'Charw.in-1'
	| 'Charw.in-2'
	| 'NorfolkKnights';

const IMAGE_MAP: Record<
	ImageKey,
	{
		png: string;
		webp?: string;
		alt?: string;
	}
> = {
	// ReactWeatherApp has both WebP and PNG
	'ReactWeatherApp': {
		webp: ReactWeatherAppWebp,
		png: ReactWeatherAppPng,
		alt: 'Screenshot of React Weather App',
	},

	// CRM examples (PNG only for now)
	'CRM-Adviser_Overview': {
		png: CRMAdviserOverviewPng,
		alt: 'CRM Adviser Overview',
	},
	'CRM-Analytics': {
		png: CRMAnalyticsPng,
		alt: 'CRM Analytics Dashboard',
	},
	'CRM-Case_Creation': {
		png: CRMCaseCreationPng,
		alt: 'CRM Case Creation Screen',
	},
	'CRM-Case_Overview': {
		png: CRMCaseOverviewPng,
		alt: 'CRM Case Overview',
	},
	'CRM-Factfind_1': {
		png: CRMFactfind1Png,
		alt: 'CRM Factfind Step 1',
	},
	'CRM-Factfind_2': {
		png: CRMFactfind2Png,
		alt: 'CRM Factfind Step 2',
	},
	'CRM-Factfind_3': {
		png: CRMFactfind3Png,
		alt: 'CRM Factfind Step 3',
	},
	'CRM-Search': {
		png: CRMSearchPng,
		alt: 'CRM Search Interface',
	},
	'CRM-Transactions': {
		png: CRMTransactionsPng,
		alt: 'CRM Transactions List',
	},

	// KataFlow
	'KataFlow': {
		png: KataFlowPng,
		alt: 'KataFlow Screenshot 1',
	},
	'KataFlow-2': {
		png: KataFlow2Png,
		alt: 'KataFlow Screenshot 2',
	},
	'KataFlow-4': {
		png: KataFlow4Png,
		alt: 'KataFlow Screenshot 4',
	},

	// Charw.in
	'Charw.in-1': {
		png: Charwin1Png,
		alt: 'Charw.in Screenshot 1',
	},
	'Charw.in-2': {
		png: Charwin2Png,
		alt: 'Charw.in Screenshot 2',
	},

	// Norfolk Knights
	'NorfolkKnights': {
		png: NorfolkKnightsPng,
		webp: NorfolkKnightsWebp,
		alt: 'Norfolk Knights Logo',
	},
};

type ProjectImageProps = {
	image: ImageKey;
	className?: string;
	imgProps?: React.ImgHTMLAttributes<HTMLImageElement>;
};

const ProjectImage: React.FC<ProjectImageProps> = ({ image, className, imgProps }) => {
	const entry = IMAGE_MAP[image];
	if (!entry) {
		return <React.Fragment />;
	}

	const { webp, png, alt } = entry;

	return (
        webp ? (
            <picture className={className}>
                {webp && <source srcSet={webp} type="image/webp" />}
                <img
                    src={png}
                    alt={alt ?? 'Project screenshot'}
                    {...imgProps}
                />
            </picture>
        ) : (
            <img
                src={png}
                alt={alt ?? 'Project screenshot'}
                {...imgProps}
            />
        )
	);
};

export default ProjectImage;
