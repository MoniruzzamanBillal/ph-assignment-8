const getDonatedId = () => {
  let previousIdS = localStorage.getItem("donated-id");

  if (previousIdS) {
    previousIdS = JSON.parse(previousIdS);
  } else {
    previousIdS = [];
  }

  return previousIdS;
};

const saveDonateId = (id) => {
  const savedIDS = getDonatedId();

  savedIDS.push(id);

  localStorage.setItem("donated-id", JSON.stringify(savedIDS));
};

export { getDonatedId, saveDonateId };
