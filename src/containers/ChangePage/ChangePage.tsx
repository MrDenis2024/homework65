import ChangeForm from '../../components/ChangeForm/ChangeForm';

const ChangePage = () => {

  return (
    <div className="mt-4 border border-black rounded px-5 py-3">
      <h2>Edit pages</h2>
      <div className='d-flex flex-column col-3'>
        <label htmlFor="page" className='mb-3'>Select page</label>
        <select name="page" id="page" required>
          <option value=''>Select a page</option>
          <option value='home'>Home</option>
          <option value='about'>About</option>
          <option value='contacts'>Contacts</option>
          <option value='divisions'>Divisions</option>
          <option value='cart'>Cart</option>
        </select>
      </div>
      <ChangeForm />
    </div>
  );
};

export default ChangePage;