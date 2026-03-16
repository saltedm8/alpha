const BASE_URL = 'https://alphaarchitectsltd.co.uk';
/* Local images in public/images/uploads/ - run `node scripts/download-images.js` to fetch from live site */
const UPLOADS = '/images/uploads';

export const siteConfig = {
  logo: `${UPLOADS}/2020/04/alpha-architects-ltd-company-logo.png`,
  established: '2017',
  phoneEssex: '020 8498 0228',
  phoneLondon: '020 7345 5070',
  email: 'info@alphaarchitectsltd.co.uk',
  addressEssex: "50 Queen's Road, Buckhurst Hill, IG9 5BY",
  addressLondon: 'Docklands Business Centre, 10 - 16 Tiller Road, Docklands, E14 8PX',
  social: {
    instagram: 'https://www.instagram.com/alphaarchitectsltd/',
    facebook: 'https://www.facebook.com/share/17TAetfC4K/',
    houzz: 'https://www.houzz.co.uk/pro/nicantonyarchitects/nic-antony-architects-ltd',
  },
};

export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  {
    label: 'Services',
    path: '/services',
    children: [
      { label: 'Residential', path: '/services/residential' },
      { label: 'Interiors', path: '/services/interiors' },
      { label: 'Developments', path: '/services/developments' },
      { label: 'Community', path: '/services/community' },
    ],
  },
  {
    label: 'Projects',
    path: '/projects',
    children: [
      { label: 'Residential', path: '/projects/residential' },
      { label: 'Interiors', path: '/projects/interiors' },
      { label: 'Developments', path: '/projects/developments' },
      { label: 'Community', path: '/projects/community' },
    ],
  },
  { label: 'Reviews', path: '/reviews' },
  { label: 'News', path: '/news' },
  { label: 'Contact Us', path: '/contact' },
];

export const heroImage = `${UPLOADS}/2025/10/2-copy.jpg`;

export const pageHeroImages = {
  about: `${UPLOADS}/2025/10/3-copy.jpg`,
  services: `${UPLOADS}/2025/10/img_1439-copy.jpg`,
  projects: `${UPLOADS}/2025/10/house-in-essex-alpha-architects-ltd.jpg`,
  reviews: `${UPLOADS}/2025/10/2-copy.jpg`,
  contact: `${UPLOADS}/2025/10/img_1439-copy.jpg`,
};

export const heroContent = {
  title: 'Welcome To Alpha Architects Ltd',
  description: `Alpha Architects Ltd are an established RIBA Chartered architecture practice with offices in Buckhurst Hill, Essex and Docklands, Central London, providing professional architectural design services. We are a design-led, multi-disciplinary architecture firm with a reputation for reliability and delivering creative architectural solutions that maximise the client's brief and budget.`,
  situationShort: `We are an established RIBA Chartered practice with offices in Buckhurst Hill, Essex and Docklands, London. A design-led, multi-disciplinary firm with a reputation for reliability and creative solutions.`,
  description2: `We offer a full architectural service including initial consultation, feasibility studies, planning approval, building regulations approval, tender management, contracts, project management, and ongoing support during construction through to a completed residential or commercial project.`,
  cta: `Please contact Alpha Architects Ltd to discuss your specific project requirements and to book a free initial architectural consultation with experienced architects in Essex and London.`,
  ribaLink: 'https://www.riba.org/work/join-us/riba-chartered-practice-uk-membership/',
};

export const specialistAreas = [
  { title: 'Residential', subtitle: 'Projects', path: '/projects/residential', link: `${BASE_URL}/residential-2/`, image: `${UPLOADS}/2025/05/residential-thumbnail-1024x683.webp` },
  { title: 'Commercial & Interiors', subtitle: 'Projects', path: '/projects/interiors', link: `${BASE_URL}/commercial-2/`, image: `${UPLOADS}/2025/05/commercial-thumbnail-1-1024x683.webp` },
  { title: 'Developments', subtitle: 'Projects', path: '/projects/developments', link: `${BASE_URL}/development-2/`, image: `${UPLOADS}/2025/05/development-thumbnails-1024x772.webp` },
  { title: 'Community', subtitle: 'Projects', path: '/projects/community', link: `${BASE_URL}/community-2/`, image: `${UPLOADS}/2019/04/featured01-best-exterior-1-e1517659706406.jpg` },
];

export const featuredProjects = [
  { name: 'Warren Interior', slug: 'warren', image: `${UPLOADS}/2025/06/warren-interior-alpha-architects-ltd.jpg` },
  { name: 'Warren Garden Room', slug: 'warren', image: `${UPLOADS}/2025/06/warren-garden-room-alpha-aachitects-ltd.jpg` },
  { name: 'Elmcroft Interior', slug: 'elmcroft', image: `${UPLOADS}/2025/06/elmcroft-interior-scaled.jpg` },
  { name: 'Elmcroft Exterior', slug: 'elmcroft', image: `${UPLOADS}/2025/06/elmcroft-exterior-scaled.jpg` },
  { name: 'Eglington Loft', slug: 'eglington', image: `${UPLOADS}/2025/06/eglington-loft.jpg` },
  { name: 'Eglinton Exterior', slug: 'eglington', image: `${UPLOADS}/2025/06/eglinton-exterior.jpg` },
  { name: 'Hainault Interior', slug: 'hainault', image: `${UPLOADS}/2025/06/hainault-interior-scaled.jpg` },
  { name: 'Hainault Exterior', slug: 'hainault', image: `${UPLOADS}/2025/06/hainault-exterior-scaled.jpg` },
  { name: 'Luctons Exterior', slug: 'luctons', image: `${UPLOADS}/2025/06/luctons-exterior.jpg` },
  { name: 'Sad Meli Ext', slug: 'sad-meli', image: `${UPLOADS}/2025/05/1-6-scaled.jpg` },
  { name: 'Sad Meli Interior', slug: 'sad-meli', image: `${UPLOADS}/2025/05/2-4-scaled.jpg` },
  { name: 'Dream Nails', slug: 'dream-nails', image: `${UPLOADS}/2023/08/dreamnails-highres-130-300x200.jpg` },
  { name: 'Knighton', slug: 'knighton', image: `${UPLOADS}/2025/11/1-1024x683.jpg` },
  { name: 'Roebuck', slug: 'roebuck', image: `${UPLOADS}/2020/01/06-1-1024x683.jpg` },
];

export const houzzAwards = [2023, 2022, 2021, 2020, 2019, 2018, 2017];

/* Best of Houzz badge images - from live site, order: 2023, 2022, 2021, 2020, 2019 Service, 2019 Design, 2018 */
export const houzzBadges = [
  { year: 2023, category: 'Service', src: `${UPLOADS}/2019/08/boh2023service_small.png`, alt: '2023 Best of Houzz Service' },
  { year: 2022, category: 'Service', src: `${UPLOADS}/2019/08/boh2022service_small.png`, alt: '2022 Best of Houzz Service' },
  { year: 2021, category: 'Service', src: `${UPLOADS}/2019/08/boh2021service_small.png`, alt: '2021 Best of Houzz Service' },
  { year: 2020, category: 'Service', src: `${UPLOADS}/2019/08/boh2020service_small.png`, alt: '2020 Best of Houzz Service' },
  { year: 2019, category: 'Service', src: `${UPLOADS}/2019/08/boh2019service_small.webp`, alt: '2019 Best of Houzz Service' },
  { year: 2019, category: 'Design', src: `${UPLOADS}/2019/08/boh2019design_small.webp`, alt: '2019 Best of Houzz Design' },
  { year: 2018, category: 'Service', src: `${UPLOADS}/2019/08/boh2018service_small.webp`, alt: '2018 Best of Houzz Service' },
];

/* Affiliation & event logos - from live site */
export const affiliationLogos = [
  { name: 'RIBA Chartered Practice', src: `${UPLOADS}/2019/04/riba-logo-300x163.jpg`, alt: 'RIBA Chartered Practice', link: 'https://www.riba.org/work/join-us/riba-chartered-practice-uk-membership/' },
  { name: 'Grand Designs Live', src: `${UPLOADS}/2019/04/grand-designs-live.jpg`, alt: 'Grand Designs Live', link: 'https://www.granddesignslive.co.uk/' },
  { name: 'Homebuilding & Renovating Show', src: `${UPLOADS}/2019/08/hbrshow-300x143.png`, alt: 'Homebuilding & Renovating Show', link: 'https://www.homebuildingshow.co.uk/' },
  { name: 'ideal HOME SHOW', src: `${UPLOADS}/2019/08/ideal-home-300x219.png`, alt: 'ideal HOME SHOW', link: 'https://www.idealhomeshow.co.uk/' },
];

export const reviewLinks = {
  houzz: siteConfig.social.houzz,
  houzzLabel: 'View our Houzz profile & reviews',
  google: 'https://www.google.com/search?q=Alpha+Architects+Ltd+reviews',
  googleLabel: 'View our Google reviews',
};

/* Compact review blocks – rating, count, link (matches original widget style) */
export const reviewWidgets = [
  { platform: 'Google', rating: 4.8, count: 15, link: 'https://www.google.com/search?q=Alpha+Architects+Ltd+reviews', label: 'View Google reviews' },
  { platform: 'Houzz', rating: 4.8, count: 56, link: siteConfig.social.houzz, label: 'View Houzz reviews' },
];

/* Google reviews – avatars scraped from live site (run: node scripts/download-review-avatars.js) */
const GOOGLE_AVATARS = {
  'TotallyDynamic NorthLDN': 'https://phosphor.utils.elfsightcdn.com/?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa-%2FALV-UjUB6KyLxDczYcGS3J6HjRv7J-kgJ5b1XaJnY7p8vCr8OBkntgA%3Ds120-c-rp-mo-br100',
  'Goher H': 'https://phosphor.utils.elfsightcdn.com/?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa%2FACg8ocJyJJi3E5SFoxeq_Vn9pNIQxnxQKp7Dvk2Qf_Sfcstp_QYMZg%3Ds120-c-rp-mo-br100',
  'Clive Porter': 'https://phosphor.utils.elfsightcdn.com/?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa%2FACg8ocL_Ql8AwJUej9vhvP3YPZ5A2T18HaC_jq0gRsfKv4sxdQuURg%3Ds120-c-rp-mo-br100',
  'Samuel McCarthy': 'https://phosphor.utils.elfsightcdn.com/?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa%2FACg8ocIxY7L6sJnzoa0rz2uKSEc_ARFO0oOWPz8SPTt6Cg0HB-9ixg%3Ds120-c-rp-mo-br100',
  'Adam Stevens': 'https://phosphor.utils.elfsightcdn.com/?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa%2FACg8ocICrbkFsNgPHax-2V1RpJcxh9llDuwBv888pEH6YH7oiFRwow%3Ds120-c-rp-mo-ba2-br100',
  'Mandip Chauhan': 'https://phosphor.utils.elfsightcdn.com/?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa-%2FALV-UjWeQWPt4OOCQee9fcxyuT_eqOh4Raj6NJl25mwqildNbXNwENJ9%3Ds120-c-rp-mo-br100',
  'Paul Mac': 'https://phosphor.utils.elfsightcdn.com/?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa%2FACg8ocK_NR5SoAJcadGcjOdCCrNLoOmWtWKYtygGb96L0RG_pyOUKHw%3Ds120-c-rp-mo-br100',
  'Jackie Atmore': 'https://phosphor.utils.elfsightcdn.com/?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa%2FACg8ocL2PTKLnH7HZRlJ7YHi-JTJ6iJ6_KRvanWCGl8ukYqpg7KzKQ%3Ds120-c-rp-mo-ba3-br100',
  'Chris Coyne': 'https://phosphor.utils.elfsightcdn.com/?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa%2FACg8ocIfNzfF-CgUhTDW0MM_eVJT1nriXnLeqPDX8NPxceWqbkWFgQ%3Ds120-c-rp-mo-br100',
  'Martyn Jones': 'https://phosphor.utils.elfsightcdn.com/?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa-%2FALV-UjVG3vQzc-AeNdHfdENi55rA6ij4tkG8LIZaoEq31VUbMqQ09BqdGA%3Ds120-c-rp-mo-br100',
  'Matt D': 'https://phosphor.utils.elfsightcdn.com/?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa%2FACg8ocIosU5Gg1dCysLjMtwqir217Kid9mpEK_0DhR3zDxYB7jRMqJI%3Ds120-c-rp-mo-br100',
  'H S': 'https://phosphor.utils.elfsightcdn.com/?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa-%2FALV-UjW2_1Hyk_mGQFYdNSBp2BxtMvfA4UG8EOvgVpA9cftH3K1nDqRS%3Ds120-c-rp-mo-ba3-br100',
};

