import {useCallback, useEffect, useState} from 'react';
import {ApiPage} from '../../types';
import {useNavigate, useParams} from 'react-router-dom';
import axiosApi from '../../axiosApi';
import Spinner from '../../components/Spinner/Spinner';

const Pages = () => {
  const [page, setPage] = useState<ApiPage | null>(null);
  const {pageName} = useParams();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const fetchPage = useCallback( async () => {
    setLoading(true);
    let pageLink = '/pages/home.json';

    if(pageName){
      pageLink = `/pages/${pageName}.json`;
    }

    try {
      const {data: contentPage} = await axiosApi.get<ApiPage | null>(pageLink);
      if(contentPage) {
        setPage(contentPage);
      } else {
        navigate('/');
      }
    } catch (error) {
      console.error('Ошибка получение данных о страницы');
    } finally {
      setLoading(false);
    }
  }, [pageName, navigate]);

  useEffect(() => {
    void fetchPage();
  }, [fetchPage]);

  let innerPage = (
    <div className='mt-5 text-center border rounded border-black'>
      {page && (
        <>
          <h1>{page.title}</h1>
          <div>
            <h5>Content</h5>
            <p>{page.content}</p>
          </div>
        </>
      )}
    </div>
  );

  if(loading) {
    innerPage = (
      <div className='d-flex justify-content-center align-items-center' style={{height: '300px'}}>
        <Spinner/>
      </div>
    );
  }

  return (
    <>
      {innerPage}
    </>
  );
};

export default Pages;