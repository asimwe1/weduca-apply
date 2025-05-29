// sampleData.js

// This file contains sample data for the Weduca Apply application.
// Each section is annotated with its purpose and suggested usage in components.

// Country mapping for formatting country codes to full names (e.g., "usa" → "United States")
// Usage: Use in components like StudyAbroad or ContactUs to display readable country names.
const countryMap = {
    usa: "United States",
    uk: "United Kingdom",
    canada: "Canada",
    australia: "Australia",
    germany: "Germany",
};

// List of countries for dropdowns or selection UI
// Usage: Use in ContactUs for the country dropdown in the form.
const countriesDropdown = [
    "Canada",
    "United States",
    "United Kingdom",
    "Australia",
    "Ireland",
    "New Zealand",
    "Germany",
    "France",
    "Other",
];

// Form fields configuration for contact or application forms
// Usage: Use in ContactUs to dynamically render form inputs.
const formFields = [
    { name: "firstName", label: "First Name", type: "text", required: true },
    { name: "lastName", label: "Last Name", type: "text", required: true },
    { name: "email", label: "Email", type: "email", required: true },
    { name: "phone", label: "Phone Number", type: "tel", required: true },
    { name: "title", label: "Your Title/Role", type: "text", required: true },
];

// Fields of study with icons
// Usage: Use in Fields component to display popular fields of study.
const fields = [
    { field: "Engineering", icon: "https://www.applyboard.com/wp-content/uploads/2023/01/School-Supplies.svg" },
    { field: "Sciences", icon: "https://www.applyboard.com/wp-content/uploads/2023/01/Atom.webp" },
    { field: "Arts", icon: "https://www.applyboard.com/wp-content/uploads/2023/01/Art.svg" },
    { field: "Business", icon: "https://www.applyboard.com/wp-content/uploads/2023/01/Application-Documents02-1.svg" },
    { field: "Law", icon: "https://www.applyboard.com/wp-content/uploads/2023/01/Scale-1.svg" },
    { field: "English Language", icon: "https://www.applyboard.com/wp-content/uploads/2023/01/Video-Call.svg" },
    { field: "Medicine", icon: "https://www.applyboard.com/wp-content/uploads/2023/01/Medical-Bag.svg" },
    { field: "Economics", icon: "https://www.applyboard.com/wp-content/uploads/2023/01/Financial-Analysis.svg" },
];

// Application process steps
// Usage: Use in StudyAbroad or a dedicated Process component to show the application journey.
const applicationSteps = [
    {
        icon: "https://res.cloudinary.com/dhrhfjgqa/image/upload/v1741418655/stuudents_check_eligibility_108_jriev5.webp",
        stepNumber: 1,
        title: "Eligibility Check",
        description: "Guided by their advisor, the student gets matched to best-fit study opportunities.",
    },
    {
        icon: "https://res.cloudinary.com/dhrhfjgqa/image/upload/v1741323064/School01_uz8eta.svg",
        stepNumber: 2,
        title: "Student Applies",
        description: "The student selects an institution and program, pays their fees, and submits the proper documentation.",
    },
    {
        icon: "https://res.cloudinary.com/dhrhfjgqa/image/upload/v1741323181/students_get_accepted_dximvk.webp",
        stepNumber: 3,
        title: "Application Pre-Screening",
        description: "Weduca Apply pre-screens every submission, flagging any missing requirements.",
    },
    {
        icon: "https://res.cloudinary.com/dhrhfjgqa/image/upload/v1741323265/Group-6274_mg3agb.svg",
        stepNumber: 4,
        title: "Application Review",
        description: "The institution reviews the application and issues an acceptance letter if qualified.",
    },
    {
        icon: "https://res.cloudinary.com/dhrhfjgqa/image/upload/v1741323251/4_vnscmm.svg",
        stepNumber: 5,
        title: "Visa Application",
        description: "The student applies for their visa or study permit and confirms with us once approved.",
    },
    {
        icon: "https://res.cloudinary.com/dhrhfjgqa/image/upload/v1741323235/students_start_journey_108_tjdjv5.webp",
        stepNumber: 6,
        title: "The Journey Begins",
        description: "The student sets off, ready to start their adventure!",
    },
];

// Tabs for different user types (students, partners, institutions)
// Usage: Use in a landing page or homepage to highlight different user experiences.
const tabs = [
    {
        tab: "INTERNATIONAL STUDENTS",
        title: "Students",
        message: "We believe in your dreams and work hard to make them a reality. Get matched with and apply to programs and institutions that align with your background, skills, and interests.",
        image: "https://res.cloudinary.com/dhrhfjgqa/image/upload/v1741319045/slide1_bk8hf0.png"
    },
    {
        tab: "RECRUITMENT PARTNERS",
        title: "Recruitment Partners",
        message: "Weduca Apply is more than a platform. We're your trusted partner, here to support you every step of the way. We help you find the right programs and institutions for you, and fulfill your international education dream.",
        image: "https://res.cloudinary.com/dhrhfjgqa/image/upload/v1741319046/slide2_uxm8ap.png"
    },
    {
        tab: "PARTNER INSTITUTIONS",
        title: "Partner Institutions",
        message: "Increase your global presence and the number of qualified student applicants from a single, easy-to-use platform trusted by more than 1,500 institutions worldwide.",
        image: "https://res.cloudinary.com/dhrhfjgqa/image/upload/v1741319047/slide3_phhlh6.png"
    }
];