export const googleReviews = [
  { author: 'TotallyDynamic NorthLDN', date: '2 months ago', text: "Funny kind of review as we didn't actually use Nic's services for work on our home in Loughton, but I thoroughly regret that! Nic was professional when he came to see our house and had great ideas and I wish we have taken our time and used his services. Our builder wanted to get going on with the work in our loft and 'pushed' an architect he always used for speed. The work turned out fine, but I always feel we missed an opportunity for something better than the 'standard loft conversion' we got. Nic was excellent and quick with all his communications and I have since seen his work and it is fantastic.", avatar: GOOGLE_AVATARS['TotallyDynamic NorthLDN'] },
  { author: 'Goher H', date: '2 months ago', text: "I have used Alpha Architect's for a number of years for my personal projects. Two of these projects were very challenging because both were in Beckton, East London, where there is NO permitted development, and the council reject a huge amount of stuff. Nic and his team persevered with my applications, until we got them passed. I would very highly recommend Alpha architect's, initially with a meeting to discuss the project and hatch a plan going forward. I'm currently submitting for my own house, I'm very pleased with the drawings. The picture posted is the first Beckton project, I could have never thought of this design, well worth the money.", avatar: GOOGLE_AVATARS['Goher H'] },
  { author: 'Clive Porter', date: '2 months ago', text: "Walking around Chingford in an evening my wife and I came across various developments from Alpha Architects Ltd (Nic Antony). We looked the company up on Google and everything was positive, so we decided to take the plunge and hesitantly contacted Nic, having never used an architect before we were both very cautious, nervous and not knowing what to expect. Nic is polite, professional, patient and above all very talented. As my wife and I, 'to and fro' with various ideas, Nic very carefully took us through the whole journey explaining every step, whilst he bounced off us some very innovative solutions. The final result is amazing... You know your house is fantastic when dog walkers and the like stop, look at the house, point out detail and smile. As my wife and I enter retirement, we both know we have the perfect house, in a fantastic location. Thanks Nic...", avatar: GOOGLE_AVATARS['Clive Porter'] },
  { author: 'Samuel McCarthy', date: '8 months ago', text: "Nic and the team were very professional and knowledgeable when designing our home. It's given us a fantastic forever home for our family.", avatar: GOOGLE_AVATARS['Samuel McCarthy'] },
  { author: 'Adam Stevens', date: '8 months ago', text: "I worked with Nic & the team for our garage conversion (into a kitchen diner). They were simply great from the initial planning/ideas stage right through to submitting planning applications and liaising with contractors. I would happily recommend their services for all projects, big or small. They made our lives (two children under 2 years old) a lot less stressful throughout the project!", avatar: GOOGLE_AVATARS['Adam Stevens'] },
  { author: 'Mandip Chauhan', date: '1 year ago', text: "I had the pleasure of working with Nic Antony and his team to design my bedroom wardrobes and layout, and I couldn't be happier with the results! Their attention to detail, creativity, and ability to maximize space transformed my room into a stylish and functional haven. They took the time to understand my vision and needs, delivering a design that is both practical and aesthetically stunning. The quality of work and professionalism throughout the process were exceptional. I highly recommend Nic Antony to anyone looking for expert architectural design.", avatar: GOOGLE_AVATARS['Mandip Chauhan'] },
  { author: 'Paul Mac', date: '1 year ago', text: "We recently had the pleasure of working with Nic Antony Architects, and I couldn't be more satisfied with the experience. From the initial consultation to the final touches, Nic and his team demonstrated exceptional professionalism and creativity. They took the time to understand our vision and provided innovative solutions that maximised our budget and space. Their attention to detail and commitment to quality were evident in every aspect of the project. The team was always responsive and communicative, making the entire process smooth and stress-free. I highly recommend Nic Antony Architects for anyone looking to transform their space with a team that truly cares about their clients' needs and delivers outstanding results.", avatar: GOOGLE_AVATARS['Paul Mac'] },
  { author: 'Jackie Atmore', date: '1 year ago', text: 'Exceptional standards', avatar: GOOGLE_AVATARS['Jackie Atmore'] },
  { author: 'Chris Coyne', date: '1 year ago', text: 'Nic provided thoughtful and sensible advice on our proposed design. He also helped through the intricacies of applying for planning permission. A really good, local service for a sensible price.', avatar: GOOGLE_AVATARS['Chris Coyne'] },
  { author: 'Martyn Jones', date: '1 year ago', text: "We wanted ideas for our house renovation project. In fact, we had talked with several other consultants and not found the vision we were looking for. Then we met Nic who produced some inspired ideas of how we could remodel our home. Great service and inspired ideas. Thank you Nic and Team.", avatar: GOOGLE_AVATARS['Martyn Jones'] },
  { author: 'Matt D', date: '1 year ago', text: "Nic Anthony and his team guided me through the process of making an application to build a new dwelling in the green belt of Chigwell. The most difficult of all applications possible. Nic has a very good professional and strategic approach and also well established relationships with local council planning officers. We worked together with Epping Forest DC to find a mutually amicable solution. Almost at the finish line now.", avatar: GOOGLE_AVATARS['Matt D'] },
  { author: 'H S', date: '5 years ago', text: 'Highly recommended. Pleasure to deal with.', avatar: GOOGLE_AVATARS['H S'] },
];

/* Houzz reviews */
export const houzzReviews = [
  { author: 'derek wenborn', date: 'July 10, 2023', text: "Excellent service from Nic and his team throughout all stages of our house renovation project, from generating initial ideas; obtaining the necessary permissions; managing the builder tendering and contracting process; advising during construction - especially as we started during 'lockdown'. Very pleased with our 'new' home!", image: null },
  { author: 'Kosta Pirgousis', date: 'October 29, 2022', text: "Thanks Nic and co, we have just finished our project using Nic architects the drawing and spec pack was great leading to a fairly smooth build. Would highly recommend Nic and the team for any project!", image: null },
  { author: 'David Brown', date: 'October 25, 2022', text: "From the first meeting and then every step of the way Nic and his team have provided prompt, clear and helpful advice.. Nic Antony Architects produced excellent drawings and looked after every step of the planning process of our extension project, subsequently obtaining quotes for the work involved. They kept us well informed at all stages, and dealt with any of our queries quickly and in depth. From the first meeting until the last to agree the terms of a contract between us and the construction company they were first class. The great thing is that while we asked them to handle everything from the initial ideas we had regarding our proposed extension , we were never pushed into using their services or suggested contractors. So if you only want the plans drawn and then wish to handle everything else yourself that's okay. But if like us you need a company to look after everything then that's what they can do. We will not hesitate to use or recommend Nic Antony Architects for future projects.", image: null },
  { author: 'Kush Sharma', date: 'June 15, 2022', text: "Nic Anthony architects were an absolute pleasure to work with. Our project is a simple 4M rear extension however, we've had a lot of personal issues since our initial engagement in 2021. Nic and his team have been amazingly patient with us while we navigated a difficult time. Eventually we've arrived at a place where we have got our final plans created and have thoroughly enjoyed the creative process. Nic and his team have been great at showing us alternative ideas while keeping our budget in mind! Nic has also been very good at helping us to refine any ideas we had and is an excellent sounding board with good honest advice. I cannot recommend Nic and his team highly enough. In fact I've already recommended him and his team to family and friends!", image: null },
  { author: 'HU-980123845', date: 'March 28, 2022', text: "Nic Antony Architects supports all the local schools in the Epping Forest Consortium by participating in the annual careers fair. He shares his expertise and knowledge with students enabling them to find out about careers as an architect.", image: null },
  { author: 'HU-778892482', date: 'March 19, 2022', text: "Amazing service from Nic Antony and his team. Flawless from start to finish. We were giving great advice from the outset. Without doubt would recommend. Faultless!", image: null },
];

export const reviewsContent = {
  intro: 'We are proud of our reputation for service and design. Read what our clients say about us on Houzz and Google.',
  houzzAwardIntro: 'We have been awarded Best of Houzz Service every year since 2017. This award is chosen by the millions of homeowners in the Houzz community from among more than 2.5 million active home building, renovation and design professionals. It recognises outstanding customer service on Houzz®, the leading platform for home renovation and design.',
};

/* Full content for news items that have dedicated pages */
export const newsDetailExtras = {
  'happy-new-year': {
    body: 'After a nice break from our holidays we open our doors once again to our clients!\n\nYour generosity and support have been the key ingredients to our success. So this New Year we wish to thank you for all the cooperation and hope to continue the association for a long time to come.',
  },
  'riba-chartered-membership-status': {
    body: 'We are pleased to announce that we have renewed our RIBA Chartered Membership for 2022!\n\nAs a RIBA Chartered Practice, we are committed to the highest standards of professional practice and client care. This recognition reflects our ongoing dedication to excellence in architecture.',
  },
  'christmas-2021': {
    body: "It's the most wonderful time of the year, and during this season our thoughts turn thankfully to you and our clients.\n\nWe wish you a Merry Christmas and a Happy New Year. Thank you for your continued support throughout 2021.",
  },
  'homebuilding-and-renovating-show-2021': {
    body: "We are excited to share that our Director Nic Antony will be attending the Homebuilding and Renovating Show 2021.\n\nCome and meet us at our stand to discuss your project and get expert advice on your home renovation or new build. We look forward to seeing you there.",
  },
  'best-of-houzz-2021': {
    body: 'We are excited to share that we have won Best of Houzz 2021 for Service! This award recognises our commitment to outstanding customer service, as chosen by the Houzz community.\n\nVisit our Houzz profile to read client reviews and see our portfolio.',
    houzzLink: true,
  },
  'business-as-usual': {
    body: "It's business as usual! We can do full site visits with full PPE equipment according to the government guidelines with your safety in mind.\n\nWe are here to help with your architectural projects. Contact us to arrange a consultation.",
  },
  'best-of-houzz-2020-service-winners': {
    body: 'Nic Antony Architects of Buckhurst Hill, Essex has won a "Best Of Houzz" award for Customer Service on Houzz®, the leading platform for home renovation and design. We are an established Chartered RIBA practice with offices in Buckhurst Hill, Essex and Docklands, Central London. We are a design-led practice with a reputation for reliability and providing creative solutions that maximize the client\'s brief and budget. We were chosen by the millions of homeowners that comprise the Houzz community from among more than 2.5 million active home building, renovation and design industry professionals.\n\nVisit our Houzz profile for more information.',
    houzzLink: true,
  },
  'danny-dyer-christmas-speech-at-roebuck': {
    body: "Danny Dyer presented Channel 4's Alternative Xmas 2019 on Christmas Day at one of our recent projects: Roebuck!\n\nWe were delighted to see our Roebuck project featured in this festive special. It's a great example of the quality of work we deliver for our clients.",
  },
  'christmas_bazaar_buckhurst_hill_school': {
    body: 'We are proud to sponsor the Christmas Bazaar at Buckhurst Hill Primary School on 7th December from 12pm to 4pm.\n\nSupporting our local community is important to us. We hope to see you there!',
  },
  'christmas-bazaar-white-bridge-school': {
    body: 'We are proud to sponsor the Christmas Bazaar at White Bridge Primary School on 29th November from 5 to 7pm.\n\nWe are committed to supporting local schools and community events.',
  },
  'our-new-website': {
    body: 'We have launched our new website, check it out!\n\nOur new site makes it easier to browse our portfolio, learn about our services, and get in touch. We hope you enjoy exploring it.',
  },
  'fireworks-thank-you': {
    body: 'Thank you to all that attended the recent fireworks event at Buckhurst Hill Primary School. The event was a success!\n\nWe were proud to sponsor this community event and hope everyone had a wonderful time.',
  },
  'feb-2022-grand-designs-live-2': {
    body: "Thank you to all of you that participated in the 'Ask An Expert' live discussions at Grand Designs Live last year.\n\nIt was a pleasure to meet so many of you and discuss your projects. We look forward to seeing you at future events.",
  },
  'project-malvern-drive': {
    body: 'This is a single storey rear extension with some internal re-modelling to create a contemporary open plan family space suitable for modern living.\n\nThe design maximises natural light and creates a seamless flow between indoor and outdoor spaces.',
  },
  'project-palmerston': {
    body: 'This project incorporates a large wrap around extension and remodelling of the ground floor to create a contemporary open plan family home.\n\nThe design transforms the existing property into a light, spacious living environment.',
  },
  'project-the-medway': {
    body: "This project incorporates substantial extending and remodelling of a 1950's house to create a high spec contemporary family house suitable for modern family life.\n\nThe design respects the original character while introducing contemporary finishes and open plan living.",
  },
};

export const aboutContent = {
  intro: `We are Alpha Architects Ltd, a RIBA Chartered architecture practice (office no: 3130190) with extensive experience in residential design, interior design, developments, commercial and community projects. Established in 2017, we provide architectural design services and advice from our head office in Buckhurst Hill, Essex and our office in Docklands, London.`,
  para2: `We bring experience, creativity, and practicality to all projects, however large or small. We have a reputation for reliability and providing architectural solutions that maximise the client's brief and budget.`,
  para3: `We offer the full architectural service, including initial consultation, feasibility study, planning application, building regulations application, tender, contracts, project management, and support during construction to a completed residential or commercial project. Please feel free to contact us to arrange a free initial architectural consultation to discuss your project.`,
  ribaLink: 'http://www.riba.org/',
};

export const team = [
  { name: 'Nic Antony', title: 'BA (hons) Dip Arch MSC', role: "Nic is the founding director of the company. Nic's role in the company is Business Development Manager, Marketing, Social Media & Public Relations. Nic was a Chartered Architect with over 25 years experience (1999-2025) currently unregistered.", image: `${UPLOADS}/2025/05/nic-antony-architects-final-edited-62-scaled-e1763390437783.webp` },
  { name: 'Kaveh Bakhtiar', title: 'BA (hons) Dip Arch ARB RIBA', role: 'Kaveh is our Principal Architect who is a registered Architect with the Architects Registration Board (ARB) and a Chartered Architect with the Royal Institute of British Architects (RIBA). Kaveh is responsible for the architectural output of the office.', image: `${UPLOADS}/2025/10/K2-e1763390200130-769x1024.jpg` },
  { name: 'David Lea', title: 'BSC (hons)', role: 'David is a director of the company and financial controller.', image: `${UPLOADS}/2025/11/david-lea-alpha-architects-ltd.jpg` },
  { name: 'Nina Mace', title: '', role: "Nina is the office manager. Nina's role is administration, client face and the day to day management of the company.", image: `${UPLOADS}/2025/05/1-nina-772x1024.webp` },
  { name: 'Adrian Seres', title: '', role: 'Adrian is an Architectural Technologist and Passive House Designer with over 20 years experience in construction.', image: `${UPLOADS}/2025/05/2-adrien-772x1024.jpg` },
  { name: 'Dean McLeod', title: 'MCIAT', role: 'Dean is an Architectural Technologist with over 25 years experience in construction. Dean is a member of the Chartered Institute of Architectural Technologists.', image: `${UPLOADS}/2025/05/4-dean-772x1024.jpg` },
  { name: 'Shanzina Alam', title: 'BA (hons) Dip Arch MA', role: "Shanzina is a RIBA Part 2 qualified Architectural Assistant. Shanzina's role is architectural design, planning applications and working closely with members of the team assisting with projects.", image: `${UPLOADS}/2025/05/shanzina-alam-alpha-architects-ltd-772x1024.jpg` },
];

