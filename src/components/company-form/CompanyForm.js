import styles from "./CompanyForm.module.css";
import FileUpload from "../file-upload/FileUpload";

const CompanyForm = ({ companyFormData }) => {
  return (
    <div className={styles.company_info}>
      {companyFormData.map((clientData) => (
        <div className={styles.inputGroup}>
          <form className={styles.clientForm}>
            <div className={styles.companyLabel}>
              <label>
                {clientData.label}
                <span>{clientData.text}</span>
              </label>
            </div>
            <div className={styles.inputs}>
              {clientData.type === "select" ? (
                <select>
                  <option value="">1-15 Employees</option>
                  <option value="">15-60 Employees</option>
                  <option value="">60-100 Employees</option>
                  <option value="">100-1000 Employees</option>
                  <option value="">1000-10,000 Employees</option>
                </select>
              ) : (
                <input
                  type={clientData.type}
                  value={clientData.value}
                  className={styles.type}
                  placeholder={clientData.placeholder}
                ></input>
              )}
            </div>
            {clientData?.otherComponent ? <FileUpload /> : null}
          </form>
        </div>
      ))}
    </div>
  );
};

// {
//     infoFormData.map(data => (
//         <div className={styles.infoFormData}>
//             <form>
//                 <div className={styles.labelContainer}>
//                 <label>{data.labelHeader}</label>
//                 </div>
//                 <input type="text" value={data.labelInput}></input>
//                 <span>{data.edit}</span>
//             </form>
//         </div>
//     ))
// }
export default CompanyForm;
