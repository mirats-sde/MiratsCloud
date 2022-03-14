import Header from "../../components/header/Header";
// import SubHeader from "../../components/SubHeader";
import SubHeader from "../../components/header/SubHeader";
import "./mainPage.css";
import Card from "../../components/Cards/Cards";
import StatsCard from "../../components/StatsCard/StatsCard";
import CustomerCard from "../../components/CustomerCard/CustomerCard";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import Footer from "../../components/Footer/Footer";
import Pixelbar from "../../components/pixel-bar/PixelBar";

const data = [
  {
    img: "https://www.gstatic.com/bricks/image/4836174ae9f0e2b9f4013f4efe6239d0757e32b91e4df935f7aa711918d324bd.svg",
    title: "Infrastructure modernization",
    desc: "Modernize your cloud infrastructure and run critical workloads like VMware, SAP, Oracle, and Windows natively on Google Cloud.",
  },
  {
    img: "https://www.gstatic.com/bricks/image/e53c9a2aaaaef8f49dc9745efc9794a3e057fd75121af3d30deedb91489f9827.svg",
    title: "Databases",
    desc: "Modernize your cloud infrastructure and run critical workloads like VMware, SAP, Oracle, and Windows natively on Google Cloud.",
  },
  {
    img: "https://www.gstatic.com/bricks/image/4836174ae9f0e2b9f4013f4efe6239d0757e32b91e4df935f7aa711918d324bd.svg",
    title: "Infrastructure modernization",
    desc: "Modernize your cloud infrastructure and run critical workloads like VMware, SAP, Oracle, and Windows natively on Google Cloud.",
  },
  {
    img: "https://www.gstatic.com/bricks/image/4836174ae9f0e2b9f4013f4efe6239d0757e32b91e4df935f7aa711918d324bd.svg",
    title: "Infrastructure modernization",
    desc: "Modernize your cloud infrastructure and run critical workloads like VMware, SAP, Oracle, and Windows natively on Google Cloud.",
  },
  {
    img: "https://www.gstatic.com/bricks/image/4836174ae9f0e2b9f4013f4efe6239d0757e32b91e4df935f7aa711918d324bd.svg",
    title: "Infrastructure modernization",
    desc: "Modernize your cloud infrastructure and run critical workloads like VMware, SAP, Oracle, and Windows natively on Google Cloud.",
  },
  {
    img: "https://www.gstatic.com/bricks/image/4836174ae9f0e2b9f4013f4efe6239d0757e32b91e4df935f7aa711918d324bd.svg",
    title: "Infrastructure modernization",
    desc: "Modernize your cloud infrastructure and run critical workloads like VMware, SAP, Oracle, and Windows natively on Google Cloud.",
  },
];

// statistics card
const statsData = [
  {
    stats: "8/ top 10",
    statsTitle: "Telecommunications companies",
  },

  {
    stats: "7/ top 10",
    statsTitle: "Telecommunications companies",
  },

  {
    stats: "6/ top 10",
    statsTitle: "Telecommunications companies",
  },

  {
    stats: "5/ top 10",
    statsTitle: "Telecommunications companies",
  },

  {
    stats: "8/ top 10",
    statsTitle: "Telecommunications companies",
  },

  {
    stats: "9/ top 10",
    statsTitle: "Telecommunications companies",
  },
  {
    stats: "9/ top 10",
    statsTitle: "Telecommunications companies",
  },
  {
    stats: "9/ top 10",
    statsTitle: "Telecommunications companies",
  },
];

// carousel
const items = [
  {
    name: "Random Name #1",
    description: "Probably the most random thing you have ever seen!",
    // img: 'https://picsum.photos/100/100'
  },
  {
    name: "Random Name #2",
    description: "Hello World!",
  },
  {
    name: "Random Name #3",
    description: "Google Cloud!",
  },
  {
    name: "Random Name #4",
    description: "Hello World!",
  },
];

