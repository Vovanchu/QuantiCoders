import TypeOfHelp from "../TypeOfHelp";
import styles from "./PhysicalForm.module.scss";
import type { FormProps } from "../../types/formProps";

const PhysicalForm = ({ formData, updateField }: FormProps) => {
  return (
    <>
      <div className={styles.form}>
        <div className={styles.form_leftColumn}>
          <div className={styles.form_leftColumn_personalInfo}>
            <div className={styles.row}>
              <div className={styles.field}>
                <label htmlFor="firstName">
                  Імʼя <span className={styles.importantField}>*</span>
                </label>

                <input
                  required
                  type="text"
                  id="firstName"
                  placeholder="Write your First Name"
                  value={formData.firstName}
                  onChange={(e) => updateField("firstName", e.target.value)}
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="lastName">
                  Фамілія <span className={styles.importantField}>*</span>
                </label>
                <input
                  required
                  type="text"
                  id="lastName"
                  placeholder="Write your Last Name"
                  value={formData.lastName}
                  onChange={(e) => updateField("lastName", e.target.value)}
                />
              </div>
            </div>
          </div>

          <label>Назва компанії / організації</label>
          <div className={styles.row}>
            <input
              type="text"
              placeholder="Write name of your company/organization"
              value={formData.company}
              onChange={(e) => updateField("company", e.target.value)}
              className={styles.companyInput}
            />

            <label className={styles.uploadButton}>
              + Логотип
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    updateField("companyLogo", file);
                  }
                }}
                style={{ display: "none" }}
              />
            </label>
          </div>

          <label>
            Email-адрес <span className={styles.importantField}>*</span>
          </label>
          <input
            required
            type="email"
            placeholder="Write your email"
            value={formData.email}
            onChange={(e) => updateField("email", e.target.value)}
          />

          <label>
            Номер телефону <span className={styles.importantField}>*</span>
          </label>
          <input
            required
            type="tel"
            placeholder="Write your phone number"
            value={formData.phone}
            onChange={(e) => {
              let value = e.target.value;

              // Якщо користувач видалив усе — повертаємо +38
              if (value === "") {
                updateField("phone", "+38");
                return;
              }

              // Якщо почав вводити без +38 — додаємо
              if (!value.startsWith("+")) {
                value = "+38" + value.replace(/\D/g, "");
              }

              updateField("phone", value);
            }}
            onFocus={() => {
              if (!formData.phone) {
                updateField("phone", "+38");
              }
            }}
          />
        </div>

        <div className={styles.form_rightColumn}>
          <label>
            Країна <span className={styles.importantField}>*</span>
          </label>
          <input
            required
            type="text"
            placeholder="Write your country"
            value={formData.country}
            onChange={(e) => updateField("country", e.target.value)}
          />

          <div className={styles.row}>
            <div className={styles.field}>
              <label>
                Місто <span className={styles.importantField}>*</span>
              </label>
              <input
                required
                type="text"
                placeholder="Write your city"
                value={formData.city}
                onChange={(e) => updateField("city", e.target.value)}
              />
            </div>

            <div className={styles.field}>
              <label>Штат / район</label>
              <input
                type="text"
                placeholder="Write your state"
                value={formData.state}
                onChange={(e) => updateField("state", e.target.value)}
              />
            </div>
          </div>

          <label>Адреса</label>
          <input
            type="text"
            placeholder="Write your address"
            value={formData.address}
            onChange={(e) => updateField("address", e.target.value)}
          />

          <label className={styles.postIndex}>
            Поштовий Індекс <span className={styles.importantField}>*</span>
          </label>
          <input
            required
            type="number"
            className={styles.postIndexInput}
            placeholder="Write your Post Index"
            value={formData.postIndex}
            onChange={(e) => updateField("postIndex", e.target.value)}
          />
        </div>
      </div>

      <TypeOfHelp formData={formData} updateField={updateField} />
    </>
  );
};

export default PhysicalForm;
