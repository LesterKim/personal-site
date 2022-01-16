const positions = [
  {
    company: 'Undisclosed Cryptocurrency Startup',
    position: 'Senior Software Engineer',
    link: 'https://en.wikipedia.org/wiki/Cryptocurrency',
    daterange: 'May 2021 - Present',
    points: [
      'Developing a Ruby on Rails application and data pipelines (in Python) for crypto asset management',
      'Migrating a Ruby on Rails backend into Go services',
    ],
  },
  {
    company: 'Aliro Quantum',
    position: 'Software Engineer',
    link: 'https://www.aliroquantum.com',
    daterange: 'May 2020 - May 2021',
    points: [
      'Added double-selection (single and double error) entanglement purification protocols to a quantum network simulation engine',
      'Integrated AWS Batch into the product backend and serverless deployment infrastructure to leverage cloud compute resources for scaling potentially computationally intensive simulations',
      'Contributed to SeQUeNCe, an open-source quantum network simulator, by extending the single-selection, single-purification protocol to detect phase errors as well as bit flips',
      'Worked with engineering, research, and product to design a quantum network simulator, allowing the company to pivot to becoming a leader in quantum networking',
      'Set up API key generation using JSON web tokens (JWT) to allow users to programmatically run the prototype (e.g. in a Jupyter notebook)',
      'Used Vue as the frontend framework to help build the MVP prototype to present at Quantum.Tech on June 2020',
      'Used Jest to set up Vue unit testing framework',
    ],
  },
  {
    company: 'Blue Apron',
    position: 'Software Engineer',
    link: 'https://www.blueapron.com',
    daterange: 'May 2019 - April 2020',
    points: [
      'Added Sign in with Apple and Google to allow mobile and web users to sign up and sign in with their Apple and Google accounts',
      'Refactored core backend data models (users, orders, subscriptions, coupons) to improve readability and modularity',
      'Added service to use Stripe webhook events to email customers with expiring credit cards to increase successful order rate',
      'Fixed payment platform bugs to ensure customers’ credit balances are correct by changing the order of applying customers’ coupons upon purchase and filtering out expired coupons expiring upon churn to reduce the burden on the CX team',
      'Supported targeted marketing by building pipelines to ingest data from and export data to third parties for user insights',
      'Simplified data architecture by removing pipelines from a legacy Airflow (EC2) instance',
      'Organized the first company-wide hackathon by assembling a team of volunteers (including the CEO and CTO) to manage participants, projects, awards, and catering',
    ],
  },
  {
    company: 'Littlstar',
    position: 'Data Engineer',
    link: 'https://littlstar.com',
    daterange: 'March 2017 - March 2019',
    points: [
      'Warehoused 1.1 TB of user action data by setting up a Redshift cluster which decreased data reporting time by 90%',
      'Created a data pipeline from RDS to S3 to Redshift by setting up a service on an EC2 instance which allowed joining user, video, category tables to user action data',
      'Created an S3-data-cleaning service for log data from an EC2 server by filtering and modifying incorrectly-formatted data which maintained the integrity of the Redshift data',
      'Reported business KPIs for investors by running cohort analyses and monthly views and users which led to raising a venture round of $4.2M',
      'Collaborated with another software engineer on optimizing a VR video recommendation engine by adjusting the hyperparameter weights in the user-based collaborative filtering algorithm which generated five recommendations to each user per day',
      'Hired, trained, and mentored one data engineer and two data analyst interns through interviews, onboarding, and weekly one-on-one meetings which grew data operations while reducing costs by 31%',
      'Fixed VR heatmap service which used k-means clustering on users’ headset orientation data',
    ],
  },
];

export default positions;
