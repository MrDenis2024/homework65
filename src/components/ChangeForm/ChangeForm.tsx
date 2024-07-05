import React from 'react';

const ChangeForm = () => {
  return (
    <form className="mt-4">
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          id="title" type="text" name="title"
          className="form-control" required/>
      </div>
      <div className="form-group mt-2">
        <label htmlFor="content">Content</label>
        <textarea name="content" id="content" rows={18} className='form-control' required></textarea>
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