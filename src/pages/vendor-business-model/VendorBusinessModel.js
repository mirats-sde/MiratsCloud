import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import cx from "classnames";
import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import VendorQuestions from "../../components/vendor-questions/VendorQuestions";
import VendorProgress from "../../components/vendor-progress/VendorProgress";
import styles from "./VendorBusinessModel.module.css";

const left = [
  {
    name: "Business Model",
    value: "business-model",
  },
  {
    name: "Panel Type",
    value: "panel-type",
  },
  {
    name: "Recruitment Method",
    value: "recruitment-method",
  },
  {
    name: "Traffic Sources",
    value: "traffic-sources",
  },
  {
    name: "Communication",
    value: "communication",
  },
  {
    name: "Incentive Model",
    value: "incentive-model",
  },
];

const businessModel = [
  {
    questionLabel: "How does the partner generate revenue?",
    questionWarning: "preferred",
  },
  {
    questionLabel:
      "What is the partner's value proposition to attract consumers i.e. Is the partner a panel company, student site for discount or community?",
    questionWarning: "preferred",
  },
  {
    questionLabel:
      "Does the partner need unique survey opportunities? Is there mystery shopping, digital tracking, test products, online services, websites ratings, etc.?",
    questionWarning: "preferred",
  },
];

const panelType = [
  {
    questionLabel:
      "Is the partner's panel proprietary (managed by the partner) or is the partner using other partner panels in aggregate?",
    questionWarning: "preferred",
  },
];

const recruitmentMethod = [
  {
    questionLabel: "What is the partner's recruitment method?",
    questionWarning: "preferred",
  },
  {
    questionLabel: "What is the marketing message?",
    questionWarning: "preferred",
  },
  {
    questionLabel: "Describe the registration process.",
    questionWarning: "preferred",
  },
];

const trafficSources = [
  {
    questionLabel:
      "What is the partner's traffice source? i.e. Affiliate Networks, Direct Purchasing of Online Inventory (Google Ads, Social Media), Agencies, Gaming Platforms (CandyCrush)?",
    questionWarning: "preferred",
  },
  {
    questionLabel:
      "What online or mobile sources are used to the partner's site to acquire traffic/members?",
    questionWarning: "preferred",
  },
  {
    questionLabel: "Describe the registration process. ",
    questionWarning: "preferred",
  },
];

const communication = [
  {
    questionLabel:
      "What is the method of communication to the partner's panelists? What is the frequency? ",
    questionWarning: "preferred",
  },
];

const incentiveModel = [
  {
    questionLabel:
      "What incentives are paid to the partner's panelists for their opinion? Please include threshold amounts, time for delivery, incentive options.",
    questionWarning: "preferred",
  },
];

const businessModelQues = [
  "business-model",
  "panel-type",
  "recruitment-method",
  "traffic-sources",
  "communication",
  "incentive-model",
];

const VendorBusinessModel = () => {
  const { businessModelQuestions } = useParams();
  return (
    <>
      <Header />
      <div className={styles.vendor_onboarding}>
        <div className={styles.flex}>
          <div className={styles.left_pages}>
            {left.map((l) => {
              console.log(businessModelQuestions === l?.value);
              return (
                <div className={styles.pages}>
                  <h2
                    className={cx(styles.light, {
                      [styles.active]:
                        businessModelQuestions === l?.value
                          ? styles.active
                          : "",
                    })}
                  >
                    {l.name}
                  </h2>
                  <div className={styles.circle_wrapper}>
                    <div
                      className={cx(styles.circle, {
                        [styles.active_circle]:
                          businessModelQuestions === l?.value,
                      })}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className={styles.question_container}>
            <div className={styles.text_progress}>
              <div className={styles.vendor_text}>
                <h2>Vendor Onboarding</h2>
                <span>Business Model Questions</span>
              </div>
              <div className={styles.onboarding_process}>
                {(() => {
                  switch (businessModelQuestions) {
                    case "business-model":
                      return <VendorProgress vendorProgress="15" />;
                    case "panel-type":
                      return <VendorProgress vendorProgress="30" />;
                    case "recruitment-method":
                      return <VendorProgress vendorProgress="45" />;
                    case "traffic-sources":
                      return <VendorProgress vendorProgress="60" />;
                    case "communication":
                      return <VendorProgress vendorProgress="75" />;
                    case "incentive-model":
                      return <VendorProgress vendorProgress="100" />;
                    default:
                  }
                })()}
              </div>
            </div>
            <div className={styles.questions}>
              {(() => {
                switch (businessModelQuestions) {
                  case "business-model":
                    return <VendorQuestions questionData={businessModel} />;
                  case "panel-type":
                    return <VendorQuestions questionData={panelType} />;
                  case "recruitment-method":
                    return <VendorQuestions questionData={recruitmentMethod} />;
                  case "traffic-sources":
                    return <VendorQuestions questionData={trafficSources} />;
                  case "communication":
                    return <VendorQuestions questionData={communication} />;
                  case "incentive-model":
                    return <VendorQuestions questionData={incentiveModel} />;
                  default:
                }
              })()}
            </div>
            {/* buttons */}
            <div className={styles.btns}>
              <div className={styles.back}>
                {businessModelQues.map((businessQ, index) => {
                  if (businessModelQuestions === businessQ) {
                    return (
                      <Link to={`${businessModelQues[index - 1]}`}>
                        <button className={styles.btnBack}>BACK</button>
                      </Link>
                    );
                  }
                })}
              </div>
              <div className={styles.next}>
                {businessModelQues.map((businessQ, index) => {
                  if (businessModelQuestions === businessQ) {
                    return (
                      <Link to={`${businessModelQues[index + 1]}`}>
                        <button className={styles.btnNext}>NEXT</button>
                      </Link>
                    );
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VendorBusinessModel;

// https://stackoverflow.com/questions/47987137/props-data-map-does-not-work-in-my-component