export const servicesContent = {
  residential: {
    title: 'Residential Architecture Services',
    short: 'We assist with residential projects including extending and re-modelling to include extensions, loft/garage conversions, basements, internal/external re-modelling & refurbishments, as well as new build one-off houses. We work with developers to include new build flats, housing developments, conversions, change of use, mixed use and commercial developments, HMO\'s (houses in multiple occupation) and HRB\'s (high rise buildings), as well as school and community inspired projects.',
    full: 'We have over 25 years of architectural practice and construction experience and act as Principal Designer for all our projects. We offer the full architectural service from an initial free consultation to completion incorporating a thorough and engaging design process which aims to maximize the project brief and budget.',
    stages: ['Initial consultation & feasibility', 'Design development & planning', 'Building regulations & tender', 'Contract administration & completion'],
    link: `${BASE_URL}/residential-architecture-services/`,
  },
  interiors: {
    title: 'Interiors',
    short: 'We provide interior design as an integral part of our architectural process for all projects, whether a family home, new build development, or commercial interior design project. Our residential interiors are the result of an engaging, bespoke interior design process tailored to each client\'s taste and budget.',
    full: 'We listen carefully and guide the client on a creative journey, exploring all options achievable within their budget. For developer-driven projects, we apply a similar process, focusing on creating interior spaces that flow and are desirable in the rental and sales markets, while maximizing the client\'s investment return. We understand that the success of commercial interiors, such as restaurants, bars, and cafés, depends heavily on the ambience created to attract customers. Kerb appeal and instant visual attraction draw clients in, followed by interior design solutions that enhance the space and the client\'s brand. This is achieved with creative, intelligent interior planning, identifying zones and functionality within the space, supported by contemporary lighting, graphic design, and practical furniture layouts that influence how people feel and interact socially.',
    stages: ['Brief & concept', 'Design development', 'Specification & procurement', 'Installation & styling'],
    link: `${BASE_URL}/interior-designer/`,
  },
  developments: {
    title: 'Developments',
    short: 'The external spaces around buildings are just as important as the internal spaces, especially for residential projects where contemporary open-plan design blurs the boundaries between inside and outside. We are often asked to design gardens, patios, soft and hard landscaping, garden rooms (gyms, offices, overnight annexes), external entertainment areas, pergolas, gazebos, boundary walls, solar panel structures, driveways, and external lighting design.',
    full: 'We also work with developers to create communal gardens, roof terraces, and balconies for new build developments, ensuring every outdoor space is functional, visually appealing, and complements the architectural design. We have over 20 years of experience in working with Private Sector Property Developers and their investors, as well as Public Sector and Local Authority developments. We understand that obtaining Planning Approval that maximises the development potential of the site can be critical to the success of these projects.',
    stages: ['Site analysis & concept', 'Landscape design', 'Planning & approvals', 'Construction & planting'],
    link: `${BASE_URL}/landscaping/`,
  },
  community: {
    title: 'Community',
    short: 'We have experience in Community projects that include schools, churches, nurseries, charity and community centres. We especially enjoy being involved in local community projects whereby our input can really make a difference to improving the quality of services for local people.',
    full: 'We have experience in Community projects that include schools, churches, nurseries, charity and community centres. We especially enjoy being involved in local community projects whereby our input can really make a difference to improving the quality of services for local people as well participating in local community activity. These type of projects are a valuable opportunity to integrate our practice into our local communities.',
    stages: ['Consultation & brief', 'Design & planning', 'Approvals & tender', 'Delivery & handover'],
    link: `${BASE_URL}/community/`,
  },
};

/* Project slug mapping for links to original site */
const projectSlug = (name) => {
  const map = {
    'Knighton': 'knighton', 'Warren': 'warren', 'Hainault': 'hainault', 'Elmcroft': 'elmcroft',
    'Malvern (2)': 'malvern', 'Spareleaze': 'spareleaze', 'Duchess': 'duchess', 'Eglington': 'eglington',
    'Loud & Proud': 'loud-proud', 'Coolgardie': 'coolgardie', 'Palmerston': 'palmerston', 'Garden': 'garden',
    'Barns': 'barns', 'Malvern': 'malvern', 'Roebuck': 'roebuck', 'Princes (2)': 'princes',
    'Meadway': 'meadway', 'Kings': 'kings', 'Luctons': 'luctons', 'Princes': 'princes',
    'Baldwins': 'baldwins', 'Spring': 'spring', 'Grovewood': 'grovewood', 'Ravensmere': 'ravensmere',
    'Calabria': 'calabria', 'Clifton': 'clifton', 'Grove': 'grove', 'Barry': 'barry',
    'Burstead': 'burstead', 'Millennium': 'millennium', 'Wormersley': 'wormersley',
    'Storers': 'storers', 'Cloudesley': 'cloudesley', 'Glengall': 'glengall', 'Roding': 'roding',
    'Whitehall': 'whitehall', 'High Street – Loughton': 'high-street-loughton',
    'High Street – Harlow': 'high-street-harlow', 'Horn': 'horn', 'Copenhagen': 'copenhagen',
    'Hanley': 'hanley', 'New City': 'new-city', 'Swan': 'swan',
  };
  return map[name] || name.toLowerCase().replace(/\s+/g, '-').replace(/[–—]/g, '-');
};

/* Per-project images from original site - used for category grids and projectDetails */
const residentialProjectImages = {
  knighton: `${UPLOADS}/2025/11/1-1024x683.jpg`, warren: `${UPLOADS}/2025/06/warren-interior-alpha-architects-ltd.jpg`,
  hainault: `${UPLOADS}/2022/06/img_6349-1024x768.jpg`, elmcroft: `${UPLOADS}/2025/06/elmcroft-interior-scaled.jpg`,
  roebuck: `${UPLOADS}/2020/01/06-1-1024x683.jpg`, malvern: `${UPLOADS}/2025/06/elmcroft-exterior-scaled.jpg`,
  spareleaze: `${UPLOADS}/2018/05/img_9468-1024x683.jpg`, duchess: `${UPLOADS}/2025/06/hainault-interior-scaled.jpg`,
  eglington: `${UPLOADS}/2025/06/eglington-loft.jpg`, 'loud-proud': `${UPLOADS}/2025/06/elmcroft-interior-scaled.jpg`,
  coolgardie: `${UPLOADS}/2025/06/warren-garden-room-alpha-aachitects-ltd.jpg`, palmerston: `${UPLOADS}/2025/06/elmcroft-exterior-scaled.jpg`,
  garden: `${UPLOADS}/2025/06/warren-garden-room-alpha-aachitects-ltd.jpg`, barns: `${UPLOADS}/2025/06/hainault-exterior-scaled.jpg`,
  princes: `${UPLOADS}/2025/06/luctons-exterior.jpg`, meadway: `${UPLOADS}/2025/06/elmcroft-interior-scaled.jpg`,
  kings: `${UPLOADS}/2025/06/warren-interior-alpha-architects-ltd.jpg`, luctons: `${UPLOADS}/2019/08/04-600x400.jpg`,
  baldwins: `${UPLOADS}/2025/06/hainault-interior-scaled.jpg`, spring: `${UPLOADS}/2025/06/elmcroft-exterior-scaled.jpg`,
  grovewood: `${UPLOADS}/2025/06/warren-interior-alpha-architects-ltd.jpg`, ravensmere: `${UPLOADS}/2025/06/elmcroft-interior-scaled.jpg`,
  calabria: `${UPLOADS}/2025/06/hainault-interior-scaled.jpg`, clifton: `${UPLOADS}/2025/06/warren-garden-room-alpha-aachitects-ltd.jpg`,
  grove: `${UPLOADS}/2025/06/elmcroft-exterior-scaled.jpg`, barry: `${UPLOADS}/2025/06/hainault-exterior-scaled.jpg`,
  burstead: `${UPLOADS}/2025/06/luctons-exterior.jpg`, millennium: `${UPLOADS}/2025/06/warren-interior-alpha-architects-ltd.jpg`,
  wormersley: `${UPLOADS}/2025/06/elmcroft-interior-scaled.jpg`, storers: `${UPLOADS}/2025/06/hainault-interior-scaled.jpg`,
  cloudesley: `${UPLOADS}/2025/06/elmcroft-exterior-scaled.jpg`, glengall: `${UPLOADS}/2025/06/warren-garden-room-alpha-aachitects-ltd.jpg`,
  roding: `${UPLOADS}/2025/06/luctons-exterior.jpg`,
};

export const projectCategories = {
  residential: ['Knighton', 'Warren', 'Hainault', 'Elmcroft', 'Malvern (2)', 'Spareleaze', 'Duchess', 'Eglington', 'Loud & Proud', 'Coolgardie', 'Palmerston', 'Garden', 'Barns', 'Malvern', 'Roebuck', 'Princes (2)', 'Meadway', 'Kings', 'Luctons', 'Princes', 'Baldwins', 'Spring', 'Grovewood', 'Ravensmere', 'Calabria', 'Clifton', 'Grove', 'Barry', 'Burstead', 'Millennium', 'Wormersley', 'Storers', 'Cloudesley', 'Glengall', 'Roding'].map((name) => {
    const slug = projectSlug(name);
    return { name, slug, link: `${BASE_URL}/project/${slug}/`, image: residentialProjectImages[slug] || `${UPLOADS}/2025/06/warren-interior-alpha-architects-ltd.jpg` };
  }),
  commercial: [
    { name: 'Sad Meli', slug: 'sad-meli', link: `${BASE_URL}/project/sad-meli/`, image: `${UPLOADS}/2025/05/12-300x200.jpg` },
    { name: 'Dream Nails', slug: 'dream-nails', link: `${BASE_URL}/project/dream-nails/`, image: `${UPLOADS}/2023/08/dreamnails-highres-130-300x200.jpg` },
    { name: 'Trafalgar', slug: 'trafalger', link: `${BASE_URL}/project/trafalger/`, image: `${UPLOADS}/2021/03/img_1202-300x300.jpg` },
    { name: 'Charity Offices', slug: 'charity-offices', link: `${BASE_URL}/project/charity-offices/`, image: `${UPLOADS}/2019/08/02-7-e1517656945423-300x200.jpg` },
    { name: 'Ninth Ward', slug: 'ninth-ward-bar-restaurant', link: `${BASE_URL}/project/ninth-ward-bar-restaurant/`, image: `${UPLOADS}/2019/08/05-copy-600x400-300x200.jpg` },
    { name: 'Green Owl', slug: 'green-owl', link: `${BASE_URL}/project/green-owl/`, image: `${UPLOADS}/2019/08/02-1-600x400-300x200.jpg` },
  ],
  development: ['Whitehall', 'High Street – Loughton', 'High Street – Harlow', 'Horn', 'Copenhagen', 'Hanley', 'New City', 'Swan'].map((name) => {
    const slug = projectSlug(name);
    const devImgs = {
      whitehall: `${UPLOADS}/2000/03/08.jpg`,
      'high-street-loughton': `${UPLOADS}/2000/03/01.jpg`,
      'high-street-harlow': `${UPLOADS}/2000/03/001-2-scaled.jpg`,
      horn: `${UPLOADS}/2021/05/img_1608.jpg`,
      copenhagen: `${UPLOADS}/2019/08/1-1-e1517661418374-1.jpg`,
      hanley: `${UPLOADS}/2019/08/3-2-e1517662290154.jpg`,
      'new-city': `${UPLOADS}/2025/05/development-thumbnails-1024x772.webp`,
      swan: `${UPLOADS}/2019/08/back-view-copy-2-600x450.jpg`,
    };
    return { name, slug, link: `${BASE_URL}/project/${slug}/`, image: devImgs[slug] || `${UPLOADS}/2025/05/development-thumbnails-1024x772.webp` };
  }),
  community: [
    { name: 'Stephens Church', slug: 'stephens-church', link: `${BASE_URL}/project/stephens-church/`, image: `${UPLOADS}/2019/08/featured01-best-exterior-1-e1517659706406-1.jpg` },
    { name: 'Buckhurst Hill Primary School', slug: 'buckhurst-hill-primary-school', link: `${BASE_URL}/project/buckhurst-hill-primary-school/`, image: `${UPLOADS}/2019/08/01-best-exterior-4-e1517658577701-1.jpg` },
    { name: 'St Saviours School', slug: 'st-saviours-school', link: `${BASE_URL}/project/st-saviours-school/`, image: `${UPLOADS}/2019/08/featured-best-exterior-e1517658845468.jpg` },
  ],
};

