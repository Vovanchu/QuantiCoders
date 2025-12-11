import type { HelpTypes, PaymentMethods } from "../types/typeOfHelp";

const typeOfHelp: HelpTypes = [
  {
    id: 1,
    name: "Зробити",
    icon: "✋",
    color: "green",
    subTypes: [
      { id: 1, name: "Прибрати територію" },
      { id: 2, name: "Пофарбувати/полагодити" },
      { id: 3, name: "Допомогти фізично" },
    ],
  },
  {
    id: 2,
    name: "Фінансова допомога",
    icon: "💳",
    color: "#9d5d9a",
    subTypes: [
      { id: 1, name: "Картки Visa/MasterCard" },
      { id: 2, name: "Приват24" },
      { id: 3, name: "Термінали України" },
      { id: 4, name: "WebMoney" },
      { id: 5, name: "PayPal" },
    ],
  },
  {
    id: 3,
    name: "Матеріальна допомога",
    icon: "👕",
    color: "blue",
    subTypes: [
      { id: 1, name: "Одяг" },
      { id: 2, name: "Їжа" },
      { id: 3, name: "Гігієна" },
      { id: 4, name: "Медикаменти" },
      { id: 5, name: "Техніка" },
    ],
  },
  {
    id: 4,
    name: "Волонтерство",
    icon: "❤️",
    color: "red",
    subTypes: [
      { id: 1, name: "Допомога в укритті" },
      { id: 2, name: "Сортування гуманітарки" },
      { id: 3, name: "Пакування наборів" },
      { id: 4, name: "Транспортна допомога" },
      { id: 5, name: "Онлайн волонтерство" },
    ],
  },
];

const paymentMethods: PaymentMethods = [
  { id: 1, name: "Картки Visa/MasterCard", icon: "💳", color: "#BBDEFB" },
  { id: 2, name: "Приват24", icon: "🏦", color: "#C8E6C9" },
  { id: 3, name: "Термінали України", icon: "📱", color: "#FFE0B2" },
  { id: 4, name: "WebMoney", icon: "💰", color: "#E1BEE7" },
  { id: 5, name: "PayPal", icon: "P", color: "#B3E5FC" },
];

export { typeOfHelp, paymentMethods };
