import { useCallback } from 'react';
import styles from './AskQuestion.module.scss';
import { Button } from '../Button';

export const AskQuestion = () => {
  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    console.log('handleSubmit');
  }, []);

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>
        Можете задать анонимный вопрос и мы ответив вам в ближайшее время.
      </h2>

      <form className={styles.form} onSubmit={handleSubmit}>
        <input type="email" placeholder={'Ваш вопрос напишите тут'} />
        <Button type={'submit'}>Отправить</Button>
      </form>
    </div>
  );
};
