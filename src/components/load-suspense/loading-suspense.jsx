import styles from '@styles/components/LoadingSuspense.css'

export const LoadingSuspense = () => {
  return (
    <>
      {true && (
        <div className='w-full h-[90vh] bg-[#F5F9FC] backdrop-blur-lg z-50 flex justify-center items-center'>
          <div className={styles.loader} />
        </div>
      )}
    </>
  )
}
