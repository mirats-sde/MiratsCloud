import { useState } from "react";
import styles from "./VendorQuestion.module.css";
const VendorQuestions = ({ questionData}) => {
   const [x, setX] = useState(null)
   console.log(x)

  return (
    <>
      <div className={styles.question_container}>
        <div className={styles.vendor_questions_form}>
          {questionData.map((quedata, index) => (
            <div className={styles.container} key={index}>
              <form>
                <div className={styles.question}>
                  <p>
                    {quedata.questionText}
                    <span>{quedata.questionWarning}</span>
                  </p>
                  <div className={styles.question_label}>
                    <label>{quedata.questionLabel}</label>
                  </div>
                  <input type="text" value={x} onChange={(e) => setX(e.target.value)}/>
                </div>
              </form>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default VendorQuestions;
{/* <form>
  <div className={styles.question}>
    <p>
      {quedata.questionText}
      <span>{quedata.questionWarning}</span>
    </p>
    <div className={styles.question_label}>
      <label>{quedata.questionLabel}</label>
    </div>
    <input type="text" />
  </div>
</form>; */}
