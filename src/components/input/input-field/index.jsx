import classNames from 'classnames'

const InputField = ({ className, label, type, register, disabled = false, name, error }) => (
  <div className={classNames('mb-4', className)}>
    <label htmlFor={name} className='block text-gray-100 font-poppins mb-2'>
      {label}
    </label>
    <input
      type={type}
      id={name}
      {...register(name)}
      disabled={disabled}
      className='w-full p-2 border border-white-300 rounded-md focus:outline-none focus:ring focus:ring-primary'
    />
    {error && (
      <span className='text-[12px] text-left text-red-500 font-ibm font-normal leading-[120%]'>
        {error.message}
      </span>
    )}
  </div>
)

export default InputField
