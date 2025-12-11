import { useState } from "react";
import styles from "./TypeOfHelp.module.scss";
import { typeOfHelp, paymentMethods } from "../../const/TypeOfHelp";
import type { FormProps } from "../../types/formProps";

const TypeOfHelp = ({ formData, updateField }: FormProps) => {
  const [selectedType, setSelectedType] = useState<number | null>(
    formData.helpType || null
  );
  const [selectedPayment, setSelectedPayment] = useState<number | null>(
    formData.paymentMethod || null
  );

  const handleTypeSelect = (id: number) => {
    setSelectedType(id);
    updateField("helpType", id);
    setSelectedPayment(null);
    updateField("paymentMethod", 0);
  };

  const handlePaymentSelect = (id: number) => {
    setSelectedPayment(id);
    updateField("paymentMethod", id);
  };

  const handleCardNumberChange = (index: number, value: string) => {
    if (/^\d{0,4}$/.test(value)) {
      const newCardNumber = [...formData.cardNumber];
      newCardNumber[index] = value;
      updateField("cardNumber", newCardNumber.toString());

      if (value.length === 4 && index < formData.cardNumber.length - 1) {
        const nextInput = document.getElementById(
          `card-${index + 1}`
        ) as HTMLInputElement | null;
        nextInput?.focus();
      }
    }
  };

  const handleExpiryChange = (value: string) => {
    const cleaned = value.replace(/\D/g, "");
    const formatted =
      cleaned.length > 2
        ? cleaned.slice(0, 2) + "/" + cleaned.slice(2, 4)
        : cleaned;
    updateField("expiryDate", formatted);
  };

  const handleCvvChange = (value: string) => {
    if (value.length <= 3 && /^\d*$/.test(value)) {
      updateField("cvv", value);
    }
  };

  return (
    <div className={styles.donation}>
      <h2 className={styles.donation__title}>Види допомоги</h2>
      <p className={styles.donation__description}>Виберіть тип допомоги</p>

      <div className={styles.donation__types}>
        {typeOfHelp.map((item) => (
          <div key={item.id} className={styles.donation__type}>
            <button
              type="button"
              className={`${styles.donation__typeButton} ${
                selectedType === item.id
                  ? styles["donation__typeButton--active"]
                  : ""
              }`}
              style={
                selectedType === item.id
                  ? { backgroundColor: item.color }
                  : undefined
              }
              onClick={() => handleTypeSelect(item.id)}
            >
              <span className={styles.donation__typeIcon}>{item.icon}</span>
            </button>
            <span className={styles.donation__typeLabel}>{item.name}</span>
          </div>
        ))}
      </div>

      {selectedType === 2 && (
        <section className={styles.donation__payment}>
          <div className={styles.donation__paymentMethodsSection}>
            <h3 className={styles.donation__sectionTitle}>Спосіб оплати</h3>
            <div className={styles.donation__paymentMethods}>
              {paymentMethods.map((method) => (
                <button
                  type="button"
                  key={method.id}
                  className={`${styles.donation__paymentMethod} ${
                    selectedPayment === method.id
                      ? styles["donation__paymentMethod--active"]
                      : ""
                  }`}
                  style={
                    selectedPayment === method.id
                      ? { backgroundColor: method.color }
                      : undefined
                  }
                  onClick={() => handlePaymentSelect(method.id)}
                >
                  <span className={styles.donation__paymentIcon}>
                    {method.icon}
                  </span>
                  <span className={styles.donation__paymentLabel}>
                    {method.name}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {selectedPayment && (
            <div className={styles.donation__cardForm}>
              <h3 className={styles.donation__sectionTitle}>Дані карти</h3>
              <div className={styles.donation__wrapper}>
                <div className={styles.donation__fieldCard}>
                  <label className={styles.donation__label}>Номер карти</label>
                  <div className={styles.donation__cardNumber}>
                    {formData.cardNumber.map((digit, index) => (
                      <input
                        key={index}
                        id={`card-${index}`}
                        className={styles.donation__cardInput}
                        value={digit}
                        onChange={(e) =>
                          handleCardNumberChange(index, e.target.value)
                        }
                        maxLength={4}
                        placeholder="****"
                      />
                    ))}
                  </div>
                </div>

                <div className={styles.donation__row}>
                  <div className={styles.donation__field}>
                    <label className={styles.donation__label}>Термін дії</label>
                    <input
                      className={styles.donation__input}
                      placeholder="MM/YY"
                      value={formData.expiryDate}
                      onChange={(e) => handleExpiryChange(e.target.value)}
                    />
                  </div>
                  <div className={styles.donation__field}>
                    <label className={styles.donation__label}>CVC / CVV</label>
                    <input
                      className={styles.donation__input}
                      placeholder="***"
                      value={formData.cvv}
                      onChange={(e) => handleCvvChange(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>
      )}
    </div>
  );
};

export default TypeOfHelp;