// customer cards
const customerCard = [
  "https://lh3.googleusercontent.com/C16bOr36b6OXVexrlvAGl6C7bPX6ayWOq-5YdMwAuwsTqekCHfLCvGYBLcODpidWorLMj9ZG_l8_Ug=e14-rj-sc0xffffff-h124-w220",
  "https://lh3.googleusercontent.com/b_7mNyxpwSKipKRA59OWpCaqn8U02b2qHaJ2PfTZL5ZiO9p6SL_nKrVVxgr6AyIUIoPeWQeO6WfP=e14-rj-sc0xffffff-h124-w220",
  "https://lh3.googleusercontent.com/RDDWa0ZnDWhYBmpIZOr_9OuyMxuEJzzzz0oNREKpDag6iQlfNsYNJWm3anVQibxLRU6EvSZBAS_P=e14-rj-sc0xffffff-h124-w220",
  "https://lh3.googleusercontent.com/E4bS5mFS0voFhgjve4fEYIPfEVAiSYzcqpX-nSZioMgWwhz_fie_XohEoV66S_aNMH8rFfyhwxA=e14-rj-sc0xffffff-h124-w220",
  "https://lh3.googleusercontent.com/zAZq76io8XlkSmUvpgzeF2cUo-esKXFg3mceAsW4MakqA45QyrheJweaIDFoSJ9qu3HjhGrcol6Y=e14-rj-sc0xffffff-h124-w220",
  "https://lh3.googleusercontent.com/C16bOr36b6OXVexrlvAGl6C7bPX6ayWOq-5YdMwAuwsTqekCHfLCvGYBLcODpidWorLMj9ZG_l8_Ug=e14-rj-sc0xffffff-h124-w220",
  "https://lh3.googleusercontent.com/b_7mNyxpwSKipKRA59OWpCaqn8U02b2qHaJ2PfTZL5ZiO9p6SL_nKrVVxgr6AyIUIoPeWQeO6WfP=e14-rj-sc0xffffff-h124-w220",
  "https://lh3.googleusercontent.com/RDDWa0ZnDWhYBmpIZOr_9OuyMxuEJzzzz0oNREKpDag6iQlfNsYNJWm3anVQibxLRU6EvSZBAS_P=e14-rj-sc0xffffff-h124-w220",
  "https://lh3.googleusercontent.com/E4bS5mFS0voFhgjve4fEYIPfEVAiSYzcqpX-nSZioMgWwhz_fie_XohEoV66S_aNMH8rFfyhwxA=e14-rj-sc0xffffff-h124-w220",
  "https://lh3.googleusercontent.com/zAZq76io8XlkSmUvpgzeF2cUo-esKXFg3mceAsW4MakqA45QyrheJweaIDFoSJ9qu3HjhGrcol6Y=e14-rj-sc0xffffff-h124-w220",
  "https://lh3.googleusercontent.com/C16bOr36b6OXVexrlvAGl6C7bPX6ayWOq-5YdMwAuwsTqekCHfLCvGYBLcODpidWorLMj9ZG_l8_Ug=e14-rj-sc0xffffff-h124-w220",
  "https://lh3.googleusercontent.com/b_7mNyxpwSKipKRA59OWpCaqn8U02b2qHaJ2PfTZL5ZiO9p6SL_nKrVVxgr6AyIUIoPeWQeO6WfP=e14-rj-sc0xffffff-h124-w220",
  "https://lh3.googleusercontent.com/RDDWa0ZnDWhYBmpIZOr_9OuyMxuEJzzzz0oNREKpDag6iQlfNsYNJWm3anVQibxLRU6EvSZBAS_P=e14-rj-sc0xffffff-h124-w220",
  "https://lh3.googleusercontent.com/E4bS5mFS0voFhgjve4fEYIPfEVAiSYzcqpX-nSZioMgWwhz_fie_XohEoV66S_aNMH8rFfyhwxA=e14-rj-sc0xffffff-h124-w220",
  "https://lh3.googleusercontent.com/zAZq76io8XlkSmUvpgzeF2cUo-esKXFg3mceAsW4MakqA45QyrheJweaIDFoSJ9qu3HjhGrcol6Y=e14-rj-sc0xffffff-h124-w220",
];

function Item(props) {
  return (
    <Paper className="carousel-wrapper">
      <h2>{props.item.name}</h2>
      <p>{props.item.description}</p>
      <img alt="">{props.item.img}</img>
      <Button className="CheckButton">Check it out!</Button>
    </Paper>
  );
}