// Impact statistics for showcasing achievements
// Usage: Use in StudyAbroad or AboutUs to display key metrics.
const impactData = [
    { number: "1M+", description: "Students Helped", icon: "https://res.cloudinary.com/dhrhfjgqa/image/upload/v1741323045/Graduate01_yfb9us.svg" },
    { number: "150+", description: "Student Source Countries", icon: "https://res.cloudinary.com/dhrhfjgqa/image/upload/v1741323056/Globe-A-1-1_esgmii.svg" },
    { number: "1,500+", description: "Global Partner Institutions", icon: "https://res.cloudinary.com/dhrhfjgqa/image/upload/v1741323064/School01_uz8eta.svg" },
    { number: "6,500+", description: "Vetted Recruitment Partners", icon: "https://res.cloudinary.com/dhrhfjgqa/image/upload/v1741323125/Hand-Shake_i5w9vd.svg" },
    { number: "95%", description: "Offer of Admission Rate", icon: "https://res.cloudinary.com/dhrhfjgqa/image/upload/v1741323132/Acceptance-Letter04_xkgedx.svg" },
];

// English proficiency tests with icons and descriptions
// Usage: Use in LanguageProf component to list accepted tests.


const ieltsSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path
                    d="M14.5636 4.78379C15.459 4.29538 16.5413 4.29538 17.4367 4.78379L29.0567 11.122C29.7517 11.501 29.7515 12.4991 29.0564 12.8779L25.3335 14.9069V21.7199C25.3335 22.4516 24.9339 23.125 24.2916 23.4755L17.4372 27.216C16.5415 27.7048 15.4588 27.7048 14.5631 27.216L7.70877 23.4755C7.06645 23.125 6.66683 22.4516 6.66683 21.7199V14.9069L4.00016 13.4536V22.6669H1.3335V13.1875C1.3335 12.4556 1.73327 11.7822 2.37579 11.4317L14.5636 4.78379ZM6.90683 12.0002L16.0002 16.9602L25.0935 12.0002L16.0002 7.04022L6.90683 12.0002ZM9.3335 21.3202L16.0002 24.9602L22.6668 21.3202V16.3602L17.4378 19.2153C16.5418 19.7045 15.4585 19.7045 14.5625 19.2153L9.3335 16.3602V21.3202Z"
                    fill="#616D92"
                />
            </svg>`;

const toelfSvg = ` <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path
                    d="M14.5636 4.78379C15.459 4.29538 16.5413 4.29538 17.4367 4.78379L29.0567 11.122C29.7517 11.501 29.7515 12.4991 29.0564 12.8779L25.3335 14.9069V21.7199C25.3335 22.4516 24.9339 23.125 24.2916 23.4755L17.4372 27.216C16.5415 27.7048 15.4588 27.7048 14.5631 27.216L7.70877 23.4755C7.06645 23.125 6.66683 22.4516 6.66683 21.7199V14.9069L4.00016 13.4536V22.6669H1.3335V13.1875C1.3335 12.4556 1.73327 11.7822 2.37579 11.4317L14.5636 4.78379ZM6.90683 12.0002L16.0002 16.9602L25.0935 12.0002L16.0002 7.04022L6.90683 12.0002ZM9.3335 21.3202L16.0002 24.9602L22.6668 21.3202V16.3602L17.4378 19.2153C16.5418 19.7045 15.4585 19.7045 14.5625 19.2153L9.3335 16.3602V21.3202Z"
                    fill="#616D92"
                />
            </svg>`;

const pteSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path
                    d="M14.5636 4.78379C15.459 4.29538 16.5413 4.29538 17.4367 4.78379L29.0567 11.122C29.7517 11.501 29.7515 12.4991 29.0564 12.8779L25.3335 14.9069V21.7199C25.3335 22.4516 24.9339 23.125 24.2916 23.4755L17.4372 27.216C16.5415 27.7048 15.4588 27.7048 14.5631 27.216L7.70877 23.4755C7.06645 23.125 6.66683 22.4516 6.66683 21.7199V14.9069L4.00016 13.4536V22.6669H1.3335V13.1875C1.3335 12.4556 1.73327 11.7822 2.37579 11.4317L14.5636 4.78379ZM6.90683 12.0002L16.0002 16.9602L25.0935 12.0002L16.0002 7.04022L6.90683 12.0002ZM9.3335 21.3202L16.0002 24.9602L22.6668 21.3202V16.3602L17.4378 19.2153C16.5418 19.7045 15.4585 19.7045 14.5625 19.2153L9.3335 16.3602V21.3202Z"
                    fill="#616D92"
                />
            </svg>`;

const c1Svg = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path
                    d="M14.5636 4.78379C15.459 4.29538 16.5413 4.29538 17.4367 4.78379L29.0567 11.122C29.7517 11.501 29.7515 12.4991 29.0564 12.8779L25.3335 14.9069V21.7199C25.3335 22.4516 24.9339 23.125 24.2916 23.4755L17.4372 27.216C16.5415 27.7048 15.4588 27.7048 14.5631 27.216L7.70877 23.4755C7.06645 23.125 6.66683 22.4516 6.66683 21.7199V14.9069L4.00016 13.4536V22.6669H1.3335V13.1875C1.3335 12.4556 1.73327 11.7822 2.37579 11.4317L14.5636 4.78379ZM6.90683 12.0002L16.0002 16.9602L25.0935 12.0002L16.0002 7.04022L6.90683 12.0002ZM9.3335 21.3202L16.0002 24.9602L22.6668 21.3202V16.3602L17.4378 19.2153C16.5418 19.7045 15.4585 19.7045 14.5625 19.2153L9.3335 16.3602V21.3202Z"
                    fill="#616D92"
                />
            </svg>`;

const duolingoSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path
                    d="M14.5636 4.78379C15.459 4.29538 16.5413 4.29538 17.4367 4.78379L29.0567 11.122C29.7517 11.501 29.7515 12.4991 29.0564 12.8779L25.3335 14.9069V21.7199C25.3335 22.4516 24.9339 23.125 24.2916 23.4755L17.4372 27.216C16.5415 27.7048 15.4588 27.7048 14.5631 27.216L7.70877 23.4755C7.06645 23.125 6.66683 22.4516 6.66683 21.7199V14.9069L4.00016 13.4536V22.6669H1.3335V13.1875C1.3335 12.4556 1.73327 11.7822 2.37579 11.4317L14.5636 4.78379ZM6.90683 12.0002L16.0002 16.9602L25.0935 12.0002L16.0002 7.04022L6.90683 12.0002ZM9.3335 21.3202L16.0002 24.9602L22.6668 21.3202V16.3602L17.4378 19.2153C16.5418 19.7045 15.4585 19.7045 14.5625 19.2153L9.3335 16.3602V21.3202Z"
                    fill="#616D92"
                />
            </svg>`;


