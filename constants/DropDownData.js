const Age = () => {
  var ageArray = [];
  for (var i = 1; i <= 120; i++) {
    ageArray.push({"label":i,"value":i});
  }
  return ageArray;
};

export default Age;