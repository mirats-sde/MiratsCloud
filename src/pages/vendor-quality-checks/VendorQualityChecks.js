import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import Header from "../../components/header/Header";
import VendorProgress from "../../components/vendor-progress/VendorProgress";
import VendorQuestions from "../../components/vendor-questions/VendorQuestions";
import styles from "./VendorQualityChecks.module.css";
import cx from "classnames";
import { Link } from "react-router-dom";
// import { useState } from "react";

const left = [
  {
    name: "Registration Attributes",
    value: "registration-attributes",
  },
  {
    name: "Registration Identities",
    value: "registration-identities",
  },
  {
    name: "Registration Requirements",
    value: "registration-requirements",
  },
  {
    name: "Registration Validation",
    value: "registration-validation",
  },
  {
    name: "Quality Checks",
    value: "quality-checks",
  },
];

const regAttributes = [
  {
    questionText: "Mandatory Registration Attributes",
    questionLabel:
      "How many attributes are required for a user to join or become an active user eligible for surveys?",
    questionWarning: "preferred",
  },
  {
    questionText: "Minimum Registration Information Requirements",
    questionLabel:
      "What Are The Minimum Pieces Of Information required for registration? Please List All.",
    questionWarning: "preferred",
  },
  {
    questionText: "Verification Of Minimum Attributes",
    questionLabel:
      "Do you have procedures in place for verifying the minimum attributes? Please describe.",
    questionWarning: "preferred",
  },
];

const regIdentities = [
  {
    questionText: "Post code Format Verification",
    questionLabel:
      "Do you have procedures in place to verify post code? Please describe.",
    questionWarning: "preferred",
  },
  {
    questionText: "Linking Accounts",
    questionLabel:
      "Do you have checks in please to flag linked members, based on cookie technology, that are potential duplicates? Please describe.",
    questionWarning: "preferred",
  },
  {
    questionText: "Email-Duplication",
    questionLabel:
      "Do you have checks in place to prevents duplicate emails from registering? Please describe.",
    questionWarning: "preferred",
  },
];

const regRequirements = [
  {
    questionText: "Email Validation",
    questionLabel:
      "Do you have checks for to validate correct email format? Please describe.",
    questionWarning: "preferred",
    // input: <input type="text" value={} onChange={} />,
  },
  {
    questionText: "DOI",
    questionLabel:
      "Is your panel Single or Double Opted in? If you do not have your own panel please respond based on your publisher's set up",
    questionWarning: "preferred",
  },
  {
    questionText: "Email Domain Blocklist",
    questionLabel:
      "Do you have a check in place for comparing user email domains against known problematic domains? Please describe.",
    questionWarning: "preferred",
  },
];

const regValidation = [
  {
    questionText: "Registration Captcha",
    questionLabel:
      "Do you have a registration captcha in place? Please describe.",
    questionWarning: "preferred",
  },
  {
    questionText: "Unique Quick Check",
    questionLabel:
      "Do you have checks in place for confirming if a user's information is unique? Please describe.",
    questionWarning: "preferred",
  },
  {
    questionText: "Minimum Age Check",
    questionLabel:
      "Do you have a check in place for age range within a given country / culture? Please describe.",
    questionWarning: "preferred",
  },
];

const qualityChecks = [
  {
    questionText: "3rd Party Address & Validation",
    questionLabel:
      "Do you have a check in place that validates user information- specifically address,first name, last name, and birth date in US and CA. Please describe.",
    questionWarning: "preferred",
  },
  {
    questionText: "Unique Full Check",
    questionLabel:
      "Do you have a check in place that validate the full user information given (i.e. unique first name, stripped email username, ip address, full address, last name, postal code, birthdate, and country), with different combinations of the data? Please describe.",
    questionWarning: "preferred",
  },
  {
    questionText: "Quality Check",
    questionLabel:
      "Please outline the details around the fraud/quality check you conducts during a users lifetime.",
    questionWarning: "preferred",
  },
];

const questionTypes = [
  "registration-attributes",
  "registration-identities",
  "registration-requirements",
  "registration-validation",
  "quality-checks",
];

const VendorQualityChecks = () => {
  const { questionType } = useParams();

  return (
    <>
      <Header />
      <div className={styles.vendor_onboarding}>
        <div className={styles.left_pages}>
          {left.map((l) => {
            // console.log(questionType === l?.value);
            return (
              <div className={styles.pages}>
                <h2
                  className={cx(styles.light, {
                    [styles.active]:
                      questionType === l?.value ? styles.active : "",
                  })}
                >
                  {l.name}
                </h2>
                <div className={styles.circle_wrapper}>
                  <div
                    className={cx(styles.circle, {
                      [styles.active_circle]: questionType === l?.value,
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
              <span>Quality Checks</span>
            </div>
            <div className={styles.onboarding_process}>
              {/* <VendorProgress vendorProgress="20" /> */}
              {(() => {
                switch (questionType) {
                  case "registration-attributes":
                    return <VendorProgress vendorProgress="20" />;
                  case "registration-identities":
                    return <VendorProgress vendorProgress="40" />;
                  case "registration-requirements":
                    return <VendorProgress vendorProgress="60" />;
                  case "registration-validation":
                    return <VendorProgress vendorProgress="80" />;
                  case "quality-checks":
                    return <VendorProgress vendorProgress="100" />;
                  default:
                }
              })()}
            </div>
          </div>
          <div className={styles.questions}>
            {(() => {
              switch (questionType) {
                case "registration-attributes":
                  return <VendorQuestions questionData={regAttributes} />;
                case "registration-identities":
                  return <VendorQuestions questionData={regIdentities} />;
                case "registration-requirements":
                  return <VendorQuestions questionData={regRequirements} />;
                case "registration-validation":
                  return <VendorQuestions questionData={regValidation} />;
                case "quality-checks":
                  return <VendorQuestions questionData={qualityChecks} />;
                default:
              }
            })()}
          </div>
        </div>
        {/* buttons */}
        <div className={styles.btns}>
          <div className={styles.back}>
            {questionTypes.map((q, index) => {
              if (questionType === q) {
                return (
                  <Link to={`${questionTypes[index - 1]}`}>
                    <button className={styles.btnBack}>BACK</button>
                  </Link>
                );
              }
            })}
          </div>
          <div className={styles.next}>
            {questionTypes.map((q, index) => {
              if (questionType === q) {
                return (
                  <Link to={`${questionTypes[index + 1]}`}>
                    <button className={styles.btnNext}>NEXT</button>
                  </Link>
                );
              }
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default VendorQualityChecks;