export const newsItems = [
  { title: 'Feb 2022 Grand Designs Live', excerpt: 'Thank you to all of you that participated in the \'Ask An Expert\' live discussions at Grand Designs Live last', slug: 'feb-2022-grand-designs-live-2', image: `${UPLOADS}/2019/04/grand-designs-live.jpg`, imageFit: 'contain' },
  { title: 'Happy New Year', excerpt: 'After a nice break from our holidays we open our doors once again to our clients! Your generosity and support', slug: 'happy-new-year', image: `${UPLOADS}/2025/10/2-copy.jpg` },
  { title: 'RIBA Chartered Membership Status', excerpt: 'We are Pleased to Announce that we have Renewed our RIBA Chartered Membership for 2022!', slug: 'riba-chartered-membership-status', image: `${UPLOADS}/2019/04/riba-logo-300x163.jpg`, imageFit: 'contain' },
  { title: 'Christmas 2021', excerpt: "It's the most wonderful time of the year, and during this season our thoughts turn thankfully to you and our", slug: 'christmas-2021', image: `${UPLOADS}/2025/06/elmcroft-exterior-scaled.jpg` },
  { title: 'HomeBuilding and Renovating Show 2021', excerpt: 'We are excited to share that our Director Nic Antony will be attending the Homebuilding and Renovating Show 2021 at', slug: 'homebuilding-and-renovating-show-2021', image: `${UPLOADS}/2019/08/hbrshow-300x143.png`, imageFit: 'contain' },
  { title: 'Best of Houzz 2021!', excerpt: 'We are excited to share that we have won Best of Houzz 2021 for Service!', slug: 'best-of-houzz-2021', image: `${UPLOADS}/2019/08/boh2021service_small.png`, imageFit: 'contain' },
  { title: "We're Open For Business", excerpt: "It's business as usual! We can do full site visits with full PPE equipment according to the government guidelines with", slug: 'business-as-usual', image: heroImage },
  { title: 'Best of Houzz 2020 Service Winners', excerpt: 'Nic Antony Architects of Buckhurst Hill, Essex has won a "Best Of Houzz" award for Customer Service on Houzz®', slug: 'best-of-houzz-2020-service-winners', image: `${UPLOADS}/2019/08/boh2020service_small.png`, imageFit: 'contain' },
  { title: 'Danny Dyer – Christmas 2019 Speech at Roebuck', excerpt: "Danny Dyer presented Channel 4's Alternative Xmas 2019 on xmas day at one of our recent projects: Roebuck!", slug: 'danny-dyer-christmas-speech-at-roebuck', image: `${UPLOADS}/2020/01/06-1-1024x683.jpg` },
  { title: 'Christmas Bazaar (Buckhurst Hill School)', excerpt: 'We are proud to sponsor the Christmas Bazaar at Buckhust Hill Primary School on 7th December from 12pm to 4pm.', slug: 'christmas_bazaar_buckhurst_hill_school', image: `${UPLOADS}/2019/08/01-best-exterior-4-e1517658577701-1.jpg` },
  { title: 'Christmas Bazaar (White Bridge School)', excerpt: 'We are proud to sponsor the Christmas Bazaar at White Bridge Primary School on 29th November from 5 to 7pm.', slug: 'christmas-bazaar-white-bridge-school', image: `${UPLOADS}/2019/08/01-best-exterior-4-e1517658577701-1.jpg` },
  { title: 'Our new website', excerpt: 'We have launched our new website, check it out!', slug: 'our-new-website', image: heroImage },
  { title: 'Event – Fireworks', excerpt: 'Thank you to all that attended the recent fireworks event at Buckhurst Hill Primary School. The event was a success', slug: 'fireworks-thank-you', image: `${UPLOADS}/2019/08/01-best-exterior-4-e1517658577701-1.jpg` },
  { title: 'Project – Malvern Drive', excerpt: 'This is a single storey rear extension with some internal re-modelling to create a contemporary open plan family space suitable', slug: 'project-malvern-drive', image: `${UPLOADS}/2025/06/elmcroft-exterior-scaled.jpg` },
  { title: 'Project – Palmerston', excerpt: 'This project incorporates a large wrap around extension and remodelling of the ground floor to create a contemporary open plan', slug: 'project-palmerston', image: `${UPLOADS}/2019/05/img_9985-1024x683.jpg` },
  { title: 'Project – Meadway', excerpt: "This project incorporates substantial extending and remodelling of a 1950's house to create a high spec contemporary family house suitable", slug: 'project-the-medway', image: `${UPLOADS}/2019/08/09-best-interior-600x400.jpeg` },
];

/* Individual project detail pages - slug to full info. Built from projectCategories so all projects have pages. */
const buildProjectDetails = () => {
  const out = {};
  projectCategories.residential.forEach((item) => {
    const slug = item.slug || projectSlug(item.name);
    if (!out[slug]) out[slug] = { name: item.name, category: 'Residential', link: item.link, image: item.image };
  });
  projectCategories.commercial.forEach((item) => {
    const slug = item.slug || item.link.replace(/.*\/project\/([^/]+)\/?$/, '$1');
    out[slug] = { name: item.name, category: 'Commercial', link: item.link, image: item.image };
  });
  projectCategories.development.forEach((item) => {
    const slug = item.slug || projectSlug(item.name);
    out[slug] = { name: item.name, category: 'Development', link: item.link, image: item.image };
  });
  projectCategories.community.forEach((item) => {
    const slug = item.slug || item.link.replace(/.*\/project\/([^/]+)\/?$/, '$1');
    out[slug] = { name: item.name, category: 'Community', link: item.link, image: item.image };
  });
  return out;
};

export const projectDetails = buildProjectDetails();

