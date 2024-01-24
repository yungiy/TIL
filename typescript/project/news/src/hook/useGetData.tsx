import { useEffect, useState } from 'react';
import axios from 'axios';

interface Articles {
  title: string;
  description: string;
  author: string;
  url: string;
  publishedAt: string;
  urlToImage: string;
}

const useGetData = (country: string) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [articles, setArticles] = useState<Articles[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=${country}&category=business&apiKey=${process.env.REACT_APP_NEWS_API}`
        );

        setArticles(response.data.articles.map((article: Articles) => ({
          ...article,
          // yyyy-mm-dd로 변환
          publishedAt: new Date(article.publishedAt).toISOString().split('T')[0],
        })));
      } catch (error) {
        setError('데이터를 가져오는데 문제가 발생했습니다.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [country]);

  return { loading, articles, error };
};

export default useGetData;