// main page
function MainPage() {
  return (
    <div className="container main-page">
      <Header />
      <SubHeader />

      <div className="main-content">
        <main className="showcase">
          <div className="showcase-text">
            <h1 className="title">
              Accelerate your transformation with Google Cloud
            </h1>
            <p className="showcase-para">
              Build apps faster, make smarter business decisions, and connect
              people anywhere.
            </p>

            <button className="showcase-btn">Get Started For Free</button>
          </div>

          <div className="carousel">
            <Carousel>
              {items.map((item, i) => {
                return <Item key={i} item={item} />;
              })}
            </Carousel>
          </div>
        </main>

        <Pixelbar />

        <section className="showcase-info">
          <div className="info">
            <span>Develop new apps and experiences faster</span>
            <p>
              Avoid vendor lock-in and speed up development with Google Cloud’s
              commitment to open source, multicloud, and hybrid cloud.
            </p>
          </div>

          <div className="info">
            <span>Develop new apps and experiences faster</span>
            <p>
              Avoid vendor lock-in and speed up development with Google Cloud’s
              commitment to open source, multicloud, and hybrid cloud.
            </p>
          </div>

          <div className="info">
            <span>Develop new apps and experiences faster</span>
            <p>
              Avoid vendor lock-in and speed up development with Google Cloud’s
              commitment to open source, multicloud, and hybrid cloud.
            </p>
          </div>

          <div className="info">
            <span>Develop new apps and experiences faster</span>
            <p>
              Avoid vendor lock-in and speed up development with Google Cloud's
              commitment to open source, multicloud, and hybrid cloud.
            </p>
          </div>
        </section>

        {/* statistics */}
        <div className="statistics">
          <h1>Leading companies trust Google Cloud</h1>
          <section className="stats-wrapper">
            {statsData.map((s) => (
              <StatsCard stats={s.stats} statsTitle={s.statsTitle} />
            ))}
          </section>

          <div className="stats-btn">
            <button>See industry solutions</button>
          </div>
        </div>

        {/* customer cards */}
        <section className="customer-stories">
          <div className="customer-wrapper">
            {customerCard.map((card) => {
              return <CustomerCard customerImg={card} />;
            })}
          </div>

          <div className="customer-btn">
            <button>See customer stories</button>
          </div>
        </section>

        {/* map with info card */}
        <section className="map">
          <div className="map-card">
            <div className="region">
              <h2>29</h2>
              <h5>regions</h5>
            </div>
            <div className="zones">
              <h2>29</h2>
              <h5>zones</h5>
            </div>
            <div className="network">
              <h2>29</h2>
              <h5>network</h5>
            </div>
            <div className="countries">
              <h2>29</h2>
              <h5>countries</h5>
            </div>
          </div>

          <div className="map-info">
            <div className="map-img">
              <img
                src="https://media.istockphoto.com/vectors/world-map-vector-id1220187238?k=20&m=1220187238&s=612x612&w=0&h=9Ew8z1UmJJoeuivDl7qKgPzw8NrMd7os4SmsA5YQm34="
                alt=""
              ></img>
            </div>
            <div className="map-available">
              <span>
                COMING SOON! Google Cloud will continue expanding into the
                following regions: Doha (Qatar), Paris (France), Milan (Italy),
                Madrid (Spain), Turin (Italy), Columbus (US), and Berlin
                (Germany).
              </span>
            </div>
          </div>
        </section>

        {/* services offered cards */}

        <div className="cards">
          <h1>Solve your toughest business challenges here</h1>
          <section className="card-wrapper">
            {data.map((d) => (
              <Card img={d.img} title={d.title} description={d.desc} />
            ))}
          </section>
        </div>

        {/* google cloud banner */}
        {/* <div className="banner-links">
				<section className='cloud-banner'>
					<h1>Take the next step</h1>
					<div className='project'>
						<p>
							Start your next project, explore interactive
							tutorials, and manage your account.
						</p>
						<button className='project-btn'>
							Try Google Cloud free
						</button>
					</div>
					<div className='contact-sales'>
						<p>
							Tell us what you're solving for. A Google expert
							will help you find the best solution.
						</p>
						<button className='contact-btn'>Contact Sales</button>
					</div>
				</section> */}

        {/* reports, news, resources */}
        <div className="banner-links">
          <section className="cloud-banner">
            <h1>Take the next step</h1>
            <div className="project">
              <p>
                Start your next project, explore interactive tutorials, and
                manage your account.
              </p>
              <button className="project-btn">Try Google Cloud free</button>
            </div>
            <div className="contact-sales">
              <p>
                Tell us what you're solving for. A Google expert will help you
                find the best solution.
              </p>
              <button className="contact-btn">Contact Sales</button>
            </div>
          </section>

          {/* reports, news, resources */}
          <section className="reports">
            <ul className="analyst-report">
              <h3>Analyst reports</h3>
              <li>
                <a href="www.google.com">
                  GKE scores 92/100 in Gartner's Public Cloud Kubernetes
                  Services Solution Scorecard
                </a>
              </li>
              <li>
                <a href="www.google.com">
                  Google Cloud is named a Leader in The Forrester Wave™:
                  Streaming Analytics, Q2 2021
                </a>
              </li>
              <li>
                <a href="www.google.com">
                  The Forrester Wave™: Unstructured Data Security Platforms, Q2
                  2021 report
                </a>
              </li>
            </ul>

            <ul className="news">
              <h3>Latest News</h3>
              <li>
                <a href="www.google.com">What's new with Google Cloud</a>
              </li>
              <li>
                <a href="www.google.com">
                  How Google Cloud is enabling vaccine equity
                </a>
              </li>
              <li>
                <a href="www.google.com">
                  How Google Cloud is enabling vaccine equity
                </a>
              </li>
              <li>
                <a href="www.google.com">See more blog posts</a>
              </li>
            </ul>

            <ul className="resources">
              <h3>Resources</h3>
              <li>
                <a href="www.google.com">Training</a>
              </li>
              <li>
                <a href="www.google.com">Certification</a>
              </li>
              <li>
                <a href="www.google.com">Partner directory</a>
              </li>
              <li>
                <a href="www.google.com">Developer community</a>
              </li>
            </ul>
          </section>
        </div>
        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
export default MainPage;

// https://levelup.gitconnected.com/adding-transitions-to-a-react-carousel-with-material-ui-b95825653c1b
