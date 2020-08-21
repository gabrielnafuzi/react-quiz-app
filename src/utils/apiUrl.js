export default function getApiUrl(category, difficulty) {
  let apiUrl = '';

  if (!category && difficulty === 'any') {
    apiUrl = 'https://opentdb.com/api.php?amount=10&type=multiple';
  } else if (!category) {
    apiUrl = `https://opentdb.com/api.php?amount=10&difficulty=${difficulty}&type=multiple`;
  } else if (category && difficulty === 'any') {
    apiUrl = `https://opentdb.com/api.php?amount=10&category=${category}&type=multiple`;
  } else {
    apiUrl = `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`;
  }

  return apiUrl;
}
