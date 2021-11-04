import { createContext, useContext } from 'react';
import { ISettings } from '@app/core/strapi';

const SettingsContext = createContext(null);

export const useSettings: () => ISettings = () => {
  return useContext(SettingsContext);
};

interface ISettingsProviderProps {
  settings: ISettings;
  [key: string]: unknown;
}

export const SettingsProvider = ({ settings, ...props}: ISettingsProviderProps) => {
  return <SettingsContext.Provider  value={{ ...settings }} {...props} />
};