const englishTests = [
    {
        name: 'IELTS',
        icon: ieltsSvg,
        desc: 'The International English Language Testing System (IELTS) is the most popular English language test globally.',
    },
    {
        name: 'TOEFL',
        icon: toelfSvg,
        desc: 'The Test of English as a Foreign Language (TOEFL) has been trusted by colleges and universities worldwide for over fifty years.',
    },
    {
        name: 'PTE',
        icon: pteSvg,
        desc: 'The Pearson Test of English (PTE Academic) measures your English skills in a concise two-hour test.',
    },
    {
        name: 'C1',
        icon: c1Svg,
        desc: 'The Cambridge C1 Advanced exam provides in-depth proof of language proficiency.',
    },
    {
        name: 'Duolingo',
        icon: duolingoSvg,
        desc: 'The Duolingo English Test is an accessible online option, increasingly accepted by universities worldwide.',
    },];

// Fixed value for RangeSlider
// Usage: Use in RangeSlider component to set a static slider position.
const fixedValue = 30000;

// Simplified stats for quick metrics display
// Usage: Use in StudyAbroad or AboutUs for a stats section.
const stats = [
    { image: "https://res.cloudinary.com/dhrhfjgqa/image/upload/v1741320616/School01_l2qavf.svg", number: "1,500+", label: "Partner Institutions" },
    { image: "https://res.cloudinary.com/dhrhfjgqa/image/upload/v1741320639/Diploma-1_g7kmyd.svg", number: "140,000+", label: "Programs" },
    { image: "https://res.cloudinary.com/dhrhfjgqa/image/upload/v1741320653/Personal-Development-1_p7t8he.svg", number: "6,500+", label: "Recruitment Partners" },
    { image: "https://res.cloudinary.com/dhrhfjgqa/image/upload/v1741320677/Communication-2_d4iqxs.svg", number: "1M+", label: "Students Helped" },
    { image: "https://res.cloudinary.com/dhrhfjgqa/image/upload/v1741320684/Globe-A-1_sanv2s.svg", number: "150+", label: "Student Nationalities" },
];

// Application steps with SVGs (alternative version)
// Usage: Use in a Process or Application component for a visual step guide.


const paySvg = `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                <path d="M26.9995 9.36008V7H24.9995V9.2085C23.9924 9.36116 23.1198 10.0537 22.7641 11.0521C22.1873 12.671 23.1792 14.4252 24.8637 14.7655L26.7537 15.1475C27.1773 15.233 27.4649 15.6285 27.4158 16.0578C27.3634 16.516 26.9484 16.8443 26.4905 16.7898L24.1185 16.5074C23.5701 16.4421 23.0726 16.8338 23.0073 17.3822C22.942 17.9306 23.3337 18.4281 23.8821 18.4934L24.9995 18.6264V21H26.9995V18.7664C28.2399 18.5855 29.2537 17.5901 29.4029 16.2849C29.5698 14.824 28.5911 13.4783 27.1498 13.1871L25.2598 12.8052C24.769 12.706 24.4801 12.1949 24.6481 11.7232C24.7782 11.3581 25.1456 11.1334 25.5299 11.184L27.8698 11.4918C28.4174 11.5639 28.9197 11.1784 28.9918 10.6308C29.0638 10.0833 28.6783 9.58097 28.1308 9.50892L26.9995 9.36008Z" fill="white"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M25.9995 2C19.3721 2 13.9995 7.37258 13.9995 14C13.9995 20.6274 19.3721 26 25.9995 26C32.6269 26 37.9995 20.6274 37.9995 14C37.9995 7.37258 32.6269 2 25.9995 2ZM15.9995 14C15.9995 8.47715 20.4767 4 25.9995 4C31.5224 4 35.9995 8.47715 35.9995 14C35.9995 19.5228 31.5224 24 25.9995 24C20.4767 24 15.9995 19.5228 15.9995 14Z" fill="white"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M4.99951 30C4.99951 28.8954 5.89494 28 6.99951 28H11.9995C13.1041 28 13.9995 28.8954 13.9995 30V30.0719L15.9961 29.3459C17.561 28.7768 19.2347 28.5705 20.8909 28.7424L33.0545 30.0049C33.5641 30.0578 33.9513 30.4872 33.9513 30.9995V32.049C33.9513 34.0173 32.5193 35.693 30.5751 36L26.9052 36.5795L29.9387 37.143C30.1741 37.1867 30.4154 37.1878 30.6512 37.1462L41.826 35.176C42.1171 35.1247 42.416 35.2048 42.6425 35.3948C42.8689 35.5848 42.9997 35.8652 42.9997 36.1608V40.1027C42.9997 41.8816 41.825 43.4467 40.117 43.9435L33.8128 45.7775C28.7396 47.2533 23.313 46.9375 18.4453 44.8832L13.9995 43.0069C13.9958 44.1083 13.1018 45 11.9995 45H6.99951C5.89494 45 4.99951 44.1046 4.99951 43V30ZM13.9995 40.8361V32.2L16.6796 31.2255C17.96 30.7599 19.3293 30.591 20.6844 30.7317L31.9513 31.9011V32.049C31.9513 33.0331 31.2353 33.871 30.2632 34.0245L26.5933 34.604C24.3732 34.9545 24.3301 38.1353 26.5399 38.5458L29.5734 39.1093C30.0442 39.1968 30.5269 39.199 30.9985 39.1159L40.9997 37.3526V40.1027C40.9997 40.9922 40.4123 41.7747 39.5583 42.0231L33.2541 43.8571C28.6221 45.2046 23.6674 44.9162 19.223 43.0406L13.9995 40.8361ZM11.9995 30H6.99951V43H11.9995V30Z" fill="white"></path>
            </svg>`;

const submitSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                <path d="M14 19H8V21H14V19Z" fill="white"></path>
                <path d="M8 23H14V25H8V23Z" fill="white"></path>
                <path d="M14 27H8V29H14V27Z" fill="white"></path>
                <path fillRule="evenodd" clipRule="evenodd" d="M4.5 7C3.67157 7 3 7.67157 3 8.5V39.5C3 40.2766 3.59025 40.9154 4.34663 40.9923C4.39706 40.9974 4.44822 41 4.5 41H28V39H19V16H43V25H45V8.5C45 7.67157 44.3284 7 43.5 7H4.5ZM5 14V9H43V14H5ZM17 16V39H5V16H17Z" fill="white"></path>
                <path fillRule="evenodd" clipRule="evenodd" d="M31.4001 21.8761C31.7517 21.697 32.1757 21.7414 32.4826 21.9894L45.5298 32.5336C45.8343 32.7798 45.9672 33.181 45.8697 33.5603C45.7723 33.9396 45.4624 34.227 45.0769 34.2958L39.3696 35.3145L42.4715 41.4024L40.6895 42.3103L37.5876 36.2225L33.4088 40.2411C33.1265 40.5125 32.7118 40.5942 32.3477 40.4501C31.9836 40.306 31.7371 39.9627 31.7169 39.5716L30.8554 22.8185C30.8351 22.4244 31.0485 22.0553 31.4001 21.8761ZM33.6018 37.2807L36.9545 34.0566C37.2397 33.7823 37.5999 33.5988 37.9894 33.5293L42.5685 32.7121L32.6243 24.7617L33.6018 37.2807Z" fill="white"></path>
            </svg>`;

const prepSvg = ` <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M13 9.30298H10.2053C9.55282 9.30298 9 9.84329 9 10.5395V42.1876C9 42.8838 9.55282 43.4241 10.2053 43.4241H24.8856V45.4241H10.2053C8.42187 45.4241 7 43.9618 7 42.1876V10.5395C7 8.76528 8.42187 7.30298 10.2053 7.30298H16.1805C16.9592 3.69947 20.1638 1 24 1C27.8362 1 31.0408 3.69947 31.8195 7.30298H37.6128C39.3963 7.30298 40.8181 8.76528 40.8181 10.5395V31.2779H38.8181V10.5395C38.8181 9.84329 38.2653 9.30298 37.6128 9.30298H35V13.2726C35 14.9147 33.681 16.2527 32.0355 16.2687C28.357 16.3045 20.3981 16.3676 15.9014 16.2957C14.2664 16.2695 13 14.9303 13 13.325V9.30298ZM18.0273 8.42334C18.3168 5.38067 20.881 3 24 3C27.119 3 29.6832 5.38067 29.9727 8.42334L30.0589 9.32861H30.9682H33V13.2726C33 13.8212 32.5612 14.2635 32.0161 14.2688C28.3314 14.3046 20.3995 14.3674 15.9334 14.2959C15.4201 14.2877 15 13.8682 15 13.325V9.32861H17.0318H17.9411L18.0273 8.42334ZM14.502 23.0346H13.502V25.0346H14.502H31.788H32.788V23.0346H31.788H14.502ZM13.502 29.5175H14.502H26.788H27.788V31.5175H26.788H14.502H13.502V29.5175ZM24 10C25.1046 10 26 9.10457 26 8C26 6.89543 25.1046 6 24 6C22.8954 6 22 6.89543 22 8C22 9.10457 22.8954 10 24 10ZM29.254 37.7363L28.5469 37.0291L27.1327 38.4434L27.8398 39.1505L32.8983 44.209C33.2888 44.5995 33.922 44.5995 34.3125 44.209L43.707 34.8146L44.4141 34.1075L42.9999 32.6933L42.2928 33.4004L33.6054 42.0877L29.254 37.7363Z" fill="white">
                    </path>
            </svg>`;

const acceptSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M21.6403 10.2077C16.7537 11.0778 13.4928 15.7411 14.355 20.6311C15.2182 25.5261 19.8861 28.7946 24.7811 27.9315C29.6762 27.0684 32.9447 22.4005 32.0816 17.5054C31.2193 12.6155 26.5603 9.34876 21.6708 10.2023L21.6554 10.205L21.6403 10.2077ZM19.2417 13.3055C17.322 14.6319 16.1424 16.8723 16.2208 19.2868L19.1272 18.7743C18.8795 16.8787 18.899 15.1034 19.1638 13.6825C19.1875 13.5552 19.2134 13.4294 19.2417 13.3055ZM21.4525 25.8436C19.1951 25.2538 17.3203 23.552 16.5681 21.2564L19.4745 20.7439C19.8901 22.6098 20.5155 24.2713 21.2503 25.5159C21.3162 25.6274 21.3836 25.7368 21.4525 25.8436ZM22.9726 24.4991C22.3758 23.4882 21.8254 22.0636 21.4463 20.3963L25.3375 19.7101C25.5515 21.4066 25.5216 22.9335 25.3065 24.0876C25.1777 24.7787 24.9925 25.2817 24.7961 25.6014C24.599 25.9223 24.4589 25.9574 24.4337 25.9618C24.4086 25.9663 24.265 25.9812 23.9699 25.747C23.6761 25.5138 23.33 25.1045 22.9726 24.4991ZM27.2727 24.454C27.5375 23.0331 27.5569 21.258 27.3093 19.3624L30.2158 18.85C30.2941 21.2645 29.1144 23.5049 27.1947 24.8312C27.223 24.7072 27.2489 24.5814 27.2727 24.454ZM26.962 17.3928L29.8685 16.8803C29.1164 14.5846 27.2415 12.8827 24.9839 12.2929C25.0529 12.3997 25.1203 12.509 25.1861 12.6206C25.9209 13.8652 26.5464 15.5268 26.962 17.3928ZM21.099 18.4266L24.9902 17.7405C24.6111 16.0731 24.0607 14.6483 23.4639 13.6374C23.1065 13.032 22.7603 12.6227 22.4665 12.3894C22.181 12.1628 22.0372 12.1695 22.0055 12.1742L21.9999 12.1752C21.9685 12.1816 21.8311 12.2245 21.6403 12.5351C21.444 12.8548 21.2587 13.3578 21.1299 14.0489C20.9148 15.203 20.885 16.7301 21.099 18.4266Z" fill="white"></path><path d="M20.378 31.7541C19.8341 31.85 19.471 32.3687 19.5669 32.9126C19.6628 33.4565 20.1814 33.8197 20.7253 33.7238L30.5734 31.9873C31.1173 31.8914 31.4805 31.3727 31.3846 30.8288C31.2887 30.2849 30.77 29.9218 30.2261 30.0177L20.378 31.7541Z" fill="white"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M6.01509 7.88563C5.82329 6.79783 6.54963 5.76052 7.63741 5.56872L31.2728 1.40116C33.4484 1.01755 35.523 2.47022 35.9066 4.6458L40.9059 32.9979C41.2895 35.1735 39.8368 37.2481 37.6612 37.6317L15.1143 41.6073C14.5132 41.7133 14.1118 42.2866 14.2178 42.8877C14.3238 43.4889 14.897 43.8903 15.4982 43.7843L41.9843 39.1141L42.3316 41.0837L15.8455 45.7539C14.1565 46.0517 12.546 44.924 12.2482 43.235L6.01509 7.88563ZM13.7137 40.029C14.0291 39.8406 14.3836 39.7053 14.767 39.6377L37.3139 35.6621C38.4017 35.4703 39.1281 34.433 38.9362 33.3452L33.937 4.99309C33.7452 3.90531 32.7079 3.17897 31.6201 3.37077L7.98471 7.53833L13.7137 40.029Z" fill="white">
                </path>
            </svg>`;


