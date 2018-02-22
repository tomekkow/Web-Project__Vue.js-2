import config from '@/config';
import pageHeader from '@/components/page-header/page-header.vue';
import sectionHello from '@/components/section-hello/section-hello.vue';
import sectionHelloButtons from '@/components/section-hello-buttons/section-hello-buttons.vue';
import pageCitySection from '@/components/page-city-section/page-city-section.vue';
import pageTeam from '@/components/page-team/page-team.vue';
import personCard from '@/components/person-card/person-card.vue';
import pageWhatDo from '@/components/page-what-do/page-what-do.vue';
import iconBox from '@/components/icon-box/icon-box.vue';
import pageCaseStudies from '@/components/page-case-studies/page-case-studies.vue';
import caseCard from '@/components/case-card/case-card.vue';
import pageOurExpertise from '@/components/page-our-expertise/page-our-expertise.vue';
import pageFooter from '@/components/page-footer/page-footer.vue';
import pageHowWeWork from '@/components/page-how-we-work/page-how-we-work.vue';
import pageTwoOffices from '@/components/page-two-offices/page-two-offices.vue';
import pageTalkBusiness from '@/components/page-talk-business/page-talk-business.vue';

import michal from '@/assets/img/avatar-michal.png';
import journey from '@/assets/img/journey.svg';
import retail from '@/assets/img/retail.svg';
import design from '@/assets/img/design.svg';
import app from '@/assets/img/app.svg';
import website from '@/assets/img/website.svg';
import offline from '@/assets/img/offline.svg';
import livefootball from '@/assets/img/livefootball.svg';
import livehorse from '@/assets/img/livehorse.svg';
import update from '@/assets/img/update.svg';
import scalable from '@/assets/img/scalable.svg';
import security from '@/assets/img/security.svg';
import disaster from '@/assets/img/disaster.svg';
import bookmaker from '@/assets/img/bookmaker.png';
import football from '@/assets/img/football.png';
import sporting from '@/assets/img/sporting.png';
import odds from '@/assets/img/fixed.svg';
import betting from '@/assets/img/betting.svg';
import ball from '@/assets/img/football.svg';
import payment from '@/assets/img/payment.svg';
import web from '@/assets/img/web.svg';
import agile from '@/assets/img/agile.svg';
import promotion from '@/assets/img/promotion.svg';
import gambling from '@/assets/img/gambling.svg';
import offshore from '@/assets/img/offshore.svg';
import manage from '@/assets/img/manage.svg';
import project from '@/assets/img/project.svg';

export default {
    components: {
        pageHeader,
        sectionHello,
        sectionHelloButtons,
        pageCitySection,
        pageTeam,
        personCard,
        pageWhatDo,
        iconBox,
        pageCaseStudies,
        caseCard,
        pageOurExpertise,
        pageHowWeWork,
        pageTwoOffices,
        pageTalkBusiness,
        pageFooter,
    },
    data() {
        return {
            company: 'Neoncube',
            test: config.TEST,
            people: [{
                    name: 'a',
                    position: '.',
                    image: michal,
                },
                {
                    name: 'b',
                    position: '.',
                    image: michal,
                },
                {
                    name: 'c',
                    position: '.',
                    image: michal,
                },
                {
                    name: 'd',
                    position: '.',
                    image: michal,
                },
                {
                    name: 'e',
                    position: '.',
                    image: michal,
                },
                {
                    name: 'f',
                    position: '.',
                    image: michal,
                },
            ],
            items: [{
                    image: journey,
                    // big: true,
                    title: 'Engaging user journeys',
                    text: 'Social betting, instant gratification and feedback loops, dynamic real-time leaderboards, incentive management based on customer behaviour, syndicated betting platforms.',
                },
                {
                    image: retail,
                    title: 'Help migrate from retail to online',
                    text: 'Designing journeys that get betting shop customers online.',
                },
                {
                    image: design,
                    title: 'Design great mobile & web experience',
                    text: 'Fast, sleek, native & hybrid apps with live data updates, push notifications and more.',
                },
                {
                    image: app,
                    title: 'Mobile Apps for iOS and Android',
                    text: 'Fast, sleek, native & hybrid apps with live data updates, push notifications and more.',
                },
                {
                    image: website,
                    title: 'Websites',
                    text: 'Lightning-fast, responsive websites that look good on desktop and mobile.',
                },
                {
                    image: offline,
                    title: 'Offline sync-up',
                    text: 'Websites that work wherever you are even when not connected to the network.',
                },
                {
                    image: livefootball,
                    title: 'Live Football Scoreboards',
                    text: 'Match event updates delivered instantly and visually presented.',
                },
                {
                    image: livehorse,
                    title: 'Live Horse Racing Scoreboards',
                    text: 'Merging live data from different providers for enhanced accuracy.',
                },
                {
                    image: update,
                    title: 'Instant Updates',
                    text: 'Mobile push notification management.',
                },
                {
                    image: scalable,
                    title: 'Scalable, resilient backend platforms',
                    text: 'Handling peak surges while keeping data integrity and low infrastructure costs.',
                },
                {
                    image: security,
                    title: 'Industry-standard security',
                    text: 'Sophisticated encryption and personal data protection to ensure fair gaming and to prevent data tampering and leakage.',
                },
                {
                    image: disaster,
                    title: 'Disaster Prevention and Business Continuity Management',
                    text: 'For reliable, continuous service with 24/7/365 support from the techops team.',
                },
            ],
            cases: [{
                    img: bookmaker,
                    area: '.',
                    area2: '-',
                },
                {
                    img: football,
                    area: ',',
                },
                {
                    img: sporting,
                    area: ';',
                },
            ],
            expertise: [{
                    image: odds,
                    title: 'Fixed and Spread Odds betting Pools and Tote style betting Bet Exchanges Casino',
                },
                {
                    title: '',
                    hide: true,
                },
                {
                    image: betting,
                    title: 'Betting & Gaming Platforms',
                    text: 'OpenBet, NYX, IGT, Lottorisq',
                },
                {
                    image: ball,
                    title: 'Live Sports Data',
                    text: 'We integrate with RunningBall, SpoCoSy, Sporting',
                },
                {
                    image: payment,
                    title: 'Payment & Wallet Systems',
                    text: 'PayPal, Boku, Kalixa, Mastercard',
                },
                {
                    image: web,
                    title: 'Web & Mobile Analytics',
                    text: 'No text here',
                },
                {
                    image: agile,
                    title: 'Agile Software Development',
                    text: 'Perfect communication, flexibility and quick response to changing requirements thanks to small dynamic flexible teams that understand gambling industry and are experienced in working with large international businesses.',
                },
                {
                    image: promotion,
                    title: 'Personalized promotions',
                    text: 'Using big data to create real-time highly-targeted offers',
                },
                {
                    image: gambling,
                    wider: true,
                    title: 'UK Gambling Commission Regulatory Compliance',
                    text: 'Geofencing, age verification, deposit limit, self-exclusion',
                },
            ],
            works: [{
                    image: offshore,
                    title: 'Offshore Development Team',
                    text: 'Billing based on daily rate card and flexible allocation of expertise',
                },
                {
                    image: manage,
                    title: 'Offshore Development Team',
                    text: 'Billing based on daily rate card and flexible allocation of expertise',
                },
                {
                    image: project,
                    title: 'Project-Based',
                    text: 'Fixed-price contract',
                },
            ],
        };
    },
};