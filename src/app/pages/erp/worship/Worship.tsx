import { useCallback } from 'react';
import dynamic from 'next/dynamic'

const TelegramLoginButton: any = dynamic(() => import('react-telegram-login'), { ssr: false });

export const Worship = () => {
  const handleTelegramResponse = useCallback(response => {
    console.log(response);
  }, []);

  return (
    <>
      {TelegramLoginButton && (
        <TelegramLoginButton dataOnauth={handleTelegramResponse} botName="PobedaDpUABot" />
      )}
    </>
  );
};

Worship.header = false;
Worship.footer = false;