const stepsWithSVGs = [
    {
        id: 1,
        title: "Pay Application Fee",
        icon: paySvg,
    },
    {
        id: 2,
        title: "Submission In Progress",
        icon: submitSvg,
    },
    {
        id: 3,
        title: "Prepare Application",
        icon: prepSvg,
    },
    {
        id: 4,
        title: "Accept Offer",
        icon: acceptSvg,
    },
];

// Video sources for promotional content
// Usage: Use in StudyAbroad or a Video component for student/partner videos.
const videoSources = {
    students: "https://res.cloudinary.com/dhrhfjgqa/video/upload/v1743260295/Instagram_osaho5.mp4",
    partners: "https://res.cloudinary.com/dhrhfjgqa/video/upload/v1741321620/ApplyBoard_Product_Feature_-_Student_-_Landing_Page_kv8tha.mp4",
};

// Study destinations with images
// Usage: Use in StudyAbroad for a destinations carousel or grid.
const studyDestinations = [
    { title: "Study In The UK", country: "UK", image: "https://res.cloudinary.com/dhrhfjgqa/image/upload/v1741319047/uk_avwejq.png", alt: "London Tower Bridge at sunset" },
    { title: "Study In The US", country: "US", image: "https://res.cloudinary.com/dhrhfjgqa/image/upload/v1741319047/us_v5rjwb.png", alt: "Statue of Liberty and New York City skyline" },
    { title: "Study In Australia", country: "Australia", image: "https://res.cloudinary.com/dhrhfjgqa/image/upload/v1741319045/australia_jcrv7c.png", alt: "Sydney Opera House and Harbour Bridge" },
    { title: "Study In Ireland", country: "Ireland", image: "https://res.cloudinary.com/dhrhfjgqa/image/upload/v1741319045/ireland_ky1dvj.png", alt: "Cliffs of Moher in Ireland" },
];

// Countries with flags and school counts
// Usage: Use in StudyAbroad for a detailed destinations list.
const countriesWithDetails = [
    {
        name: "United States",
        image: "https://res.cloudinary.com/dhrhfjgqa/image/upload/v1743210393/united-states-of-america-flag-square-icon-256_ujscr4.png",
        schools: 1200,
    },
    {
        name: "Canada",
        image: "https://res.cloudinary.com/dhrhfjgqa/image/upload/v1743208536/ca-square-01-XL_ohsii4.png",
        schools: 800,
    },
    {
        name: "Australia",
        image: "https://res.cloudinary.com/dhrhfjgqa/image/upload/v1743225489/australia-flag-large_b88mzl.jpg",
        schools: 700,
    },
    {
        name: "Germany",
        image: "https://res.cloudinary.com/dhrhfjgqa/image/upload/v1743228150/germany-flag-large_jxs0fd.png",
        schools: 600,
    },
    {
        name: "France",
        image: "https://res.cloudinary.com/dhrhfjgqa/image/upload/v1743228273/france-flag-large_erqu5i.png",
        schools: 500,
    },
    {
        name: "Spain",
        image: "https://res.cloudinary.com/dhrhfjgqa/image/upload/v1743228411/spain-flag-large_tsis2u.png",
        schools: 400,
    },
    {
        name: "Italy",
        image: "https://res.cloudinary.com/dhrhfjgqa/image/upload/v1743228549/italy-flag-large_prurrs.png",
        schools: 300,
    },
    {
        name: "Netherlands",
        image: "https://res.cloudinary.com/dhrhfjgqa/image/upload/v1743228623/netherlands-flag-large_xjraf2.png",
        schools: 200,
    },
    {
        name: "Sweden",
        image: "https://res.cloudinary.com/dhrhfjgqa/image/upload/v1743228722/sweden-flag-large_kpvqqs.png",
        schools: 100,
    },
    {
        name: "Switzerland",
        image: "https://res.cloudinary.com/dhrhfjgqa/image/upload/v1743228842/switzerland-flag-large_k9w5oj.png",
        schools: 50,
    },

];

