import ChangeForm from '../../components/ChangeForm/ChangeForm';
import React, {useCallback, useEffect, useState} from 'react';
import {ApiPage, ApiPages, Page} from '../../types';
import axiosApi from '../../axiosApi';
import Spinner from '../../components/Spinner/Spinner';
import {useNavigate} from 'react-router-dom';

const ChangePage = () => {
  const [pages, setPages] = useState<Page[]>([]);
  const [pageName, setPageName] = useState('');
  const [page, setPage] = useState<ApiPage>({
    title: '',
    content: '',
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const fetchPages = useCallback( async () => {
    setLoading(true);
      try {
        const response = await axiosApi.get<ApiPages | null>('/pages.json');

        const pagesResponse = response.data;

        if(pagesResponse !== null) {
          const pagesList: Page[] = Object.keys(pagesResponse).map((id: string) => {
            return {
              ...pagesResponse[id],
              id,
            };
          });
          setPages(pagesList);
        }
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
  }, []);

  useEffect(() => {
    void fetchPages();
  }, [fetchPages]);

  const onChangePageName = async (event: React.ChangeEvent<HTMLSelectElement>) => {
    const {value} = event.target;
    setPageName(value);
    setLoading(true);

    try {
      if(value !== '') {
        const response = await axiosApi.get<ApiPage>(`/pages/${value}.json`);

        if (response.data) {
          setPage(response.data);
        }
      } else {
        setPage({
          title: '',
          content: '',
        });
      }
    } catch (e) {
      console.error('Ошибка получение данных страницы');
    } finally {
      setLoading(false);
    }
  };

  const onFieldChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = event.target;

    setPage((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);

    try {
      await axiosApi.put(`/pages/${pageName}.json`, page);
    } catch (e) {
      console.error('Ошибка отправки данных об изменении контента на странице');
    } finally {
      setLoading(false);
      if(pageName === 'home') {
        navigate('/');
      } else {
        navigate(`/pages/${pageName}`);
      }
    }
  };

  let form = (
    <>
      <div className='d-flex flex-column col-3'>
        <label htmlFor="page" className='mb-3'>Select page</label>
        <select name="page" id="page" required value={pageName} onChange={onChangePageName}>
          <option value=''>Select a page</option>
          {pages.map((page) => (
            <option key={page.id} value={page.id}>{page.id.charAt(0).toUpperCase() + page.id.slice(1)}</option>
          ))}
        </select>
      </div>
      <ChangeForm page={page} onFieldChange={onFieldChange} onFormSubmit={onFormSubmit}/>
    </>
  );

  if (loading) {
    form = (
      <div className="d-flex justify-content-center align-items-center" style={{height: '300px'}}>
        <Spinner/>
      </div>
    );
  }

  return (
    <div className="mt-4 border border-black rounded px-5 py-3">
      <h2>Edit pages</h2>
      {form}
    </div>
  );
};

export default ChangePage;