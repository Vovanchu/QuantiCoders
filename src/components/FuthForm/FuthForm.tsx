import { useState } from "react";
import PhysicalForm from "../PhysicalForm/PhysicalForm";
import LegalForm from "../LegalForm/LegalForm";
import styles from "./FuthForm.module.scss";
import type { FormData } from "../../types/formProps";
import Swal from "sweetalert2";

const FuthForm = () => {
  const [activeForm, setActiveForm] = useState<"physical" | "legal">(
    "physical"
  );

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phone: "",
    country: "",
    companyLogo: null,
    city: "",
    state: "",
    address: "",
    postIndex: "",

    helpType: 0,
    paymentMethod: 0,

    cardNumber: ["", "", "", ""],
    expiryDate: "",
    cvv: "",

    helpSubType: null,
  });

  const updateField = (
    name: keyof FormData,
    value: string | number | string[] | null | File
  ) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const emptyFields: string[] = [];

    for (const key of Object.keys(formData) as Array<keyof FormData>) {
      const value = formData[key];

      // Перевірка для рядків
      if (typeof value === "string" && value.trim() === "") {
        emptyFields.push(key);
        continue;
      }

      // Перевірка для чисел
      if (typeof value === "number" && !value) {
        emptyFields.push(key);
        continue;
      }

      // Перевірка для масивів
      if (Array.isArray(value) && value.some((v) => v === "")) {
        emptyFields.push(key);
        continue;
      }

      // Перевірка для об’єктів
      if (
        typeof value === "object" &&
        !Array.isArray(value) &&
        value !== null &&
        Object.keys(value).length === 0
      ) {
        emptyFields.push(key);
        continue;
      }
    }

    if (emptyFields.length > 0) {
      Swal.fire({
        icon: "error",
        title: "Помилка",
        html: `Будь ласка, заповніть наступні поля:<br>${emptyFields.join(
          ", "
        )}`,
      });
      return;
    }

    console.log("SUBMIT:", formData);

    Swal.fire({
      icon: "success",
      title: "Форма відправлена!",
      text: "Дякуємо за заповнення форми",
    });
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Заповніть форму</h1>
      <div className={styles.buttons}>
        <button
          onClick={() => setActiveForm("physical")}
          className={activeForm === "physical" ? styles.active : ""}
        >
          Фіз.Особа
        </button>
        <button
          onClick={() => setActiveForm("legal")}
          className={activeForm === "legal" ? styles.active : ""}
        >
          Юр.Особа
        </button>
      </div>

      <form
        onSubmit={handleSubmit}
        className={`${styles.formWrapper} ${
          activeForm === "physical" ? styles.active : ""
        }`}
      >
        <PhysicalForm formData={formData} updateField={updateField} />

        <button type="submit" className={styles.submitButton}>
          Допомогти
        </button>
      </form>

      <div
        className={`${styles.formWrapper} ${
          activeForm === "legal" ? styles.active : ""
        }`}
      >
        <LegalForm />
      </div>
    </div>
  );
};

export default FuthForm;