// Countries with round flags
// Usage: Use in StudyAbroad for a compact destinations display.
const countriesWithFlags = [
    {
        name: "CANADA",
        flag: "https://res.cloudinary.com/dhrhfjgqa/image/upload/v1743229025/canada-flag-round-small_gs32yw.png"
    },
    {
        name: "UNITED STATES",
        flag: "https://res.cloudinary.com/dhrhfjgqa/image/upload/v1743229162/united-states-of-america-flag-round-small_vkvh02.png"
    },
    {
        name: "UNITED KINGDOM",
        flag: "https://res.cloudinary.com/dhrhfjgqa/image/upload/v1743229395/united-kingdom-flag-round-small_vepybx.png"
    },
    {
        name: "AUSTRALIA",
        flag: "https://res.cloudinary.com/dhrhfjgqa/image/upload/v1743229383/australia-flag-round-small_zyulfu.png"
    },
    {
        name: "GERMANY",
        flag: "https://res.cloudinary.com/dhrhfjgqa/image/upload/v1743229275/germany-flag-round-small_zumvuu.png"
    }
];

// Partner institutions with logos
// Usage: Use in StudyAbroad or AboutUs to showcase partners.
const institutions = [
    {
        name: "Conestoga College",
        logo: "https://res.cloudinary.com/dhrhfjgqa/image/upload/v1741323318/Conestoga_zmti2l.webp"
    },
    {
        name: "George Brown College",
        logo: "https://res.cloudinary.com/dhrhfjgqa/image/upload/v1741323328/George_Brown_a5reds.webp"
    },
    {
        name: "BCIT",
        logo: "https://res.cloudinary.com/dhrhfjgqa/image/upload/v1741323338/BC_Institute_of_Technology_hyrnq6.webp"
    },
    {
        name: "University of Waterloo",
        logo: "https://res.cloudinary.com/dhrhfjgqa/image/upload/v1741323363/UWaterloo_hgaak4.webp"
    },
    {
        name: "UNBC",
        logo: "https://res.cloudinary.com/dhrhfjgqa/image/upload/v1741323370/University_of_Northern_BC_fh7p0m.webp"
    },
    {
        name: "Memorial University",
        logo: "https://res.cloudinary.com/dhrhfjgqa/image/upload/v1741323402/Memorial_University_of_Newfoundland_gofl1e.webp"
    },
    {
        name: "University of Manitoba",
        logo: "https://res.cloudinary.com/dhrhfjgqa/image/upload/v1741323411/University_of_Manitoba_sqt4nf.webp"
    },
    {
        name: "SAIT",
        logo: "https://res.cloudinary.com/dhrhfjgqa/image/upload/v1741323418/Southern_Alberta_Institute_of_Technology_buqlb6.webp"
    }
];

// Features of the platform
// Usage: Use in StudyAbroad or a Features component to highlight benefits.
const features = [
    {
        image: "https://res.cloudinary.com/dhrhfjgqa/image/upload/v1741322913/Hands-Globe-1_pdanyw.png",
        name: "REACH",
        title: "Quality Applications",
        description: "Improve your enrolment funnel and boost conversion by 10%.",
    },
    {
        image: "https://res.cloudinary.com/dhrhfjgqa/image/upload/v1741323125/Hand-Shake_i5w9vd.svg",
        name: "CONVERSION",
        title: "Unmatched Diversity",
        description: "Reach high-quality student talent from over 150 countries.",
    },
    {
        image: "https://res.cloudinary.com/dhrhfjgqa/image/upload/v1741322939/Email-02-1_gwzqy1.webp",
        name: "SPEED",
        title: "Automate Repetitive Tasks",
        description: "Leverage proven technology to reduce manual processing by 40%.",
    },
];

// Testimonials from students
// Usage: Use in StudyAbroad or AboutUs for a testimonials section.
const testimonials = [
    { quote: "Weduca Apply made my study abroad dream a reality!", author: "Student 1" },
    { quote: "The support was incredible from start to finish.", author: "Student 2" },
    { quote: "Applying was so easy with Weduca Apply’s tools.", author: "Student 3" },
];


// Team members for About Us page
// Usage: Use in AboutUs to display the team.
const teamMembers = [
    { name: 'John Doe', role: 'Founder & CEO', icon: 'https://www.applyboard.com/wp-content/uploads/2023/01/Application-Documents02-1.svg' },
    { name: 'Jane Smith', role: 'Head of Education', icon: 'https://www.applyboard.com/wp-content/uploads/2023/01/Book02.webp' },
    { name: 'Emily Green', role: 'Marketing Director', icon: 'https://www.applyboard.com/wp-content/uploads/2023/01/Video-Call.svg' },
    { name: 'Michael Brown', role: 'Tech Lead', icon: 'https://www.applyboard.com/wp-content/uploads/2023/01/School-Supplies.svg' },
];

