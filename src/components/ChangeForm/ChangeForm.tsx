import React from 'react';
import {ApiPage} from '../../types';

interface Props {
  page: ApiPage;
  onFieldChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onFormSubmit: React.ChangeEventHandler<HTMLFormElement>;
}

const ChangeForm: React.FC<Props> = ({page, onFieldChange, onFormSubmit,}) => {
  return (
    <form className="mt-4" onSubmit={onFormSubmit}>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          id="title" type="text" name="title"
          className="form-control" required value={page.title} onChange={onFieldChange}/>
      </div>
      <div className="form-group mt-2">
        <label htmlFor="content">Content</label>
        <textarea name="content" id="content" rows={18} className='form-control' required value={page.content} onChange={onFieldChange}></textarea>
      </div>
      <div className='text-end'>
        <button type="submit" className="btn btn-primary mt-3">
          Save
        </button>
      </div>
    </form>
  );
};

export default ChangeForm;