/* Extra content for featured project detail pages - full galleries and descriptions */
export const projectDetailExtras = {
  'sad-meli': {
    description: 'Commercial interior design project.',
    gallery: [
      `${UPLOADS}/2025/05/12-scaled.jpg`, `${UPLOADS}/2025/05/12-1024x683.jpg`, `${UPLOADS}/2025/05/12-1536x1024.jpg`, `${UPLOADS}/2025/05/12-2048x1366.jpg`, `${UPLOADS}/2025/05/1-6-scaled.jpg`, `${UPLOADS}/2025/05/2-4-scaled.jpg`, `${UPLOADS}/2025/05/3-4-scaled.jpg`, `${UPLOADS}/2025/05/4-4-scaled.jpg`, `${UPLOADS}/2025/05/5-4-scaled.jpg`, `${UPLOADS}/2025/05/6-3-scaled.jpg`, `${UPLOADS}/2025/05/7-3-scaled.jpg`, `${UPLOADS}/2025/05/8-3-scaled.jpg`, `${UPLOADS}/2025/05/9-2-scaled.jpg`, `${UPLOADS}/2025/05/10-5-scaled.jpg`, `${UPLOADS}/2025/05/11-4-scaled.jpg`, `${UPLOADS}/2025/05/12-3-scaled.jpg`, `${UPLOADS}/2025/05/13-2-scaled.png`, `${UPLOADS}/2025/05/14-3-scaled.jpg`,
    ],
  },
  'dream-nails': {
    description: 'Commercial interior design project. Nail salon.',
    gallery: [
      `${UPLOADS}/2023/08/dreamnails-highres-130-scaled.jpg`, `${UPLOADS}/2023/08/dreamnails-highres-130-1024x683.jpg`, `${UPLOADS}/2023/08/dreamnails-highres-130-1536x1024.jpg`, `${UPLOADS}/2023/08/dreamnails-highres-130-2048x1366.jpg`, `${UPLOADS}/2023/08/dreamnails-highres-135-scaled.jpg`, `${UPLOADS}/2023/08/dreamnails-highres-138-scaled.jpg`, `${UPLOADS}/2023/08/dreamnails-highres-142-scaled.jpg`, `${UPLOADS}/2023/08/dreamnails-highres-146-scaled.jpg`, `${UPLOADS}/2023/08/dreamnails-highres-147-scaled.jpg`,
    ],
  },
  'knighton': {
    description: 'Residential project. Woodford.',
    gallery: [
      `${UPLOADS}/2025/11/1.jpg`, `${UPLOADS}/2025/11/1-1024x683.jpg`, `${UPLOADS}/2025/11/1-1536x1024.jpg`, `${UPLOADS}/2025/11/2-scaled.jpg`, `${UPLOADS}/2025/11/3.jpg`, `${UPLOADS}/2025/11/5.jpg`, `${UPLOADS}/2025/11/6.jpg`, `${UPLOADS}/2025/11/7.jpg`, `${UPLOADS}/2025/11/8.jpg`, `${UPLOADS}/2025/11/10.jpg`, `${UPLOADS}/2025/11/11.jpg`, `${UPLOADS}/2025/11/12.jpg`, `${UPLOADS}/2025/11/13.jpg`, `${UPLOADS}/2025/11/13a.jpg`, `${UPLOADS}/2025/11/14.jpg`, `${UPLOADS}/2025/11/15.jpg`, `${UPLOADS}/2025/11/16.jpg`, `${UPLOADS}/2025/11/17.jpg`, `${UPLOADS}/2025/11/18.jpg`, `${UPLOADS}/2025/11/19.jpg`, `${UPLOADS}/2025/11/20.jpg`, `${UPLOADS}/2025/11/21.jpg`, `${UPLOADS}/2025/11/22.jpg`, `${UPLOADS}/2025/11/23.jpg`, `${UPLOADS}/2025/11/24.jpg`, `${UPLOADS}/2025/11/25.jpg`, `${UPLOADS}/2025/11/26.jpg`, `${UPLOADS}/2025/11/27.jpg`, `${UPLOADS}/2025/11/28.jpg`, `${UPLOADS}/2025/11/29.jpg`, `${UPLOADS}/2025/11/30.jpg`, `${UPLOADS}/2025/11/31.jpg`, `${UPLOADS}/2025/11/32.jpg`, `${UPLOADS}/2025/11/33.jpg`,
    ],
  },
  'roebuck': {
    description: 'Residential project. Buckhurst Hill, Essex.',
    gallery: [
      `${UPLOADS}/2020/01/02-1.jpg`, `${UPLOADS}/2020/01/06-1-1024x683.jpg`, `${UPLOADS}/2020/01/06-1.jpg`, `${UPLOADS}/2020/01/01-1.jpg`, `${UPLOADS}/2020/01/03-1.jpg`, `${UPLOADS}/2020/01/04-1.jpg`, `${UPLOADS}/2020/01/05-1.jpg`, `${UPLOADS}/2020/01/07-1.jpg`, `${UPLOADS}/2020/01/08-1.jpg`, `${UPLOADS}/2020/01/09-1.jpg`, `${UPLOADS}/2020/01/10-1.jpg`, `${UPLOADS}/2020/01/11-1.jpg`, `${UPLOADS}/2020/01/12-1.jpg`, `${UPLOADS}/2020/01/13-1.jpg`, `${UPLOADS}/2020/01/14-1.jpg`, `${UPLOADS}/2020/01/16.jpg`, `${UPLOADS}/2020/01/17.jpg`, `${UPLOADS}/2020/01/18.jpg`, `${UPLOADS}/2020/01/19.jpg`, `${UPLOADS}/2020/01/20.jpg`, `${UPLOADS}/2020/01/21.jpg`, `${UPLOADS}/2020/01/22.jpg`, `${UPLOADS}/2020/01/23.jpg`, `${UPLOADS}/2020/01/24.jpg`, `${UPLOADS}/2020/01/25.jpg`, `${UPLOADS}/2020/01/26.jpg`, `${UPLOADS}/2020/01/27.jpg`, `${UPLOADS}/2020/01/28-1.jpg`, `${UPLOADS}/2020/01/29.jpg`,
    ],
  },
  'hainault': {
    description: 'Residential project. Loughton High, Loughton.',
    gallery: [
      `${UPLOADS}/2022/06/img_6349-scaled.jpg`, `${UPLOADS}/2022/06/img_6349-1024x768.jpg`, `${UPLOADS}/2022/06/img_6349-1536x1152.jpg`, `${UPLOADS}/2022/06/img_6349-2048x1536.jpg`,
    ],
  },
  'elmcroft': {
    description: 'Remodelling and refurbishment of a 1930s semi-detached property. Woodford. Contemporary rear extension and loft conversion.',
    gallery: [
      `${UPLOADS}/2023/08/01-rear-scaled.jpg`, `${UPLOADS}/2023/08/03-front-1024x683.jpg`, `${UPLOADS}/2023/08/03-front-1536x1024.jpg`, `${UPLOADS}/2023/08/03-front-2048x1365.jpg`, `${UPLOADS}/2023/10/01-rear.webp`, `${UPLOADS}/2023/10/03-front.webp`, `${UPLOADS}/2023/10/05-interior.webp`, `${UPLOADS}/2023/10/06-interior.webp`, `${UPLOADS}/2023/10/07-interior.webp`, `${UPLOADS}/2023/10/08-interior.webp`, `${UPLOADS}/2023/10/09-interior.webp`, `${UPLOADS}/2023/10/10-interior.webp`, `${UPLOADS}/2023/10/11-rear.webp`, `${UPLOADS}/2023/10/12-interior.webp`, `${UPLOADS}/2023/10/13-interior.webp`, `${UPLOADS}/2023/10/14-garden.webp`, `${UPLOADS}/2023/10/15-side.webp`, `${UPLOADS}/2023/08/ground-floor-plan.webp`, `${UPLOADS}/2023/08/Front-Elevation.webp`, `${UPLOADS}/2023/08/rear-elevation.webp`, `${UPLOADS}/2023/08/section-1024x724.webp`, `${UPLOADS}/2023/08/section-1536x1086.webp`, `${UPLOADS}/2023/08/section-scaled.webp`,
    ],
  },
  'trafalger': {
    description: 'Commercial project. Trafalgar Square.',
    gallery: [
      `${UPLOADS}/2021/03/img_1202.jpg`,
    ],
  },
  'charity-offices': {
    description: 'Pub conversion with offices for a local charity and 4 self-contained flats. Deptford, South London.',
    gallery: [
      `${UPLOADS}/2019/08/02-7-e1517656945423.jpg`, `${UPLOADS}/2019/08/01-best-exterior.jpg`, `${UPLOADS}/2019/08/04.jpg`, `${UPLOADS}/2019/08/05.jpg`, `${UPLOADS}/2019/08/06-2.jpg`, `${UPLOADS}/2019/08/07-best-interior.jpg`, `${UPLOADS}/2019/08/08.jpg`, `${UPLOADS}/2019/08/09.jpg`, `${UPLOADS}/2019/08/10.jpg`, `${UPLOADS}/2019/08/11.jpg`, `${UPLOADS}/2019/08/12-1.jpg`, `${UPLOADS}/2019/08/13.jpg`, `${UPLOADS}/2019/08/14-1.jpg`, `${UPLOADS}/2019/08/15.jpg`, `${UPLOADS}/2019/08/17.jpg`,
    ],
  },
  'ninth-ward-bar-restaurant': {
    description: 'Bar & Restaurant. Farringdon Road, London.',
    gallery: [
      `${UPLOADS}/2019/08/05-copy-600x400.jpg`, `${UPLOADS}/2019/08/01-best-extension.jpg`, `${UPLOADS}/2019/08/03-2.jpg`, `${UPLOADS}/2019/08/04-1.jpg`, `${UPLOADS}/2019/08/07.jpg`, `${UPLOADS}/2019/08/08-2.jpg`, `${UPLOADS}/2019/08/12-2.jpg`, `${UPLOADS}/2019/08/13-2.jpg`, `${UPLOADS}/2019/08/14-2.jpg`, `${UPLOADS}/2019/08/15-1.jpg`, `${UPLOADS}/2019/08/16.jpg`, `${UPLOADS}/2019/08/17-1.jpg`, `${UPLOADS}/2019/08/01-basement-and-ground-e1517658456164.png`,
    ],
  },
  'green-owl': {
    description: 'Commercial interior design project for a café/restaurant on Broadway, Loughton, Essex. The design creates a welcoming space with contemporary finishes, efficient layout and strong kerb appeal.',
    location: 'Broadway, Loughton, Essex',
    gallery: [
      `${UPLOADS}/2019/08/02-1-600x400.jpg`, `${UPLOADS}/2019/08/01-ext.jpg`, `${UPLOADS}/2019/08/02-1.jpg`, `${UPLOADS}/2019/08/03-1-1.jpg`, `${UPLOADS}/2019/08/05-1.jpg`, `${UPLOADS}/2019/08/06-1.jpg`, `${UPLOADS}/2019/08/07-1.jpg`, `${UPLOADS}/2019/08/08-1.jpg`, `${UPLOADS}/2019/08/09-1.jpg`, `${UPLOADS}/2019/08/10-1.jpg`, `${UPLOADS}/2019/08/12.jpg`, `${UPLOADS}/2019/08/13-1.jpg`, `${UPLOADS}/2019/08/14.jpg`, `${UPLOADS}/2019/08/2016043pa-07-proposed-site-plan_1-100-1200x848-1024x724.jpeg`, `${UPLOADS}/2019/08/2016043pa-07-proposed-site-plan_1-100-1200x848.jpeg`, `${UPLOADS}/2019/08/2016043pa-09-proposed-front-street-scene_section-aa_1-100-1200x848-1024x724.jpeg`, `${UPLOADS}/2019/08/2016043pa-09-proposed-front-street-scene_section-aa_1-100-1200x848.jpeg`, `${UPLOADS}/2019/08/2016043pa-11-proposed-side-street-scene_section-bb_1-100-1200x848-1024x724.jpeg`, `${UPLOADS}/2019/08/2016043pa-11-proposed-side-street-scene_section-bb_1-100-1200x848.jpeg`,
    ],
  },
  'stephens-church': {
    description: 'Community project. Buckhurst Hill, Essex.',
    gallery: [
      `${UPLOADS}/2019/08/featured01-best-exterior-1-e1517659706406-1.jpg`, `${UPLOADS}/2019/08/00-before.jpg`, `${UPLOADS}/2019/08/01-best-exterior-1.jpg`, `${UPLOADS}/2019/08/02.jpg`, `${UPLOADS}/2019/08/03-3.jpg`, `${UPLOADS}/2019/08/01-proposed-site-plan-e1517660222659.png`, `${UPLOADS}/2019/08/02-proposed-section-bb-e1517660263564.png`, `${UPLOADS}/2019/08/03-proposed-section-aa-and-e1517660298269.png`,
    ],
  },
  'buckhurst-hill-primary-school': {
    description: 'Community project. Buckhurst Hill, Essex.',
    gallery: [
      `${UPLOADS}/2019/08/01-best-exterior-4-e1517658577701-1.jpg`, `${UPLOADS}/2019/08/02-9-1024x683.jpg`, `${UPLOADS}/2019/08/02-9.jpg`,
    ],
  },
  'st-saviours-school': {
    description: 'Community project. London.',
    gallery: [
      `${UPLOADS}/2019/08/featured-best-exterior-e1517658845468.jpg`, `${UPLOADS}/2019/08/02-9-1.jpg`, `${UPLOADS}/2019/08/02-10-e1517659015265.jpg`, `${UPLOADS}/2019/08/03-12-e1517659102359.jpg`, `${UPLOADS}/2019/08/04-15-e1517659157330.jpg`, `${UPLOADS}/2019/08/05-best-interior-e1517659204446.jpg`, `${UPLOADS}/2019/08/06-12-e1517659251600.jpg`, `${UPLOADS}/2019/08/07-11-e1517659292244.jpg`, `${UPLOADS}/2019/08/08-10-e1517659337301.jpg`, `${UPLOADS}/2019/08/ground-plan-1200x865-1024x738.jpeg`, `${UPLOADS}/2019/08/ground-plan-1200x865.jpeg`, `${UPLOADS}/2019/08/ground-and-section-1200x864-1024x737.jpeg`, `${UPLOADS}/2019/08/ground-and-section-1200x864.jpeg`,
    ],
  },
  'horn': {
    description: 'We recently completed this new build block of flats, which replaces a single dwelling house. We produced a contemporary new build that compliments the style of the area yet maximises the development potential of the site.',
    gallery: [
      `${UPLOADS}/2021/05/img_1608.jpg`, `${UPLOADS}/2021/05/img_1609.jpg`, `${UPLOADS}/2021/05/img_1610.jpg`, `${UPLOADS}/2021/05/img_1611.jpg`, `${UPLOADS}/2021/05/01.jpg`, `${UPLOADS}/2021/05/02.jpg`, `${UPLOADS}/2021/05/03.jpg`, `${UPLOADS}/2021/05/04.jpg`, `${UPLOADS}/2021/05/05.jpg`, `${UPLOADS}/2021/05/screen-shot-2021-05-04-at-090919.png`, `${UPLOADS}/2021/05/screen-shot-2021-05-04-at-090936.png`, `${UPLOADS}/2021/05/screen-shot-2021-05-04-at-090950.png`,
    ],
  },
  'copenhagen': {
    description: 'This is a new build developer driven project consisting of 14 x spacious self contained flats with riverside terraces and panoramic views of Canary Wharf, 6 x B1 office units, Concierge and underground basement parking for 8 cars. As a riverside development, design approval had to be obtained from the Environment Agency including the design of a canal side path for pedestrians. Planning and Building Regulations Approval was obtained. Construction completed March 2008.',
    location: 'Mile End, London',
    gallery: [
      `${UPLOADS}/2019/08/1-1-e1517661418374-1.jpg`, `${UPLOADS}/2019/08/4-best-exterior-e1517661263300.jpg`, `${UPLOADS}/2019/08/3-1-e1517662060737.jpg`, `${UPLOADS}/2019/08/2-1-e1517662026515.jpg`, `${UPLOADS}/2019/08/5-2-1024x490.jpg`, `${UPLOADS}/2019/08/5-2.jpg`, `${UPLOADS}/2019/08/6-2-1024x399.jpg`, `${UPLOADS}/2019/08/6-2.jpg`, `${UPLOADS}/2019/08/7-1.jpg`, `${UPLOADS}/2019/08/7-1-270x300.jpg`,
    ],
  },
  'hanley': {
    description: 'This project is a developer driven conversion of an existing end of terrace Victorian townhouse into 4 self contained flats incorporating a rear extension, basement development and loft conversion. Although this building was a 3 storey house, 4 flats were approved which made all the difference to the developer and reduced the risk of the development. Planning and Building Regulations Approval was obtained. Construction completed 2009.',
    location: 'Islington, London',
    gallery: [
      `${UPLOADS}/2019/08/3-2-e1517662290154.jpg`, `${UPLOADS}/2019/08/1-2-e1517662269304-1.jpg`, `${UPLOADS}/2019/08/3-2-e1517662290154-1.jpg`, `${UPLOADS}/2019/08/3dw2290154.jpg`, `${UPLOADS}/2019/08/4-2-e1517662309769.jpg`, `${UPLOADS}/2019/08/5-3-e1517662383917-1.jpg`, `${UPLOADS}/2019/08/6-3-e1517662413423.jpg`, `${UPLOADS}/2019/08/7-2-e1517662569905.jpg`, `${UPLOADS}/2019/08/8-1-e1517662551174.jpg`, `${UPLOADS}/2019/08/9-1-e1517663259370.jpg`, `${UPLOADS}/2019/08/10-11-e1517663388178.jpg`, `${UPLOADS}/2019/08/11-12.jpg`,
    ],
  },
  'swan': {
    description: 'Development project.',
    location: 'Sible Hedingham, Essex',
    gallery: [
      `${UPLOADS}/2019/08/back-view-copy-2-600x450.jpg`, `${UPLOADS}/2019/08/03-elevation-front-south.jpg`, `${UPLOADS}/2019/08/04-elevation-front-north.jpg`, `${UPLOADS}/2019/08/05-elevation-rear-north.jpg`, `${UPLOADS}/2019/08/back-view-copy-2-400x300.jpg`, `${UPLOADS}/2019/08/front-view-copy-2-400x300.jpg`, `${UPLOADS}/2019/08/top-view-copy-2-400x300.jpg`, `${UPLOADS}/2019/08/2015155pa-15_proposed-ground-floor-plan_revc-1200x848-1024x724.jpeg`, `${UPLOADS}/2019/08/2015155pa-15_proposed-ground-floor-plan_revc-1200x848.jpeg`,
    ],
  },
  'new-city': {
    description: 'Development project.',
    gallery: [],
  },
  'whitehall': {
    description: 'Development project. Housing scheme.',
    gallery: [
      `${UPLOADS}/2000/03/08.jpg`, `${UPLOADS}/2025/05/02pdf-scaled.jpg`, `${UPLOADS}/2025/05/03pdf-scaled.jpg`, `${UPLOADS}/2025/05/04pdf-scaled.jpg`, `${UPLOADS}/2025/05/01pdf-scaled.jpg`,
    ],
  },
  'spareleaze': {
    description: 'Residential project. Chigwell.',
    gallery: [
      `${UPLOADS}/2022/05/img_9477.jpg`, `${UPLOADS}/2018/05/img_9468-1024x683.jpg`, `${UPLOADS}/2018/05/img_9468.jpg`, `${UPLOADS}/2022/05/img_9471.jpg`, `${UPLOADS}/2018/05/img_9501.jpg`, `${UPLOADS}/2022/05/img_9485.jpg`, `${UPLOADS}/2022/05/img_9526.jpg`, `${UPLOADS}/2022/05/img_9543.jpg`, `${UPLOADS}/2022/05/img_9437.jpg`, `${UPLOADS}/2022/05/img_9434.jpg`, `${UPLOADS}/2022/05/img_9449.jpg`, `${UPLOADS}/2022/05/img_9451.jpg`, `${UPLOADS}/2022/05/img_9421.jpg`, `${UPLOADS}/2022/05/img_9398.jpg`, `${UPLOADS}/2022/05/img_9427.jpg`, `${UPLOADS}/2022/05/img_9430.jpg`,
    ],
  },
  'luctons': {
    description: 'Residential project. Buckhurst Hill, Essex.',
    gallery: [
      `${UPLOADS}/2019/08/04-600x400.jpg`, `${UPLOADS}/2019/08/01.jpg`, `${UPLOADS}/2019/08/02-2.jpg`, `${UPLOADS}/2019/08/03-best-exterior.jpg`, `${UPLOADS}/2019/08/04-2.jpg`, `${UPLOADS}/2019/08/05-2.jpg`, `${UPLOADS}/2019/08/06-3.jpg`, `${UPLOADS}/2019/08/07-2.jpg`, `${UPLOADS}/2019/08/08-3.jpg`, `${UPLOADS}/2019/08/09-2.jpg`, `${UPLOADS}/2019/08/10-2.jpg`, `${UPLOADS}/2019/08/11-1.jpg`, `${UPLOADS}/2019/08/12-3.jpg`, `${UPLOADS}/2019/08/01-proposed-ground-floor-plan-e1517566828527.png`, `${UPLOADS}/2019/08/02-proposed-section-e1517566864804.png`, `${UPLOADS}/2019/08/03-proposed-section-e1517566894351.png`,
    ],
  },
  'high-street-loughton': {
    description: 'Development project. Mixed-use scheme on High Street, Loughton.',
    location: 'High Street, Loughton',
    gallery: [
      `${UPLOADS}/2000/03/01.jpg`, `${UPLOADS}/2000/03/01-1024x768.jpg`, `${UPLOADS}/2000/03/01-1536x1152.jpg`, `${UPLOADS}/2000/03/02.jpg`, `${UPLOADS}/2025/05/03-3-scaled.jpg`, `${UPLOADS}/2025/05/04-3-scaled.jpg`, `${UPLOADS}/2025/05/05-3-scaled.jpg`,
    ],
  },
  'high-street-harlow': {
    description: 'Development project. Mixed-use scheme on High Street, Harlow.',
    location: 'High Street, Harlow',
    gallery: [
      `${UPLOADS}/2000/03/001-2-scaled.jpg`, `${UPLOADS}/2000/03/001-2-1024x724.jpg`, `${UPLOADS}/2000/03/001-2-1536x1086.jpg`, `${UPLOADS}/2025/05/05-2-scaled.jpg`, `${UPLOADS}/2025/05/06-2-scaled.jpg`, `${UPLOADS}/2025/05/07-2-scaled.jpg`, `${UPLOADS}/2025/05/01-2-scaled.jpg`, `${UPLOADS}/2025/05/02-2-scaled.jpg`, `${UPLOADS}/2025/05/03-2-scaled.jpg`,
    ],
  },
  'warren': {
    description: 'Residential project.',
    gallery: [
      `${UPLOADS}/1999/01/1-1-scaled.jpg`, `${UPLOADS}/1999/01/1-1024x687.jpg`, `${UPLOADS}/1999/01/1-1536x1030.jpg`, `${UPLOADS}/1999/01/1-2048x1374.jpg`, `${UPLOADS}/2025/05/1-5-scaled.jpg`, `${UPLOADS}/2025/05/2-3-scaled.jpg`, `${UPLOADS}/2025/05/3-3-scaled.jpg`, `${UPLOADS}/2025/05/4-3-scaled.jpg`, `${UPLOADS}/2025/05/5-3-scaled.jpg`, `${UPLOADS}/1999/01/6-1-scaled.jpg`, `${UPLOADS}/2025/05/7-2-scaled.jpg`, `${UPLOADS}/2025/05/8-2-scaled.jpg`, `${UPLOADS}/2025/05/9-1-scaled.jpg`, `${UPLOADS}/2025/05/10-3-scaled.jpg`, `${UPLOADS}/2025/05/11-3-scaled.jpg`, `${UPLOADS}/2025/05/12-2-scaled.jpg`, `${UPLOADS}/2025/05/13-scaled.jpg`, `${UPLOADS}/2025/05/14-2-scaled.jpg`, `${UPLOADS}/2025/05/15-1-scaled.jpg`, `${UPLOADS}/2025/05/16-1-scaled.jpg`, `${UPLOADS}/2025/05/17-1-scaled.jpg`, `${UPLOADS}/2025/05/18-1-scaled.jpg`, `${UPLOADS}/2025/05/19-1-scaled.jpg`, `${UPLOADS}/2025/05/20-1-scaled.jpg`, `${UPLOADS}/2025/05/21-1-scaled.jpg`, `${UPLOADS}/2025/05/22-1-scaled.jpg`, `${UPLOADS}/2025/05/23-1-scaled.jpg`, `${UPLOADS}/2025/05/24-1-scaled.jpg`, `${UPLOADS}/2025/05/25-1-scaled.jpg`, `${UPLOADS}/2025/05/26-1-scaled.jpg`, `${UPLOADS}/2025/05/27-1-scaled.jpg`, `${UPLOADS}/2025/05/28-1-scaled.jpg`, `${UPLOADS}/2025/05/29-1-scaled.jpg`, `${UPLOADS}/2025/05/30-1-scaled.jpg`, `${UPLOADS}/2025/05/31-1-scaled.jpg`, `${UPLOADS}/2025/05/32-1-scaled.jpg`, `${UPLOADS}/2025/05/33jpg-scaled.jpg`, `${UPLOADS}/2025/05/34-1-scaled.jpg`, `${UPLOADS}/2025/05/45-front-elevationpdf-scaled.jpg`, `${UPLOADS}/2025/05/46-rear-elevationpdf-scaled.jpg`, `${UPLOADS}/2025/05/47-floor-planpdf-scaled.jpg`,
    ],
  },  'malvern': {
    description: 'Project.',
    gallery: [
      `${UPLOADS}/2020/01/02.jpg`, `${UPLOADS}/2020/01/02-1024x683.jpg`, `${UPLOADS}/2020/01/03.jpg`, `${UPLOADS}/2020/01/04.jpg`, `${UPLOADS}/2020/01/05.jpg`, `${UPLOADS}/2020/01/06.jpg`, `${UPLOADS}/2020/01/07.jpg`, `${UPLOADS}/2020/01/08.jpg`, `${UPLOADS}/2020/01/09.jpg`, `${UPLOADS}/2020/01/13.jpg`, `${UPLOADS}/2020/01/15.jpg`, `${UPLOADS}/2020/01/14.jpg`, `${UPLOADS}/2020/01/11.jpg`, `${UPLOADS}/2020/01/12.jpg`,
    ],
  },
  'duchess': {
    description: 'Project.',
    gallery: [
      `${UPLOADS}/2021/12/img_7066-scaled.jpg`, `${UPLOADS}/2021/12/img_7066-1024x683.jpg`, `${UPLOADS}/2021/12/img_7066-1536x1024.jpg`, `${UPLOADS}/2021/12/img_7066-2048x1365.jpg`, `${UPLOADS}/2015/10/img_9913-1.jpg`, `${UPLOADS}/2015/10/img_7085-scaled.jpg`, `${UPLOADS}/2021/12/img_7060-scaled.jpg`, `${UPLOADS}/2021/12/img_7072-scaled.jpg`, `${UPLOADS}/2021/12/img_7109-scaled.jpg`, `${UPLOADS}/2021/12/img_7152-scaled.jpg`, `${UPLOADS}/2021/12/img_7154-scaled.jpg`, `${UPLOADS}/2021/12/img_7157-scaled.jpg`, `${UPLOADS}/2021/12/img_7119-scaled.jpg`, `${UPLOADS}/2021/12/img_7146-scaled.jpg`, `${UPLOADS}/2021/12/img_7126-scaled.jpg`, `${UPLOADS}/2021/12/img_7144-scaled.jpg`, `${UPLOADS}/2021/12/img_7044-scaled.jpg`, `${UPLOADS}/2021/12/img_6990-scaled.jpg`, `${UPLOADS}/2021/12/img_6982-scaled.jpg`, `${UPLOADS}/2021/12/img_6988-scaled.jpg`, `${UPLOADS}/2021/12/img_7019-scaled.jpg`, `${UPLOADS}/2021/12/img_6992-scaled.jpg`, `${UPLOADS}/2021/12/img_7031-scaled.jpg`, `${UPLOADS}/2021/12/img_7028-scaled.jpg`, `${UPLOADS}/2021/12/img_7002-scaled.jpg`,
    ],
  },
  'eglington': {
    description: 'Project.',
    gallery: [
      `${UPLOADS}/2021/09/img_5422-1.jpg`, `${UPLOADS}/2021/09/IMG_5422.jpg`, `${UPLOADS}/2021/09/img_5422-2.jpg`, `${UPLOADS}/2021/09/img_5429-1.jpg`, `${UPLOADS}/2021/09/img_5436-2.jpg`, `${UPLOADS}/2021/09/img_5325-1.jpg`, `${UPLOADS}/2021/09/img_5329-2.jpg`, `${UPLOADS}/2021/09/img_5327-1.jpg`, `${UPLOADS}/2021/10/img_5239.jpg`, `${UPLOADS}/2021/09/img_5231-1.jpg`, `${UPLOADS}/2021/09/img_5235-1.jpg`, `${UPLOADS}/2021/10/img_5263.jpg`, `${UPLOADS}/2021/10/img_5252.jpg`, `${UPLOADS}/2021/10/img_5256.jpg`, `${UPLOADS}/2021/09/img_5261-1.jpg`, `${UPLOADS}/2021/09/img_5270-1.jpg`, `${UPLOADS}/2021/10/img_5212.jpg`, `${UPLOADS}/2021/09/img_5272-1.jpg`, `${UPLOADS}/2021/10/img_5228.jpg`, `${UPLOADS}/2021/09/img_5333-2.jpg`, `${UPLOADS}/2021/10/img_5331.jpg`, `${UPLOADS}/2021/09/img_5341-1.jpg`, `${UPLOADS}/2021/10/img_5347.jpg`, `${UPLOADS}/2021/10/img_5356.jpg`, `${UPLOADS}/2021/09/img_5337-1.jpg`, `${UPLOADS}/2021/09/img_5394-2.jpg`, `${UPLOADS}/2021/10/img_5362.jpg`, `${UPLOADS}/2021/10/img_5366.jpg`, `${UPLOADS}/2021/10/img_5372.jpg`, `${UPLOADS}/2021/10/img_5379.jpg`, `${UPLOADS}/2021/09/img_5375-1.jpg`, `${UPLOADS}/2021/10/img_5381.jpg`, `${UPLOADS}/2021/10/img_5388.jpg`, `${UPLOADS}/2021/09/img_5398-1.jpg`, `${UPLOADS}/2021/10/img_5412.jpg`, `${UPLOADS}/2021/10/img_5403.jpg`, `${UPLOADS}/2021/09/img_5284-1.jpg`, `${UPLOADS}/2021/10/img_5285.jpg`, `${UPLOADS}/2021/09/img_5301-2.jpg`,
    ],
  },
  'loud-proud': {
    description: 'Project.',
    gallery: [
      `${UPLOADS}/2019/08/img_0017.jpg`, `${UPLOADS}/2019/08/img_0017-1024x683.jpg`, `${UPLOADS}/2019/08/01-front.jpg`, `${UPLOADS}/2019/08/03-6.jpg`, `${UPLOADS}/2019/08/04-5.jpg`, `${UPLOADS}/2019/08/05-5.jpg`, `${UPLOADS}/2019/08/07-5.jpg`, `${UPLOADS}/2019/08/06-4.jpg`, `${UPLOADS}/2019/08/09-3.jpg`, `${UPLOADS}/2019/08/08-6.jpg`, `${UPLOADS}/2019/08/img_0148.jpg`, `${UPLOADS}/2019/08/img_0145.jpg`, `${UPLOADS}/2019/08/img_0124.jpg`, `${UPLOADS}/2019/08/img_0127.jpg`, `${UPLOADS}/2019/08/img_0130.jpg`, `${UPLOADS}/2019/08/img_0134.jpg`, `${UPLOADS}/2019/08/img_0136.jpg`, `${UPLOADS}/2019/08/img_0140.jpg`, `${UPLOADS}/2019/08/10-6.jpg`, `${UPLOADS}/2019/08/img_0118.jpg`, `${UPLOADS}/2019/08/img_0114.jpg`, `${UPLOADS}/2019/08/img_0120.jpg`, `${UPLOADS}/2019/08/img_0122.jpg`, `${UPLOADS}/2019/08/img_0246.jpg`, `${UPLOADS}/2019/08/img_0169.jpg`, `${UPLOADS}/2019/08/img_0155.jpg`, `${UPLOADS}/2019/08/img_0212.jpg`, `${UPLOADS}/2019/08/14-loft.jpg`, `${UPLOADS}/2019/08/img_0171.jpg`, `${UPLOADS}/2019/08/img_0175.jpg`, `${UPLOADS}/2019/08/img_0181.jpg`, `${UPLOADS}/2019/08/img_0180.jpg`, `${UPLOADS}/2019/08/img_0194.jpg`, `${UPLOADS}/2019/08/img_0192.jpg`, `${UPLOADS}/2019/08/img_0196.jpg`, `${UPLOADS}/2019/08/img_0201.jpg`, `${UPLOADS}/2019/08/img_0204.jpg`, `${UPLOADS}/2019/08/16-2.jpg`, `${UPLOADS}/2019/08/15-2.jpg`, `${UPLOADS}/2019/08/18.jpg`, `${UPLOADS}/2019/08/19.jpg`, `${UPLOADS}/2019/08/IMG_0110.jpg`, `${UPLOADS}/2019/08/IMG_0088.jpg`, `${UPLOADS}/2019/08/IMG_0085.jpg`, `${UPLOADS}/2019/08/img_0046.jpg`, `${UPLOADS}/2019/08/img_0023.jpg`, `${UPLOADS}/2019/08/img_0029.jpg`,
    ],
  },
  'coolgardie': {
    description: 'Project.',
    gallery: [
      `${UPLOADS}/2020/11/img_4785.jpg`, `${UPLOADS}/2020/11/img_4768-1024x683.jpg`, `${UPLOADS}/2020/11/img_4768.jpg`, `${UPLOADS}/2020/11/img_4791.jpg`, `${UPLOADS}/2020/11/img_4801.jpg`, `${UPLOADS}/2020/11/img_4805.jpg`, `${UPLOADS}/2020/11/img_4817.jpg`, `${UPLOADS}/2020/11/img_4815.jpg`, `${UPLOADS}/2020/11/img_4806.jpg`, `${UPLOADS}/2020/11/img_4811.jpg`, `${UPLOADS}/2020/11/img_4728.jpg`, `${UPLOADS}/2020/11/img_4712.jpg`, `${UPLOADS}/2020/11/img_4706.jpg`, `${UPLOADS}/2020/11/img_4704.jpg`, `${UPLOADS}/2020/11/img_4716.jpg`, `${UPLOADS}/2020/11/img_4743.jpg`, `${UPLOADS}/2020/11/img_4720.jpg`, `${UPLOADS}/2020/11/img_4734.jpg`, `${UPLOADS}/2020/11/img_4732.jpg`, `${UPLOADS}/2020/11/img_4740.jpg`, `${UPLOADS}/2020/11/img_4718.jpg`, `${UPLOADS}/2020/11/img_4726.jpg`, `${UPLOADS}/2020/11/IMG_4700.jpg`, `${UPLOADS}/2020/11/img_4834.jpg`, `${UPLOADS}/2020/11/img_4830.jpg`, `${UPLOADS}/2020/11/img_4855.jpg`, `${UPLOADS}/2020/11/img_4836.jpg`, `${UPLOADS}/2020/11/img_4840.jpg`, `${UPLOADS}/2020/11/img_4843.jpg`, `${UPLOADS}/2020/11/img_4849.jpg`, `${UPLOADS}/2020/11/img_4875.jpg`, `${UPLOADS}/2020/11/img_4865.jpg`, `${UPLOADS}/2020/11/img_4863.jpg`, `${UPLOADS}/2020/11/img_4861.jpg`, `${UPLOADS}/2020/11/img_4853.jpg`, `${UPLOADS}/2020/11/img_4877.jpg`, `${UPLOADS}/2020/11/img_4878.jpg`, `${UPLOADS}/2020/11/img_4887.jpg`, `${UPLOADS}/2020/11/img_4890.jpg`, `${UPLOADS}/2020/11/img_4896.jpg`,
    ],
  },
  'palmerston': {
    description: 'This project incorporates a large wrap around extension and remodelling of the ground floor to create a contemporary open plan family space.',
    location: 'Buckhurst Hill, Essex',
    gallery: [
      `${UPLOADS}/2019/05/img_9985.jpg`, `${UPLOADS}/2019/05/img_9985-1024x683.jpg`, `${UPLOADS}/2020/09/img_9983.jpg`, `${UPLOADS}/2020/09/img_9975.jpg`, `${UPLOADS}/2020/09/img_9960.jpg`, `${UPLOADS}/2020/09/img_9962.jpg`, `${UPLOADS}/2020/09/img_9958.jpg`, `${UPLOADS}/2020/09/img_9938.jpg`, `${UPLOADS}/2020/09/img_9932.jpg`, `${UPLOADS}/2020/09/img_9917.jpg`, `${UPLOADS}/2020/09/img_9952.jpg`, `${UPLOADS}/2020/09/img_9906.jpg`, `${UPLOADS}/2020/09/img_9878.jpg`, `${UPLOADS}/2020/09/img_9870.jpg`, `${UPLOADS}/2020/09/img_9919.jpg`, `${UPLOADS}/2019/04/best-of-houzz-2019-1.jpg`, `${UPLOADS}/2019/04/2019-best-of-houzz-service-badge-big-998x1024.jpg`, `${UPLOADS}/2019/04/2019-best-of-houzz-service-badge-big-292x300.jpg`, `${UPLOADS}/2019/04/2019-best-of-houzz-service-badge-big.jpg`, `${UPLOADS}/2019/04/hbr-2019.jpg`,
    ],
  },
  'garden': {
    description: 'Project.',
    gallery: [
      `${UPLOADS}/2019/08/img_0054.jpg`, `${UPLOADS}/2019/08/img_0054-1024x683.jpg`, `${UPLOADS}/2019/08/img_0073.jpg`, `${UPLOADS}/2019/08/img_0069.jpg`, `${UPLOADS}/2019/08/img_0062.jpg`, `${UPLOADS}/2019/08/img_0052.jpg`, `${UPLOADS}/2019/08/img_0050.jpg`, `${UPLOADS}/2019/08/img_0048.jpg`,
    ],
  },
  'barns': {
    description: 'Project.',
    gallery: [
      `${UPLOADS}/2020/07/temp_image_for_default_share-copy-scaled.jpg`, `${UPLOADS}/2020/07/temp_image_for_default_share-copy-1024x576.jpg`, `${UPLOADS}/2020/07/temp_image_for_default_share-copy-1536x864.jpg`, `${UPLOADS}/2020/07/temp_image_for_default_share-copy-2048x1152.jpg`,
    ],
  },
  'princes': {
    description: 'Project.',
    gallery: [
      `${UPLOADS}/2019/08/04-best-exterior-600x400.jpg`, `${UPLOADS}/2019/08/00-before-3.jpg`, `${UPLOADS}/2019/08/01-9.jpg`, `${UPLOADS}/2019/08/02-12.jpg`, `${UPLOADS}/2019/08/03-14.jpg`, `${UPLOADS}/2019/08/04-best-exterior.jpg`, `${UPLOADS}/2019/08/05-12.jpg`, `${UPLOADS}/2019/08/06-13.jpg`, `${UPLOADS}/2019/08/07-12.jpg`, `${UPLOADS}/2019/08/08-11.jpg`, `${UPLOADS}/2019/08/09-9.jpg`, `${UPLOADS}/2019/08/10-12.jpg`, `${UPLOADS}/2019/08/11-best-interior.jpg`, `${UPLOADS}/2019/08/12-11.jpg`, `${UPLOADS}/2019/08/13-8.jpg`, `${UPLOADS}/2019/08/02-section-d-1200x848-1024x724.jpeg`, `${UPLOADS}/2019/08/02-section-d-1200x848.jpeg`, `${UPLOADS}/2019/08/01-section-b-1200x848-1024x724.jpeg`, `${UPLOADS}/2019/08/01-section-b-1200x848.jpeg`,
    ],
  },
  'meadway': {
    description: 'Project.',
    gallery: [
      `${UPLOADS}/2019/06/11-medway-new-low-res.jpg`, `${UPLOADS}/2019/06/11-medway-new-low-res-1024x627.jpg`, `${UPLOADS}/2019/10/01.jpg`, `${UPLOADS}/2019/10/02-1-3.jpg`, `${UPLOADS}/2019/10/03-1.jpg`, `${UPLOADS}/2019/10/04-1.jpg`, `${UPLOADS}/2019/10/05.jpg`, `${UPLOADS}/2019/10/06-1.jpg`, `${UPLOADS}/2019/10/07.jpg`, `${UPLOADS}/2019/10/08.jpg`, `${UPLOADS}/2019/10/02.jpg`, `${UPLOADS}/2019/10/10-1.jpg`, `${UPLOADS}/2019/10/11.jpg`, `${UPLOADS}/2019/10/12.jpg`, `${UPLOADS}/2019/10/13.jpg`, `${UPLOADS}/2019/10/14.jpg`, `${UPLOADS}/2019/10/15.jpg`, `${UPLOADS}/2019/10/16.jpg`, `${UPLOADS}/2019/10/17.jpg`, `${UPLOADS}/2019/10/18.jpg`, `${UPLOADS}/2019/10/19.jpg`, `${UPLOADS}/2019/10/20.jpg`, `${UPLOADS}/2019/10/21.jpg`, `${UPLOADS}/2019/10/22.jpg`, `${UPLOADS}/2019/10/23.jpg`, `${UPLOADS}/2019/10/24.jpg`, `${UPLOADS}/2019/10/25.jpg`, `${UPLOADS}/2019/10/26.jpg`, `${UPLOADS}/2019/10/27.jpg`, `${UPLOADS}/2019/10/28.jpg`, `${UPLOADS}/2019/10/29.jpg`, `${UPLOADS}/2019/10/30.jpg`, `${UPLOADS}/2019/10/31.jpg`,
    ],
  },
  'kings': {
    description: 'Project.',
    gallery: [
      `${UPLOADS}/2019/08/16-img_1535-600x400.jpg`, `${UPLOADS}/2019/08/03-img_1630.jpg`, `${UPLOADS}/2019/08/04-img_1500.jpg`, `${UPLOADS}/2019/08/06-img_1485.jpg`, `${UPLOADS}/2019/08/07-img_1487.jpg`, `${UPLOADS}/2019/08/08-img_1593.jpg`, `${UPLOADS}/2019/08/09-img_1511.jpg`, `${UPLOADS}/2019/08/10-img_1497.jpg`, `${UPLOADS}/2019/08/11-img_1518.jpg`, `${UPLOADS}/2019/08/12-img_1520.jpg`, `${UPLOADS}/2019/08/13-img_1515.jpg`, `${UPLOADS}/2019/08/14-img_1522.jpg`, `${UPLOADS}/2019/08/15-img_1526.jpg`, `${UPLOADS}/2019/08/16-img_1535.jpg`, `${UPLOADS}/2019/08/17-img_1557.jpg`, `${UPLOADS}/2019/08/18-img_1559.jpg`, `${UPLOADS}/2019/08/2015155pa-15_proposed-ground-floor-plan_revc-1200x848-1-1024x724.jpeg`, `${UPLOADS}/2019/08/2015155pa-15_proposed-ground-floor-plan_revc-1200x848-1.jpeg`, `${UPLOADS}/2019/08/2015155pa-18_proposed-rear-elevation-section-bb-1200x848-1024x724.jpeg`, `${UPLOADS}/2019/08/2015155pa-18_proposed-rear-elevation-section-bb-1200x848.jpeg`, `${UPLOADS}/2019/08/2015155pa-21_proposed-section-ee-1200x848-1024x724.jpeg`, `${UPLOADS}/2019/08/2015155pa-21_proposed-section-ee-1200x848.jpeg`,
    ],
  },
  'baldwins': {
    description: 'Project.',
    gallery: [
      `${UPLOADS}/2019/08/7-3-600x400.jpg`, `${UPLOADS}/2019/08/1-3.jpg`, `${UPLOADS}/2019/08/2-best-exterior-1.jpg`, `${UPLOADS}/2019/08/3-3.jpg`, `${UPLOADS}/2019/08/4-3.jpg`, `${UPLOADS}/2019/08/5-5.jpg`, `${UPLOADS}/2019/08/6-4.jpg`, `${UPLOADS}/2019/08/7-3.jpg`, `${UPLOADS}/2019/08/9-best-interior.jpg`, `${UPLOADS}/2019/08/10-13.jpg`, `${UPLOADS}/2019/08/11-13.jpg`, `${UPLOADS}/2019/08/12-12.jpg`, `${UPLOADS}/2019/08/13-9.jpg`, `${UPLOADS}/2019/08/14-7.jpg`, `${UPLOADS}/2019/08/16-5.jpg`, `${UPLOADS}/2019/08/17-4.jpg`, `${UPLOADS}/2019/08/18-2.jpg`, `${UPLOADS}/2019/08/19-2.jpg`, `${UPLOADS}/2019/08/20-2.jpg`, `${UPLOADS}/2019/08/proposed-ground-floor-plan-1200x848-1024x724.jpeg`, `${UPLOADS}/2019/08/proposed-ground-floor-plan-1200x848.jpeg`, `${UPLOADS}/2019/08/proposed-front-elevation-1200x848-1024x724.jpeg`, `${UPLOADS}/2019/08/proposed-front-elevation-1200x848.jpeg`, `${UPLOADS}/2019/08/2015155pa-15_proposed-ground-floor-plan_revc-1200x848-1024x724.jpeg`, `${UPLOADS}/2019/08/2015155pa-15_proposed-ground-floor-plan_revc-1200x848.jpeg`,
    ],
  },
  'spring': {
    description: 'Project.',
    gallery: [
      `${UPLOADS}/2019/08/featured-02-best-exterior-e1517595273453-1.jpg`, `${UPLOADS}/2019/08/01-5.jpg`, `${UPLOADS}/2019/08/03-5.jpg`, `${UPLOADS}/2019/08/04-7.jpg`, `${UPLOADS}/2019/08/05-6.jpg`, `${UPLOADS}/2019/08/06-6.jpg`, `${UPLOADS}/2019/08/07-6.jpg`, `${UPLOADS}/2019/08/08-4.jpg`, `${UPLOADS}/2019/08/09-4.jpg`, `${UPLOADS}/2019/08/10-5.jpg`, `${UPLOADS}/2019/08/11-5.jpg`, `${UPLOADS}/2019/08/12-5.jpg`, `${UPLOADS}/2019/08/13-3.jpg`, `${UPLOADS}/2019/08/14-3.jpg`, `${UPLOADS}/2019/08/15-1-1.jpg`, `${UPLOADS}/2019/08/16-1.jpg`, `${UPLOADS}/2019/08/18-jpg.jpg`, `${UPLOADS}/2019/08/01-ground-floor-plan-2-e1517596498684.png`, `${UPLOADS}/2019/08/02-first-floor-plan-e1517596559219.png`, `${UPLOADS}/2019/08/03-elevation-1200x795-1024x678.png`, `${UPLOADS}/2019/08/03-elevation-1200x795.png`,
    ],
  },
  'grovewood': {
    description: 'Project.',
    gallery: [
      `${UPLOADS}/2019/08/01-best-exterior-e1517575181486-1.jpg`, `${UPLOADS}/2019/08/00-before-1.jpg`, `${UPLOADS}/2019/08/01-best-exterior-1-1.jpg`, `${UPLOADS}/2019/08/02-2-1.jpg`, `${UPLOADS}/2019/08/03-2-1.jpg`, `${UPLOADS}/2019/08/04-4.jpg`, `${UPLOADS}/2019/08/05-4.jpg`, `${UPLOADS}/2019/08/06-3-1.jpg`, `${UPLOADS}/2019/08/07-3.jpg`, `${UPLOADS}/2019/08/08-2-1.jpg`, `${UPLOADS}/2019/08/10-3.jpg`, `${UPLOADS}/2019/08/11-3.jpg`, `${UPLOADS}/2019/08/12-3-1.jpg`, `${UPLOADS}/2019/08/13-2-1.jpg`, `${UPLOADS}/2019/08/14-2-1.jpg`, `${UPLOADS}/2019/08/01-proposed-ground-floor-plan-1-1024x788.png`, `${UPLOADS}/2019/08/01-proposed-ground-floor-plan-1.png`, `${UPLOADS}/2019/08/02-proposed-elevation-a-e1517588790497.png`, `${UPLOADS}/2019/08/03-proposed-section-1-e1517588919368.png`,
    ],
  },
  'ravensmere': {
    description: 'Project.',
    gallery: [
      `${UPLOADS}/2019/08/01-1.jpeg`, `${UPLOADS}/2019/08/02-best-exterior-1.jpeg`, `${UPLOADS}/2019/08/03.jpeg`, `${UPLOADS}/2019/08/04.jpeg`, `${UPLOADS}/2019/08/05.jpeg`, `${UPLOADS}/2019/08/06.jpeg`, `${UPLOADS}/2019/08/07-1.jpeg`, `${UPLOADS}/2019/08/08-1.jpeg`, `${UPLOADS}/2019/08/09.jpeg`, `${UPLOADS}/2019/08/12.jpeg`, `${UPLOADS}/2019/08/13.jpeg`, `${UPLOADS}/2019/08/14.jpeg`, `${UPLOADS}/2019/08/15.jpeg`, `${UPLOADS}/2019/08/17.jpeg`, `${UPLOADS}/2019/08/18.jpeg`, `${UPLOADS}/2019/08/20.jpeg`, `${UPLOADS}/2019/08/21.jpeg`, `${UPLOADS}/2019/08/01-ground-floor-plan-e1517574976391.png`, `${UPLOADS}/2019/08/02-rear-elevation-copy-e1517575022867.png`,
    ],
  },
  'calabria': {
    description: 'Project.',
    gallery: [
      `${UPLOADS}/2019/08/09-best-interior-600x400.jpeg`, `${UPLOADS}/2019/08/01-best-ext.jpg`, `${UPLOADS}/2019/08/02-1.jpeg`, `${UPLOADS}/2019/08/04-1.jpeg`, `${UPLOADS}/2019/08/05-1.jpeg`, `${UPLOADS}/2019/08/07-5-1.jpg`, `${UPLOADS}/2019/08/09-best-interior.jpeg`, `${UPLOADS}/2019/08/10-1.jpeg`, `${UPLOADS}/2019/08/11-1.jpeg`, `${UPLOADS}/2019/08/12-1.jpeg`, `${UPLOADS}/2019/08/01-ground-floor-1-e1517597579591.png`, `${UPLOADS}/2019/08/02-rear-elevation-1-e1517597619911.png`, `${UPLOADS}/2019/04/best-of-houzz-2019-1.jpg`, `${UPLOADS}/2019/04/2019-best-of-houzz-service-badge-big-998x1024.jpg`, `${UPLOADS}/2019/04/2019-best-of-houzz-service-badge-big-292x300.jpg`, `${UPLOADS}/2019/04/2019-best-of-houzz-service-badge-big.jpg`, `${UPLOADS}/2019/04/hbr-2019.jpg`,
    ],
  },
  'clifton': {
    description: 'Project.',
    gallery: [
      `${UPLOADS}/2019/08/08-best-exterior.jpg`, `${UPLOADS}/2019/08/08-best-exterior-1024x683.jpg`, `${UPLOADS}/2019/08/01-2-2.jpg`, `${UPLOADS}/2019/08/02-1-2.jpg`, `${UPLOADS}/2019/08/03-7.jpg`, `${UPLOADS}/2019/08/04-2-2.jpg`, `${UPLOADS}/2019/08/05-2-1.jpg`, `${UPLOADS}/2019/08/06-1-2.jpg`, `${UPLOADS}/2019/08/07-1-2.jpg`, `${UPLOADS}/2019/08/08-best-exterior-1.jpg`, `${UPLOADS}/2019/08/09-1-1.jpg`, `${UPLOADS}/2019/08/10-1-1.jpg`, `${UPLOADS}/2019/08/11-1-1.jpg`, `${UPLOADS}/2019/08/12-1-1.jpg`, `${UPLOADS}/2019/08/01-proposed-ground-e1517573461894.png`, `${UPLOADS}/2019/08/02-side-elevation-e1517573505915.png`,
    ],
  },
  'grove': {
    description: 'Project.',
    gallery: [
      `${UPLOADS}/2019/08/1-best-exterior.jpg`, `${UPLOADS}/2019/08/1-best-exterior-1024x738.jpg`, `${UPLOADS}/2019/08/1-best-exterior-1.jpg`, `${UPLOADS}/2019/08/2-1.jpeg`, `${UPLOADS}/2019/08/3-1.jpeg`, `${UPLOADS}/2019/08/4-1.jpeg`, `${UPLOADS}/2019/08/6.jpeg`, `${UPLOADS}/2019/08/7.jpeg`, `${UPLOADS}/2019/08/8.jpeg`, `${UPLOADS}/2019/08/9.jpeg`, `${UPLOADS}/2019/08/10-2-e1519217727396.jpeg`, `${UPLOADS}/2019/08/11-2.jpeg`, `${UPLOADS}/2019/08/01-ground-plan-e1517647556502.png`, `${UPLOADS}/2019/08/02-front-elevation-e1517647590273.png`, `${UPLOADS}/2019/08/03-photo-e1517647728582.png`, `${UPLOADS}/2019/08/screenshot_1.jpg`,
    ],
  },
  'barry': {
    description: 'Project.',
    gallery: [
      `${UPLOADS}/2019/08/6-1.jpg`, `${UPLOADS}/2019/08/01-01.jpg`, `${UPLOADS}/2019/08/02-best-exterior-01.jpg`, `${UPLOADS}/2019/08/03-01.jpg`, `${UPLOADS}/2019/08/04-01.jpg`, `${UPLOADS}/2019/08/05-01.jpg`, `${UPLOADS}/2019/08/06-01.jpg`, `${UPLOADS}/2019/08/07-01.jpg`, `${UPLOADS}/2019/08/08-01.jpg`, `${UPLOADS}/2019/08/09-01.jpg`, `${UPLOADS}/2019/08/11-01.jpg`, `${UPLOADS}/2019/08/12-01.jpg`, `${UPLOADS}/2019/08/13-01.jpg`, `${UPLOADS}/2019/08/01-ground-floor-plan-3-e1517648862375.png`, `${UPLOADS}/2019/08/02-first-floor-plan-1-e1517648896353.png`, `${UPLOADS}/2019/08/03-elevation-1-e1517648930603.png`,
    ],
  },
  'burstead': {
    description: 'Project.',
    gallery: [
      `${UPLOADS}/2019/08/featured-13-best-interior-e1517649093308-1.jpg`, `${UPLOADS}/2019/08/01-02.jpg`, `${UPLOADS}/2019/08/02-02.jpg`, `${UPLOADS}/2019/08/03-02.jpg`, `${UPLOADS}/2019/08/05-02.jpg`, `${UPLOADS}/2019/08/06-02.jpg`, `${UPLOADS}/2019/08/07-02.jpg`, `${UPLOADS}/2019/08/08-02.jpg`, `${UPLOADS}/2019/08/09-02.jpg`, `${UPLOADS}/2019/08/11-02.jpg`, `${UPLOADS}/2019/08/12-02.jpg`, `${UPLOADS}/2019/08/13-best-interior-02.jpg`, `${UPLOADS}/2019/08/14-02.jpg`, `${UPLOADS}/2019/08/15-02.jpg`, `${UPLOADS}/2019/08/01-daughters-suite-floorp-plan.png`, `${UPLOADS}/2019/08/02-master-suite-sons-sui-1024x597.png`, `${UPLOADS}/2019/08/02-master-suite-sons-sui.png`,
    ],
  },
  'millennium': {
    description: 'Project.',
    gallery: [
      `${UPLOADS}/2019/08/09-best-interior.jpg`, `${UPLOADS}/2019/08/01-2-1.jpg`, `${UPLOADS}/2019/08/02-1-1.jpg`, `${UPLOADS}/2019/08/03-1-2.jpg`, `${UPLOADS}/2019/08/04-2-1.jpg`, `${UPLOADS}/2019/08/05-3.jpg`, `${UPLOADS}/2019/08/06-1-1.jpg`, `${UPLOADS}/2019/08/07-1-1.jpg`, `${UPLOADS}/2019/08/08-1-1.jpg`, `${UPLOADS}/2019/08/09-best-interior-1.jpg`, `${UPLOADS}/2019/08/10-4.jpg`, `${UPLOADS}/2019/08/01-proposal-section-1200x848-1024x724.jpeg`, `${UPLOADS}/2019/08/01-proposal-section-1200x848.jpeg`, `${UPLOADS}/2019/08/02-proposal-stair-detail-1200x1697-724x1024.jpeg`, `${UPLOADS}/2019/08/02-proposal-stair-detail-1200x1697.jpeg`,
    ],
  },
  'wormersley': {
    description: 'Project.',
    gallery: [
      `${UPLOADS}/2019/08/02-best-exterior-e1517571200697-1.jpg`, `${UPLOADS}/2019/08/01-1.jpg`, `${UPLOADS}/2019/08/02-best-exterior.jpg`, `${UPLOADS}/2019/08/04-1-1.jpg`, `${UPLOADS}/2019/08/05-1-1.jpg`, `${UPLOADS}/2019/08/01-ground-floor-plan-e1517571504201.png`, `${UPLOADS}/2019/08/02-rear-elevation-e1517571542886.png`,
    ],
  },
  'storers': {
    description: 'Project.',
    gallery: [
      `${UPLOADS}/2019/08/01.jpeg`, `${UPLOADS}/2019/08/01-1024x683.jpeg`, `${UPLOADS}/2019/08/01-2.jpeg`, `${UPLOADS}/2019/08/02-best-interior.jpeg`, `${UPLOADS}/2019/08/03-1.jpeg`, `${UPLOADS}/2019/08/04-2.jpeg`, `${UPLOADS}/2019/08/05-2.jpeg`, `${UPLOADS}/2019/08/06-1.jpeg`, `${UPLOADS}/2019/08/07-2.jpeg`, `${UPLOADS}/2019/08/08-2.jpeg`, `${UPLOADS}/2019/08/09-1.jpeg`, `${UPLOADS}/2019/08/10.jpeg`, `${UPLOADS}/2019/08/11.jpeg`, `${UPLOADS}/2019/08/01-proposed-ground-floor-plan.png`, `${UPLOADS}/2019/08/02-proposed-section.png`,
    ],
  },
  'cloudesley': {
    description: 'Project.',
    gallery: [
      `${UPLOADS}/2019/08/03-600x338.jpg`, `${UPLOADS}/2019/08/01-3.jpg`, `${UPLOADS}/2019/08/02-3.jpg`, `${UPLOADS}/2019/08/03-4.jpg`, `${UPLOADS}/2019/08/04-3.jpg`, `${UPLOADS}/2019/08/07-4.jpg`, `${UPLOADS}/2019/08/08-5.jpg`, `${UPLOADS}/2019/08/01-ground-floor-e1517595111464-757x1024.png`, `${UPLOADS}/2019/08/01-ground-floor-e1517595111464-222x300.png`, `${UPLOADS}/2019/08/01-ground-floor-e1517595111464.png`, `${UPLOADS}/2019/08/02-rear-elevation-1200x848-1024x724.jpg`, `${UPLOADS}/2019/08/02-rear-elevation-1200x848.jpg`,
    ],
  },
  'glengall': {
    description: 'Project.',
    gallery: [
      `${UPLOADS}/2019/08/01-best-exterior-2-e1517591565525-1.jpg`, `${UPLOADS}/2019/08/02-3-e1517591861464.jpg`, `${UPLOADS}/2019/08/03-3-e1517591912234.jpg`, `${UPLOADS}/2019/08/04-5-e1517591977613.jpg`, `${UPLOADS}/2019/08/05-5-e1517592725483.jpg`, `${UPLOADS}/2019/08/06-4-e1517592183413.jpg`, `${UPLOADS}/2019/08/07-4-e1517592277849.jpg`, `${UPLOADS}/2019/08/08-jpg.jpg`, `${UPLOADS}/2019/08/09-jpg.jpg`, `${UPLOADS}/2019/08/10-4-e1517592862323.jpg`, `${UPLOADS}/2019/08/11-4-e1517592646800.jpg`, `${UPLOADS}/2019/08/12-4-e1517592704553.jpg`, `${UPLOADS}/2019/08/01-ground-floor-plan-1-e1517593892901.png`, `${UPLOADS}/2019/08/02-front-elevation-e1517593867167.png`,
    ],
  },
  'roding': {
    description: 'Project.',
    gallery: [
      `${UPLOADS}/2019/08/1-e1517590754966.jpg`, `${UPLOADS}/2019/08/1-e1517590754966-1.jpg`, `${UPLOADS}/2019/08/2-best-exterior-e1518699004525-400x302.jpg`, `${UPLOADS}/2019/08/4-e1517590854295.jpg`, `${UPLOADS}/2019/08/5-e1517590927505.jpg`, `${UPLOADS}/2019/08/6-e1517591000959.jpg`, `${UPLOADS}/2019/08/01-rear-elevation-c-e1517591262826.png`, `${UPLOADS}/2019/08/02-side-elevation-b-1200x848-1024x724.jpeg`, `${UPLOADS}/2019/08/02-side-elevation-b-1200x848.jpeg`, `${UPLOADS}/2019/08/03-front-elevation-a-e1517591335446.png`,
    ],
  },

};