// Simplified study abroad destinations
// Usage: Use in StudyAbroad for a basic destinations grid.
const simpleDestinations = [
    { name: 'United Kingdom', flag: 'https://www.applyboard.com/wp-content/uploads/2023/09/UK.png' },
    { name: 'Canada', flag: 'https://www.applyboard.com/wp-content/uploads/2023/09/Canada.png' },
    { name: 'United States', flag: 'https://www.applyboard.com/wp-content/uploads/2023/09/US.png' },
    { name: 'Australia', flag: 'https://www.applyboard.com/wp-content/uploads/2023/09/Australia.png' },
];

// Simplified benefits
// Usage: Use in StudyAbroad for a benefits section.
const simpleBenefits = [
    { title: 'Global Opportunities', desc: 'Access top universities and colleges worldwide.', icon: 'https://www.applyboard.com/wp-content/uploads/2023/01/School-Supplies.svg' },
    { title: 'Expert Guidance', desc: 'Personalized support from application to visa.', icon: 'https://www.applyboard.com/wp-content/uploads/2023/01/Book02.webp' },
    { title: 'Simplified Process', desc: 'Streamlined tools to make studying abroad easy.', icon: 'https://www.applyboard.com/wp-content/uploads/2023/01/Application-Documents02-1.svg' },
];

// Simplified steps
// Usage: Use in StudyAbroad for a basic process overview.
const simpleSteps = [
    { step: 'Explore', desc: 'Browse programs and destinations.', icon: 'https://www.applyboard.com/wp-content/uploads/2023/01/Video-Call.svg' },
    { step: 'Apply', desc: 'Submit applications with our help.', icon: 'https://www.applyboard.com/wp-content/uploads/2023/01/Scale-1.svg' },
    { step: 'Succeed', desc: 'Get accepted and start your journey.', icon: 'https://www.applyboard.com/wp-content/uploads/2023/01/Medical-Bag.svg' },
];

const sampleStudents = [
    {
        firstName: "Emma",
        lastName: "Wilson",
        email: "emma.wilson@example.com",
        phone: "+1 (416) 555-1234",
        dateOfBirth: new Date("1998-03-15"),
        nationality: "Canada",
        gender: "female",
        status: "active",
        education: {
            level: "Bachelor's Degree",
            field: "Computer Science",
            school: "University of Toronto",
            graduationYear: 2021,
        },
        notes: "Interested in graduate programs in AI.",
        joinDate: new Date("2023-06-12"),
    },
    {
        firstName: "Michael",
        lastName: "Chen",
        email: "michael.chen@example.com",
        phone: "+86 138 5555 6789",
        dateOfBirth: new Date("1997-11-22"),
        nationality: "China",
        gender: "male",
        status: "active",
        education: {
            level: "Master's Degree",
            field: "Business Administration",
            school: "Peking University",
            graduationYear: 2020,
        },
        notes: "Applying for MBA programs in North America.",
        joinDate: new Date("2023-05-24"),
    },
    {
        firstName: "Sophia",
        lastName: "Rodriguez",
        email: "sophia.rodriguez@example.com",
        phone: "+52 55 1234 5678",
        dateOfBirth: new Date("2000-07-10"),
        nationality: "Mexico",
        gender: "female",
        status: "pending",
        education: {
            level: "High School",
            field: "General Studies",
            school: "Preparatoria Nacional",
            graduationYear: 2018,
        },
        notes: "Awaiting English test results.",
        joinDate: new Date("2023-07-15"),
    },
    {
        firstName: "James",
        lastName: "Johnson",
        email: "james.johnson@example.com",
        phone: "+1 (202) 555-9876",
        dateOfBirth: new Date("1996-09-05"),
        nationality: "United States",
        gender: "male",
        status: "active",
        education: {
            level: "Bachelor's Degree",
            field: "Mechanical Engineering",
            school: "MIT",
            graduationYear: 2019,
        },
        notes: "Seeking graduate opportunities in Europe.",
        joinDate: new Date("2023-04-30"),
    },
    {
        firstName: "Olivia",
        lastName: "Thompson",
        email: "olivia.thompson@example.com",
        phone: "+44 20 7946 0958",
        dateOfBirth: new Date("1999-12-01"),
        nationality: "United Kingdom",
        gender: "female",
        status: "inactive",
        education: {
            level: "Diploma",
            field: "Psychology",
            school: "London College",
            graduationYear: 2022,
        },
        notes: "Currently not pursuing applications.",
        joinDate: new Date("2023-03-18"),
    },
    {
        firstName: "Mohammed",
        lastName: "Al-Farsi",
        email: "mohammed.alfarsi@example.com",
        phone: "+971 50 123 4567",
        dateOfBirth: new Date("1995-02-20"),
        nationality: "UAE",
        gender: "male",
        status: "active",
        education: {
            level: "Bachelor's Degree",
            field: "Civil Engineering",
            school: "American University of Dubai",
            graduationYear: 2017,
        },
        notes: "Interested in sustainable engineering programs.",
        joinDate: new Date("2023-06-05"),
    },
    {
        firstName: "Aisha",
        lastName: "Patel",
        email: "aisha.patel@example.com",
        phone: "+91 98765 43210",
        dateOfBirth: new Date("2001-04-12"),
        nationality: "India",
        gender: "female",
        status: "pending",
        education: {
            level: "High School",
            field: "Science Stream",
            school: "St. Xavier's School",
            graduationYear: 2019,
        },
        notes: "Preparing for undergraduate applications.",
        joinDate: new Date("2023-07-22"),
    },
    {
        firstName: "Lucas",
        lastName: "Silva",
        email: "lucas.silva@example.com",
        phone: "+55 11 91234 5678",
        dateOfBirth: new Date("1998-08-25"),
        nationality: "Brazil",
        gender: "male",
        status: "active",
        education: {
            level: "Bachelor's Degree",
            field: "Environmental Science",
            school: "University of São Paulo",
            graduationYear: 2020,
        },
        notes: "Exploring PhD opportunities abroad.",
        joinDate: new Date("2023-05-14"),
    },
];

