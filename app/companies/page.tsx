import React from 'react';
import Header from '../components/Header';
import Toolbar from '../components/Toolbar';
import SearchInput from '../components/SearchInput';
import AddCompanyButton from '../components/AddCompanyButton';
import CompanyTable from '../components/CompanyTable';
import CompanyRow from '../components/CompanyRow';
import { Status } from '../components/StatusLabel';

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
