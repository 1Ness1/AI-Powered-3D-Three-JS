import CustomButton from './CustomButton';

const AIPicker = ({ prompt, setPrompt, generatingImg, handleSubmit }) => {
  return (
    <div className='aipicker-container'>
      <textarea
        className='aipicker-textarea'
        placeholder='Ask AI...'
        rows={5}
        value={prompt}
        onChange={(event) => setPrompt(event.target.value)}
      />

      <div className='flex flex-wrap gap-3'>
        {generatingImg ? (
          <CustomButton
            type='outline'
            title='Asking AI...'
            customStyles='text-xs'
          />
        ) : (
          <>
            <CustomButton
              type='outline'
              title='AI Logo'
              handleClick={() => handleSubmit('logo')}
              customStyles='text-cs'
            />
            <CustomButton
              type='filled'
              title='AI Full'
              handleClick={() => handleSubmit('full')}
              customStyles='text-cs'
            />
          </>
        )}
      </div>
    </div>
  );
};

export default AIPicker;