// Institution details for specific schools
// Usage: Use in a SchoolDetails component or StudyAbroad for detailed listings.
const institutionDetails = [
    {
        logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/4b7002ab9cb48bbe67a9b9ff89c853cc08a2f239?placeholderIfAbsent=true",
        name: "Coventry University",
        address: "Priory Street, Coventry",
        image: "https://cdn.builder.io/api/v1/image/assets/TEMP/a1db7316105b3f5427319d744bcf4a7a38b50d2c?placeholderIfAbsent=true",
        description: "Coventry University is a forward-looking, modern university with a proud tradition as a provider of high quality education and a focus on applied research.",
        country: "United Kingdom",
        type: "University",
        email: "admissions@coventry.ac.uk",
        programs: 150,
        students: 1000,
        status: "active",
        details: {
            schoolType: "Public",
            tuition: "£16,729.44 GBP / Year",
            costOfLiving: "£9,135.00 GBP / Year",
            undergradDuration: "3 years",
            applicationFee: "£0.00 GBP",
            gradDuration: "1 year",
        },
    },
    {
        logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/4b7002ab9cb48bbe67a9b9ff89c853cc08a2f239?placeholderIfAbsent=true",
        name: "Middlesex University",
        address: "The Burroughs, London",
        image: "https://cdn.builder.io/api/v1/image/assets/TEMP/a1db7316105b3f5427319d744bcf4a7a38b50d2c?placeholderIfAbsent=true",
        description: "Middlesex University is known for its innovative teaching and research in a vibrant London setting.",
        country: "United Kingdom",
        type: "University",
        email: "admissions@mdx.ac.uk",
        programs: 120,
        students: 800,
        status: "active",
        details: {
            schoolType: "Public",
            tuition: "£14,000 GBP / Year",
            costOfLiving: "£10,000 GBP / Year",
            undergradDuration: "3 years",
            applicationFee: "£0.00 GBP",
            gradDuration: "1 year",
      },
    },
    {
      logo: "https://example.com/utoronto-logo.png",
      name: "University of Toronto",
      address: "27 King's College Circle, Toronto, ON",
      image: "https://example.com/utoronto-image.png",
      description: "A leading Canadian university known for research and innovation.",
      country: "Canada",
      type: "University",
      email: "admissions@utoronto.ca",
      programs: 276,
      students: 1542,
      status: "active",
      details: {
        schoolType: "Public",
        tuition: "$50,000 CAD / Year",
        costOfLiving: "$15,000 CAD / Year",
        undergradDuration: "4 years",
        applicationFee: "$180 CAD",
        gradDuration: "2 years",
      },
    },
    {
      logo: "https://example.com/mcgill-logo.png",
      name: "McGill University",
      address: "845 Sherbrooke St W, Montreal, QC",
      image: "https://example.com/mcgill-image.png",
      description: "One of Canada's top universities with a strong international reputation.",
      country: "Canada",
      type: "University",
      email: "admissions@mcgill.ca",
      programs: 198,
      students: 1124,
      status: "active",
      details: {
        schoolType: "Public",
        tuition: "$45,000 CAD / Year",
        costOfLiving: "$14,000 CAD / Year",
        undergradDuration: "4 years",
        applicationFee: "$120 CAD",
        gradDuration: "2 years",
      },
    },
    {
      logo: "https://example.com/ubc-logo.png",
      name: "University of British Columbia",
      address: "2329 West Mall, Vancouver, BC",
      image: "https://example.com/ubc-image.png",
      description: "A globally recognized university known for its beautiful campus and research excellence.",
      country: "Canada",
      type: "University",
      email: "admissions@ubc.ca",
      programs: 210,
      students: 1300,
      status: "active",
      details: {
        schoolType: "Public",
        tuition: "$40,000 CAD / Year",
        costOfLiving: "$13,000 CAD / Year",
        undergradDuration: "4 years",
        applicationFee: "$150 CAD",
        gradDuration: "2 years",
      },
    },
    {
      logo: "https://example.com/uwaterloo-logo.png",
      name: "University of Waterloo",
      address: "200 University Ave W, Waterloo, ON",
      image: "https://example.com/uwaterloo-image.png",
      description: "A leader in engineering and technology education with a strong co-op program.",
      country: "Canada",
      type: "University",
      email: "admissions@uwaterloo.ca",
      programs: 180,
      students: 900,
      status: "active",
      details: {
        schoolType: "Public",
        tuition: "$42,000 CAD / Year",
        costOfLiving: "$12,000 CAD / Year",
        undergradDuration: "4 years",
        applicationFee: "$125 CAD",
        gradDuration: "2 years",
      },
    },
    {
      logo: "https://example.com/queens-logo.png",
      name: "Queen's University",
      address: "99 University Ave, Kingston, ON",
      image: "https://example.com/queens-image.png",
      description: "A prestigious Canadian university with a focus on undergraduate education.",
      country: "Canada",
      type: "University",
      email: "admissions@queensu.ca",
      programs: 150,
      students: 700,
      status: "active",
      details: {
        schoolType: "Public",
        tuition: "$48,000 CAD / Year",
        costOfLiving: "$13,500 CAD / Year",
        undergradDuration: "4 years",
        applicationFee: "$130 CAD",
        gradDuration: "2 years",
      },
    },
  ];


  module.exports = {
    countryMap,
    countriesDropdown,
    formFields,
    fields,
    applicationSteps,
    tabs,
    impactData,
    englishTests,
    fixedValue,
    stats,
    stepsWithSVGs,
    videoSources,
    studyDestinations,
    countriesWithDetails,
    countriesWithFlags,
    institutions,
    features,
    testimonials,
    institutionDetails,
    teamMembers,
    simpleDestinations,
    simpleBenefits,
    simpleSteps,
    sampleStudents,
  };