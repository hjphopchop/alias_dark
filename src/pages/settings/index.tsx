import { SETTINGS } from '@/common/routes';
import Settings from '@/modules/settings/components/Settings';
import { getLayout } from '@/layout/components/DefaultLayout/DefaultLayout';
import React, { ChangeEvent, SyntheticEvent, useState } from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';

const SettingsPage = () => {
  return <Settings />;
};

SettingsPage.auth = SETTINGS.auth;

SettingsPage.getLayout = getLayout;

export default SettingsPage;
