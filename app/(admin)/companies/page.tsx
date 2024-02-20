import AddCompanyButton from '@/app/components/AddCompanyButton';
import CompanyRow from '@/app/components/CompanyRow';
import CompanyTable from '@/app/components/CompanyTable';
import Header from '@/app/components/Header';
import SearchInput from '@/app/components/SearchInput';
import { Status } from '@/app/components/StatusLabel';
import Toolbar from '@/app/components/Toolbar';
import React from 'react';

interface pageProps {}

const page = ({}: pageProps) => {
  return (
    <>
      <Header>Companies</Header>
      <Toolbar action={<AddCompanyButton />}>
        <SearchInput />
      </Toolbar>
      <CompanyTable>
        <CompanyRow
          id={1}
          category="Technology"
          company="Google"
          status={Status.Pending}
          promotion={true}
          country="United States"
          joinedDate="2021-01-01"
        />
      </CompanyTable>
    </>
  );
};

export default page;
