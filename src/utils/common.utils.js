export const generalNumberForId = (data) => {
  const randomNumber = `${Math.random()}`;
  if (data.find((item) => item.id === randomNumber)) {
    generalNumberForId(data);
  } else {
    return randomNumber;
  }
};
//* 隨機產生數字，並且跟原有資料比對，若有相同則使用遞歸再跑一次