export const contactContent = {
  essex: {
    title: 'Essex Office (Head Office)',
    tube: 'Buckhurst Hill (Central Line), 5 mins walk east on Queens Rd, next to Costa Coffee.',
    parking: 'Waitrose car park opposite (free 1.5hrs) or pay & display on High Rd / Queens Rd.',
    mapsQuery: '50 Queen\'s Road, Buckhurst Hill, IG9 5BY',
  },
  london: {
    title: 'London Office',
    tube: 'Canary Wharf (Jubilee) or DLR: Heron Quays, South Quay, Crossharbour. 10 mins walk from Canary Wharf.',
    parking: 'NCP car parks at Canary Wharf or private car park on Westferry Rd.',
    mapsQuery: 'Docklands Business Centre, 10-16 Tiller Road, London E14 8PX',
  },
};

export const faqItems = [
  { q: 'Do you offer a free initial consultation?', a: 'Yes. We offer a free initial architectural consultation to discuss your project, understand your requirements and provide preliminary advice.' },
  { q: 'What areas do you cover?', a: 'We work across Essex, London and the surrounding areas. Our offices are in Buckhurst Hill (Essex) and Docklands (Central London), and we regularly undertake projects throughout the South East.' },
  { q: 'What services do you provide?', a: 'We offer the full architectural service from initial consultation and feasibility studies through planning applications, building regulations, tender management and contract administration to project completion.' },
  { q: 'How long does a typical project take?', a: 'Timelines vary depending on project size and complexity. A straightforward extension might take 3–6 months from design to planning approval; larger projects can take 12–24 months or more.' },
  { q: 'Do you work on listed buildings?', a: 'Yes. We have experience with listed buildings and conservation areas. We can advise on the constraints and the best approach for your project.' },
];
