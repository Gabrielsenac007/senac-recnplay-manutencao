function GetProblems() {

  const problems = Array(
    {
      id: 1,
      description: "Problema 1.",
      additional_information: "Informações sobre o problema 1.",
      resolved: false,
    },
    {
      id: 2,
      description: "Problema 2.",
      additional_information: "Informações sobre o problema 2.",
      resolved: false
    },
    {
      id: 3,
      description: "Problema 3.",
      additional_information: "Informações sobre o problema 3.",
      resolved: false
    },
    {
      id: 4,
      description: "Problema 4.",
      additional_information: "Informações sobre o problema 4.",
      resolved: false
    }
  );

  return problems;
}

export default GetProblems;