import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
const styles = {
  body: {
    fontFamily: 'Arial, sans-serif',
    margin: 0,
    padding: 0,
    backgroundColor: '#f0f4f8',
    color: '#333',
  },
  container: {
    maxWidth: '100%',
    margin: '0 auto',
    padding: '80px 5% 20px',
  },
  header: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    zIndex: 1000,
    padding: '10px 20px',
  },
  headerContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
  },
  logoSquare: {
    backgroundColor: '#4299e1',
    color: 'white',
    padding: '10px',
    fontWeight: 'bold',
  },
  logoText: {
    marginLeft: '10px',
    fontWeight: 'bold',
    color: '#2c5282',
  },
  navMenu: {
    display: 'flex',
  },
  navItem: {
    marginLeft: '20px',
    color: '#4a5568',
    textDecoration: 'none',
  },
  mainContent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '60px',
  },
  leftColumn: {
    flex: 1,
    paddingRight: '40px',
  },
  mainHeading: {
    fontSize: '48px',
    color: '#2c5282',
    marginBottom: '20px',
  },
  description: {
    borderLeft: '2px solid #48bb78',
    paddingLeft: '20px',
    marginBottom: '20px',
    color: '#4a5568',
  },
  ctaText: {
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#2c5282',
  },
  ctaButton: {
    backgroundColor: '#4299e1',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  rightColumn: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mobileIcon: {
    width: '300px',
    height: '300px',
    border: '2px solid #e2e8f0',
    borderRadius: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  sectionTitle: {
    fontSize: '24px',
    textAlign: 'center',
    marginBottom: '20px',
    color: '#2c5282',
  },
  underline: {
    width: '200px',
    height: '2px',
    backgroundColor: '#4299e1',
    margin: '0 auto 40px',
  },
  servicesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
    gap: '20px',
    marginBottom: '60px',
  },
  serviceCard: {
    backgroundColor: 'white',
    borderRadius: '8px',
    padding: '20px',
    textAlign: 'center',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  serviceIcon: {
    fontSize: '40px',
    marginBottom: '10px',
  },
  serviceName: {
    fontWeight: 'bold',
    color: '#2c5282',
  },
  stackSection: {
    backgroundColor: 'white',
    borderRadius: '8px',
    padding: '20px',
    marginBottom: '20px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  stackTitle: {
    fontSize: '20px',
    marginBottom: '10px',
    color: '#2c5282',
  },
  stackDescription: {
    marginBottom: '20px',
    color: '#4a5568',
  },
  techGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
    gap: '20px',
  },
  techItem: {
    textAlign: 'center',
  },
  techIcon: {
    backgroundColor: '#e2e8f0',
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    margin: '0 auto 10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#4299e1',
  },
  deliveryAppPromo: {
    display: 'flex',
    backgroundColor: '#f0f0f0',
    padding: '40px 0',
    marginBottom: '60px',
  },
  promoLeft: {
    flex: 1,
    backgroundColor: '#ffd700',
    padding: '40px',
    color: 'white',
  },
  promoLogo: {
    width: '100px',
    marginBottom: '20px',
  },
  promoTitle: {
    fontSize: '24px',
    marginBottom: '20px',
  },
  promoDescription: {
    marginBottom: '20px',
  },
  appStoreButtons: {
    display: 'flex',
    marginBottom: '20px',
  },
  appStoreButton: {
    width: '150px',
    marginRight: '10px',
  },
  caseStudyButton: {
    backgroundColor: 'white',
    color: '#ffd700',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
  promoRight: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  appScreenshot: {
    maxWidth: '80%',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  '@media (max-width: 1200px)': {
    container: {
      padding: '80px 3% 20px',
    },
    mainContent: {
      flexDirection: 'column',
    },
    leftColumn: {
      paddingRight: 0,
      marginBottom: '40px',
    },
    rightColumn: {
      width: '100%',
      justifyContent: 'center',
    },
    mobileIcon: {
      width: '250px',
      height: '250px',
    },
    deliveryAppPromo: {
      flexDirection: 'column',
    },
  },
  '@media (max-width: 768px)': {
    mainHeading: {
      fontSize: '36px',
    },
    servicesGrid: {
      gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
    },
    techGrid: {
      gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))',
    },
  },
  '@media (max-width: 480px)': {
    headerContent: {
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
    navMenu: {
      flexDirection: 'column',
      marginTop: '10px',
    },
    navItem: {
      marginLeft: 0,
      marginTop: '10px',
    },
    mainHeading: {
      fontSize: '28px',
    },
    servicesGrid: {
      gridTemplateColumns: '1fr 1fr',
    },
    techGrid: {
      gridTemplateColumns: '1fr 1fr',
    },
    appStoreButtons: {
      flexDirection: 'column',
    },
    appStoreButton: {
      marginBottom: '10px',
    },
  },
};
const services = [
  { name: 'Android Development', icon: '🤖' },
  { name: 'iOS Development', icon: '🍎' },
  { name: 'Hybrid App Development', icon: '📱' },
  { name: 'Wearable Development', icon: '⌚' },
  { name: 'UI/UX Designing', icon: '🎨' },
  { name: 'IOT Development', icon: '☁️' },
  { name: 'Website Development', icon: '💻' },
  { name: 'Laravel Development', icon: '🛠️' },
  { name: 'Node.JS Development', icon: '🟢' },
  { name: 'Python Solutions', icon: '🐍' },
  { name: 'ERP Development', icon: '🔄' },
  { name: 'Enterprise Software Solutions', icon: '🏢' },
  { name: 'E-Governance Solutions', icon: '🏛️' },
  { name: 'Cane software Development', icon: '🌾' },
  { name: 'Distilleries Software Development', icon: '🥃' },
];

const mobileStacks = [
  'Kotlin', 'Java', 'Flutter', 'Dart', 'RxJava', 
  'JUnit', 'Almofire', 'CoreData', 'SQLite', 'Firebase'
];

const webStacks = [
  'PYTHON', 'C-SHARP', 'JAVA', 'EXPRESS', 'DJANGO', 
  'JavaScript', 'HTML', 'CSS', 'REACT', 'NEXT.JS'
];

const DeliveryAppPromo = () => (
  <section style={styles.deliveryAppPromo}>
    <div style={styles.promoLeft}>
      <img src="/path-to-logo.png" alt="HereYet Delivery Logo" style={styles.promoLogo} />
      <h2 style={styles.promoTitle}>HereYet Delivery</h2>
      <p style={styles.promoDescription}>
        With next-gen technologies, we bring Mobile app development to SMEs,
        startups, and industry giants with the vision to digitize experiences. Get
        ready for state-of-the art mobility solutions at your fingertips.
      </p>
      <div style={styles.appStoreButtons}>
        <img src="/path-to-google-play.png" alt="Get it on Google Play" style={styles.appStoreButton} />
        <img src="/path-to-app-store.png" alt="Available on the App Store" style={styles.appStoreButton} />
      </div>
      <button style={styles.caseStudyButton}>Case Study</button>
    </div>
    <div style={styles.promoRight}>
      <img src="/path-to-app-screenshot.png" alt="HereYet Delivery App Screenshot" style={styles.appScreenshot} />
    </div>
  </section>
);

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={styles.body}>
      <header style={styles.header}>
        <div style={styles.headerContent}>
          <div style={styles.logo}>
            <span style={styles.logoSquare}>A</span>
            <span style={styles.logoText}>ppther</span>
          </div>
          <nav style={styles.navMenu}>
            {['Services', 'Domain Expertise', 'Portfolio', 'Blog', 'Contact us'].map((item) => (
              <a key={item} href="#" style={styles.navItem}>{item}</a>
            ))}
          </nav>
        </div>
      </header>

      <main style={styles.container}>
        <div style={styles.mainContent}>
          <div style={styles.leftColumn}>
            <h1 style={styles.mainHeading}>MOBILE SO</h1>
            <p style={styles.description}>
              We help businesses make catalytic strides with our AI-engineered mobile
              applications curated by exemplary professionals. We amalgamate the potential of
              Machine Learning, Deep Learning, and other AI subsets to deliver the mobile
              apps that prevail.
            </p>
            <p style={styles.ctaText}>Ready to create the next "Big Thing"</p>
            <button style={styles.ctaButton}>Contact us</button>
          </div>
          <div style={styles.rightColumn}>
            <div style={styles.mobileIcon}>
              <svg width="150" height="150" viewBox="0 0 24 24" fill="none" stroke="#4299e1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                <path d="M12 18h.01" />
              </svg>
            </div>
          </div>
        </div>

        <h2 style={styles.sectionTitle}>Which Accomplish Every Business Need.</h2>
        <div style={styles.underline}></div>
        <div style={styles.servicesGrid}>
          {services.map((service, index) => (
            <div key={index} style={styles.serviceCard}>
              <div style={styles.serviceIcon}>{service.icon}</div>
              <p style={styles.serviceName}>{service.name}</p>
            </div>
          ))}
        </div>

        <DeliveryAppPromo />

        <h2 style={styles.sectionTitle}>Technology Stack</h2>
        
        <div style={styles.stackSection}>
          <h3 style={styles.stackTitle}>Mobile Development Stacks</h3>
          <p style={styles.stackDescription}>
            Mobile application development is the process of creating software applications that run on a
            mobile device, and a typical mobile application utilizes a network connection to work with remote
            computing resources.
          </p>
          <div style={styles.techGrid}>
            {mobileStacks.map((tech, index) => (
              <div key={index} style={styles.techItem}>
                <div style={styles.techIcon}>{tech[0]}</div>
                <span>{tech}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={styles.stackSection}>
          <h3 style={styles.stackTitle}>Web Development Stacks</h3>
          <p style={styles.stackDescription}>
            Web development is the work involved in developing a Web site for the Internet (World
            Wide Web) or an intranet (a private network). Web development can range from developing a
            simple single static page plain text to complex web applications, electronic businesses, and
            social network services.
          </p>
          <div style={styles.techGrid}>
            {webStacks.map((tech, index) => (
              <div key={index} style={styles.techItem}>
                <div style={styles.techIcon}>{tech[0]}</div>
                <span>{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
