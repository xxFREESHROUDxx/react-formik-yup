import './App.css';

function App() {
  return (
    <div className='App mt-60'>
      <form className='border border-gray-400 p-6'>
        <div className='flex flex-col mb-5'>
          <label htmlFor='name' className='text-xl font-semibold'>
            Name
          </label>
          <input
            className='bg-gray-100 border w-[458px] h-[40px] border-black rounded'
            type='text'
            id='name'
            name='name'
          />
        </div>
        <div className='flex flex-col mb-5'>
          <label htmlFor='email' className='text-xl font-semibold'>
            E-mail
          </label>
          <input
            className='bg-gray-100 border h-[40px] border-black rounded'
            type='email'
            id='email'
            name='email'
          />
        </div>
        <div className='flex flex-col mb-5'>
          <label htmlFor='channel' className='text-xl font-semibold'>
            Channel
          </label>
          <input
            className='bg-gray-100 border h-[40px] border-black rounded'
            type='text'
            id='channel'
            name='channel'
          />
        </div>

        <button
          type='submit'
          className='bg-green-500 mt-4 text-white px-4 py-2 rounded font-medium hover:bg-green-600'
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
