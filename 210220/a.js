const instance = axios.create({
  headers: {
    'X-Naver-Client-Id': process.env.REACT_APP_CLIENT_ID,
    'X-Naver-Client-Secret': process.env.REACT_APP_CLIENT_SECRET,
  },
});

function searchBookByQuery(query) {
  return axios.get('/v1/search/book.json', {
    // headers: {
    //   'X-Naver-Client-Id': process.env.REACT_APP_CLIENT_ID,
    //   'X-Naver-Client-Secret': process.env.REACT_APP_CLIENT_SECRET,
    // },
    params: { query },
  });
}

// 기존 코드 
const searchBook = async (term) => {
  try {
    const result = await searchBookByQuery(term);
    return result;
  } catch (error) {
    console.error(error);
  }
};